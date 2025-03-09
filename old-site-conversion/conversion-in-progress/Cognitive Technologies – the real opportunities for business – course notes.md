---
title: "Cognitive Technologies – the real opportunities for business – course notes"
permalink: /cognitive-technologies-real-opportunities-business-course-notes
date: 2016-01-15T11:45:00+00:00
redirect_from:
  - /cognitive-technologies-real-opportunities-business-course-notes/
---

*In late 2015 I completed an [online course on cognitive technology](https://novoed.com/cognitive-technology). Here’s a summary of my notes. (NB the course is free to take, and is running again from 14 March to 13 June 2016)*

### What is AI?

AI is not about machines ‘thinking’ like humans. AI is the theory and development of computer systems able to perform tasks that would usually require human intelligence.  
e.g. cognitive (planning, reasoning, learning) and perceptive (recognising speech, understanding text, recognising faces)

“As soon as it works no one calls it AI any more”

We expect AI agents to:

- operate autonomously
- perceive their environment
- persist over time
- adapt to change

### Drivers of change in AI

- Moore Law – microprocessors are 4 million times more powerful than they were in 1971.
- Big data – low cost sensors, social media, mobiles, the internet gives us more data; combined with better techniques for working with this data.
- The internet and cloud computing
- Improved algorithms

### Cognition

Representing knowledge in a computer, using it to reason and plan automatically.

1. Rules-based systems: Rules base, inference engine (to apply rules), working memory (contains all the information it has to assess). Best for situations with a small number of variables.
2. Taxonomy: Helps to organise data into a hierarchy.
3. Bayesian networks (Bayes nets): Useful for situations in which your confidence about a belief may change as your knowledge changes. They can represent assertions, and degrees of certainty. Can help with diagnosis, reasoning from symptom to cause, or for prediction. Less good when you have lots of variables, or when you want to recalculate the entire network.

Some algorithms used in machine learning:

- Neutral networks – Good for pattern recognition. e.g. speech recognition. (segment audio signal onto phonemes, then associate phonemes with words in the dictionary; named entity recognition.)
- Support vector machines – good for classification and regression. Often used for off-the-shelf supervised learning. Straightforward to train and implement, and allow a lot of variables. Helpful for Feature engineering.
- Ensemble learning – using a collection of different models, and combining the output to obtain a stronger result. IMB Watson used this when playing jeopardy. Better than just using any one method.

#### Planning

Automatically devising a plan of action to achieve goals given a description of the initial state, the desired goal, and the possible actions.  
e.g. getting from Times Square to the Bronx Zoo.  
Search through possible actions to find a sequence that achieves the goal.  
Challenge: managing complexity and computation time: combinatorial explosion.  
Replanning is important too, to deal with developing situations.  
Applications include: Google navigation, unmanned vehicles, robotics.

#### Learning

Improving performance automatically. Machine learning is the process whereby machines improve their performance without explicit programming. Machines discover patterns, make predictions, and become better over time with exposure to data. This helps in situations where we can’t anticipate all situations, or when we don’t know how to program the solution (e.g. facial recognition)

Types of machine learning:

1. **Supervised learning – learning by example.**  
   An agent is given pairs of information – input (or a number of inputs) and output.  
   This allows the agent to understand how to produce the desired output, even for unknown inputs.  
   It’s called supervised learning because we use labelled data to train the model.

   Main tasks: Classification (output is one of a set of discreet values) or Regression (output is a number)

   **Applications**: Sales forecasting, image recognition, text classification, health.

   **Challenges**: Acquiring and labelling training data; can be expensive to create data set.

2. **Unsupervised learning – discovering patterns in data even though no specific examples are provided.**  
   e.g. clustering – given a large set of similar items, discover ways to group them into subsets

   **Challenges**: algorithm has to determine which attributes should be used to group items; sometimes it’s hard to decide where to place an item.

   **Applications**: Customer segmentation; Social network analysis; Defining product baskets; Topic analysis; Anomaly detection – e.g. looking for outliers in manufacturing.

3. **Semi-supervised learning – unsupervised learning with human interaction to fine-tune**  
   e.g. giving feedback on the number of clusters, or suggesting attributes for matching.

4. **Reinforcement learning – learning by trial and error.**  
   Agent acts in unknown environment, responding to sensory input. Responses shaped using rewards or punishment.  
   Agents take into account actions and sequences of actions when associating them with rewards or punishments.  
   Works best with closed-loop problems – i.e. ones in which there are no inputs other than those caused by the action of the agent

   **Challenges**: time consuming with many actions or chains of actions; requires a lot of computing power; trial and error has a cost – e.g. learning how to trade on the stock market, so use it when the costs of trial and error are low.

   **Applications**: physical control systems e.g. elevators or helicopters, or recovering from damage by learning new ways of walking; in some domains it’s our only option.

### Perception

The ability to take in information in a human-like way: through speech, text or vision.

1. **Natural language processing (NLP) – software that processes human language.**  
   e.g. understanding or producing. Break down doc to sentences, then words, which are understood using grammar rules

   **Challenges**: context is tricky: e.g. “he saw her duck”

   **Applications of NLP**: summarising documents, translation, extracting info, question answering, writing stories, analysing customer feedback. Medicine and Law

2. **Speech recognition – recognising words, tone and emotion of human speech**  
   Steps: break wave form into phonemes, then match these to words, then put these into an appropriate sequence.

   **Challenge**: accents, background noise, homophones, need to work quickly. (I wonder how we could add contextual information to understand the set of phonemes)

   **Applications**: hands-free writing e.g. medical dictation, controlling devices, computer system control, surveillance,

   **Future**: mine broadcasts and recordings of human speech.

3. **Computer vision – the ability to identify objects, scenes and activities in images. e.g. face recognition.**  
   Has to build up from pixels to coloured areas, and then objects.  
   Machine learning can be used to train object recognisers. error rate 2010-14 reduced four-fold

   **Applications**: Handwriting, medical imaging, autonomous driving, surveillance, gesture detection. One useful current application is recognition of where spare spaces are in a car park.

   **Future**: recognition in video, and events detection. This is hard because of the complexity: connecting recognition over time

### Physical interaction

Types of robot:

1. Manipulators – physically anchored to their workplace
2. Mobile robots – e.g. drones
3. Mobile manipulators – e.g. humanoid robots in films

Elements of robotic systems:

- Mechanical and electrical engineering
- Machine learning
- Computer vision
- Planning
- Speech recognition
- Sensors – e.g. range finders, location sensors, proprioceptive sensors (knowledge of own position), force and torque sensors
- Effectors

Applications of robotics:

- Manufacturing
- Agriculture
- Healthcare
- Hazardous environments
- Personal services
- Entertainment
- Human augmentation

Uncertainty is a challenge for robotics – e.g. needing to take action based on incomplete information, or dealing with an unexpected environment.

### Business applications for cognitive technologies

1. Product
2. Process
3. Insight

#### Product

Embed cognitive technologies in a product or service to help the end user.  
e.g Netflix film predictions, which drive 75% of Netflix usage; Google Now / Siri; predictive text.

How cognitive technologies can improve products:

1. Convenience
2. Simplicity
3. Confidence
4. Emotion

Questions to help you decide whether to embed cognitive technologies in your product/service:

- Would people like to use it hands-free?
- Is your product too complex?
- Do customers have to make complicated choices to buy your product
- Would a natural interface help customers bonds with your product?

#### Process

Embed technology into an organisation’s workflow, to increase speed, efficiency, quality.

Automate internal processes, e.g.:

- The Hong Kong subway system’s preventative maintenance programme. Scheduled by algorithm.
- Georgia’s campaign finance commission. Uses handwriting recognition to handle the volume of work.
- Cincinatti Children’s Hospital. Uses NLP to read freeform clinical notes to find patients who might be eligible for clinical trials. Reduced nurse workload on this area of work by 92%.

Automate expert decisions.  
Relieved skilled workers of unskilled tasks.  
Automate unskilled work.

#### Insight

Improve decision making by analysing large amounts of data – including unstructured data – to discern patterns or make predictions.  
e.g working out someone’s risk of developing metabolic syndrome, and which medical interventions were most likely to improve patient health.

Benefits: better, faster decisions that can improve operating and strategic performance

How to find opportunities: See where you have large or unstructured datasets that haven’t been fully analysed; look for processes where the value of improved performance is high.

### How to decide whether and where to incorporate cognitive technologies in your organisation – use the “Three Vs” framework

1. Viable – e.g. perceptual tasks (involving vision, speech, handwriting, data entry, first tier customer service), analytical classification and predictive (forecasting, document review and summarizing), decision-making tasks (situations where knowledge can be expressed as rules, data-driven decisions), planning and optimisation tasks (e.g. scheduling)
2. Valuable – where it’s worth applying. Involve business processes with costly labour, where expertise is scarce, where there is a high value in improving performance, or where you can deliver features or experiences that your customers care about.
3. Vital – may be required if: industry standard levels of performance demand their use: online product recommendation, spam filtering, fraud detection; scalability – e.g. processing handwritten or printed data, analysing large amounts of social media.

### The impact of cognitive technologies on work

There’s a debate – will machines take our jobs, or will they increase productivity and growth – and demand for human skills? Tasks requring adaptability, common sense, human interaction, ambiguity and creativity will be beyond the reach of machines for a long time. AI is most likely to replace highly-structured back-office roles that don’t involve many customer interactions.

Risks of automated systems:

- Not infallible. They may eliminate operational human error, but that doesn’t mean that they’re always right.
- Humans can lose skills if they don’t practice them
- Humans are bad at monitoring information that remains constant for long periods of time, which may lead to errors being undetected.
- Poorly automated systems can undermine worker motivation

Approaches to automation:

1. Replace – completely replace a human performing a job with a machine
2. Atomize and automate – break jobs into narrow tasks, and automate as many of these as possible. Humans are still employed, but in more of an oversight/remedial capacity.
3. Relieve – automate tasks that are dull, dirty or dangerous.
4. Empower or augment – make workers more effective through technology, e.g. by automating brand-new processes.

Strategic choice for approaching automation:

- Cost strategy – use technology to cut costs by reducing the workforce, or through reducing errors and rework.
- Value strategy – use technology to make workers more effective, or reassign workers to higher-value work.

Skills that will probably be desirable in the future:

- The ability to work with cognitive technologies
- Hyper-specialisation of skills or knowledge that are unlikely to be automated by computers
- Empathy, creativity, emotional intelligence