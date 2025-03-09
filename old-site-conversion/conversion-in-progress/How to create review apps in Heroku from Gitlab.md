---
title: "How to create review apps in Heroku from Gitlab"
permalink: /how-to-create-review-apps-in-heroku-from-gitlab
date: 2018-06-04T20:18:45+00:00
redirect_from:
  - /how-to-create-review-apps-in-heroku-from-gitlab/
---

# How to create review apps in Heroku from Gitlab

A review app is a temporary application created to help you review in-progress code changes. You’ll use a [review app](https://about.gitlab.com/2016/11/22/introducing-review-apps/) because you’re working on a code branch and want to see what the changes will be like in a production-like environment, or because you’re reviewing a pull or merge request from someone else.

Gitlab doesn’t explicitly outline how to setup review apps with Heroku, but the [Heroku API](https://devcenter.heroku.com/articles/platform-api-reference) is well-documented, and it’s quite straightforward to get this up and running. You’ll need to set up a few [environment variables](https://docs.gitlab.com/ee/ci/variables/). And make sure that the length of your branch name and your project name is no greater than 29 characters (Heroku has an app name length limit).

To [create](https://devcenter.heroku.com/articles/platform-api-reference#app-create) a review app:

1. The interesting things happen inside (Inside [start_review_scripts.bash](https://gitlab.com/snippets/1720360))
2. Create a new app with a URL derived from the name of the code branch
3. Get the right git branch, then push it to Heroku.

![YAML section on creating a review app in Heroku via its API](How%20to%20create%20review%20apps%20in%20Heroku%20from%20Gitlab%20%E2%80%93%20Martin%20Lugton_files/how-to-start-a-review-app-in-heroku-with-gitlab.png)

To [delete](https://devcenter.heroku.com/articles/platform-api-reference#app-delete) the review app:

1. Delete the app

![Code snippet to stop review app. Use the hyperlink to access the full snippet](How%20to%20create%20review%20apps%20in%20Heroku%20from%20Gitlab%20%E2%80%93%20Martin%20Lugton_files/stop_review.png)

[View this build pipeline in full](https://gitlab.com/snippets/1716930).