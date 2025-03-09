---
title: "A spreadsheet to assign jobs to sprints"
permalink: /spreadsheet-assign-jobs-sprints
date: 2016-10-15T14:22:53+00:00
redirect_from:
  - /spreadsheet-assign-jobs-sprints/
---

If you’re following an Agile project management process, and know your development capacity, I’ve made a spreadsheet that automatically assigns a prioritised backlog to sprints, and gives ETAs for each job. You’re welcome to [download this semi-automatic-sprint-planning-spreadsheet](http://www.martinlugton.com/wp-content/uploads/2016/10/semi-automatic-sprint-planning-spreadsheet.ods). (ODS format)

The spreadsheet uses a macro to automatically allocate jobs to sprints.

You need to tell the spreadsheet:

- How many hours each job requires. (This could be changed to story points if that’s how you work.)
- Your prioritisation of work – i.e. you need to rank the jobs in descending priority.
- When your sprints start and finish; and how many hours you have in each sprint. (There’s a separate tab for this)

This spreadsheet could make your life easier by:

- Saving you time allocating jobs to sprints.
- Saving you time in updating information when details change (e.g. you add new high priority jobs and want to see how this affects the eta of various pieces of work)

The spreadsheet allows you to answer questions like:

- When will job X be completed?
- Is it worth expediting estimation of this small job so that we can fit it in to the next sprint?
- Why aren’t we working on job Y yet?

If you know the number of hours (or story points) required for a job, and you have an ordered prioritisation, just press the button and jobs will be assigned to sprints.

The basic logic is: For each sprint, start from the top priority job that hasn’t yet been assigned. If there’s room, put this job in this sprint, reduce the number of hours available in the sprint, and write down the estimated delivery date for that job. Then look at the second highest priority job and see if there’s room for it in the sprint. Keep going down until you run out of hours remaining in the sprint.

Then move on to the next sprint, and do the same thing again. Continue until you run out of sprints.

This tool can help when you have a large backlog of development work. The ideal is, of course, to not have a large backlog. A backlog of development work incurs inventory costs: Understandings of requirements fade, developers move to different tasks, internal stakeholders have to be kept updated, motivation and excitement around each job diminishes.

This spreadsheet is shared under the MIT License.