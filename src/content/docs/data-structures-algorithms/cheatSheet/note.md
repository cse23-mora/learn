---
title : "Note"
---





### Sorting Algorithms 

| Algorithm        | Time Complexity (Best) | Time (Average) | Time (Worst) | Space | In-Place | Use Case / Notes                       |
|------------------|------------------------|----------------|--------------|-------|----------|----------------------------------------|
| Insertion Sort | O(n)                  | O(n²)          | O(n²)        | O(1)   | Yes   | Small datasets, mostly sorted arrays   |
| Selection Sort | O(n²)                 | O(n²)          | O(n²)        | O(1)  | Yes   | Simple, not efficient in practice      |
| Bubble Sort    | O(n)                  | O(n²)          | O(n²)        | O(1)  | Yes   | Educational, rarely used in real life  |
| Merge Sort     | O(n log n)            | O(n log n)     | O(n log n)   | O(n)  | No    | Large datasets, stable sort needed     |
| Quick Sort     | O(n log n)            | O(n log n)     | O(n²)        | O(log n)| Yes   | Fastest in practice, divide & conquer  |
| Heap Sort      | O(n log n)            | O(n log n)     | O(n log n)   | O(1) | Yes   | Priority queues, not stable            |



### Tree Traversal methods

- Pre-order Traversal (Root → Left → Right)
- In-order Traversal (Left → Root → Right)
- Post-order Traversal (Left → Right → Root)


### Graph traversal methods
- Depth-First Search (DFS)
- Breadth-First Search (BFS)

| Method | Structure | Strategy   | Good For                        |
| ------ | --------- | ---------- | ------------------------------- |
| DFS    | Stack     | Deep first | Components, cycles, topological |
| BFS    | Queue     | Level-wise | Shortest unweighted path        |
