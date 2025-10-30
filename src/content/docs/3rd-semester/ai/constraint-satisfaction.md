---
title: Constraint Satisfaction Problems
description: ""
---

Treating states as more than just little black boxes.
In CSP, we have a set of **variables** each having a **value**
A problem is solved when each variable has a value that satisfy all the constraints of that variable.

Main idea is to eliminate large portions of the search space all at once by identifying variable/value combinations that violate constraints.

## Definition
- X : set of variables, $\{X_1,...,X_n\}$
- D : set of domains, $\{D_1,...,D_n\}$ one for each variable
- C : is a set of constraints that specify allowed values

#### Example
1. A boolean
   D$_i$ : $\{true, false\}$
2. A pair of variables where $X_1$ > $X_2$
   D$_i$ : $\{1,2,3\}$
   C : $\langle(X_1,X_2),\{(3,1),(3,2),(2,1)\}\rangle$
   C : $\langle(X_1,X_2),X_1>X_2\rangle$

- CSPs deal with **assignments** of values to variables. An assignment that doesn't violate any constraints is called a **consistent** or **legal** assignment.
- When every variable is assigned a value, it's called a **complete assignment**.
- **Partial assignment** leaves some variables unassigned
- **Partial solution** is a partial assignment that is also consistent

## Example problem: Map coloring
![alt text](./constraint-satisfaction/Pasted%20image%2020250816170237.png)
