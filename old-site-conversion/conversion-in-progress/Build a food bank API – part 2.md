---
title: "Build a food bank API – part 2"
permalink: /build-a-food-bank-api-part-2
date: 2020-01-10T14:45:00+00:00
redirect_from:
  - /build-a-food-bank-api-part-2/
---

# Build a food bank API – part 2

I’ve made great progress on this work in the last couple of months. ([Read part 1 of my project to create a foodbank API](https://www.martinlugton.com/build-a-food-bank-api-part-1/))

My goal was “Make an API that, for a given geolocation, returns the nearest 3 foodbanks, with a list of the items that they need.”

[I’ve achieved this for something running locally](https://github.com/martinlugton/foodbank_api) (i.e. just on my computer, but not on a web server that anyone could access). You can download the code and follow the instructions to run it yourself, if you have the Python programming language installed on your computer. I actually went slightly further than planned – you can specify the number of foodbanks you want to see, and you can also find out the items needed by a given named foodbank.

The next step is to get it running online so that anyone can use it.

### I’ve been testing the risky assumptions

- If I know the [URL of a given foodbank’s page on food donations](https://harrow.foodbank.org.uk/give-help/donate-food/), I can work out what items they need.  
  *Yes. [I’ve written code to do this](https://github.com/martinlugton/foodbank_api/blob/7464575d1b24d903d690ddbac144dbcb91756b3c/get_foodbank_details_and_write_to_file.py#L6).*
- All Trussell Trust foodbanks follow the same way of organising their websites.  
  *Mostly. About 9% of them don’t follow the standard format.*
- All Trussell Trust foodbanks follow the same way of describing the items they need.  
  *As above.*
- I can access or somehow generate a comprehensive and accurate list of all Trussell Trust foodbanks.  
  *Yes. I stumbled across this in the HTML on [the Trussell Trust’s Find a Food Bank page](https://www.trusselltrust.org/get-help/find-a-foodbank/). [I can get this list with a single GET request](https://github.com/martinlugton/foodbank_api/blob/7464575d1b24d903d690ddbac144dbcb91756b3c/get_foodbank_details_and_write_to_file.py#L25).*
- If I have a list of Trussell Trust foodbanks I can straightforwardly work out the URLs of their pages describing the items they need.  
  *Mostly, yes. [I’ve written code to do this](https://github.com/martinlugton/foodbank_api/blob/7464575d1b24d903d690ddbac144dbcb91756b3c/get_foodbank_details_and_write_to_file.py#L53).*
- I can scrape the information I need from the relevant server/servers in a courteous way  
  *Not sure yet. I assume all of the Trussell Trust’s standard sites are hosted on a single web server. I make a single GET request to get the names and URLs of all the foodbanks, but each ‘items needed’ page is a separate request. I’ve included a pause between each request, but I don’t know if it’s too long or too short.*
- It won’t be very difficult to build a data representation of food banks and required items, or to store this in an appropriate database.  
  *This was quite straightforward. And I didn’t even need a database, as I’m going to hold all the information in memory and not manipulate it.*
- Building and running the API won’t be too much fuss. (Or, less concisely: It’s possible to build a lightweight, modern infrastructure to host a database for this API and serve requests without too much complexity or cost.)  
  *[I’ve built an API that runs locally](https://github.com/martinlugton/foodbank_api). Hosting it online as a real webserver should be reasonably straightforward. That’s the next step.*  
  *I’ve found an [entirely-renewably-powered web host](https://datacenterlight.ch/), which might help me meet my extra goal of running this API entirely renewably.*

*Read part 3 of this project to find out what I did next.*