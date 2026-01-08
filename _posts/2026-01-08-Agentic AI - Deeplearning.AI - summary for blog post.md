---
title: "Agentic AI - Deeplearning.AI course summary"
permalink: /agentic-ai-deeplearning
date: 2026-01-08T19:00:00+00:00
---

_I recently took a course on agentic AI, taught by Andrew Ng at [DeepLearning.AI](http://deeplearning.ai). This blog post is a summary of what I learnt._

An agentic AI workflow is a process whereby an LLM-based application executes multiple steps to complete a task. 

Examples:

* Providing customer support  
* Doing research  
* Processing legal documents  
* Writing an essay

![A flow diagram titled "Essay-writing example" illustrating an iterative process. It maps specific writing steps to LLM actions. "Write an essay outline" maps to a single LLM call. "Do you need any web research?" maps to an LLM call plus a "web search" tool. "Write a first draft" is an LLM call. "Consider what parts need revision" maps to an LLM call plus a "request human review" tool. Finally, "Revise your draft" maps to a final LLM call.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/Essay-writing%20example.png?raw=true)

## Some agents are more autonomous than others

At one end of the spectrum you have less autonomous agents, which:

* follow a pre-determined sequence of steps  
* use tools in a hard-coded way  
* only have autonomy in text generation.

Example: simple invoice processing:

* Identify required fields in invoice  
  * Record data in database

At the other end of the spectrum, you have more autonomous agents, which:

* work out their own sequence of steps in response to the input, and make many decisions autonomously  
* can create new tools on the fly

Example: customer service agent:

* Given a wide range of possible user input, plans out the steps to respond (as the required steps are not known in advance), e.g. for:  
  * Stock enquiries (including writing code to answer the enquiry)  
    * Order return queries

## Benefits of agentic AI

* Much better performance than simply making an LLM call. In deeplearning.AI’s benchmarking, they found that implementing an agentic approach to a coding task led to a higher improvement in quality than the generational shift between GPT 3.5 and GPT 4.  
  ![A chart titled "Coding benchmark (HumanEval)" comparing the performance of Non-agentic and Agentic systems. The Y-axis lists models "GPT-3.5" and "GPT-4". The X-axis shows performance percentages from 40% to 100%. The chart highlights that agentic systems (including Reflection, Tool Use, Planning, and Multiagent approaches) consistently outperform non-agentic baselines. For GPT-3.5, the non-agentic score is 48%, while agentic systems like "LDB+Reflexion" reach up to 94%. For GPT-4, the non-agentic score is 67%, with agentic systems like "AgentCoder" and "Language Agent Tree Search" reaching roughly 94%.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/Coding%20benchmark.png?raw=true)  
* Parallelism (e.g. the ability to carry out multiple threads of web research and fetching at the same time, rather than having a single thread of thinking/execution)  
* Modularity - allowing you to combine different components, and switch out different parts to get the best results

## Some tasks are easier or harder to implement using AI agents:

| Easier | Harder |
| :---- | :---- |
| Clear, step-by-step process | Steps not known ahead of time |
| Standard procedures to follow | Plan / solve as you go |
| Text assets only | Multimodal (e.g. sound/vision) |

## Task decomposition

Task decomposition is breaking down a workflow into steps and working out which building block to use for each step (see below) . 

This can also help improve the quality of the results. e.g. instead of just saying ‘write an essay’ with some input, you could say ‘write a first draft’, then ‘consider which parts need revision’, then ‘revise your draft’. (And as you carry out evaluation, you can identify improvements to your workflow, which can include task decomposition)

## Building blocks for creating workflows:

| Building block | Examples | Use cases |
| :---- | :---- | :---- |
| Models (shown as grey boxes in the diagrams) | LLMs | Text generation, tool use, information extraction |
|  | Other AI models | PDF-to-text, text-to-speech, image analysis |
| Tools (shown as green boxes in the diagrams) | API | Web search, get real-time data, send email, check calendar |
|  | Information retrieval | Databases, retrieval augmented generation (RAG) |
|  | Code execution | Basic calculator, data analysis |
| Human input (shown as red boxes in the diagrams) | User query, or input document | Human input or review |

## Evaluating agentic AI (evals):

A key determinant of success is how well you use evals to drive improvements. The basic loop is:

* Build the workflow (Andrew suggests getting a basic workflow up fast)  
* Examine the output to see patterns of where it goes wrong  
* Work out how to address recurring errors  
* Add an eval to track how often they occur. (You can improve the evals over time as you spot more issues \- and/or enhance the data set of tests)

There are end-to-end evals, component-level evals (another benefit of these systems being modular), and trace analysis.

### Objective evals  
Create a set of prompts and ground truth answers  
compare the quality before and after making changes  
![A slide titled "Create an eval to measure date extraction" outlining a four-step testing process. Step 1 is "Manually extract due dates from 10-20 invoices" (e.g., "August 20, 2025" to "2025/08/20"). Step 2 is "Specify output format of data in prompt" (YYYY/MM/DD). Step 3 is "Extract date from the LLM response using code" (using a regular expression). Step 4 is "Compare LLM result to ground truth" (using a simple code equality check).](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/eval%20for%20date%20extraction.png?raw=true)

### Subjective evals  
LLM as judge.   
grading with a specific rubric helps here, e.g. Asking it to return a score of 0 or 1 on a range of factors, e.g. ‘has a clear title’, ‘axis labels present’, ‘appropriate chart type’, ‘axes use appropriate numerical range’. 

I took a couple of courses on this topic: [evaluating generative AI output](https://www.martinlugton.com/how-to-evaluate-generative-AI-output) and [evaluating AI agents](https://www.martinlugton.com/how-to-evaluate-AI-agents)

## How to work out where to focus your efforts improving an agentic system

Take a disciplined error analysis approach. The above tests are end-to-end, so you might need to carry out analysis of specific modular parts of your system to understand what is causing the end-to-end disappointing result. (e.g. a problem with the research agent output could be caused by things going wrong in a number of places)  
![A process diagram titled "Example: research agent". It traces a request through a pipeline: User query -> LLM (Search web) -> LLM (Fetch best sources) -> LLM (Write essay draft). Below each step, it identifies potential failure points to investigate, such as "Bad search terms?", "Low quality search results?", "Poor selection of sources?", and "Bad reasoning over texts?". This highlights the importance of examining traces for debugging.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/research%20agent%20example.png?raw=true)  
So analyse the spans \- the outputs of each step \- to understand in more detail what is going on at each stage. (Trace is end-to-end)  
Analyse the traces where the output of your system is unsatisfactory. This will help you spot how to improve it.

Record what is going on across all your subpar examples, which will allow you to count up which are most common. E.g.:

![A table titled "Counting up the errors" that breaks down failure points in an automated workflow. The columns are "Prompt", "Search terms", "Search results", and "Picking 5 best sources". It lists specific examples of errors for different prompts: "Too many blog posts, not enough papers" (Search results error), "Missed well-known blog" (Picking source error), "Terms too generic" (Search terms error), and "Only selected US-based companies" (Search results error). The footer aggregates these error rates: 5% for Search terms, 45% for Search results, and 10% for Picking 5 best sources.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/counting%20errors.png?raw=true)  
This can help you work out where to spend most of your effort in making improvements.

In addition to end-to-end evals, you can set up component-level evals too. These are cheaper, quicker, and can more specifically track the performance of a  module in your bigger workflow.

### How to improve LLM components:

* Improve your prompts:  
  * Add more explicit instructions  
  * Add one or more concrete examples to the prompt (few-shot prompting)  
* Try and new model  
  * Try multiple LLMs and use evals to pick the best  
* Split up the step into smaller steps  
* Fine-tune a model, if the other methods don’t work (more complex and expensive, though)

### How to improve non-LLM components:

* Tune hyperparameters of that component \- e.g. number of results, date range, similarity threshold, chunk size  
* Replace the component

### Latency and cost optimisation

Get the output quality high first, then worry about these problems.

Latency:

* Time the steps  
* Spot the biggest areas of slowness  
* Spot opportunities for parallelism  
* Try smaller/less intelligent models OR a faster LLM provider

Cost:

* Measure the tokens and call costs associated with each step  
* Then reduce tokens and/or calls

## Development process for an agentic product

* Loop between build and analysis  
* Basic end-to-end build \-\> trend analysis \-\> improve individual components manually \-\> build evals and a small dataset to track end-to-end performance \-\> make improvements based on these insights \-\> make analysis more disciplined with component-level analysis \-\> drives work on specific individual components \-\> do analysis to make components more efficient

## Agentic design patterns:

1. **Reflection**   
   1. Getting the agent (or a separate critic agent) to reflect on its own output:

      Get the LLM to come up with a way to approach a task  
      1. Then ask it to review the approach for correctness, style and efficiency, and give constructive criticism on how to improve it. (You may also use a different model from the one that did the initial creation \- reasoning agents are particularly good at reviewing)  
      2. Get the agent to carry out the improvement

      Advice for reflection prompts:

1. Clearly indicate the reflection action  
2. Specify the criteria to check  
   ![A diagram titled "Reflection with a different LLM". It depicts a two-LLM system. "LLM 1" generates code to create a visualization based on a user prompt. "LLM 2" acts as a reflector/critic. It receives the code, the generated plot, and the conversation history, and is instructed to "Critique the attached chart for readability..." and then "Write new code to implement your improvements."](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/reflection%20with%20a%20different%20LLM.png?raw=true)

   You can compare performance of your workflow before and after implementing reflection.

   2. Feeding in information from tools (e.g. output from unit tests or code errors)

      Reflection is a consistent way to improve the quality of what is produced  
      ![A bar chart titled "Reflection has been tested" illustrating performance gains from reflection. It compares "Base" performance vs. "+Self-Refine" (Reflection) performance for GPT-3.5, ChatGPT, and GPT-4 across tasks like Sentiment reversal, Dialogue response, and Code optimization. In every category, the "+Self-Refine" version shows a significant performance increase, annotated with values like "+21.6" or "+49.2".](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/reflection%20has%20been%20tested.png?raw=true)

2. **Tool use**

   Tools are functions that the LLM can request to be executed. E.g. returning the current datatime as a string, or making an API call, or a database query.  
   ![A workflow diagram titled "Multiple tools". It starts with a user request: "Find a free slot on Thursday... and make an appointment with Alice." An LLM first calls the check_calendar tool, receives availability data ("Thursday, 3pm..."), and then calls the make_appointment tool. The final tool output "Meeting created successfully!" is fed back to the LLM to generate the final confirmation to the user.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/multiple%20tools.png?raw=true)

   They use the [aisuite library](https://github.com/andrewyng/aisuite), to make it easy to abstract away the LLM provider choice from your code. You provide the function(s) to the LLM, and as long as you have a docstring explaining what the function does, the aisuite library passes that description through so that the LLM knows when to call it.

   ![A slide titled "Behind the scenes (functions with parameters)" contrasting Python code with its JSON Schema definition. The left side shows a Python function get_current_time(timezone) and its usage in an API call. The right side shows the corresponding JSON schema passed to the model, defining the function name, description, and the timezone parameter with its type (string) and description.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/functions%20with%20parameters.png?raw=true)

   Example tools:

   1. Analysis  
      1. Code execution (use a sandbox environment (e.g. docker or E2B (lightweight)) to help protect against catastrophic errors)  
      2. Wolfram alpha  
      3. Bearly Code Interpreter  
   2. Information gathering  
      1. Web search  
      2. Wikipedia  
      3. Database access  
   3. Productivity  
      1. Email  
      2. Calendar  
      3. Messaging  
   4. Images  
      1. Image generation  
      2. Image captioning  
      3. OCR  
3. **Planning** - working out the steps and sequence needed to achieve a goal. Harder and more experimental, but can give impressive performance.

   ![A diagram titled "Planning example: Customer service agent". A system prompt gives an LLM access to tools like get_item_descriptions, check_inventory, and get_item_price. For the query "Do you have any round sunglasses in stock that are under $100?", the LLM generates a 3-step plan: 1. Find round sunglasses. 2. Check if they are in stock. 3. Check if the price is <$100. The diagram shows the execution flow where the LLM calls the appropriate tool for each step of the plan.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/planning%20example%20-%20customer%20service%20agent.png?raw=true)

   Telling the agent to write the downstream plan as JSON is useful, as it structures it in a clear way:

   ![A slide titled "Formatting plan as JSON". The left side shows a system prompt instructing the LLM to "Create a step-by-step plan in JSON format" with specific fields (step number, description, tool name, args). The input is "Do you have any round sunglasses in stock that are under $100?". The right side displays the resulting JSON output, showing a structured list of steps like "Find round sunglasses" (tool: get_item_descriptions) and "Check available stock" (tool: check_inventory).](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/formatting%20plan%20as%20json.png?raw=true)

   An alternative, instead of getting agents to execute different steps in the plan through successive LLM calls, is to get the LLM to produce code that, when executed, will carry out the plan.

   This can be more effective than just coming up with a JSON plan:

   ![A bar chart titled "Planning with code improves performance". It compares task completion rates for various LLMs (like Llama-2, GPT-3.5, GPT-4) using three different action modes: "Code as Action" (Green), "JSON as Action" (Pink), and "Text as Action" (Purple). The chart clearly shows that "Code as Action" consistently yields the highest success rates, with GPT-4-1106-preview reaching nearly 75% success with code, compared to around 55% with JSON or text.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/planning%20with%20code%20improves%20performance.png?raw=true)

   This area is quite cutting-edge.

4. Multi-agent collaboration (can be harder to control, but can result in better outcomes for complex tasks)  
   ![A diagram titled "Example: Planning with multiple agents". It shows a system prompt instructing a "marketing manager" LLM to use a team of agents ("researcher", "graphic designer", "writer"). The user request "Create a summer marketing campaign for sunglasses" leads to a 3-step plan: 1. Ask researcher to find trends. 2. Ask graphic designer to create images. 3. Ask writer to create a report. The diagram visually connects the text output of each step to the corresponding specific agent in a sequential chain.](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/example%20-%20planning%20with%20multiple%20agents.png?raw=true)  
   Common inter-agent communication approaches are to have a sequence of agents, or to have a managing agent calling the others as needed. You can also have deeper hierarchies. There are frameworks for setting up multi-agent systems.

   1. E.g. ChatDev  
   2. Or using researcher, marketer, editor for a wider marketing workflow.
