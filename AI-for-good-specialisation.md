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

TODO: AI FIRST MINDSET IMAGE

Rather, AI is one potential tool in your toolkit:

TODO: AI IS ONLY A POTENTIAL SOLUTION IMAGE

2. Be careful with personally identifiable information. It can be used by authoritarian regimes to crackdown on dissidents.

3. Be wary of the impacts of potential errors of your application - e.g. mis-identifying illegal deforestation, or giving a wrong cancer diagnosis.

4. Unforeseen consequences can happen if your solution _does_ work as intended. So think about adversarial use cases - ways in which others might use the system or the data to do harm rather than good. E.g. publishing black rhino preservation data, including location, could assist poachers. Speaking to stakeholders is essential to help understand potential impact and do no harm.

# The AI for Good Framework 

A structure for approaching AI for good work.

Most AI projects, and most for-good projects, fail to achieve a demonstrable positive impact.

"The majority of ideas, however well intentioned, are not going to work out. Being able to recognise that you are not likely to be able to reach a successful outcome is one of the most important leadership and design skills that you can develop"

TODO: AI FOR GOOD FRAMEWORK IMAGE

At the end of the Explore phase, you should be able to answer the following questions:
- What is the specific problem you are addressing?
  - A good problem statement should:
    - Define the problem you are hoping to address
    - Identify key stakeholders
    - Give an idea of what success looks like
    - Not mention the specific technology you aim to deploy
  - You might take 4 months and 50-70 versions of a 1-page problem statement
- Who are the stakeholders?
- Do you have access to, or can you collect, the necessary data?
- Could AI add value? Where and how specifically?
  - Before testing out an AI approach, work out a baseline performance without AI to have something to compare to.
  - You might find that a simple solution works well enough, and that you don't need to do anything more complicated.
  - Spotting correlations and patterns in the data is a good sign that AI could provide value. e.g. temporal patterns, correlations between different variables, spatial patterns
- How does the “do no harm” principle come into play?

At the end of the Design phase, you should be able to answer the following questions (or you may learn that you need to go back to the Explore phase):
- How will you address issues with imbalances (e.g. over- or under-representation of certain elements in your training set), biases, privacy, or other concerns with our data?
- What kind of model will you implement, and how will you measure its performance?
- How will your design address the problem you set out to work on?
- How will the end user interact with your system?

At the end of the Implementation phase, you should be able to answer the following questions:
- Is your model’s performance acceptable?
- Are end users able to successfully use your system?

Evaluation stage:
- Use the problem statement to guide your evaluation
- The AI is only part of the system that you’re delivering and evaluating.

E.g. Robert Monarch’s company Ibidon was working with healthcare providers in Nigeria to classify and triage incoming text messages. It was performing well technically - classifying well, and getting better as clinicians provided more and more labelled data to help train it. And the volume of responses, and patient response time, was improving. BUT clinicians felt that they were spending too much time annotating data, not caring for patients. (Perhaps they didn’t get a sense first-hand of the benefits that the system was bringing). So the human-computer interaction was a failure, and this led to the ending of the project.

# AI and Public Health

Neonatal asphyxia is one of the top causes of sudden death and disability in infants.Every year over 1 million babies die of it, and 1.2 million develop medical conditions from it.

Ubenwa Health created an app to detect signs of asphyxia from a baby’s cry.
It uses an algorithm trained on a labelled dataset of labelled cry recordings, to output ‘healthy’ or ‘not healthy’. They used a large and diverse dataset, with input from Brazil, Canada and Nigeria.


The average number of premature deaths from air pollution globally each year is similar to the number of annual deaths from covid at the peak of the pandemic.
The death rate due to air pollution is 50% higher today than 20 years ago.

98% of urban areas in developing countries don’t meet accepted air quality standards
Every $1 invested in preventing air pollution has an estimated $30 benefit

The type of air pollution that causes the most deaths globally is particulate matter less than 2 microns in diameter (“PM 2.5”).

