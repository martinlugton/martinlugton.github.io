---
title: "Summary of Machine Learning Specialisation from Stanford and DeepLearning.AI"
permalink: /machine-learning-specialisation
date: 2024-12-28 18:30:00 +00:00
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

![Graph of learning rate with high variance](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/high%20variance.png?raw=true)

If you have high variance:
- Get more training data
- Try a smaller set of features
- Increase the regularisation parameter lambda, so that your algorithm has less flexibility to fit very complex, wiggly curves

If you have high bias:
- Make your model more powerful, and more flexible to fit more complex data:
- Add additional features
- Try adding polynomial features
- Decrease the regularisation parameter lambda, so that your algorithm has more freedom to fit more complex curves.

## Bias and variance in neural networks

Large neural networks are generally low bias, so the process for refining them looks a little different:

![Flowchart showing how to improve a neural network - if it's not performing well on the training set, increase the size of the network; if it's not performing well on the cross-validation set, add more data](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/neural%20network%20improvement%20flowchart.png?raw=true)

## Machine learning development is an iterative loop

![Flowchart showing architecture choices, training, and diagnosis flowing into each other in sequence in an endless loop](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/iterative%20loop%20of%20machine%20learning%20development.png?raw=true)

## Transfer learning

Transfer learning is using data from one task to accomplish another, similar task.

You can take an existing neural network and apply it to a new task (as long as the inputs are of the same type). e.g. a network trained on identifying different classes of objects in images could be reapplied to identify the digits 1 to 9 in images.

Option 1: Copy over the entire neural network, keeping all the parameters and weights, and just retrain the output layer, as you want it to give a different output. This approach is best for small training sets, and is called 'supervised pretraining'. There are lots of pre-trained neural networks openly licensed and available online, so you can get started on this quickly.

Option 2: Retrain all the parameters, initialised using the values of the parameters that you copied from the other context. This approach is best for anything other than small training sets, and is called ‘fine tuning'.

## Fairness, bias and ethics
Examples of bias (in the ordinary meaning of the term, rather than the more technical use elsewhere in this course):
- Hiring tool discriminating against women
- Facial recognition having an unfair propensity to match dark skinned people to criminal mugshots

Examples of negative use cases:
- Deepfakes
- Spreading inflammatory speech by optimising for engagement
- Generating fake content for commercial or political purposes
- Using machine learning to build harmful products or commit fraud

Some tips for thinking about fairness, bias and ethics:
- Get a diverse team to brainstorm things that might go wrong, with an emphasis on vulnerable groups
- Carry out literature review on guidelines or standards that might exist for your industry
- Audit systems against possible harm prior to deployment
- Set up a mitigation plan ahead of deployment, and then monitor for possible harm after deployment, implementing the mitigation plan as required.

## Decision tree algorithms

The job of a decision tree learning algorithm is to create a decision tree that works as well as possible for the training data given, but that also generalises to new input that it hasn’t seen yet.

So it will generate a bunch of possible trees, like below, and then work out which is best:

![Example decision trees for determining whether an animal is a cat](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/example%20cat%20decision%20trees.png?raw=true)

## How to choose which feature to split on at each node, when making a decision tree? 

Use an entropy function and maximise ‘information gain’.

We use an entropy function that gives a value of 0 when we hit 0 or 100% cat % in a given grouping. It has a value of 1 (an ‘entropy of 1’) when the group is 50% cats 50% not cats. 

![Graph showing entropy at 0 at 0% and 100% category purity, and rising to 1 at 50% purity](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/entropy.png?raw=true)

When choosing which feature to split on, go for the one that reduces entropy the most.
The reduction of entropy is also known as ‘information gain’.

Keep splitting until the stopping criteria is met. This could be:
- When a node is 100% one class: i.e. entropy has been reduced to 0
- When splitting a node will result in the tree exceeding the maximum depth (to minimise complexity of the model and avoid overfitting).
- Information gain from additional splits would be below a defined threshold
- When the number of examples in a node is below a given threshold

## Represent non-binary features with ‘one-hot encoding’

You can handle features that could have more than two values using ‘one-hot encoding’ - e.g. instead of having a feature ‘ear shape’ that could have 3 possible values - floppy, pointy or oval, you create 3 features, one for’ floppy ears’, one for ‘pointy ears’, one for ‘round ears’. And you set those as 0 or 1 appropriately.

More generically: “One hot encoding: If a categorical feature can take on k values, create k binary features (0 or 1 values)”. This also works for neural networks, and is a great way to encode categorical information so that it can go into a neural network.

## Use tree ensembles to make decision trees more robust

A weakness of decision trees is that they can be quite sensitive to changes in the data provided. One solution is to build multiple decision trees: a tree ensemble.

Run each of them against a new test example, and then get them to vote on the final prediction.

![An example of a tree ensemble, showing two Cat predictions and one Not Cat prediction, with a final prediction of Cat](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/tree%20ensemble%20example.png?raw=true)

