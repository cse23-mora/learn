---
title: Logical Agents
description: ""
---


**Knowledge based agents** use a process of reasoning over an internal representation of knowledge to decide what actions to take.

- **Knowlege Base (KB):** A set of **sentences**. Each sentence is  expressed in a language called a **knowledge representing language** and represent some assertion about the world
- When a sentence is given that is not derived from other sentences, it's called an axiom
- **Inferece:** Deriving new sentences from old.
## Ex; Wumpus World
A cave consists of rooms connected by passageways. In the curve there is a wumpus. Wumpus can be shot by the agent, but the agent has one arrow. Some rooms contain bottomless pits.

![alt text](./logical-agents/Pasted%20image%2020250906233243.png)
- **Performance measure:** +1000 for climbing out of the cave with gold, -1000 for falling into a pit or wumpus, -1 for every action, -10 for using the arrow. Game ends when the agent dies or when climb out of cave
- **Environment:** a 4x4 grid of rooms. Agent always start at (1, 1), facing east.
- **Actuators:** Agent can move forward, turn left or right (by 90deg), Safe to enter a square with a dead wumpus. If agent tries to move  forward and bump into a wall, then agent doesn't move. Action shoot can be used to shoot the arrow, arrow continues until it kills the wumpus or hit  a wall. Agent can use Climb action to climb out of cave (only from (1, 1) square)
- **Sensors:** Agent has 5 sensors, each of which gives a single bit of info
	- In squares adjacent to wumpus (not diagonal), agent will perceive a stench
	- In squares adjacent to a pit, agent will perceive a breeze
	- In the square with gold, agent will perceive a glitter
	- When agent walks into a wall, it will perceive a bump
	- When the wumpus is killed, it emits a scream that can be perceived anywhere in the cave
- This environment is:
	- Deterministic
	- Discrete
	- Static
	- Single Agent
	- Sequential
	- Partially  observable
## Logic
- **Semantics:** Define the truth of each sentence with respect to each possible word
- **Model:** Mathematical abstractions. Has a fixed truth value for every  relevant sentence
- If a sentence $\alpha$ is true in model m, we say that m satisfies $\alpha$, or m is a model of $\alpha$
#### Entailment:
Idea that a sentence follows logically from another sentence.
$$\alpha \models \beta$$
**Definition:** $\alpha \models \beta$ if and only if, in every model where $\alpha$ is true, $\beta$ is also true
$$\alpha \models \beta \text{ if and only if } M(\alpha) \subseteq M(\beta)$$
**Example:** if $x=0$ is true, then $xy=0$ is true regardless of the value of y

- **Logical Inference:** Applying the definition of entailment to derive conclutions
- **Model checking:** Enumerate all possible models to check that $\alpha$ is true in all models in which KB is true, $M(KB) \subseteq M(\alpha)$

If an inference algorithm $i$ can derive $\alpha$ from $KB$, we write
$$ KB \vdash_i \alpha$$
An inference algorithm that derives only entailed sentences is called **sound** or **truth-preserving**

## Propositional Logic: A very simple logic
- The atomic sentences consists of a single **proposition symbol**
- There are two propositional symbols with fixed meanings
	- $True$: Always true
	- $False$: Always false
- Complex sentences are created from simpler sentences, using parenthesis and operators called logical connectives.
	- $\neg$ (not): negation
	- $\wedge$ (and): conjunction
	- $\vee$ (or): disjunction
	- $\Rightarrow$ (implies)
	- $\Leftrightarrow$ (if and only if): biconditional
![alt text](./logical-agents/Pasted%20image%2020250907115205.png)
## Semantics
Semantics defines the rules for determining the truth of a sentence with respect to a particular model.