Robert Monarch recommends [Purple Air](https://map.purpleair.com/air-quality-standards-us-epa-aqi?opt=%2F1%2Flp%2Fa10%2Fp604800%2FcC0#11.11/51.5059/-0.054) as a source of crowdsourced air pollution data

# AI and Climate Change

TODO: ADD 2100 Warming Projection

Some examples of how AI can help with climate change:

### Mitigation - reducing climate change
- Forest protection/development
- Renewable energy - wind and solar power forecasting, thereby making these renewable resources more valuable and viable; planning new facilities to be as impactful as possible
- Energy efficiency
- Carbon capture (perhaps, in the future)

### Adaptation - adapting to climate change
- Building more resilient infrastructure
- Proactive disaster management - e.g. translation of messages in a disaster; damage assessment and resource allocation through image analysis
- Biodiversity monitoring - e.g. analysis of images

### Mitigation + Adaptation
- Urban greening - cools the air and reduces greenhouse gases
- Water conservation - reduces water scarcity, and reduces carbon impact of water infrastructure
- Sustainable agriculture, which uses less water, land and energy, and also helps adapt to a changing climate

AI can help improve the predictability and usefulness of renewable energy:

Given fluctuations in weather - e.g. wind and cloud cover - it's hard to predict how much power you'll generate from solar or wind.

It's important to be able to do this, because we need to generate enough power on the grid to meet energy needs at a given moment.

DeepMind found that they could [increase the value of wind power by about 20%](https://blog.google/technology/ai/machine-learning-can-boost-value-wind-energy/) by increasing the reliability of forecasting wind power output up to 36 hours in advance. This allowed them to make advance commitments to the grid that were not previously possible.

TODO: ADD DEEPMIND WIND POWER IMAGE

To help manage fluctuations in renewable output over time, you have to keep coal power plants running at a low % utilisation (because they take hours to go from 0 to some % output, so you generally run them at a small % output and then ramp up when you need them, as you can do that much more quickly). But running at low % utilisation is inefficient - they are more energy efficient at high utilisation.

Large-scale energy storage doesn’t exist yet, hence the importance of forecasting energy output. (But this might change, with battery technology continuing to improve, and electric cars becoming more widespread)

A comparison of the potential quality of machine learning versus simple linear models:

TODO: ADD WIND POWER FORECASTING LINEAR REGRESSION

A neural network, capable of describing non-linear relationships between variables, does a much better job:

TODO: ADD WIND POWER FORECASTING NEURAL NETWORK

## Climate change and biodiversity

Biodiversity helps combat climate change, and is a good measure of ecosystem health.

68% of animal population lost since 1970 (WWF, 2023)

As a result of climate change, 50% of all species are on the move towards colder areas: 17km per decade on land, and 72km per decade at sea

1.5 degree increase in temperature will lead to a 70-90% destruction of coral reefs
2 degree increase in temperatures globally will lead to 99% of coral reefs disappearing

How can AI help monitor biodiversity?

- Bioacoustic monitoring - set up microphones in lots of locations, and then use AI to identify the different creatures that you can hear over time.

TODO: ADD IMAGE ON BIOACOUSTIC MONITORING

- Overhead imaging of natural ecosystems. E.g. NASA’s Earth Observatory tracking deforestation, or Sen2Coral project monitoring coral bleaching
- Citizen science: iNaturalist platform allows people to upload pictures. E.g. European Plants project
- Camera traps triggered by motion (Use the Megadetector project, which classifies things as animal, vehicle, human or empty, to filter out empty images, or ones containing humans)

TODO: ADD CAMERA TRAP DATA IMAGE

Given the amount of data we’re collecting, manual data processing does not scale. So you need to use AI:

TODO: ADD IMAGE: MANUAL DATA PROCESSING DOES NOT SCALE

There’s a data bias issue: most global biodiversity is in SouthEast Asia, sub-Saharan Africa, and Southern America. But most data we have is of Europe and North America.

Starting with an existing network, tackling a very similar task to the one you’re interested in, and then fine-tuning it on your field-specific data, can work very well. E.g. taking a network trained on identifying cars and then training it to identify planes. This is transfer learning: you benefit from the earlier layers’ handling of more generic image recognition-type capabilities, and just fine tune the deeper layers.

# AI and Disaster Management

A disaster is an event or situation that causes extensive harm to people, property or damage to the environment. The degree to which a disaster-impacted community can recover depends largely on risk management, response and recovery efforts, before, during and after a disaster.

## The Disaster Management Cycle: Phases of Disaster Management

### Mitigation
- Action to prevent or reduce the risks, impact, and consequences of disasters
- Resilient Infrastructure
  - E.g. dykes and levees in the Netherlands
- Early warning systems
  - E.g. Japan’s advanced earthquake and tsunami warning system

### Preparation
- Actions to plan, train, and educate on procedures in the event of a disaster
- Emergency plans
- Training and drills
  - E.g. public education on natural disasters in Japan

### Response
- Actions immediately after a disaster that provide aid
- Search and rescue
- Provide essential aid
  - E.g. temporary shelters, relief centres, food and water, medical care
- N.B. immediately after a disaster is often the worst time to try to introduce a new technology or process to a community impacted by a disaster or to disaster response organisations. So most AI assistance is generally in Preparation and Mitigation phases.

### Recovery
- Actions to restore regular operations
- Assess damage
- Financial assistance
  - E.g. post-Katrina, financial assistance for businesses and individuals, rebuilding of damaged infrastructure, and a housing assistance programme
- Loop back into mitigation, to reduce the impact of future events

## Some Examples of AI Being Used to Help with Disaster Management

- Cyclone Idai in Mozambique in 2019. Extensive manual water sampling and AI modelling (using rainfall patterns, water quality, and water levels) was used to predict where water-borne diseases were most likely to break out, which allowed health resources to be prioritised in the right place.
- Search engines and translation apps can be incredibly helpful in disaster response. Westerners often take the value of these for granted. “Unfortunately, the majority of the world’s languages are not supported in search or translation applications.”
- UNDP has created an AI early warning system using a number of different sources, including meteorological, hydrological, seismic and geophysical, and satellite imagery. Trained on historical data from data-rich locations, and extrapolates to cover areas with little on-site observation data. AI automatically detects and triggers early warning alerts. Deployed in Bangladesh, India, Indonesia, and the Philippines.
- The company Pano AI uses machine learning to do early detection of wildfires, which can have a big impact on being able to stop them getting out of control. This significantly increases the speed of alerting a professional, and the speed of telling the professional the specific location of the fire.

## Limitations of Using AI in a Disaster Response Situation

- Need accurate data
- Potential for bias
- May have challenges relating to communication with local communities
- May require significant resources and technical expertise
- Privacy and accountability

… so incorporate AI, where relevant, as part of a broader approach. And always work to do no harm.

## Helping Communities Help Themselves

Helping communities help themselves is generally the most impactful intervention you can make. A lot of this is about access to communication. Often communities in impacted areas are not included in tools like machine translation and search engines.

“Any technology that helps get information to linguistically diverse communities will help them in many situations, including disasters.”

“I believe that some of the work that I have done helping large companies deploy technologies in more languages has probably had a bigger impact on disaster response, than some of the time that I've spent working in refugee camps for the UN.” - Robert Monarch

TODO: ADD IMAGE ON LOW RESOURCE LANGUAGES

Haitian Kreyol was underserved by AI translation after the 2010 earthquake. This meant that the large volume of requests for help couldn’t be understood by outside workers. 
Project 4636 - text 4636 with requests for help. Diaspora population manually translated messages from Haitian Kreyol. The labelled corpus that they created formed the basis of the first machine translation services from Google to Haitian Kreyol.

Analysing the messages can help build an understanding of needs and patterns changing over time, that can be used in preparation for future disasters.

Hurricane Sandy, 2012, Rob Monarch’s company had ahead of time produced a system for automatically assessing damage from aerial photos. They did this by using multiple humans to label test data, and then combining these assessments into the label for a given image, to address for human error. The map of damaged and undamaged locations was used to plan aid distribution and to prioritise reconstruction efforts. This was combined with other sources of information to inform decision-making.

They boost the number of example labelled images they have with augmentation:
- Rotating
- Enlarging
- Zooming
- Changing brightness
- Flipping

This augmentation effectively creates extra training data, derived from the training data that you already have.

In many real-world damage assessment projects, you would be likely to be looking at many more images containing no damage than those containing damage. In a scenario where you are training an AI system to do damage assessment using overhead imagery with a labeled dataset containing 99% images identified as showing no damage and only 1% images identified as showing damage.

If you trained your model directly on this dataset, the model could learn to simply predict all images as containing “no damage” because in this way it might achieve a higher accuracy (99%) than any attempt to correctly identify those containing damage as well. This is a common outcome when attempting to train a machine learning model with an unbalanced dataset.

Using methods of upsampling and downsampling, as well as data augmentation, could help to balance the dataset slightly, and train a more robust model. Collecting more images showing damage (if possible) would help balance the dataset and allow you to train a more robust model.

Metrics: accuracy, precision and recall:
- accuracy: all correct predictions / all predictions
- precision: true positives / all positive predictions
- recall: true positives / all actual positives

TODO: ADD IMAGE ON EVALUATION METRICS

# Harm and getting involved

You should not be the only person involved in working out how to do no harm. Local community members and other stakeholders should be involved.

Work on general-purpose technologies to help communities help themselves:
- Support low-resource languages with better technologies like translation and search
- Default to private data practices. Aggregate data and ML models can amplify privacy risks
- Avoid projects that involve analysis of social media data and work funded by oppressive governments
- Engage with impacted communities

## Strategic challenges with unrepresentative datasets:

Example of the importance for diversity in the datasets used to train models:
- An image recognition surgery model trained only on white hands
- An algorithm for assessing damage to cars that was only trained on American cars

Examples of the potential problems of lacking positive examples in your dataset:
- Air pollution datasets often have fewer examples of high levels of pollution than low levels. This means that predictions of pollution at high levels will be less accurate than those at lower levels.
- Breast cancer detection is difficult because you have many more images or non-cancerous scans than cancerous scans
- Over-representation of one type of animal in a dataset of different animal photos could lead to an algorithm over-identifying the over-represented animal in images

## Problems of insensitivity to local contexts or unintended consequences:

Example of problems caused by insensitivity to language:
- In Sierra Leone, during the Ebola crisis, an international news agency made broadcasts in the Mande language to Temne speaking areas. Mande was associated with the rival political party. This led to distrust, and to Temne speakers being less likely to visit health clinics. As a result, for every person who died from Ebola, 10 people died from preventable diseases because they’d avoided the clinics.
- Arab Spring in Syria. Some people posted information on social media about local conditions and road closures. These posts were often reshared by the UN - which linked these people, without their consent, to the UN, which was often seen as a malign foreign influence or invader. Ask: What is the impact of recontextualizing the data or model by you or an organization republishing it?
- Oppressive governments often use disasters as cover to identify and silence their critics. So be particularly wary of how information relating to personal information could be used to violate human rights. People speaking English on social media can be a targeted group (it’s white- and affluent-coded as a language). After Typhoon Haiyan in the Philippines, a small number of English-speaking responders were in danger of reprisals from the government.

# Rob Monarch’s article of advice to people thinking about using AI for disaster response

Source: [Research on Machine Learning for Disaster Response](https://towardsdatascience.com/research-on-machine-learning-for-disaster-response-b65f3e97c018)

- The majority of disaster response is helping the crisis-affected community help themselves. Therefore, tools that empower disaster-affected communities are most valuable, especially speakers of low resource languages.

- Information management is a much bigger problem than information discovery for professional disaster responders.

- Papers focused on machine learning for disaster response should not cut corners on the science.

- Papers promoting systems built by research labs have no place in disaster response.

- It is not possible to fully evaluate the sensitivity of data during a disaster, so responses to ongoing disasters should default to private data practices.

- Disaster response is often used as a cover for human rights violations, especially under authoritarian regimes, so research from authoritarian regimes that can violate human rights should be rejected.

- Researchers should not partner with non-operational aid organizations and should know how to spot the difference between operational and non-operational organizations.

- English social media processing is not interesting or useful for disaster responders.

- Ignore anything that relies on research published in “ISCRAM”.

- Apply the “Do no harm” principle to evaluating impact.