Use ‘sampling with replacement’ to get variants on your training set, to train different trees of your ensemble. You might build something like 64-128 different trees in your ensemble

The XGBoost algorithm is the most common implementation of tree ensembles. It boosts the probability of picking examples that were mis-classified in previously-trained trees.

## When to use decision trees and when to use neural networks

Decision trees and tree ensembles:
- Work well with tabular (structured) data. (i.e. the kind of thing you’d put in a spreadsheet)
- Not recommended for unstructured data (images, audio, text)
- Fast
- Small decision trees may be human interpretable (but don’t overstate this, particularly if you’re using a forest!)

Neural networks:
- Work well on all types of data, including tabular (structured) and unstructured
- May be slower than a decision tree
- Works with transfer learning. This is very important.
- When building a system with multiple models, it may be easier to string together several neural networks than several decision trees / ensembles.

# Unsupervised Learning

In contrast to supervised learning, in which the algorithm is provided with labelled input and output data to train itself, unsupervised learning is just provided with input data. The algorithm’s job is to find structure and pattern in unlabelled data. For example:

- Clustering - finding data points that are similar to each other. (E.g. Grouping similar news articles, Market segmentation and DNA analysis)
- Anomaly detection - working out if a new example is similar or different to your training set. 

## Choosing between supervised and unsupervised approaches to spotting anomalies

Choosing between supervised and unsupervised approaches to spotting anomalies can be subtle. 

Generally, anomaly detection is best if you only have a very small number of positive examples (e.g. 0-20). 

Anomaly detection is better than supervised learning if you think that you might encounter deviations from what you’ve seen in the training set. If you want to be able to identify types of fraud or engine failure that haven’t happened yet, use anomaly detection. 

A supervised learning approach learns in a positive way what an anomaly is, and tries to spot it - anomaly detection learns what normal looks like, and flags things that differ from normal.

| Anomaly detection | Supervised learning |
| ----------- | ----------- |
| Fraud detection | Email spam classification |
| Manufacturing - finding new, previously unseen defects | Manufacturing - finding known, previously-seen defects |
| Monitoring machines in a data centre | Disease classification |

# Reinforcement learning

Reinforcement learning trains an algorithm by giving it rewards to tell it when it’s performing well.

The reward function tells the algorithm when it’s doing well and when it’s doing poorly.
So reinforcement learning focuses on describing the outcome that you want, rather than describing the behaviour to get there. So it gives much more freedom for that to emerge organically.

Example applications:
- Controlling robots
- Factory optimisation
- Financial (stock) trading
- Playing games and computer games

Reinforcement learning isn’t used as much commercially yet, but is a bit of a frontier of research:
- Much of it has been done in simulations, which are easier than the real world
- There are far fewer applications of reinforcement learning than supervised or unsupervised learning


At each step, the agent is in a state, and chooses an action, in the pursuit of maximising a reward function. And as a result of these actions it will get to a new state.

## Choosing between rewards

The agent needs to be able to work out tradeoffs between lower rewards that are quicker to obtain, and greater rewards that take longer to obtain. To allow it to do this, we specify a ‘discount factor’, by which we exponentially multiply rewards that happen later in time. 

You can change the discount factor depending on how much you want to encourage aggressive pursuit of immediate rewards over long-term rewards:
- A discount factor of 0.99 encourages the algorithm to optimise for long-term rewards.
- A discount factor of 0.5 means that the reward is getting much smaller very quickly into the future, so it will likely try and optimise for immediate gains.

## Markov Decision Process

The ‘return’ is the sum of the rewards that the agent gets, each of them weighted by the discount factor raised to the appropriate power based on the delay.

The goal of reinforcement learning is to work out what actions, given an input state, maximise the return.

This paradigm is called the Markov Decision Process. One key aspect is that the current state and future states are all that matters - it doesn’t hold context or baggage from the past.
The future depends only on where you are now, not on how you got here.

![Markov Decision Process diagram, showing the agent taking actions, impacting on the environment, leading to a state and reward, going back to the agent to make a decision](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/markov%20decision%20process.png?raw=true)

## Reinforcement learning and uncertainty

In some situations, the outcome of an action is not completely reliable.

In a stochastic (random) problem, there isn’t one sequence of rewards that we can perceive with confidence. So our focus can’t be on optimising the Return, as that’s a random number, but instead in maximising the _average_ value of the sum of the discounted rewards.
This is called the ‘expected return’, and it’s the average reward that the agent obtained after running the full sequence through many times.

## Specifying rewards (positive and negative) is central to reinforcement learning

Specifying rewards incentivizes the behaviours you want to see (and not see) your agent perform.

For example, a lunar lander might have the following rewards specified:
- Getting to the landing pad: 100
- Crash: -150
- Soft landing: 100
- Leg grounded: 10
- Fire main engine -0.3
- Fire side thruster: -0.03

The negative reward for crashing is a clear disincentive, as we definitely want to avoid that result. The small negative rewards for using the thrusters are to encourage economical use of fuel.
