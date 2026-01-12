---
title: "Building a multi-agent AI Objectives and Key Results coach"
permalink: /multi-agent-ai-okr-coach
date: 2026-01-12T09:00:00+00:00
---

_I recently took a [course on agentic AI](https://www.martinlugton.com/agentic-ai-deeplearning), and built an AI agent to test out some of the new things that I learnt._

![A terminal showing the text "Welcome to the AI OKR Coach. Enter an Objective, Key Result, or OKR set to review:](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/okr-coach-terminal.png?raw=true)

I wanted to create a simple agent with non-deterministic routing and use of sub-agents:

- Non-deterministic routing means that instead of a traditional piece of software, where the flow of steps taken is based on logical rules set in advance, the flow of execution would be based on decisions made by the agent itself.

- Use of sub-agents means that there would be one overarching agent, addressing the overall task, but it would be able to call on other, specialist, agents to carry out specific tasks. Think of the overarching agent as a manager and the sub-agents as specialists working to carry out tasks to pursue the manager's goal. Combined with non-deterministic routing, this meant that I'd call the overarching agent with a task to carry out, and it would work out which agents to use. This would allow me to focus those agents, and the prompts that shape their action, on being good at their narrow, specific tasks.

Generative AI is now at the stage where we have access to pretty good basic cognition. In a huge number of scenarios, this is more than enough to do something very useful. I picked a simple task for my agent: I wanted it to review draft Objectives and Key Results for digital product teams. I'm following the approach outlined by Christina Wodtke in her book [Radical Focus](https://www.martinlugton.com/radical-focus-wodtke-summary). Objectives and Key Results are a technique for setting goals and working out how you will measure whether you're achieving them.

There are some simple best practices for Objectives and Key Results outlined by Wodtke: 
- Objectives should be inspiring, qualitative and timebound. 
- Key Results should be specific, measurable and ambitious. 
These simple rules, and the fact that Objectives and Key Results are short pieces of text, makes them an easy candidate for this type of application.
I wanted the agent to assess draft Objectives and Key results against these rules, to highlight problems and suggest improvements.

I worked with Gemini CLI (using Gemini 3 Pro Preview) to build the agent, and wanted a very simple setup. I didn't use any frameworks like LangChain or the aistudio library - just some python invoking Gemini CLI instances for each agent. (Usually you'd just make an API call to a model provider, but invoking Gemini CLI means you can try this out without having to pay. The simplicity of this agent presumably makes it a good candidate for running locally, but my computer isn't powerful enough for this to be a viable option)

My plan for the architecture was that an overarching 'coordinator' agent would manage the end-to-end review process, deciding which sub-agents to call on as necessary. I ended up with the following sub-agents: 
- Objective reviewer
- Objective improver
- Key result reviewer
- Key result improver

![A terminal screenshot showing the AI OKR Coach processing a full OKR set. It reviews an Objective about making government
  interaction easier, suggests adding a "time-bound element," and then approves a set of quantitative Key Results focused on reducing
  completion time, drop-offs, and support requests. The final recommendation combines the improved Objective with the approved Key
  Results.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/okr-coach-example.png?raw=true)

An alternative coordinating approach would have been to have the sub-agents powered by LLMs, but the overall coordination driven by deterministic logic in python - e.g. 
```
if Objective reviewer agent suggests need for improvement:
	call the Objective improver agent
else:
	tell the user that the Objective is good
```
As simple code running locally, this would have been much faster than a coordinator agent running through an LLM call, with the associated latency - but my goal here was for the agent to be flexible, and to test this new coordination model, so I was happy with this tradeoff. This flexibility allows me to pass the coordinating agent a wider variety of inputs: an Objective, a Key Result, or an Objective and associated Key Results, without having to rigidly work out how to parse this input in advance from a string of user input.

I was using Gemini CLI with the Gemini 3 Pro Preview model to do the programming, which mostly worked well. I had make some changes to get the Objective reviewer set up properly (Gemini initially specified that the Objectives need to be SMART, but that's not actually how they work in the Objectives and Key Results framework) but this was easy.

![A terminal screenshot showing the AI OKR Coach reviewing a vague OKR set. The initial Objective is "Make our new website a
  success," which the Reviewer marks as needing improvement because "Success" is too vague and it lacks a timeframe. The Improver
  suggests a more specific version: "Become the industry's most trusted and engaging digital platform by December 2026, delivering
  unparalleled value to our users."](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/okr-coach-bad-okr-set-example-1.png?raw=true)

![A terminal screenshot showing the AI OKR Coach's detailed critique of poor Key Results. The tool provides feedback on four items:
  "We launch it on time," "We've incorporated some new features," "Users say they like it," and "Increased revenue." For each, it
  explains why they fail on criteria like Measurability, Outcome-focus, and Challenge, noting they are either binary tasks,
  unmeasurable outputs, or too vague to be actionable.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/okr-coach-bad-okr-set-example-2.png?raw=true)

![A terminal screenshot showing the AI OKR Coach's final suggestions for improving a set of poor Key Results. It provides general
  recommendations like "Make them SMART" and "Focus on outcomes," followed by specific "Suggested Improvements." For example, it
  transforms "Users say they like it" into "Increase our product's Net Promoter Score (NPS) from 30 to 50 by the end of the quarter,"
  showing how to turn vague sentiment into a measurable metric.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/okr-coach-bad-okr-set-example-3.png?raw=true)

![A terminal screenshot showing the "FINAL OKR RECOMMENDATION" from the AI OKR Coach. The improved Objective is to "Become the
  industry's most trusted and engaging digital platform by December 2026." It is supported by four specific, measurable Key Results,
  including achieving a target launch date, a 30% weekly active usage rate for new features, increasing Net Promoter Score from 25 to
  45, and growing quarterly revenue by $250,000.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/okr-coach-bad-okr-set-example-4.png?raw=true)

I've learnt a lot about evaluating AI agents in the last 6 months (see these notes on [how to evaluate generative AI output]("https://www.martinlugton.com/how-to-evaluate-generative-AI-output), and these notes on [how to evaluate AI agents](https://www.martinlugton.com/how-to-evaluate-AI-agents) so I wanted to implement some evaluation here too. 

I started with the simple stuff - deterministic tests like you'd have in traditional software. We set up Unit Tests, mocking the query_gemini function. These were useful for testing the Python logic (e.g., "Does the parser handle None values correctly?"), but they didn't test the intelligence.

To test the intelligence, I wanted to use the 'LLM as a judge' approach, to allow for non-deterministic evaluation of non-deterministic responses.

There was an interesting nuance whereby the LLM as judge was initially setup incorrectly, so it was judging good output to be bad (e.g. considering an Objective without a number to be vague, even though the Objectives and Key Results framework specifies qualitative Objective and quantitative Key Results). So we refined the judge's criteria prompt to address this. 

Another failure occurred when the Judge simply politely acknowledged the prompt ("Okay, I will judge.") instead of giving a verdict. We had to make the prompt imperative: "JUDGE IMMEDIATELY. Do not converse."

This shows that if you're using an LLM-a-judge evaluation approach, you'll probably need to iterate your evaluation prompts just as much as your actual agent's prompts.

If you'd like to try out the okr coach, [check out the GitHub repository](https://github.com/martinlugton/okr-coach). You'll need [Gemini CLI](https://geminicli.com/) and [Python 3](https://www.python.org/downloads/) setup locally.

![A terminal screenshot showing the AI OKR Coach successfully approving a high-quality OKR set. The Objective is to make government
  payments "dramatically easier and cheaper by the end of Q4 2026/7." The tool approves three Key Results (reducing costs by 70%,
  reducing time by 15%, and increasing success rate from 88% to 91%), noting they are measurable, outcome-focused, and challenging.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/okr-coach-example-2.png?raw=true)
