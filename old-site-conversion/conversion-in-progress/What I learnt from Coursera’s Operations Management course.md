---
title: "What I learnt from Coursera’s Operations Management course"
permalink: /what-i-learnt-from-courseras-operations-management-course
date: 2014-07-12T20:06:14+00:00
redirect_from:
  - /what-i-learnt-from-courseras-operations-management-course/
---

# What I learnt from Coursera’s Operations Management course

Recently I completed [Coursera’s Introduction to Operations Management](https://class.coursera.org/operations-004) course. The course was made up of 5 units.

### Course outline

1. **Process analysis**  
   Measuring the flow of units through a production process; Little’s Law; inventory turns; inventory buffering: make to stock (McDonald’s) or make to order (Subway); working out bottlenecks when there are different types of flow units, processes with attrition loss; reasons for inventory.
2. **Productivity**  
   Lean operations and waste reduction; the seven sources of waste; KPI trees and sensitivity analysis; overall equipment effectiveness framework (OEE); reducing idle time through line balancing and standardising processes; labour, material and capital productivity; return on invested capital (ROIC) trees;
3. **Variety**  
   Motives for variety; batch processes and setup time; working out a good batch size; Single-Minute Exchange of Die (SMED); benefits of partial flexibility; delayed differentiation (via product design) to reduce costs of variety;
4. **Responsiveness**  
   Reasons for waiting: insufficient capacity and variability of arrival times and/or processing times; coefficient of variation of demand and processing time; how to compute the average waiting time; measuring inventory over the course of a day; usefulness of pooling; strategies for prioritising work: first come first served aka first in first out, versus sequencing, shortest processing time rule; problems with appointment systems; efficiency gains are often about process redesign rather than just optimising/balancing: value stream mapping aka process mapping aka service blueprints: Yves Pigneur’s 7 ideas for redesigning processes; waiting time and attrition loss (using Erlang Loss table);
5. **Quality**  
   Reasons for defects – performance and conformance quality; redundancy; impact of scrapping and rework on flow; buffers reduce risk of resources being starved or blocked, to keep flow rate up; in contrast: Toyota production system: reduce inventory to expose problems; Kanban – demand pull: work is authorised by demand, so you reduce the number of Kanban cards over time; six sigma: checking units produced against a specification; control charts: normal and abnormal variation; Jidoka system sacrifices flow for quality; Kaizen and Ishikawa diagram for root cause problem solving.

Short of summarising the outline above, I won’t attempt to share everything I learnt. Instead, I’ll share what was most relevant to my own practice.

### The distinction between project management and process management

This course was about process management – about doing the same thing over and over. My job is incorporating more process management elements, so I took this course to improve my understanding, and so that I could begin to make more effective process improvements.

Some elements of my work are process management – communicating, planning, and running an agile sprint production cycle. I run through this process every couple of weeks.

Other elements of my work are project management – leading a large web development project; providing consultancy on a project; overseeing the scoping, planning and creation of a new element of functionality or a user experience improvement: each discrete piece of development work is unique. So sometimes it’s useful for me to think in terms of projects, and other times it helps to think more generically and look at underlying processes.

### Little’s Law

In any process, the average inventory (number of units in the process) = the average flow rate x the average flow time (the time it takes a flow unit to go from the start to the end of the process)

Key implication: if the flow rate is constant, reducing inventory will reduce flow time, allowing work to be completed more quickly.

See [more about Little’s Law](http://en.wikipedia.org/wiki/Little's_law).

### The seven sources of waste (Taiichi Ohno)

1. **Overproduction** – to produce sooner, or in greater capacities than demanded. These goods need to be stored; their production slows the rate with which you turn your inventory; they could become obsolete or be stolen.  
   The solution: match supply with demand.
2. **Transportation** – unnecessary movement of people or parts _between_ processes.  
   The solution: relocate processes, then introduce standard sequences for transportation.
3. **Rework** – repetition or correction of a process.  
   The solution: do it right the first time. Find out the reason for the quality problem and put a stop to it.
4. **Overprocessing** – processing beyond what the customer requires.  
   The solution: make sure you have guidance for what your standards are.
5. **Motion** – unnecessary movement of parts or people within a process.  
   The solution: create and use standard workspaces that have been created to minimise movement.
6. **Inventory** – the number of flow units in the system. The biggest source of waste. Bad for inventory turns, increases customer wait time and flow time. Inventory needs to be stored, which is costly.  
   The solution: improve production control system and reduce unnecessary “comfort stocks”.
7. **Waiting** – underutilising people or parts while a process completes a cycle. i.e. a flow unit waiting for a resource. Often a direct result of inventory. Waiting can happen at the resource: this is idle time.
8. **Intellect** – an eighth source of waste. Don’t waste workers’ abilities to help solve problems and improve processes.

### Increasing profitability is easier if you’re constrained by capacity than if you’re constrained by demand

If you’re constrained by capacity, increasing the productivity of the bottleneck can help you significantly increase profits. (This is particularly the case for businesses with low variable costs and high fixed costs)

If you’re constrained by demand, you’ll only be able to significantly increase profitability if you’re able to lay off workers.

### Variability increases wait times, even if resource utilisation is less than 100%

If people arrive at regular intervals, and take a fixed length of time to process, then you can plan your processes to avoid waiting time. But real life is less predictable.  
Variability of arrival times and processing times can lead to inventory in a process, even if utilisation is 80%.  
So variability means that even if you aren’t utilising all your resources all the time, you’ll still have people or products waiting in the process.

Two reasons for waiting: insufficient capacity; variability of arrival times and/or processing times.

If you’re constrained by capacity, you don’t need to worry about demand variability as you already know there will be bottlenecks. If demand is the constraint, and it’s variable, then you need to think about it, as it will cause waiting times.

### Partial flexibility is usually the best way to deal with variety

If there is variability in demand, you need to accommodate it. Total flexibility is expensive, and usually not needed.

Eg. It’s sensible to hire developers who have skills in two areas, so you have flexibility, but don’t have to pay the costs of a developer skilled at everything.  
For each area of your work, hire at least two people with those skills.

### “The way we frame a problem determines the types of solutions we come up with.”

A surprisingly philosophical insight. Often it pays to be more creative than just doing queuing analysis and line balancing.  
Question your processes at a strategic level – don’t just think tactically and inside the box.

### Value stream mapping is a tool to help you focus your process on valuable activities

Value stream mapping, aka process mapping, aka service blueprints – map out the steps the customer has to go through, then divide them into ones that add value and ones that don’t, or which are waiting time.

Yves Pigneur has a framework for this: Customer actions; onstage actions, backstage actions; support processes.

### 7 ideas for redesigning processes

1. **Move work off the stage.**  
   E.g. online airport check-in.
2. **Reduce customer actions / rely on support processes.**  
   E.g. rather than requiring customers to fill in all their medical details each time they come to visit, you could have a database to store them.
3. **Instead of optimising the capacity of a step, see if you can remove it altogether if it isn’t really needed.**  
   E.g. Hertz Gold removed the airport check-in step as it provided no value.
4. **Avoid fragmentation of work due to specialization / fragmentation of roles.**  
   E.g. in a bank, it’s annoying to have to fill in different forms for different people, rather than just doing everything at once.
5. **If customers are likely to leave the process due to long wait times, move the waiting time to later in the process if you can.**  
   E.g. Starbucks making you pay first, then wait for your coffee.
6. **Have the waiting occur out of a line.**  
   E.g. restaurants in malls using buzzers to let people know that their food or table is ready, rather than having them wait in a line.  
   E.g. appointments to see a doctor.
7. **Communicate the wait time to the customer – set expectations.**  
   E.g. theme parks.

### How much do defects cost? It depends on where they are detected.

If defects are detected before the bottleneck, the cost is driven by the input prices.  
If defects are detected after the bottleneck, the cost is the opportunity cost of the lost sale.

The step at which the defect happens isn’t important – what’s important is the step at which it is detected.

Therefore it’s very important to test flow units as much as you can before you put them into the bottleneck.

For me, this means that we want to catch problems in the specification stage if possible. Minimise potential problems by making sure that the work is sensible, and that the requirements are clearly articulated.

### Kaizen and Ishikawa are tools for root cause problem solving

Kaizen equips front line workers to identify and solve problems.

Ishikawa diagram – structured brainstorm. Shaped like a fish bone. Try to identify root causes. Asking ‘why’ 5 times helps.

Once you’ve done this exercise, go out and measure instances of the identified defects.  
Plot these on a pareto chart.  
See which defect is most frequent and focus on that first. Generally the pareto principle applies: 80% of the defects are caused by 20% of the root causes.

These methods are recommended because they oscillate between thought and reality, gaining the benefits of both:

Reality: Jidoka – the process is triggered by real-world defects.  
Thinking: Ishikawa diagram, to think about what might be causing the problem.  
Reality: Pareto chart – collects data to see which causes are most frequent.  
Thinking: Think up alternative solutions.  
Reality: Experiment with the solution you choose.

### Actions I will take as a result of this course

- Map out the production process so everyone knows what steps are required. If people don’t understand all the steps in a process, they might have unrealistic expectations of waiting times.
- Create formal processes for new jobs – development/UX work and bugs. This will reduce variability of inputs and reduce risk of defects by improving the quality of inputs/briefs.
- Formalise waiting time processes. Draw up (collaboratively?) and obtain organisational agreement for a set of organisational priorities for bugs and for new work. This will mean that all prioritisation decisions are made according to a clear set of standards. E.g. number of users affected, financial implications, strategic priorities. Currently I don’t do first-come-first-served, but rather prioritise according to business need and urgency, but this does require me to be wise like Solomon. Better to have some commandments to live by, and a supreme court to interpret them.
- Reduce the number of units being processed at any one time. Little’s Law states that this will result in reduced waiting times. This might be a hard sell, but the truth is that we are already constrained by how many hours of development we have in each two week cycle.
- Identify and reduce the sources of waste in my work. eg transportation – reduce transportation costs in communication with agency and stakeholders (make it clearer), reduce movement of work around internal stakeholders (currently I report to internal stakeholders outside of the tools I use for day-to-day project management, which adds costs and the risk of misinformation.)
- Harness worker intellect through more regular review cycles. Constitute regular reviews of processes with all people involved in them, to see how they feel they are going, and what could be improved.
- See if processes could be redesigned to be more efficient. Could steps be removed or automated?
- Conduct value stream mapping – figure out which steps add value and which ones don’t. Use Pigneur’s framework for process redesign to improve these processes.