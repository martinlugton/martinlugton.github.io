---
title: "Can I embed tweets in emails? No, because of JavaScript and iframes"
permalink: /can-embed-tweets-emails-javascript-iframes
date: 2014-03-01T14:20:00+00:00
redirect_from:
  - /can-embed-tweets-emails-javascript-iframes/
---

A tweet is an individual message posted by someone inside the twitter social media platform. An [embeddable tweet](https://dev.twitter.com/docs/embedded-tweets) is a version of this message that can be copied and used outside twitter. Embedding tweets is a great feature, allowing conversations and ideas to be spread beyond twitter’s walls, and is great for curation and analysis.

But the way that twitter have constructed this feature means that you can’t embed tweets in emails.

Why is this? You can’t display embedded tweets in emails because embedded tweets require:

1. JavaScript
2. iframes

Both of these features are blocked by most email clients for very sensible security reasons.

So an embedded tweet that should look something like this:

<div class="twitter-tweet twitter-tweet-rendered" style="display: flex; max-width: 550px; width: 100%; margin-top: 10px; margin-bottom: 10px;"><iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 550px; height: 272px; display: block; flex-grow: 1;" title="Twitter Tweet" src="Can%20I%20embed%20tweets%20in%20emails%20No,%20because%20of%20JavaScript%20and%20iframes%20%E2%80%93%20Martin%20Lugton_files/Tweet.htm" data-tweet-id="433769038783594496"></iframe></div>

<script async="" src="Can%20I%20embed%20tweets%20in%20emails%20No,%20because%20of%20JavaScript%20and%20iframes%20%E2%80%93%20Martin%20Lugton_files/widgets.js" charset="utf-8"></script>

… ends up looking like this instead:

> [#ed473](https://twitter.com/search?q=%23ed473&src=hash) this is really thought-provoking. [@anildash](https://twitter.com/anildash) on gender privilege & social networks: The Year I Didn't RT Men. [https://t.co/qZXGCdv545](https://t.co/qZXGCdv545)
> 
> — Bonnie Stewart (@bonstewart) [February 13, 2014](https://twitter.com/bonstewart/statuses/433769038783594496)

This isn’t nearly as useful or pretty.

## So what can I do instead if I want to embed a tweet in an email?

Lots of people simply share tweets by taking a screenshot of the message, and then pasting it to wherever is needed – eg into a powerpoint presentation.
This solution could work in the context of sending an email: take a screenshot of the tweet you’re interested in, trim to size, upload somewhere, and add in to your email. For extra credit, make the image a hyperlink to the original tweet.

This solution isn’t ideal – it’s manual, laborious, and cannot be easily automated. The information about the tweet will become outdated as more people share or retweet it, or reply to it. Worse, it’s not possible to actually interact with the tweet in this setting, nor is this option at all accessible (unless you are very diligent with your alt text).

## Okay then, come up with something smarter

I haven’t created anything better, I’m afraid, but here’s one idea to investigate:

If our aim is to take the useful features of embedded tweets – aesthetics and functionality – and to get them into email, I think that Twitter’s “Do you know…” emails could help:

![a screenshot of an automated email from twitter suggesting some accounts I might want to follow](Can%20I%20embed%20tweets%20in%20emails%20No,%20because%20of%20JavaScript%20and%20iframes%20%E2%80%93%20Martin%20Lugton_files/some-people-you-may-know-on-twitter.png)

You could take the inline HTML from these emails (I’ve [copied the HTML code here](http://www.martinlugton.com/wp-content/uploads/2014/03/html-for-you-may-know-twitter-email.html)) and use them to style up embedded tweets in an HTML email. You’d need to check in with [twitter’s brand policies](https://about.twitter.com/press/twitter-brand-policy) though, as this may not be within their terms of use.