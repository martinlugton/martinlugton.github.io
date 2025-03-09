---
title: "Using wordpress for open courses – #ocTEL chat summarised"
permalink: /using-wordpress-open-courses-octel-chat-summarised
date: 2014-05-05T17:23:54+00:00
redirect_from:
  - /using-wordpress-open-courses-octel-chat-summarised/
---

The 2014 version of [Open Course in Technology Enhanced Learning (ocTEL)](http://octel.alt.ac.uk/) started last week. The course is free and open to all.

My plan for this course is to keep half an eye out for things that might interest me. I don’t expect to be closely involved in conversations, or in knowledge creation, as I’m not sure how much time I’ll have to commit.

I’m interested in people using WordPress to run open online courses, so a hangout last week caught my eye. I didn’t attend, but I’ve watched the video of the event, and have produced a rough record of the 1 hour 25 minute discussion. Hopefully this will help people access some of the insights within.

This was quite a technical and practical discussion. Certainly much of this conversation was beyond my knowledge of WordPress. The discussion was very much about the logistics of actually setting up open online courses in WordPress.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cpxCwxo4hBQ" frameborder="0" allowfullscreen></iframe>

## Logistics of registration and implications on aggregation

ocTEL is using AMU plugin ([Add Multiple Users](https://wordpress.org/plugins/add-multiple-users/)) to import users to its multi-site setup. It doesn’t work with existing users, though – they need to be added manually.

[FeedWordpress](https://wordpress.org/plugins/feedwordpress/) pulls in tweets for comments in ocTEL. Potentially this could cause fragmentation of conversation, as people comment on an imported tweet inside the WordPress environment. Outside the course, the comment would not be associated with the original tweet. Some people have seen the pulling in of tweets as a bug rather than a feature.

Martin Hawksey has edited Feedwordpress registration to also check on a user on other networks, so these interactions aren’t lost even if they happen under a different username. (See below for further discussion of this code.)

[Delicious](https://delicious.com/)‘s feed isn’t very useful any more.

Team blogs are tricky for registration – the system will just think of all posts as relating to a single author.

[ds106](http://ds106.us/) and ocTEL keep stealing/sharing code to improve their respective registration systems.  
(I found it funny/strange how polite everyone is about this in this call. Everyone is working hard and improving things for the community. There’s no shame in using other’s code as part of this work.)

If a user changes their feed, ocTEL updates that user’s details. In ds106 this has to be done manually.

ocTEL includes a [BB press forum](https://wordpress.org/plugins/bbpress/) as a space for people who want to participate that way.

## (Open) Badges added to ocTEL – 36:00

Lots of people were sceptical about this at first, but soon eagerly asked how to obtain the badges.

ocTEL is using the [BadgeOS plugin](http://wordpress.org/plugins/badgeos/).

While it is possible to link up with [Credly](https://credly.com/) and [Mozilla’s Open Badges](http://www.openbadges.org/), Martin decided against this as being too much hassle for the user.

The Badge OS plugin actually integrates with the [BuddyPress plugin](https://wordpress.org/plugins/buddypress/), and allows you to award badges for activities within BuddyPress.

Martin wants ocTEL to issue Open Badges directly. This should be feasible, as the JSON that Mozilla needs isn’t too tricky.

Badges are useful in the context of showing people what activity is happening. Leaderboards of activity could be demotivating, but maybe you could be shown the activity levels around you.

Ultimately we want to use data to help people navigate the course.

## Running an open course across two different installs – 52:50

Will this be adversarial, or will the passion of outsiders help people taking the formal course? “We can use the outside people as agitators and provocateurs”

If you have open participants and paying participants in the same space, could that cause problems?

Paid students get a grade, and more feedback and attention, even if the content is the same.

Universities want to capitalise on the energies of outsiders (using them as an element of the course – “Human as OER”), but they don’t want to give them resources. That’s the origin of having an open course across two spaces. Is it really a big deal to just host outsiders? If you talk to lawyers about this, the conversation becomes trickier.

## Returning to the problem of bulk-importing existing users with multi-site – 58:44

[Boone’s simple import users plugin](http://teleogistic.net/code/wordpresswordpress-mu/simple-import-users/) might help. Imports via an email address paste into a single site of your multi-site. Doesn’t have many options. Auto-generates user logins based on email addresses. Does some basic BuddyPress stuff – modifies the registration email to include buddy press info.

Martin Hawksey thinks this will be a good basis for what he wants to do. He expects to modify the code so that it pulls in an associated twitter username as the account name.

## iframe oembed issues on multi-site – 1:04:00

Boone usually creates a shortcode, with 10 lines of code. Create an MU plugins file with shortcodes.

## Potential changes to Martin Hawksey’s FeedWordpress member lookup fork, to save effort in maintaining – 1:07:28

Martin uses some code that is from FeedWordpress, but has to modify it every time FeedWordpress updates (thankfully this isn’t too frequent).

Boone suggests using filters, to save effort maintaining. He proposes adding in a line that will do nothing in most cases, but will do the extra cool thing you want to do in your specific case.

There is a debate over putting in loads of filters VS having every special use case having a custom fork. In this case, it’s probably a common enough use case to warrant being a filter.