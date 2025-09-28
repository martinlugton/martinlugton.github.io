---
title: "How to evaluate AI agents"
permalink: /how-to-evaluate-AI-agents
date: 2025-09-28T08:30:53+00:00
---

_I recently took a course on [Evaluating AI Agents](https://www.deeplearning.ai/short-courses/evaluating-ai-agents/). This is a summary of what I learnt_



## What is an AI Agent?

AI Agents use generative AI-driven reasoning, and take actions on a user's behalf.

They do three things:

1. **Reasoning:** Powered by an LLM to understand requests and plan actions.
2. **Routing:** Interpreting the request to determine the correct tool or skill to use.
3. **Action:** Executing code, tools, or APIs to fulfill the request.

When evaluting AI agents, we need to cover the whole process: the tool selection, API call correctness, use of context, and the overall correctness of the result.

### Agent Architecture

A typical agent consists of three main components:

1.  **Router:** The central planner that decides which skill or function to call. This could be an LLM, a classifier, or rule-based code.
2.  **Skills/Tools:** The capabilities the agent possesses. A skill is a chain of logic to complete a task, which can involve LLM calls or API calls, or similar. A common example is a RAG (Retrieval-Augmented Generation) skill.
3.  **Memory and State:** A shared state accessible by all components, used to store context, configuration, and execution history.

![A diagram showing the components of an example agent](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/components%20of%20example%20agent.png?raw=true)

## Observability: Understanding Agent Behavior

To evaluate an agent, you first need to understand what it's doing internally. Observability is often achieved using standards like Open Telemetry (OTEL), which logs the agent's execution path.

*   **Traces:** Represent an end-to-end run-through of the agent
*   **Spans:** Represent data captured on individual steps within a trace (e.g., a single tool call or LLM call).

Tools like Arize Phoenix can help automate the instrumentation of these traces, providing a detailed log for debugging and performance evaluation.

## Evaluation Techniques

There are three primary methods for evaluating agent components:

1.  **Code-Based Evaluators:** Similar to traditional software testing. Use code (e.g., regex matching, JSON parsing, checking against a known correct output) to validate the agent's output. Best for deterministic, inflexible outputs.
2.  **LLM-as-a-Judge:** Use a powerful LLM to judge a specific dimension of your agent's output (e.g., relevance, correctness). This is flexible but will not be 100% accurate. It's better to use discrete classification labels (e.g., 'correct'/'incorrect') rather than continuous scores.
3.  **Human Annotation:** Have humans label traces with feedback (e.g., thumbs up/down). This is high-quality but labor-intensive and hard to scale.

![A diagram showing when to use each evaluation technique](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/when%20to%20use%20each%20evaluation%20technique.png?raw=true)

## What to Evaluate in an Agent

Evaluation should target the different parts of the agent's process.

### 1. Router Evaluation

*   **Function Calling Choice:** Did the router select the correct skill/tool for the user's query?
*   **Parameter Extraction:** Did it correctly extract the necessary parameters from the user's input for the chosen function?
    ![An example of evaluating a router using LLM-as-a-Judge](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/example%20-%20evaluating%20a%20router%20using%20LLM-as-a-Judge.png?raw=true)

### 2. Skill Evaluation

The evaluation method depends on the type of skill:
*   **Deterministic Skills:** Use code-based evaluations (e.g., does the output parse correctly?).
*   **Non-Deterministic Skills (LLM-based):** Use an LLM-as-a-judge to evaluate aspects like relevance, hallucination, correctness, or readability.

![A diagram showing how to evaluate skills in an example agent](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/Evaluating%20Skills%20-%20example%20agent.png?raw=true)

### 3. Agent Trajectory Evaluation

The agent trajectory is the path of steps the agent took. Evaluating it is a measure of efficiency.

Convergence measures how closely the agent follows the optimal path for a given query. The goal is to reduce unnecessary steps, which lowers cost, latency, and variability.

## Evaluation-Driven Development

This is an iterative process where evaluation guides the development and improvement of your agent.

The core loop is:
1.  **Curate a Dataset:** Collect a comprehensive set of test cases with expected inputs.
2.  **Track Experiments:** Run the dataset through different versions of your agent (e.g., with a new prompt, model, or tool) and record the results as an "experiment".
3.  **Evaluate:** Run your evaluators on the experiment's results.
4.  **Compare:** Compare the evaluation scores across different versions to determine which changes led to improvements.

![A dashboard in Arize Phoenix showing metrics on different versions of an agent](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/comparing%20your%20results.png?raw=true)

This process creates a cycle of feedback, where insights from testing and even production can be used to refine the agent and the test dataset itself:
![A diagram showing the development and production process](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/development%20and%20production%20process.png?raw=true)