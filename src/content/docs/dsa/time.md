---
title: "Time complexities of common algorithms"
---
## Time Complexities of Common Algorithms

| Algorithm                  | Category            | Best Case Time Complexity | Average Case Time Complexity | Worst Case Time Complexity | Notes                                                                                             |
| :------------------------- | :------------------ | :------------------------ | :--------------------------- | :------------------------- | :------------------------------------------------------------------------------------------------ |
| **Kruskal's Algorithm** | Graph (MST)         | $O(E \log E)$ or $O(E \log V)$ | $O(E \log E)$ or $O(E \log V)$ | $O(E \log E)$ or $O(E \log V)$ | Dominated by sorting edges. $E$ is number of edges, $V$ is number of vertices. Uses Disjoint Set Union. |
| **Prim's Algorithm** | Graph (MST)         |                           |                              |                            |                                                                                                   |
| &nbsp;&nbsp; (Adjacency Matrix) |                     | $O(V^2)$                  | $O(V^2)$                     | $O(V^2)$                   | Efficient for dense graphs.                                                                       |
| &nbsp;&nbsp; (Min-Heap)     |                     | $O(E \log V)$             | $O(E \log V)$                | $O(E \log V)$              | Efficient for sparse graphs.                                                                      |
| **Dijkstra's Algorithm** | Graph (Shortest Path) |                           |                              |                            | For non-negative edge weights.                                                                    |
| &nbsp;&nbsp; (Adjacency Matrix) |                     | $O(V^2)$                  | $O(V^2)$                     | $O(V^2)$                   |                                                                                                   |
| &nbsp;&nbsp; (Min-Heap)     |                     | $O(E \log V)$             | $O(E \log V)$                | $O(E \log V)$              |                                                                                                   |
| **Bellman-Ford Algorithm** | Graph (Shortest Path) | $O(V \cdot E)$            | $O(V \cdot E)$               | $O(V \cdot E)$             | Handles negative edge weights; can detect negative cycles.                                        |
| **Depth-First Search (DFS)** | Graph Traversal     |                           |                              |                            |                                                                                                   |
| &nbsp;&nbsp; (Adj. List)    |                     | $O(V + E)$                | $O(V + E)$                   | $O(V + E)$                 | Visits each vertex and edge once.                                                                 |
| &nbsp;&nbsp; (Adj. Matrix)  |                     | $O(V^2)$                  | $O(V^2)$                     | $O(V^2)$                   |                                                                                                   |
| **Breadth-First Search (BFS)** | Graph Traversal     |                           |                              |                            |                                                                                                   |
| &nbsp;&nbsp; (Adj. List)    |                     | $O(V + E)$                | $O(V + E)$                   | $O(V + E)$                 | Finds shortest path in unweighted graphs.                                                         |
| &nbsp;&nbsp; (Adj. Matrix)  |                     | $O(V^2)$                  | $O(V^2)$                     | $O(V^2)$                   |                                                                                                   |
| **Heap Sort** | Sorting             | $O(n \log n)$             | $O(n \log n)$                | $O(n \log n)$              | In-place sorting algorithm.                                                                       |
| **Bubble Sort** | Sorting             | $O(n)$                    | $O(n^2)$                     | $O(n^2)$                   | Simple but generally inefficient.                                                                 |
| **Selection Sort** | Sorting             | $O(n^2)$                  | $O(n^2)$                     | $O(n^2)$                   | Simple but generally inefficient.                                                                 |
| **Insertion Sort** | Sorting             | $O(n)$                    | $O(n^2)$                     | $O(n^2)$                   | Efficient for small or nearly sorted arrays.                                                      |
| **Merge Sort** | Sorting             | $O(n \log n)$             | $O(n \log n)$                | $O(n \log n)$              | Stable sort; requires $O(n)$ auxiliary space.                                                     |
| **Quick Sort** | Sorting             | $O(n \log n)$             | $O(n \log n)$                | $O(n^2)$                   | Generally fastest in practice for average cases; worst-case is rare but possible.                 |
| **Binary Search** | Searching           | $O(\log n)$               | $O(\log n)$                  | $O(\log n)$                | Requires a sorted input array.                                                                    |

## Detailed Explainations

### **Graph Algorithms**

1.  **Kruskal's Algorithm (for Minimum Spanning Tree)**
    * **Goal:** Find a subset of edges that connects all vertices in a graph with the minimum possible total edge weight.
    * **Time Complexity:** $O(E \log E)$ or $O(E \log V)$
        * **Explanation:**
            * $E$: Number of edges, $V$: Number of vertices.
            * The dominant factor is sorting all edges by weight, which takes $O(E \log E)$ time.
            * The Disjoint Set Union (DSU) operations (union and find) take nearly constant time on average ($O(\alpha(V))$, where $\alpha$ is the inverse Ackermann function, which is extremely slow-growing).
            * Since $E$ can be at most $V^2$, $E \log E$ is roughly equivalent to $E \log V$.
    * **Typical Use:** Finding the MST in sparse graphs.

2.  **Prim's Algorithm (for Minimum Spanning Tree)**
    * **Goal:** Similar to Kruskal's, finds a Minimum Spanning Tree.
    * **Time Complexity:**
        * **Adjacency Matrix (Dense Graphs):** $O(V^2)$
            * **Explanation:** Iterates $V$ times, and in each iteration, it scans all $V$ vertices to find the minimum edge.
        * **Adjacency List + Binary Min-Heap (Sparse Graphs):** $O(E \log V)$
            * **Explanation:**
                * Each vertex is extracted from the min-heap once ($V$ extractions, each $O(\log V)$).
                * Each edge might lead to a `decrease-key` operation in the heap ($E$ operations, each $O(\log V)$).
    * **Typical Use:** Finding the MST, particularly efficient for dense graphs with the matrix implementation, or sparse graphs with the heap implementation.

