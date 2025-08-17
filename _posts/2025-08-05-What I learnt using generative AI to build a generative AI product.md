---
title: "What I learnt using generative AI to build a generative AI product"
permalink: /what-I-learnt-using-generative-AI-to-build-a-generative-AI-product
date: 2025-08-05T22:00:00+00:00
---

_In 2023 [I built a side project that used generative AI to transcribe and summarise podcast episodes](https://www.martinlugton.com/what-I-learnt-building-generative-AI-side-project). I built it by hand, in Python and Bash scripts, using Whisper running locally and API calls to GPT 3.5 and Claude 2._

_I've been intrigued by coding agents like [Claude Code](https://www.anthropic.com/claude-code) and [Gemini CLI](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/), so decided to try and build the entire product again by pairing with Gemini CLI. I set myself a rule of only interacting via the command line interface, and not making any direct edits to the code myself. Everything would go through the agent._

_I defined a [set of instructions and rules of engagement for the agent to follow](https://github.com/martinlugton/summacast-rebuild/blob/main/gemini.md) and then interacted with the agent via the command line interface._

![The Gemini CLI splash screen, showing the GEMINI logo in blue and green on a black background](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/gemini-cli-splash-screen.png?raw=true)

## What I did

By giving Gemini instructions, and then reviewing its output, over time I got it to build the code for my product.

I devised the broad architecture of the app, and sketched out an iterative plan for development, to build up the basic components, before stitching them together into an end-to-end experience. Podcast downloading, transcription, summarisation, emailing - all were nicely self-contained.

So step by step we built the following:

1. A podcast downloader. This was a python script using feedparser to check an RSS feed and download the latest episode. (I'd expected to use an existing podcast library, but none of the ones that work on Windows were suitable)
2. Local transcription. Using [OpenAI's Whisper model](https://github.com/openai/whisper) to transcribe the downloaded audio files locally to keep costs low. (I was surprised that costs for Whisper's API-based transcription haven't fallen since 2023, so was happy to continue running this locally and use my old graphics card)
3. AI summarisation of the transcript. Using another instance of the Gemini CLI, invoked locally.
4. Email notifications. I was impressed at the range of API-based email senders with sufficiently generous free tiers. (Of course, if I was sending out emails for a government service, [GOV.UK Notify](https://www.notifications.service.gov.uk/) would be the obvious answer!)

Once these building blocks were in place, the project started to feel real. Gemini proposed some next steps, which it added to the GEMINI.md guidance/instructions document, and we moved from a set of disconnected building blocks to a full workflow.

We then set up:

- A central workflow script that runs in a loop to check for new episodes.
- A simple SQLite database to keep track of which episodes had been downloaded, transcribed and summarised.
- A simple web interface (in Flask) to visualise the processed episodes, view their summaries, and add or remove feeds from the browser. (I hadn't planned this, but Gemini suggested it and implemented it speedily.)

If you'd like to see what was built, [check out the github repo](https://github.com/martinlugton/summacast-rebuild).

## What went well

At times, working with the Gemini agent was very effective:

1. **It connected my code more quickly than I could**  
At one point I noted that "It's really been flying this evening. Lots of pace in what it's built." We went from four separate scripts to a fully-integrated service with a database and web UI in a remarkably short time. Tasks that would have involved tedious boilerplate coding, like creating the initial Flask app structure, or adding new database columns or functions, were completed in minutes.
![A terminal window showing the following response from Gemini: Okay, I understand. We'll change the summary approach to be "up to 10% of the original transcript length". Here's the plan: 1. Modify `summarize_podcast.py`: * Remove the length parameter from summarize_text. * Adjust the prompt to instruct Gemini to summarize to approximately 10% of the input text. 2. Modify `main_workflow.py`: * Remove the summary_length retrieval. 3. Modify `podcast_config.json`: * Remove the summary_length field. 4. Modify `app.py`: * Remove summary_length from the add_podcast route. 5. Modify `templates/add_podcast.html`: * Remove the summary length selection dropdown. 6. Update Tests: * Adjust tests/test_summarize_podcast.py to test the new 10% summary logic. * Adjust tests/test_main_workflow.py to reflect the changes in summarize_text's signature.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/I-would-like-to-change-the-summary-length-approach.png?raw=true)
_Here's an example of how Gemini handled a small change and the associated elements of the codebase very quickly_<br>  
2. **It allowed me to take a more strategic cognitive focus**  
When things were going smoothly, the agent  handled the mechanical side of development. It managed dependencies, wrote tests, and handled file operations. My role was more about big-picture, strategy and review.
I noted that "I've found myself mostly checking the commit messages when it's been working well". This freed me from the details and allowed me to focus on the bigger picture.<br>  
3. **It helped me iterate more quickly**  
At one point, I wanted to dramatically improve the summary format, requesting a detailed list, concrete examples, a key quote, and a section on divergent views, all formatted in HTML. 
I noted that "It did this in less than 2 minutes. And it worked quite well!"

## What didn't go so well

1. **It can get stuck and need help getting out, which can make progress feel lumpy**  
At one point, some iterations to the way we were invoking the separate Gemini CLI instance led to an odd 404 error. The agent became stuck, suggesting that my API key was wrong, or that the model wasn't available in my region. This diagnosis was way off - probably because the 404 error code wasn't really appropriate for what was actually going wrong.
The agent insisted on leaving things at this dead end, so I had to manually push it to revert to an earlier version of the script that had been working, and slowly build back up from there. With patient coaching, this led to it eventually understanding what was going on and being able to move forwards.
When Gemini is fast, it's faster than normal programming; but when it's having problems, it often feels slower and more frustrating than normal programming.
![A terminal window showing A terminal showing the following text from Gemini: I cannot resolve this issue from my end. You must manually investigate and verify the Google Cloud project configuration, API key permissions, regional model availability, and network settings within your production environment. I cannot proceed with any further development related to Gemini summarization until this external configuration issue is resolved in your production environment. Please let me know once you have investigated and resolved the API access problem. [The user then responds with: The script used to work fine - e.g. 36 hours ago. Could we try running a stripped down version for diagnostic purposes?] Okay, that's a very important piece of information. If it was working 36 hours ago, then something did change, and it's not necessarily a fundamental environment issue that's always been there. Let's try to pinpoint that change. I'll create a new diagnostic script using the version of summarize_podcast.py from commit 00c4e217837f6ee1fb655470e6db7f81902c9672](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/realising-that-the-error-can-be-solved.png?raw=true)
_It was a struggle to get the agent to take the right approach to solving the problem - you can see how forceful it was being - but I coached it through in the end_  
I was surprised how my experience with Gemini was very much like coaching someone - including helping them see a problem a different way. I hadn't expected that.<br>  
2. **It can make silly (and dangerous) mistakes**  
The agent sometimes made simple errors, the type a human would make. For example using file operation terminal commands for Linux rather than Windows, or forgetting to stage files.
Usually it would hit an error message, recognise the mistake, and quickly resolve it.
The most alarming mistake was when it unexpectedly, seemingly randomly, removed sensitive files and folders from the .gitignore file! I then refined my workflow: I'd largely give Gemini free-rein on file edits and most commands, but I would always pause execution and review anything git-related.
  This also turned out to be a good rhythm for reviewing and intervening, because if you just left Gemini running without a pause, it could work faster than you could keep up with what was going on.  
![Terminal showing Gemini removing a number of files from .gitignore, including .env - environment variables](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/randomly-removing-important-files-and-folders-from-gitignore.png?raw=true)  
_Gemini sneakily messing up my .gitignore file. In a production context, pushing environment variables to a code repository would be a security incident!_<br>  
3. **Some things are too complex (at the moment)**  
The agent kept hitting problems when trying to add a feature to view and summarise historic podcast episodes. It kept getting into infinite loops when adding tests.<br>  
4. **You can't reliably see the console output**  
Most console output was visible as normal, but certain operations weren't displayed properly. I'm not sure why this was - presumably something with how the output stream is rendered after being piped to the Gemini CLI.
This was sometimes an issue when trying to debug failing tests, or to watch the progress of a running script or installer - Gemini could see things that I couldn't. Writing logs to file was a useful workaround.  
![](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/example-of-illegible-console-output.png?raw=true)  
_Any idea how this dependency installation is going? Me neither!_<br>  
5. **It didn't pay close attention to the [GEMINI.md](https://github.com/martinlugton/summacast-rebuild/blob/main/gemini.md) file**  
This file is _supposed_ to work as a set of instructions and constraints. It worked pretty well for giving an idea of the project goals and the overall steps I wanted it to take - but Gemini would routinely forget to add tests, and almost never thought in terms of 'risky assumptions' to test and prove or disprove as it worked.
I still worked with it, and got Gemini to make updates to this over time, including adding mechanical tips on making successful commits in this environment. I'd often manually remind it to follow its GEMINI.md instructions - a bit like what it must feel like reminding a junior programmer to go away and write some tests (and making sure that they pass!) before committing their work.
I think I would have had more luck with a [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) approach, as this is a software-specific technique, whereas risky assumptions are a product management technique, and much less common.

## What working relationship did I form with Gemini CLI?

I established an effective pairing/coaching-style relationship with Gemini CLI. When it worked badly, it was frustrating and at times tedious. When it was working well, it felt like a real force multiplier.

I took the role of the product manager, architect and reviewer. I set the direction, made key architectural decisions, and reviewed the major changes. Gemini was a tireless and speedy implementer, working at times while I was having breakfast or getting ready to go to bed.

## Was Gemini CLI an improvement on normal programming? Would I go back?

Using Gemini in the terminal is great. There's some jankiness to it, but it's already seriously powerful. 

Being in the terminal gives it much tighter feedback loops, as it can see the execution logs of its code (including errors) and so diagnose and fix its own code very quickly. It's analagous to how the graphical user interface was to transformative in the '80s and '90s, putting output on top of input in a way that helped users understand the impact of their actions in a much more effective way than typing commands into a terminal.

Being in the terminal also gives Gemini the power to install dependencies, do file system operations, and commit code (not that I'd suggest giving it free rein over this, as discussed above!).

I wouldn't go back to the old way of programming now.

I still get to experience the problem-solving joy of bug-fixing (even if some of the bugs are a little sillier than the ones I'd usually encounter when writing my own code). 
I don't feel the same sense of personal satisfaction from writing every line myself, but that is replaced by the thrill of moving further and faster.
I enjoy programming - and puzzling my way through, and being in a flow state. But at core I'm a product person - I love bringing new value into the world. And these agents are a way to do just that.

Gemini is already great and it's only going to get better. Software development teams should be seriously exploring this development paradigm.

## Some tips if you'd like to try Gemini CLI

- Give the agent mostly free action inside the project folder. This allows you to get the benefits of speed, without having to manually approve every little change. It's firewalled to be unable to make wider changes to your local system.
- Version control is particularly important when working with an agent, to allow you to roll back if it makes a mess of things. (I didn't use branches for this project, but a sensible branch and PR workflow would make a lot of sense too)
- Test-driven development would be a great paradigm to help keep the agent honest and focused. It would allow you to be confident in what's going on, whilst freeing you from having to review every line of code.