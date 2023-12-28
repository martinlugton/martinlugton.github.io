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

![Three graphs, showing the difference between underfit, fit, and overfit for a regression problem](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/overfitting%20-%20regression.png?raw=true)

![Three graphs, showing the difference between underfit, fit, and overfit for a classification problem](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/overfitting%20-%20classification.png?raw=true)

Approaches to address overfitting:
- Get more training examples
- Feature selection: use fewer features when training your algorithm. (Lots of features + a small training set generally leads to overfitting)
- Regularisation: reducing the impact of a given feature, without eliminating it outright. Regularisation lets you keep all your features, but it prevents the features from having an overly large effect.

## Regularization to address overfitting and underfitting

We can update our cost function so that it now trades off between two goals:
- The mean squared error function encourages the algorithm to fit the training data well.
- The regularization term encourages the algorithm to avoid overfitting, by keeping parameters small.

![Regularization equation](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/regularization.png?raw=true)

The value you set to lambda determines the tradeoff between these two goals:
- If lambda is 0, you'll overfit, because you aren’t regularizing at all. 
- If lambda is huge, then you’ll underfit, because you aren’t using the mean squared error value to make sure that the algorithm does a good job of predicting input:output pairings.
- So you want a lambda value somewhere in the middle

## Neural networks (aka deep learning)

These algorithms are inspired by the way the human brain works. They are great at tasks like speech and image recognition.

Logistic and linear regression (which we have looked at so far) can only scale in performance to an extent with additional data. Neural networks, on the other hand, are much more effective at taking advantage of additional data.

![A graph showing the performance gains afforded by neural networks with additional data, compared with 'traditional' machine learning](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/why%20now.png?raw=true)

As we now have more data, faster processors, and new computational capabilities unlocked by using GPUs for machine learning, we have been able to take advantage of neural networks in recent years.

The smallest component of a neural network is a neuron. A neuron takes an input - or set of inputs - does some computation, and then produces an output (called its ‘activation’)

A layer is a group of neurons that take as an input the same or a similar set of features, and that in turn output a few numbers together.

In the demand prediction example below, in addition to the input and output layers, there is a layer of 3 neurons in the middle.

![A diagram of a simple neural network](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/very%20simple%20neural%20network.png?raw=true)

The network will learn, over time, for each neuron, which of the features in the layer to its left are more important in making a prediction.

Neural networks give us the benefits of logistic regression, whilst effectively creating their own features from the input layer, and finding the best way to weight them - e..g affordability, awareness, and perceived quality being more usefully predictive than ‘material’ and ‘shipping cost’ alone.  So instead of manually having to do feature engineering, the neural network figures this out for us.

## Implementing neural networks

Tensorflow and pytorch are great for implementing neural networks.

They do a lot of the mundane work for us, allowing us to follow these steps:
- define the model (its layers, and their relationships)
- compile the model
- fit the model (running gradient descent and fitting weights to the data) 

Then you can use the model to predict the output for new input values.

## How to evaluate and improve a machine learning algorithm

Instead of using all your data for training the algorithm, hold back some of it to use for testing:

- Use 70% of your data for training, then keep 30% back to use for testing against the algorithm that you train.
- Compute the training error (how well the algorithm performs on the training data): this is called Jtrain
- Compute the test error amount (how well it performs on the test data): this is called Jtest
- If you have an overfit model, Jtrain will be low (i.e. the model will perform well against the data used to train itself, meaning that this cost function is low), but Jtest will be high, because the model isn’t good at predicting things not in its training set

(The above steps are for regression. For classification algorithms, work out the % of items that have been misclassified in the training set as Jtrain and the % of items that have been misclassified in the test set as Jtest.)

You can take this a step further, and add a cross-validation set (aka validation or development set). This helps you compare between different models, using the cross-validation set to do so, before subsequently using the test set to independently test its quality. The ideal is a model that performs well on the training and cross-validation sets. This implies that it’s able to learn patterns from the training set without overfitting. (The cost for the cross-validation set is JCV.)

## Diagnosing bias and variance

Your model generally won’t work well the first time. Looking at bias and variance can help you work out what improvements to make.

![A diagram showing underfit and overfit, similar to the earlier regression diagram](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/bias%20and%20variance.png?raw=true)

You want a model with low Jtrain and low JCV - this shows that it isn’t overfit, and that it isn’t underfit (biased).

![A diagram showing Jtrain and Jtest varying with the degree of polynomial](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/JCV%20and%20Jtrain%20with%20degree%20of%20polynomial.png?raw=true)

![A diagram showing how to use JCV and Jtrain to assess a model](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/analysing%20JCV%20and%20Jtest.png?raw=true)

(“>>” in the above means “much greater than”. I.e. JCV being much greater than Jtrain is a sign of overfit.)

## How to establish a baseline level of performance

It’s useful to establish a baseline level of performance, against which to compare JCV and Jtrain. You could use:

- Human level performance
- Performance of similar, competing algorithms
- A guess, based on your prior experience

If you have a big difference between your baseline and the training error, you have a bias problem.
If you have a big difference between your training error and JCV, you have a variance problem.

## Working out whether it’s useful to add more training data

Graph the learning rate to see how far it is useful to add training data. To do this, plot the size of the training set as the x axis, and the error as the y axis.

If a model has high bias, adding more training data will not, by itself, help much. Resolve the bias problem before adding any more training data.

High bias:

![Graph of learning rate with high bias](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/high%20bias.png?raw=true)

With a high variance model - i.e. one that is overfit to the training set - you may find that your Jtrain is better (i.e. that this error rate is lower) than human performance. But that’s illusory, as it’s overfit - you will see that JCV has a higher error rate.

If you have high variance (as shown by a big gap between JCV and Jtrain), increasing the size of the training set should help improve performance:

