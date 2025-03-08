---
title: "Build a food bank API – part 1"
permalink: /build-a-food-bank-api-part-1
date: 2020-01-05T09:30:00+00:00
---

# Build a food bank API – part 1

I’m going to try and build an API that tells you the items needed by nearby foodbanks.

An API is a tool that lets you quickly interface between bits of technology. If a tool has an API, it means that web developers can quickly interact with it: either taking information out of it or sending information or instructions to it. Using an API to interact with a bit of software is generally quick and easy, meaning that you can spend your time and energy working on doing something special and interesting with the interaction, rather than spending your effort working out how to get the things to talk to each other in the first place. [Twitter has an API](https://developer.twitter.com/en/docs) which lets you search, view or post tweets; [Google Maps has an API](https://developers.google.com/maps/documentation) that lets you build maps into your website or software. [I built a tool around the twitter API a few years ago](https://mysocialsummary.com/) and found it a real thrill.

The idea for this API came from [Steve Messer](http://visitmy.website/). I haven’t worked on a creative/web development project for about a year, and I’ve been feeling eager to take one on. I know that [I learn a lot working on a personal project](https://www.martinlugton.com/learnt-building-side-project/). I also experience a fantastic sense of flow.

Inspired by the Weeknotes movement, I’m going to write a series of blog posts about how I get on.

### Goal for the project

Make an API that, for a given geolocation, returns the nearest 3 foodbanks, with a list of the items that they need.

### How I’m approaching the work

I’m going to focus on the Trussell Trust, as they have a large national network of foodbanks – whose websites seem to work in the same way.

I’m starting by testing some risky assumptions. If these assumptions turn out to be wrong, I might not be able to meet my goal. So I want to test them as soon as I can.

### Currently known risky assumptions

- If I know the [URL of a given foodbank’s page on food donations](https://harrow.foodbank.org.uk/give-help/donate-food/), I can work out what items they need.
- All Trussell Trust foodbanks follow the same way of organising their websites
- All Trussell Trust foodbanks follow the same way of describing the items they need.
- I can access or somehow generate a comprehensive and accurate list of all Trussell Trust foodbanks
- If I have a list of Trussell Trust foodbanks I can straightforwardly work out the URLs of their pages describing the items they need
- I can scrape the information I need from the relevant server/servers in a courteous way
- It won’t be very difficult to build a data representation of food banks and required items, or to store this in an appropriate database.
- Building and running the API won’t be too much fuss. (Or, less concisely: It’s possible to build a lightweight, modern infrastructure to host a database for this API and serve requests without too much complexity or cost.)

### Side challenge

Can I host this API in a way that is carbon neutral or, even better, renewably-hosted?

If I can’t, can I at least work out how much it’s polluting and offset it somehow?

### What next

I’m going to start by working on the first risky assumption – “If I know the [URL of a given foodbank’s page on food donations](https://harrow.foodbank.org.uk/give-help/donate-food/), I can work out what items they need.”

*Read part 2 of this project to find out what I did next.*