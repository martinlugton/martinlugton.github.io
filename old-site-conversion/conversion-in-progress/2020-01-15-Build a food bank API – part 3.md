---
title: "Build a food bank API – part 3"
permalink: /build-a-food-bank-api-part-3
date: 2020-01-15T10:30:00+00:00
redirect_from:
  - /build-a-food-bank-api-part-3/
---

*Read [part 1](https://www.martinlugton.com/build-a-food-bank-api-part-1/) or [part 2](https://www.martinlugton.com/build-a-food-bank-api-part-2/) of this project to find out the background to this post.*

The API now exists online.

Here’s an example [request for the nearest 5 foodbanks to latitude 52.629958, longitude 1.298408](https://whatfoodbanksneed.org.uk/nearest_foodbanks?latitude=52.629958&longitude=1.298408&number_of_foodbanks_to_show=5). Results are returned in JSON format, which is machine-readable. I have plans for a human-facing experience too.

The service is running on an [entirely renewably-powered hosting provider in Switzerland](https://datacenterlight.ch/). The extra time taken to communicate with a server a bit further away isn’t significant.

Here’s what I think the next steps are:

- Create a clear, professional homepage (rather than just a line of text!), so that new users have an idea of the purpose of the API, and so that it looks credible.
- Produce documentation on how to use the API, so that developers understand how to interact with it.
- Create a web page that uses the API, taking a user’s location and showing them the nearest foodbanks and what they need. Having built the API, this feels like a natural next step. Anyone who goes to this page will be able to find out which food banks are near them, and what items they need.
- Tell people about it, so that developers can start using the API, and people can start using the service to find out what items their local foodbanks need them to donate. We’ll have two minimum viable products – one API, and one human-facing service – and it’ll be time to find out if there’s any interest in using them.

I’ll be collaborating to make the above happen, which is exciting! We’ll be doing some user testing as well, to see how people use the API and documentation.