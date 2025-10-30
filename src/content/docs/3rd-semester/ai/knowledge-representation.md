---
title: Knowlege Representation
description: ""
---

## Ontological Engineering
Creating abstract representations using general concepts such as *Events*, *Time*, *Physical Objects* and *Beliefs* that occur in many different domains.
![alt text](./knowlege-representation/Pasted%20image%2020250911154854.png)
**Upper ontology:** The general framework of concepts at the top
## Categories and Objects
Organizing objects into **categories** is a vital part of knowledge representation
There are two choices for representing categories in first order logic: **predicates** and **objects**
We can use predicate *Basketball(b)*, or we can **reify** the category as an object, *Basketballs*. We could then say *Member(b, Basketballs)*
> reify: turning a proposition into an object

We say *Subset(Basketballs, Balls)*, abbreviated as *Basketballs* $\subset$ *Balls* to say that basketballs is a **subcategory** of Balls

**Disjoint:** If the categories have no members in common
	Ex: *Males* and *Females*
**Exhaustive decomposition:** 
	Ex: When *Males* and *Females* are sub classes of *Animals*, and an animal that is not *Male* is *Female*
**Partition:** Disjoint exhaustive decomposition.

## Physical Composition
The idea that one object can be part of another object.
- *PartOf(Bucharest, Romania)*
- *PartOf(Europe, Earth)*
*PartOf* relation is transitive and reflexive
- *PartOf(x,y)* $\wedge$ *PartOf(y,z)* $\Rightarrow$ *PartOf(x,z)* 
- *PartOf(x,x)*
Composite object categories can be characterized by strucural relations among parts
- Biped(a) ⇒ ∃l1, l2, b Leg(l1) ∧ Leg(l2) ∧ Body(b) ∧
PartOf (l1, a) ∧ PartOf (l2, a) ∧ PartOf (b, a) ∧
Attached(l1, b) ∧ Attached(l2, b) ∧
l1 ≠ l2 ∧ [∀ l3 Leg(l3) ∧ PartOf (l3, a) ⇒ (l3 =l1 ∨ l3 = l2)]

## Upper Ontology
Drawing graphs with the general concepts at the top and more specific concepts below them

