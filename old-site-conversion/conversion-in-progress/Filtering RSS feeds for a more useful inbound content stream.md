---
title: "Filtering RSS feeds for a more useful inbound content stream"
permalink: /filtering-rss-feeds-more-useful-inbound-content-stream
date: 2013-06-15T09:45:00+00:00
redirect_from:
  - /filtering-rss-feeds-more-useful-inbound-content-stream/
---

# Filtering RSS feeds for a more useful inbound content stream

Noise is the price we pay for volume and diversity of content.  
I’m hopeful that we can reap the rewards of the wealth of information around us, while minimising the price we pay having to filter through it to get to the good stuff.

I’m interested in the task of focusing on relevant, helpful material and reducing the mental overhead of filtering out irrelevant material. In this post I look at one way to bring a bit of order and clarity to your RSS feed subscriptions, so that they are more focused and useful.

To do this, we use [Yahoo Pipes](http://pipes.yahoo.com/pipes/) – an online tool that can manipulate information from around the web, and serve it to you in a range of formats.

You can make your own pipes, and so create your own processes for gathering and manipulating information and content.

Each pipe takes an input – or a range of inputs – does stuff with it – in some sort of sequence – and then presents an output.

Data flows through pipes, gets processed appropriately at different points, and goes down to the output. You can then do stuff with this output – in our case we want to subscribe to it as an RSS feed.

Let’s look at a couple of examples of how we can use yahoo pipes to filter content:

### Filtering the SEOmoz feed, so that I only see Whiteboard Fridays material

One very important area of digital change is SEO.

Watching SEOmoz’s weekly [Whiteboard Friday](http://www.seomoz.org/blog/category/whiteboard-friday) video is a great way to keep up-to-date with best practice, and to see experts figure out the implications of any changes in the search landscape.

I’m not a dedicated SEO professional, though, so I don’t really have time to read all the posts on SEOmoz. But I do want to keep up with Whiteboard Fridays. The SEOmoz RSS feed doesn’t know this, of course, so it just serves me all the content produced on the site.

Ideally I’d be able to filter this RSS feed, so that I just get my weekly delivery of Whiteboard Friday and nothing else. This is super-easy to do with Pipes:

In the Pipe editor, click on the ‘Sources’ heading, then drag ‘Fetch Feed’ into the editing area.

This is where we specify the RSS feed we want to filter. In this case we paste in http://feeds.feedburner.com/seomoz

Now it’s time to add in a filter, and set it to only let through Whiteboard Fridays posts. Under the ‘Operators’ heading, grab the ‘Filter’ module.

Connect the output of ‘Fetch Feed’ to this module. (Connect modules by dragging from the circle at the bottom of one (its output) to the circle at the top of another (its input). This creates a pipe. Make sure that the output from your final process is linked up to the output!)

Now it’s time to specify the filter we want. This looks a little intimidating at first, but if you click on the left-hand column Yahoo Pipes makes some suggestions. In this case we want the filter to only allow through content whose title contains ‘whiteboard friday’.

![yahoo pipes being used to filter whiteboard fridays](Filtering%20RSS%20feeds%20for%20a%20more%20useful%20inbound%20content%20stream%20%E2%80%93%20Martin%20Lugton_files/yahoo-pipes-filtering-whiteboard-fridays.png)

[Have a look at this pipe](http://pipes.yahoo.com/pipes/pipe.info?_id=a55fecb80478269b76b19029d1dfaeeb) and make a copy of your own – or remix it!

You can add multiple rules for each filter, which can give you lots of power. You could, for example, filter the [NHS Choices Behind the Headlines feed](http://feeds.feedburner.com/nhschoicesbehindtheheadlines) so that you see material about ‘cancer’ or ‘dementia’ but nothing else.

You can filter by more than item.title. You can also filter by item.description, which seems to be the item’s content, or at least an excerpt.

### Filtering the Telegraph Comment feed so that it just displays editorial content

I’m a leftie Guardian reader, but I want to make sure that I’m presented with a range of different views so that my ideas aren’t just informed by one way of thinking. It’s good practice to see different sides of an argument, to judge for oneself which is better, lest we fall into sloppy thinking. (I used to be an Economist subscriber, but keeping up with the volume of content it produced was punishing.)

I don’t want to read all the Comment pieces in the Telegraph, though. I’d rather just read the editorial. The naming convention on the Telegraph’s Comment feed seems to be that editorials are written by the author ‘Telegraph View’. So I set up a filter to only let through this content:

![yahoo pipes filtering the telegraph comment feed to only display editorial content](Filtering%20RSS%20feeds%20for%20a%20more%20useful%20inbound%20content%20stream%20%E2%80%93%20Martin%20Lugton_files/yahoo-pipes-filtering-telegraph-comment-feed-to-just-display.png)

Head over to yahoo pipes to [see this pipe in action](http://pipes.yahoo.com/pipes/pipe.info?_id=079c8ada98ef396cb2e0b86aec4418dc).

### Don’t kill the noise

A word of caution: you need noise in your life. Noise is new, unknown, challenging, thought-expanding. Processing it takes effort, and can be uncomfortable, but it has rewards. So don’t filter it out entirely. (Indeed, the whole point of the Telegraph filter is to increase the ideological noise in my life)

But sometimes you know what you want from a given RSS feed, and you don’t want to see anything beyond that. Be in control of the noise – this is the time to filter. Save your brainpower for filtering through the noise in areas where you’d like to expand your knowledge and understanding beyond what you currently think you need to know.