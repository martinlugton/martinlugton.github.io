---
title: "Interoperability, Open Standards and APIs"
permalink: /interoperability-open-standards-and-apis
date: 2020-02-15T11:14:47+00:00
redirect_from:
  - /interoperability-open-standards-and-apis/
---

*I recently attended [GDS Tech Talks: Interoperability and Open Standards](https://www.eventbrite.co.uk/e/gds-tech-talks-interoperability-and-open-standards-tickets-89225117729#). Here are my notes on the sessions I attended.*

## What’s new in Web Standards? – Dan Appelquist

*Dan is Samsung Internet Director of Web Advocacy, co-chair of the W3C Technical Architecture Group and Open Standards Board member.*

Connections between the web and your device: 

- WebNFC
- Web Bluetooth
- Web USB
- Serial API
- Gamepad API
- SMS Receive API
- Contacts API
- Clipboard Access APIs
- File system APIs

A lot of these need privacy implications thinking about. e.g. clipboard access API could be done without the user knowing what was being done.

New features that make the web able to develop a richer experience:

- Progressive Web Application functionality: Manifest File, Service Worker, Push Notifications, Badging API
- WebXR
- Web Assembly
- WebGL
- Web Payment

New layout capabilities:

- CSS Grid
- “Houdini” APIs (let you script style within the javascript layer)

New communications capabilities:

- WebRTC
- WebSockets
- Streams
- Web Transport

Enhancements to Web Security:

- Feature policy
- Signed Exchanges
- Packaging

What makes the web ‘webby’?

- Open
- Linkable
- Internationalised
- Secure and private
- Multi-stakeholder
- Does not require a single authentication method or identity
- Zero friction

What makes the web open?

- Built on open standards
- Based on user needs
- Transparent and open process
- Fair access
- Royalty free
- Compatible with open source
- Multiple implementations

What makes a standard open?

- Collaboration between all interested parties, not just suppliers
- Transparent and published review and feedback process. Wide review is crucial when thinking about new standards. W3C look at new things and [think about them on GitHub](https://github.com/w3ctag/design-reviews/issues)

When building new specifications, how do we make sure that they are ethical?

[W3C have a privacy and security questionnaire](https://www.w3.org/TR/security-privacy-questionnaire/) that they encourage everyone to work through when working on a new specification

Some ethical frameworks:

- [W3C TAG Ethical framework](https://www.w3.org/2001/tag/doc/ethical-web-principles/)
- [Mozilla Manifesto](https://www.mozilla.org/en-GB/about/manifesto/)
- [ACM Ethics](https://www.acm.org/code-of-ethics)
- [Google AI Ethics](https://ai.google/principles/)

You can get involved in Open Standards by joining a [community group](https://www.w3.org/community/) or [working group](https://www.w3.org/Consortium/activities).

## API for Humans and the Machines – Kin Lane

*Kin is General API Evangelist, and Chief Evangelist at Postman*

You should follow a design process when creating an API.  
That way you can tease out assumptions, and test value *before* carrying out technical development work. Iteration is quickest and cheapest when you do it before you write any code!

Start off by defining an endpoint for the API, the values that you’d want to send to it, and giving an example of what you expect it to return.  
You can use tools like Postman, and publish this test API, giving you an endpoint for testing, and letting people try working with it.

With OpenAPI, Swagger and Postman, you can publish your documentation from the code.

Some things your API should have:

- A choice of response format. Don’t just give JSON – let people receive CSVs if they want them. This makes things more open to non-developers.
- A management layer: access keys, rate limits. Apigee, Tyk,io, Mulesoft and Kong are tools for this.
- Governance
- Monitoring
- Automated testing in your Continuous Integration / Continuous Deployment pipeline
- Security testing
- A clear point of contact for support
- A plan for communications. Announce your API and new versions. Explain the purpose and what’s changing. You should have a comms strategy around every release. Without evangelists and communications, your API won’t last.