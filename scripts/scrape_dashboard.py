import requests
from bs4 import BeautifulSoup
import re
import json
import os
from datetime import datetime
import pytz


def _format_int(value):
    try:
        return f"{int(value.replace(',', '')):,}"
    except (ValueError, AttributeError):
        return value


def fetch_forms_data():
    url = "https://www.forms.service.gov.uk/performance"
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        text = soup.get_text()

        forms_published_match = re.search(r'(\d+)\s+forms \(live and archived\)', text)
        submissions_match = re.search(r'([\d,]+)\s+form submissions', text)
        orgs_match = re.search(r'(\d+)\s+organisations using GOV\.UK Forms', text)

        return {
            "organisations": _format_int(orgs_match.group(1)) if orgs_match else "N/A",
            "forms_published": _format_int(forms_published_match.group(1)) if forms_published_match else "N/A",
            "submissions_processed": submissions_match.group(1) if submissions_match else "N/A"
        }
    except Exception as e:
        print(f"Error fetching Forms data: {e}")
        return {
            "organisations": "Error",
            "forms_published": "Error",
            "submissions_processed": "Error"
        }


def fetch_notify_data():
    url = "https://www.notifications.service.gov.uk/features/performance"
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        text = soup.get_text()

        total_messages_match = re.search(r'([\d.]+\s+billion)\s+total', text)
        within_10s_match = re.search(r'([\d.]+%)\s+on average', text)
        orgs_match = re.search(r'(\d{1,3}(?:,\d{3})*)\s+organisations', text)
        services_match = re.search(r'and\s+([\d,]+)\s+services\s+using\s+Notify', text)

        return {
            "messages_total": total_messages_match.group(1) if total_messages_match else "N/A",
            "messages_within_10s": within_10s_match.group(1) if within_10s_match else "N/A",
            "organisations": orgs_match.group(1) if orgs_match else "N/A",
            "services": services_match.group(1) if services_match else "N/A"
        }
    except Exception as e:
        print(f"Error fetching Notify data: {e}")
        return {
            "messages_total": "Error",
            "messages_within_10s": "Error",
            "organisations": "Error",
            "services": "Error"
        }


def fetch_pay_data():
    url = "https://payments.service.gov.uk/performance/"
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        text = soup.get_text()

        total_value_match = re.search(r'£\s*([\d.]+\s+billion)', text)
        payment_volume_match = re.search(r'([\d.]+\s+million)', text)
        orgs_match = re.search(r'(\d+)\s+organisations', text)
        services_match = re.search(r'([\d,]+)\s+live\s+services', text)

        return {
            "total_value": total_value_match.group(1) if total_value_match else "N/A",
            "payment_volume": payment_volume_match.group(1) if payment_volume_match else "N/A",
            "organisations": _format_int(orgs_match.group(1)) if orgs_match else "N/A",
            "services": _format_int(services_match.group(1)) if services_match else "N/A"
        }
    except Exception as e:
        print(f"Error fetching Pay data: {e}")
        return {
            "total_value": "Error",
            "payment_volume": "Error",
            "organisations": "Error",
            "services": "Error"
        }


if __name__ == '__main__':
    forms = fetch_forms_data()
    notify = fetch_notify_data()
    pay = fetch_pay_data()

    london = pytz.timezone('Europe/London')
    last_updated = datetime.now(london).strftime("%d %b %Y %H:%M %Z")

    data = {
        "last_updated": last_updated,
        "forms": forms,
        "notify": notify,
        "pay": pay
    }

    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    output_path = os.path.join(repo_root, '_data', 'dashboard.json')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    with open(output_path, 'w') as f:
        json.dump(data, f, indent=2)

    print(f"Dashboard data written to {output_path}")
