---
title: "How to create better confirm and reject popups"
date: 2013-02-15T14:22:00+00:00
permalink: /how-to-create-better-confirm-and-reject-popups
redirect_from:
  - /how-to-create-better-confirm-and-reject-popups/
---

# How to create better confirm and reject popups

Computers often ask us to confirm our intentions. Asking ‘Are you sure you want to do that?’ is a useful way to reduce input errors, but the way this question is posed is inconsistent. We could improve the user experience – and reduce errors – by making it more consistent.

Here are a couple of current inconsistencies that introduce unnecessary mental overhead, and making error prevention less effective:

### Positioning of ‘confirm’ and ‘do not confirm’ options

When deleting a tweet in Hootsuite, the placement of the ‘confirm’ button is on the left; in twitter it’s on the right:

![the confirm / reject delete tweet popup in hootsuite](How%20to%20create%20better%20confirm%20and%20reject%20popups%20%E2%80%93%20Martin%20Lugton_files/hootsuite-tweet-delete.png)

![twitter delete tweet - confirm or reject](How%20to%20create%20better%20confirm%20and%20reject%20popups%20%E2%80%93%20Martin%20Lugton_files/twitter-delete-tweet2.png)

Note that both highlight the user’s probable intended action – ‘confirm deletion’.

### Use of highlighting to show the user’s probable intended action

Not everywhere uses highlighting:

![vertical response confirm reject deletion message](How%20to%20create%20better%20confirm%20and%20reject%20popups%20%E2%80%93%20Martin%20Lugton_files/vertical-response-confirm-reject-deletion.png)

How could we improve our popup messages to make them more consistent and useful?

### Some rules for creating better confirm and reject popups

- Place the ‘confirm’ option on the right and the ‘do not confirm’ option on the left.
- Make your option buttons descriptive so that it’s very clear what each option entails. Avoid using the generic ‘Okay’ – instead, use imperatives like ‘Delete’.
- Highlight the action the user probably intended to take.
- If the user is about to do something potentially dangerous, grey out the ‘confirm’ option for a couple of seconds. Additional popups are annoying. If you really need to make someone wait to read a message – eg if you want them to confirm running a file they downloaded from the internet – grey out the ‘confirm’ option for a couple of seconds like Firefox does:

![firefox popup - confirm or reject file save or open](How%20to%20create%20better%20confirm%20and%20reject%20popups%20%E2%80%93%20Martin%20Lugton_files/Firefox-open-confirm-reject1.png)