3.  **Dijkstra's Algorithm (for Shortest Path)**
    * **Goal:** Find the shortest paths from a single source vertex to all other vertices in a graph with non-negative edge weights.
    * **Time Complexity:**
        * **Adjacency Matrix (Dense Graphs):** $O(V^2)$
            * **Explanation:** Similar to Prim's with a matrix, it iterates $V$ times, scanning $V$ vertices.
        * **Adjacency List + Binary Min-Heap (Sparse Graphs):** $O(E \log V)$
            * **Explanation:** Similar to Prim's with a heap, involves $V$ extractions and up to $E$ `decrease-key` operations.
    * **Typical Use:** GPS navigation, network routing, finding shortest paths in graphs with non-negative weights.

4.  **Bellman-Ford Algorithm (for Shortest Path)**
    * **Goal:** Find the shortest paths from a single source vertex to all other vertices, even in graphs with negative edge weights. Can also detect negative cycles.
    * **Time Complexity:** $O(V \cdot E)$
        * **Explanation:** It relaxes all edges $V-1$ times. In each pass, it iterates through all $E$ edges. An additional $V$-th pass can detect negative cycles.
    * **Typical Use:** Routing protocols that might encounter negative costs (e.g., in arbitrage opportunities), detecting negative cycles.

5.  **Depth-First Search (DFS)**
    * **Goal:** Traverse or search a tree or graph in a depthward motion, exploring as far as possible along each branch before backtracking.
    * **Time Complexity:**
        * **Adjacency List:** $O(V + E)$
        * **Adjacency Matrix:** $O(V^2)$ (because to find neighbors of a vertex, you iterate through $V$ columns)
    * **Explanation:** Visits each vertex and each edge at most a constant number of times.
    * **Typical Use:** Topological sorting, finding connected components, cycle detection, maze solving.

6.  **Breadth-First Search (BFS)**
    * **Goal:** Traverse or search a tree or graph level by level, exploring all neighbor nodes at the present depth before moving on to nodes at the next depth level.
    * **Time Complexity:**
        * **Adjacency List:** $O(V + E)$
        * **Adjacency Matrix:** $O(V^2)$
    * **Explanation:** Similar to DFS, visits each vertex and each edge at most a constant number of times.
    * **Typical Use:** Finding the shortest path in unweighted graphs, finding connected components, network broadcasting.

### **Sorting Algorithms**

1.  **Heap Sort**
    * **Goal:** A comparison-based sorting algorithm that uses a binary heap data structure.
    * **Time Complexity:**
        * **Worst Case:** $O(n \log n)$
        * **Average Case:** $O(n \log n)$
        * **Best Case:** $O(n \log n)$
    * **Explanation:**
        * Building the max-heap takes $O(n)$ time.
        * Extracting the maximum element $n$ times (each extraction taking $O(\log n)$) and re-heapifying takes $O(n \log n)$ time.
    * **Space Complexity:** $O(1)$ (in-place sort)
    * **Typical Use:** When $O(n \log n)$ worst-case performance and $O(1)$ space complexity are required.

2.  **Other Common Sorting Algorithms:**
    * **Bubble Sort:** $O(n^2)$ (Worst, Average, Best) - Simple, but inefficient.
    * **Selection Sort:** $O(n^2)$ (Worst, Average, Best) - Simple, but inefficient.
    * **Insertion Sort:** $O(n^2)$ (Worst, Average), $O(n)$ (Best) - Efficient for small arrays or nearly sorted arrays.
    * **Merge Sort:** $O(n \log n)$ (Worst, Average, Best) - Stable sort, but requires $O(n)$ auxiliary space.
    * **Quick Sort:** $O(n \log n)$ (Average), $O(n^2)$ (Worst) - Generally faster in practice due to better constant factors, but worst-case is bad. In-place for typical implementations.

### **Searching Algorithms**

1.  **Binary Search**
    * **Goal:** Efficiently finds the position of a target value within a sorted array.
    * **Time Complexity:** $O(\log n)$
    * **Explanation:** With each comparison, the search space is halved. For an array of size $n$, it takes $\log_2 n$ steps to narrow down to a single element.
    * **Space Complexity:** $O(1)$ (iterative), $O(\log n)$ (recursive due to call stack)
    * **Prerequisite:** The array must be sorted.
    * **Typical Use:** Searching in databases, finding elements in sorted lists, implementing `lower_bound` or `upper_bound` operations.

### **Key Concepts for Understanding Time Complexity:**

* **Big O Notation ($O$):** Describes the upper bound or worst-case growth rate of an algorithm's running time as the input size ($n$) grows.
* **$n$ (or $V$, $E$):** Represents the input size. For arrays, it's the number of elements. For graphs, it's typically the number of vertices ($V$) and edges ($E$).
* **Logarithmic ($O(\log n)$):** Very efficient. The time grows very slowly as the input size increases (e.g., binary search).
* **Linear ($O(n)$):** The time grows proportionally to the input size (e.g., iterating through an array once).
* **Linearithmic ($O(n \log n)$):** Often seen in efficient sorting algorithms.
* **Quadratic ($O(n^2)$):** The time grows as the square of the input size. Becomes inefficient for large inputs.
* **Polynomial ($O(n^k)$):** Time grows as a polynomial of the input size.
* **Exponential ($O(k^n)$):** Very inefficient. Only practical for very small input sizes.