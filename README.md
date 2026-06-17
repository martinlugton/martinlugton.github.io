# martinlugton.github.io

Personal website for [www.martinlugton.com](https://www.martinlugton.com), built with Jekyll and hosted on GitHub Pages.

## Structure

- `index.md` — homepage bio and highlights
- `_posts/` — blog posts in markdown
- `_layouts/` — HTML templates
- `_includes/` — HTML partials
- `_config.yml` — Jekyll configuration (uses the Minima remote theme)

## Deployment

Pushing to `main` triggers an automatic GitHub Pages build. No manual deploy step required.

## Automated content updates

A GitHub Actions workflow (`.github/workflows/update-forms-count.yml`) runs every Monday at 8am UTC. It scrapes the live forms count from [www.forms.service.gov.uk/performance](https://www.forms.service.gov.uk/performance), rounds it down to the nearest 50, and updates the figure in `index.md` if it has changed. This keeps the GOV.UK Forms stat on the homepage current without manual edits.

Source data comes from the [GOV.UK Performance Dashboard](https://github.com/martinlugton/govuk-performance-dashboard).
