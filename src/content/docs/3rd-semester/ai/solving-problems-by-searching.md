---
title: Solving Problems By Searching
description: ""
---

We see how an agent can look ahead to find sequence of actions that will eventually achieve it's goal
**Problem solving agent:** Agent that plan ahead and consider a sequence of actions that form a path to a goal state
The computing process that the agent undergoes is called **search**

I here we only consider simple environments: episodic, single agent, fully observable, deterministic, static, discrete and known.

- **Informed algorithms:** Agent can estimate how far it's from the goal
- **Uninformed algorithms:** Can't estimate how far it's from the goal

An agent can follow a four-phase problem solving process:
- **Goal formulation:** Identifying the goal. Goal limits the objectives and the actions to be considered
- **Problem formulation:** Identify the states and actions necessary to reach the goal
- **Search:** Simulate  a sequence of actions in the model and search until the agent finds a sequence of actions that reach the goal
- **Execution:** Execute actions in the solution one by one

In a fully observable, deterministic, known environment, the solution to any problem is a fixed sequence of actions. This kind of system is also called **open-loop** system.

## Search problems and Solutions
**Search problem:**
- **State space:** A set of possible **states** that the environment can be in
- The **initial state**
- **Goal states**
- **Actions:** a finite set of actions that can be executed in a state
- **Transition Model:** Describe what each action does and return the state that result from doing  action in a state
- **Action cost function:** Give a numeric cost of applying action a in state s to reach state s'
A sequence of actions form a **path** and a **solution** is a path from the initial state to a goal state
**Optimal solution** has the lowest path cost

## Formulating problems
**Model:** Abstract mathematical description of a problem
**Abstraction:** Process of removing details from a representation
An abstraction is valid if we can elaborate any abstract solution into a solution in the more detailed world.

## Search algorithms
Takes a problem as input and returns a solution.
We consider **search trees** where each node in the tree corresponds to a state in the state space. Root of the tree correspond to the initial state of the problem

We can expand a node by considering available actions for that state.

**Edge** of the tree corresponds to an action.
**Frontier:** A set of unexpanded nodes of the search tree. Expanded nodes are called **reached**

The frontier separates the state-space graph into two regions:
- Interior region: Expanded region
- Exterior: Not reached  region

## Best-first search
When choosing the next node we choose the node with minimum value for a given **evaluation function**

## Search Data structures
A **node** in the search tree is represented by:
- `node.State`
- `node.Parent`
- `node.Action`
- `node.Path-cost`
For the **frontier** we generally use a **queue**
- `isEmpty`
- `pop`
- `top`
- `add`
Types of queues:
- **Priority queue:** pops the node with minimum cost
- **FIFO queue:** pops the node added to the queue first
- **LIFO queue:** Also known as stack

## Redundant Paths
**Repeated State:** When there's a cycle in the search tree, search tree becomes infinite although not having that many nodes. This is also known as loopy path.

**Redundant path:** When two paths can take us from one state to another state, the second path (or worst path) is redundant

## Measuring problem solving performance
We evaluate performance in four ways:
- **Completeness:** whether the algorithm is guaranteed to find a solution when there's one and report failure when no solution
- **Cost optimality:** Whether the algorithm find the lowest path cost of all the solutions
- **Time Complexity:** How long the algorithm take to find a solution
- **Space complexity:** How much memory is needed to perform the search
## Uninformed Search Strategies
Algorithm is given no clue about how close a state  is to the goal

### Breadth First Search
Used when all actions have the same cost. **Complete** even in infinite state spaces. Breadth first search always finds the solution with minimal number of actions.
Exponential space complexity

### Uniform cost search (Dijkstra's algorithm)
When actions have different costs, obvious way to do is use best-first search. Evaluation function is the **cost from root to the current node** This approach is called Uniform cost search. This algorithm spreads through uniform cost paths.

### Depth first search
Expands the deepest node in the frontier first. This is efficient and complete for  finite state spaces.
For cyclic spaces it can get stuck in an infinite loop. so its not complete.

Why use this? Because of the low memory usage.

### Depth limited search
Treat the nodes at a certain depth and below as if they had no successors.

![alt text](./solving-problems-by-searching/Pasted%20image%2020250826225038.png)
## Informed (Heuristic) Search Algorithms
- Use domain specific hints about the location of goals.
- These hints come in the form of a **heuristic function**
**heuristic h(n) =** estimated cost of the cheapest path from the state at node n to a goal state.

### Greedy best-first search
Expands the first node with the lowest heuristic value, the node that appears closest to the goal.
Complete in finite spaces.

### A* Search
Uses the evaluation function
$$f(n)=g(n)+h(n)$$
where g(n) is the path cost from the initial state to node n, h(n) is the estimated cost of the shortest path from n to a goal state.

## Heuristic Functions
Performance of heuristic search depends on the quality of heuristic functions
We can construct good heuristics by:
- Relaxing problem definition
- Storing precomputed costs for subproblems
- Defining landmarks
- Learning from the experience
### Generating heuristics from Relaxed Problems
**Relaxed Problem:** A problem with fewer restrictions on actions
