---
title: "How to evaluate generative AI output"
permalink: /how-to-evaluate-generative-AI-output
date: 2025-09-28T08:30:53+00:00
---

_I recently took two courses on evaluating generative AI output:_
- _[Quality and Safety for LLM Applications](https://www.deeplearning.ai/short-courses/quality-safety-llm-applications/)_
- _[Automated Testing for LLMOps](https://www.deeplearning.ai/short-courses/automated-testing-llmops/)_

_This post is a summary of what I learnt from these courses_



## Core Concepts in LLM Evaluation

Unlike traditional software, which is deterministic, LLM outputs are non-deterministic. A single input can have many correct (and incorrect) outputs. Therefore, evaluation is not a simple "right" or "wrong" check. Instead, we evaluate criteria like accuracy, quality, consistency, bias, and toxicity.

There are two primary kinds of evaluations:

1.  **Rule-Based Evaluations:** Use string or pattern matching (e.g., regex) to find specific content. These are fast, cheap, and ideal for outputs with a clear right answer. They can be run frequently, such as after every code commit.
2.  **Model-Graded Evaluations:** Use another LLM to grade the output of your application. This is slower and more expensive but is necessary for complex applications where there are many possible good or bad outputs (e.g., evaluating the quality of LLM-written text). These are often done pre-release.

## Key Quality and Safety Issues to Evaluate

### 1. Hallucination, Accuracy, and Groundedness

A **hallucination** is an LLM response that is inaccurate, irrelevant, or nonsensical, yet appears coherent. This relates to the broader evaluation criteria of **correctness**, **context adherence (groundedness)**, and **context relevance**.

There are two main ways to measure hallucinations:

![A diagram showing the difference between hallucinations and relevance](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/hallucinations%20and%20relevance.png?raw=true)

*   **Prompt-Response Relevance:** Check that the response is semantically similar to the prompt. This can be done using cosine similarity of sentence embeddings, BLEU scores, or BERT scores. However, it's important to remember that semantic similarity is not the same as relevance.
*   **Response Self-Similarity:** Compare the similarity between multiple responses to the same prompt. The idea is that if an LLM gives different answers each time, it's more likely to be hallucinating. This can be measured with sentence-level semantic matching or by using another LLM to compare the responses.

### 2. Data Leakage

This refers to the unintentional exposure of sensitive information. There are three types:
1.  **Leakage in prompt:** User data is leaked.
2.  **Leakage in response:** Model training data is leaked.
3.  **Leakage of test data in training data:** Evaluation data is compromised.

It can be measured by:
*   **Pattern Matching:** Using regex to detect structured PII like email addresses or phone numbers.
*   **Entity Recognition:** Detecting entities (e.g., person, organization) and checking them against a list of sensitive entities. Be wary of false positives with this method.

### 3. Toxicity

Toxicity can be explicit or implicit.
*   **Explicit Toxicity:** Use of clearly offensive language (e.g., related to race, gender, or specific bad words).
*   **Implicit Toxicity:** Harmful concepts without the use of "bad words".

Models like `hatebert` and datasets like `Toxigen` can be used to detect both forms of toxicity.

### 4. Prompt Injection

This is any attempt to make an LLM do something its designers did not intend. **Jailbreaking** is a common subtype. A **refusal** is the desired outcome, where the LLM refuses to fulfill a malicious request.

Detection can be done by comparing user input against a list of known injection attempt strings (see Jailbreakchat.com for examples).

## Integrating Evaluations into the Development Workflow

### Continuous Integration (CI)

CI involves making small, frequent changes to your application, with every change being automatically built and tested. This is crucial for LLM applications. A typical workflow might involve:
*   Running fast, rule-based evaluations after every commit.
*   Running slower, more expensive model-graded evaluations before a new release.
*   ![A diagram showing different evaluations being run in different environments](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/environment-specific%20evals.png?raw=true)

### Monitoring

*   **Passive Monitoring:** Running metrics on collected data from your application after the fact.
*   **Active Monitoring:** Applying metrics in real-time. This could involve evaluating a user's prompt *before* sending it to the LLM (e.g., to catch a jailbreak attempt) or evaluating the LLM's response *before* showing it to the user (e.g., to check for toxicity or hallucination).
    ![A screenshot showing active monitoring in action](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/active%20monitoring.png?raw=true)

You can also incorporate human feedback loops alongside automated testing to improve the evaluation process.
![A diagram showing how human evaluation can be added to the process](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/adding%20human%20evaluation.png?raw=true)