---
title : " Quick Sort"
---



### Quick Sort

1. **Choose a Pivot**  
   Select an element to act as the pivot (commonly the last element).

2. **Partitioning**  
   - Find a small element on the left of the pivot.  
   - Find a large element on the right of the pivot.  
   - Swap them to move smaller elements to the left and larger to the right.  
   - Repeat until left and right cross, then place pivot in correct position.

3. **Recursive Sort**  
   - Recursively apply the above steps to the sub-arrays to the left and right of the pivot.
 
![alt text](Quicksort-example.gif)

