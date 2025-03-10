---
title: "Summary of AI for Good Specialisation from DeepLearning.AI"
permalink: /AI-for-good-specialisation
---

_I recently completed [DeepLearning.AI’s AI for Good Specialization](https://www.deeplearning.ai/courses/ai-for-good/). In this post I summarise some of the key points.
(If you're interested in a deeper understanding of machine learning more generally, check out [Stanford / DeepLearning.AI’s Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction) and my [notes on that course](/machine-learning-specialisation))_

'AI for good' is the use of AI to prevent, mitigate, or resolve problems affecting human life or the environment.

Some things to be wary of from the outset when thinking about harnessing AI:

1. AI doesn’t always add value - in fact, most of the time in his career at Apple, Google and others, Robert Monarch has found that it doesn’t add value where you thought it would.
So be wary of falling into an AI-first mindset and seeing every problem as an AI problem. 
E.g. covid swab tests were quick and cheap. So even though researchers showed that you could use AI and medical imaging to test for covid, that would have been much more expensive, and impractical.2. 

AI FIRST MINDSET IMAGE

Rather, AI is one potential tool in your toolkit:

AS IS ONLY A POTENTIAL SOLUTION IMAGE

2. Be careful with personally identifiable information. It can be used by authoritarian regimes to crackdown on dissidents.

3. Be wary of the impacts of potential errors of your application - e.g. mis-identifying illegal deforestation, or giving a wrong cancer diagnosis.

4. Unforeseen consequences can happen if your solution _does_ work as intended. So think about adversarial use cases - ways in which others might use the system or the data to do harm rather than good. E.g. publishing black rhino preservation data, including location, could assist poachers. Speaking to stakeholders is essential to help understand potential impact and do no harm.

# The AI for Good Framework 

A structure for approaching AI for good work.

Most AI projects, and most for-good projects, fail to achieve a demonstrable positive impact.

"The majority of ideas, however well intentioned, are not going to work out. Being able to recognise that you are not likely to be able to reach a successful outcome is one of the most important leadership and design skills that you can develop"

AI FOR GOOD FRAMEWORK IMAGE








# What is machine learning?

Some examples of machine learning applications: film recommendations, speech-to-text, spam identification, optimising wind turbines, search results, inspecting factory items for defects

## The two types of machine learning

![Regularization equation](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/regularization.png?raw=true)

Keep splitting until the stopping criteria is met. This could be:
- When a node is 100% one class: i.e. entropy has been reduced to 0
- When splitting a node will result in the tree exceeding the maximum depth (to minimise complexity of the model and avoid overfitting).