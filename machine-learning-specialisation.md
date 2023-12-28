---
title: "Summary of Machine Learning Specialisation from Stanford and DeepLearning.AI"
permalink: /machine-learning-specialisation
---

_This year I completed [Stanford / DeepLearning.AI’s Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction). In this post I summarise the high-level points, glossing over the technical complexity._

## What is machine learning?

Machine learning is a sub-field of artificial intelligence. It is “the science of getting computers to learn without being explicitly programmed”.

Machine learning is useful because there are lots of things that we want machines to do that we aren’t capable of describing how to accomplish. e.g. identifying an image or getting a car to drive itself. So with machine learning, we design machines to work out how to do it, and then do it.

Some examples of machine learning applications: film recommendations, speech-to-text, spam identification, optimising wind turbines, search results, inspecting factory items for defects

## The two types of machine learning

There are two types of machine learning: supervised and unsupervised. Supervised is more commonly used, and more technically mature, than unsupervised.

In both types of machine learning, the inputs are called features - and choosing which features to pay attention to, and which to ignore, and when to derive new features from existing features, is a key task called ‘feature engineering’.

In supervised learning: an algorithm is given a set of ‘right answers’ to learn from, and trains itself to work out more ‘right’ answers when confronted by new input that it hasn’t seen before. So you input a load of training data - input and output pairings, and then the algorithm trains itself to work out the output for a new input. For example:

| Input | Output |
| ----------- | ----------- |
| Email | Whether it's spam or not |
| Audio file | Transcript of the speech |
| Image of manufactured good | Information on whether it has a defect or not |
| Scan | Benign / malignant type 1 / malignant type 2 |
| Attributes of a house for sale | The predicted sale price of the house |