---
title: "How to evaluate generative AI output"
permalink: /how-to-evaluate-generative-AI-output
date: 2025-09-27T18:22:53+00:00
---

_I recently took two courses on evaluating generative AI output:_
- _[Quality and Safety for LLM Applications](https://www.deeplearning.ai/short-courses/quality-safety-llm-applications/)_
- _[Automated Testing for LLMOps](https://www.deeplearning.ai/short-courses/automated-testing-llmops/)_

_This post is a summary of what I learnt_

## Evaluating LLM output is different to evaluating deterministic software

Unlike traditional software, which is deterministic, LLM outputs are non-deterministic. A single input can have many correct (and incorrect) outputs.

There are two primary kinds of evaluations for software using LLMs:

1.  **Rule-Based Evaluations:** Use string or pattern matching to find specific content. These are fast, cheap, and ideal for outputs with a clear right answer. They can be run frequently, such as after every code commit.
2.  **Model-Graded Evaluations:** Use another LLM to grade the output of your application. This is slower and more expensive than rule-based evaluations, but handles a range of possible good or bad outputs (e.g., evaluating the quality of LLM-written text). You'll likely run these before a release. (You may also run human evaluation after merging to a main branch, before release, and in production)

## Use passive and active monitoring

- Passive monitoring is running metrics on historic production data collected from your application.
- Active monitoring is applying metrics in real-time. This could involve evaluating a user's prompt _before_ sending it to the LLM (e.g., to catch a jailbreak attempt) or evaluating the LLM's response _before_ showing it to the user (e.g., to check for toxicity or hallucination).

![An active monitoring flow, showing guardrails and telemetry being applied both between the user and the LLM and between the LLM and the user](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/active%20monitoring.png?raw=true)

## Key Quality and Safety Issues to Evaluate

### 1. Hallucination, Accuracy, and Groundedness

A **hallucination** is an LLM response that is inaccurate, irrelevant, or nonsensical, but which appears coherent. Contributing dimensions are correctness, context adherence (groundedness), and context relevance.

There are two main ways to measure hallucinations:

*   **Prompt-Response Relevance:** Check that the response is semantically similar to the prompt. This can be done using cosine similarity of sentence embeddings, BLEU scores, or BERT scores. But semantic similarity is not the same as relevance.
*   **Response Self-Similarity:** Compare the similarity between multiple responses to the same prompt. The idea is that if an LLM gives different answers each time, it's more likely to be hallucinating. This can be measured with sentence-level semantic matching or by using another LLM to compare the responses.

### 2. Data Leakage

This is the unintentional exposure of sensitive information. There are three types:
1.  **Leakage in prompt:** User data is leaked.
2.  **Leakage in response:** Model training data is leaked.
3.  **Leakage of test data in training data:** Evaluation data is compromised.

It can be measured by:
*   **Pattern Matching:** Using regex to detect structured PII, like email addresses or phone numbers.
*   **Entity Recognition:** Detecting entities (e.g., person, organization) and checking them against a list of sensitive entities. Be wary of false positives with this method.

### 3. Toxicity

Toxicity can be explicit or implicit.
*   **Explicit Toxicity:** Use of clearly offensive language (e.g., related to race, gender, or specific bad words).
*   **Implicit Toxicity:** Harmful concepts without the use of "bad words".

Models like `hatebert` and datasets like `Toxigen` can be used to detect both forms of toxicity.

### 4. Prompt Injection

This is any attempt to make an LLM do something its designers did not intend. Jailbreaking is a common subtype. A refusal is the desired outcome, where the LLM declines to fulfill a malicious request.

Detection can be done by comparing user input against a list of known injection attempt strings.


