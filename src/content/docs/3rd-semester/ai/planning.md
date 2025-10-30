---
title: Planning
description: ""
---

We see how an agent can take advantage of the structure of the problem to construct complex plans of action
## PDDL (Planning Domain Definition Language)
A **factored representation** where a state of the world is represented by a collection of variables.
Allows us to express all actions with one action schema.
Four things we need to define a search problem:
- Initial state
- Actions in a state
- Result of applying an action
- Goal test
Each **state** is represented as a conjunction of fluents that are ground, function-less atoms.
	**Ex:** $Poor \wedge Unknown$ might represent the state of an unfortunate agent
	**Ex:** $At(Truck_1,Melborne) \wedge At(Truck_2,Sydney)$ will reperesent a state in a package delivery problem
	
> Fluent: a condition that can change over time

**Database semantics** is used: 
- closed-world assumption: any fluents that are not mentioned are false
- unique names assumption: $Truck_1$ and $Truck_2$ are distinct

The following fluents are not allowed in a state:
- $At(x,y)$ because its non-ground
- $\neg Poor$ because its a negation
- $At(Father(Fred), Sydney)$ because it uses a function symbol

Representation of states is carefully designed so that a state can be treated either as a conjunction of fluents, which can be manipulated by a logical inference, or as a set of fluents, which can be manipulated using set operations. The **set semantics** is sometimes easier to deal with.

**Actions:** described by a set of action schemas that implicitly define the *ACTIONS(s)* and *RESULT(s,a)* functions needed to do a problem solving search.
Classical planning concentrates on problems where most actions leave most things unchanged.

PDDL specifies the result of an action in terms of what changes, everything that stays the same is left unmentioned

A set of ground (variable free) actions can be represented by a single **action schema**.
The schema is a lifted representation (lifts the level of reasoning from propositional logic to a restricted subset of first-order logic)

$Action(Fly(p,from,to),$
$PRECOND: At(p,from) \wedge Plane(p) \wedge Airport(from) \wedge Airport(to)$
$EFFECT: \neg At(p,from) \wedge At(p,to))$

The **schema** consists of an action name, a list of all variables used in the schema, a **precondition** and an **effect**
We are free to choose any values for the variables.

**Precondition:** defines the states in which the action can be executed
	conjunction of literals (AND), all literals are positive
**Effect:** defines the result of executing an action

We say an action is **applicable** in state s if the preconditions are satisfied by s

Sometimes we want to **propositionalize** a PDDL problem - replace each action schema with a set of ground actions and then use a propositional solver such as SATPLAN to find a solution. However this is impractical when v and k are large. (v variables and k unique names of objects)

The **result** of executing an action a in state s is defined as a state s' which is represented by the set of fluents formed by starting with s, removing the fluents that appear as negative literals in the acton's effects and adding the fluents that are positive literals in the actions's effects
$$RESULT(s,a) = (s-DEL(a) \cup ADD(a))$$
A set of action schemas serves as a definition of a planning domain. A specific problem within the domain is defined with the addition of an initial state and a goal.
The initial state is a conjunction of ground atoms.
Goal is like a precondition: a conjunction of literals that may contain variables.
	**Ex:** $At(p, SFO) \wedge Plane(p)$
		Any variables are treated as existentially quantified, goal is to have *any* plane at SFO.
		Problem is solved when we can find a sequence of actions entais the goal.
	**Ex:** The state $Rich \wedge Famous \wedge Miserable$ entails the goal $Rich \wedge Famous$ , and the state $Plane(Plane_1) \wedge At(Plane_1,SFO)$ entails the goal $At(p,SFO) \wedge Plane(p)$
	