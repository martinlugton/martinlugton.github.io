---
title: "Why it’s important to backup your content database(s)"
permalink: /why-its-important-to-backup-your-content-databases
date: 2013-01-09T23:58:36+00:00
redirect_from:
  - /why-its-important-to-backup-your-content-databases/
---

I went to share an [exciting hearing research story](http://www.deafnessresearch.org.uk/blog/new-research-on-regenerating-sensory-hair-cells-in-mammals/) on twitter this evening and found that the link wasn’t working properly. Rather than a short blog post on an impressive piece of research, however, I arrived at the following screen:

![could not complete the search - error message](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/could-not-complete-the-search.png?raw=true)

This isn’t the type of message any digital communications manager wants to see on their website shortly before 11pm, and certainly not the state I’d left the site in at 5:45pm. Thankfully I’d planned for problems like this.

I remembered seeing this error message near the top of a php template (line 16):

![could not complete the search - the php code that led to this error message](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/could-not-complete-the-search-in-the-php.png?raw=true)

So I suspected that our main content database had become corrupted somehow. I started by attempting to view the control panel login page. That was working fine, which confirmed that the server itself was up and running happily. (Indeed, if it wasn’t, you wouldn’t have been able to see the error message in the first place).

My next step was to try the content management system login page. This page loaded, which was a good start. There could potentially be a useful diagnostic message inside. Unfortunately the login functionality had stopped working. All this suggested that there was something wrong with the database.

Thankfully we keep daily backups of our content databases, (I’ll write a future blog about our backup strategy at Deafness Research UK) so I just jumped on to Dropbox and downloaded the latest backup of the main content database, from 6 hours ago. Just to be safe, I backed up a copy of the databases currently on the server – even though one of them seemed to be broken.

My next step was to put on some chilled prog rock (Camel’s [Mystic Queen](http://www.youtube.com/watch?v=h3QSuLMIvX4)). So far the diagnostic process had taken a couple of minutes. I was pretty confident that I was on the right track and wanted a relaxed mood for the rest of the operation.

I jumped in to cPanel, Backup Wizard > Restore > MySQL Databases, and then uploaded the main content database:

![restoring database](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/restoring-database.png?raw=true)

I had the problem sorted before the song had finished.

**How can I improve my response to this problem in future?**

My response was speedy and effective, but the I was fortunate to have noticed that there was a problem. Had I not been checking that link, this problem could have just as easily been waiting for me tomorrow morning.

What’s the best way to know if something’s wrong with your website?

I have automated systems to check server uptime, and to contact me in the case of hosting downtime and log any gap in service, but not to check if the website is actually operating properly. As we saw above, the server itself was responding happily to requests, but the database on the server had broken a bit.

I’ll have a look tomorrow to see if there are any good tools to use here. If there aren’t any, I might have a final project idea for my [CS50x](https://www.edx.org/courses/HarvardX/CS50x/2012/info) course… You’d need to know the different potential error messages, and periodically iterate through the front page searching for these. A ‘successful’ search would then need to trigger an action of some kind, such as an email being sent to my personal address.