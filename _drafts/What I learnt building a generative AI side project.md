---
title: "What I learnt building a generative AI side project"
permalink: /what-I-learnt-building-generative-AI-side-project
date: 2025-07-18T08:30:53+00:00
---

_Back in 2023 I built a generative AI side project using a couple of large language models (LLMs). This post explains what I built, what I learnt, and what I'd do differently next time._


# The problem I was trying to solve

- I get lots of podcast recommendations
- Listening to podcasts takes a lot of time
- It's not always clear upfront whether something that's been recommended will actually be worth my time and attention

# The capabilities I was interested in harnessing

- Transcription 
- LLM text summarisation

Speech transcription had recently crossed the threshold into 'an essentially solved problem', and LLM text summarisation was a task that performed well in general capability benchmarks.

The immediate provocation to build this product was discovering the [Whisper open source transcription tool](https://github.com/openai/whisper). I downloaded it from GitHub and ran it locally - and was impressed with the results. I thought that enough capabilities had come together to allow me to build something to solve my problem, in a way that made sense economically.

# What I built

I build a product that transcribed and summarised each new podcast episode for a user. It sent the summary transcript in an email. I called it 'Summacast'.

The email contained a summary of the new podcast episode, and also made it clear to the user how much time they'd saved by using the product.

![An example podcast summary email. Sections include a summary, a key quote, and potential limitations and divergent views](https://github.com/martinlugton/martinlugton.github.io/blob/main/example-summacast.png?raw=true)

I planned the business model, cost model and pricing approach.

The LLM part of the work was quite easy from a technical perspective - simple API calls, handling of different lengths of input through different LLMs, and some optimisation of the queries to make them return the best output. I found orchestrating the bash scripts locally (as I was transcribing using Whisper on my desktop computer to save costs) to be the fiddliest part of the build. This was the era of smaller context windows (e.g. GPT 3.5 Turbo 8k and 16k), so I had to use different models from different companies to handle the different sizes of input. In practice, this meant that podcasts under an hour were handled by ChatGPT 8k or 16k, and ones longer than an hour were handled by Claude. I worked to ensure a consistent output regardless of which was used.

The infrastructure was super basic - a few bash scripts, a couple of python scripts, and data stored in CSVs and HTML files. I deliberately didn't use a database, to keep it simple for an MVP, as there were only about two read/write batch operations per hour. The podcast feeds were handled by an open source podcast tool.

I used the product in my personal life, and with a number of test users. I was particularly impressed at its ability to handle complex information on veterinary anaesthesia, just as well as more conceptual topics on culture and design.

I also investigated the legal and ethical side of the work. Legally it seemed justifiable as fair dealing, given the extra analysis provided (although I would have wanted to confirm with a lawyer, and access to legal advice is fiddly to arrange, and expensive!), but ethically I wasn't so sure. Ideally I wanted to extract the adverts from a given episode, and then preserve these and share them with the user alongside the summary, but in practice this was hard. I found that the LLMs struggled to pick out which material was an advert from a transcript alone. Worse still, more fundamentally, the way that lots of podcasts serve adverts is more personalised than this, with targeted ad content being injected into the media file before being downloaded by the user, meaning that that targeting would be lost. 

I was happy testing out the idea on a small scale, but didn't like the idea of building a business off the back of other people's hard work, without having a clear way to share that revenue. If I was running this as a full-time startup, I might have run full-speed ahead, and then worked backwards to solve the advertising revenue issue, negotiating a revenue share deal after we'd scaled enough to be relevant. As it was, I took this as a natural limit on the growth of the product, and have now removed its web presence.

# What I learnt

- A hands-on understanding of the capabilities and limitations of LLMs for this type of task

- How to ration tokens and get the most out of a context window

- How to choose between different models for different needs and cost-optimisation points

- The speed of change in this area - with model performance and context windows improving each month

- That generative AI products work really well with the product-led growth model, whereby you charge users for the valuable outcome that they receive (rather than for something arbitrary like the number of accounts that an organisation has). This is because with LLMs, assuming you're calling an API rather than hosting your own, you're paying based on your volume of use of the API. So you're paying the LLM to generate useful outcomes for your user. If the per-request cost of providing users with a valuable outcome is less than the price you're able to charge a user for that outcome, then you have a potentially viable business.

- The rapidly-changing frontier of economic possibility for intelligence-driven businesses. Some of the new models like GPT 4 were prohibitively expensive, and so I avoided using them, as I couldn't make a profitable business around them. But with each month, intelligence gets better and cheaper, and new types of business harnessing this intelligence become viable as a result. (And, of course, you should plan your business based on where this trajectory is going, rather than the current state of things.)

- Developing a pricing and business model for a B2C startup. I was able to work out how much it would cost me to save a user an hour of their time, and then I could work out how much I'd charge for that. Charging people for the outcome - the time saved - is a key principle of product-led growth, and it fit well with how the economics of per-user LLM API calls work, and aligned nicely with the core value proposition of the product.

- The nuance of working out price, combining a range of considerations: the go-to-market and product-led growth approach, the different LLMs and their associated costs, and different price points to encourage paid subscriptions. It was the most complex part of the whole development. I built a spreadsheet to model these dimensions to help me plan this product as a business, and work out whether I thought I could make a profit. It included foundational factors like:
  - Transcription and summarisation cost for 1 hour (GPT 3.5 16k)
  - Transcription and summarisation cost for 1 hour (Claude 2)
  - % of non-paying users that we expect to convert (from an industry benchmark)
  - Expected card payment fee
  - Number of free hours that non-paying users get per month
  - Number of hours that a paid user gets each month
  - Price charged to paying user per month
Some of these factors were fixed, and others I could vary at will. I used the modelling spreadsheet to play around with the variables that I could control (such as price), and updated the other details like cost of transcribing an hour's material as these factors changed over time.

I explored different levels of generosity in the free offering, and different tiers of payment and the number of hours of time saved that the user would get each month for that price. The spreadsheet calculated a 'profit per user per month' value for a given price level.
This modelling helped me explore a range of different options and think more widely and creatively than before - whilst being grounded in my current best understanding of the economics of things like API costs, likely conversion rates from freemium use, and payment provider fees.

I created different tabs, exploring freemium and free trial options, testing them against each other, before arriving on the freemium model.

- Calling out and testing risky assumptions and hypotheses in a commercial startup context, as opposed to my day job in government, where this activity is quite different

Overall, my two takeaways were the clear product capabilities opened up by LLMs, and the excitement of the challenge of interacting between a compelling product idea and the rigours of working out how to design a viable software business around it.

# What I'd do differently next time

- Have a cleaner approach to the infrastructure. Using Whisper locally was economically fantastic - I could essentially transcribe podcast episodes at zero cost. This made the business viable, as Whisper API pricing was prohibitively expensive. But it also came at a cost: running the product off my regular desktop was messy, with the code running alongside everything else. If I built this again, I would take a container-based approach to orchestrating the infrastructure running locally, so that it was split off. Or I'd just use Whisper via API and incorporate it into my pricing model, doing some optimisations upstream of sending the data to it (e.g. trimming out silence) to reduce costs.

- Bake in a formal evaluation approach to ensure quality. I eyeballed a range of difficult cases early on, and monitored a % of the emails going out by hand. This quickly became unsustainable. If I was doing this again, I'd want to review summary quality in a reproducible way on each significant change (e.g. for each pull request, like you'd do in other software as part of a suite of automated tests).

# What's next?

LLMs are better and cheaper than when I built this product, and they have longer context windows. I want to use these capabilities to help people in the charity sector carry out parliamentary work more effectively.