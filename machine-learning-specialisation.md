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

In unsupervised learning, the algorithm is just provided with input data. The job of the algorithm is to find structure and pattern in this unlabelled data. For example:

1. Clustering algorithms group similar data points together. (E.g. grouping customers into market segments.)
2. Anomaly detection - finding unusual data points. Useful for fraud detection.

# Supervised Learning

## Linear regression

Linear regression is fitting a straight line to your data, using a machine learning algorithm. It’s probably the most widely used machine learning technique.

You provide the algorithm with a training set of ‘right answers’ - pairings of input and output data. The algorithm then works out how to work out, for a given input value, the appropriate output (this is known as ‘training’). This allows the algorithm to then take new input values and provide predicted output.

When training our model, we’re looking to make the predictions as good as possible.
The way we track this is through a ‘cost function’. It tracks how close the algorithm’s predicted output is from the actual output value provided in the training data. So in training the algorithm, the goal is to minimise the cost function. (There are a few different types of cost function, e.g. a squared error cost function.)

## Gradient descent

Imagining a straight line graph of type y = mx + c, we want an algorithm that works out the values of m and c, to give us the best predictive result (i.e. minimising the cost function). To do this, we can use an algorithm called gradient descent.

To carry out gradient descent:
- Start with some values of m and c
- Work out the cost function (i.e. how well this line fits your training data)
- Change m and c to try and reduce the cost function. Test values of m and c around the current values, 
- Adjust m and c in the direction of the steepest reduction in the cost function (hence ‘gradient descent’)
- Continue until you reach a minimum. (If you’re using a squared error cost function, there will only ever be one minimum, so you don’t need to worry about local minima)

Tips for making gradient descent work better:
- Use vectorisation to allow for parallel execution (if you use a machine learning code library, it’ll be set up for this)
- Use feature scaling, so that all your features are in a more consistent range, making it easier for gradient descent to find the minimum point. Aim for each feature to be between -1 and +1. (This is particularly important if you’re doing polynomial regression)

## Classification with logistic regression

Classification is most commonly done with a logistic regression algorithm.

Logistic regression takes in a set of features, and outputs a value between 0 and 1
This output is the probability that the class is equal to 1. E.g. an output of 0.7 means that there’s a 70% chance of the input having a positive output.

It’s similar to linear regression, but uses a sigmoid/logistic function to take the input and map it to the 0 to 1 scale, and uses a logistic loss function rather than a squared error cost function.

The ‘decision boundary’ is the line that divides your 0 classifications from your 1 classifications. Generally people set a threshold, and say that things above it are 1 and below it are 0. 0.5 is a common threshold. But it won’t always be the right value - e.g. if you had a tumour detection algorithm, you’d probably want to set a lower threshold for review by a specialist.

## Underfitting and overfitting

You want your algorithm to generalise well - i.e., you want it to fit well to the training data, and to make high-quality predictions for examples that it hasn’t seen before.

If your algorithm doesn’t follow the pattern in the training data well, we’d say that it is biased (in a technical sense) and ‘underfit’.

If your algorithm is over-optimised for fitting the training data, you might find that it is ‘overfit’. This is because it’s so optimised for perfectly fitting to its training data, that it doesn’t do as good a job of predicting more generally. We’d say that this model has ‘high variance’.
This can be the case in regression and classification:

[add regression and classification examples]

Approaches to address overfitting:
- Get more training examples
- Feature selection: use fewer features when training your algorithm. (Lots of features + a small training set generally leads to overfitting)
- Regularisation: reducing the impact of a given feature, without eliminating it outright. Regularisation lets you keep all your features, but it prevents the features from having an overly large effect.
