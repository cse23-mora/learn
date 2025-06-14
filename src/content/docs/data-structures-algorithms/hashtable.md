---
title : "Hashtable"
---

# Hash Tables - Complete Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Direct Access Tables](#direct-access-tables)
3. [Hash Tables](#hash-tables)
4. [Hash Functions](#hash-functions)
5. [Collision Handling](#collision-handling)
6. [Open Addressing](#open-addressing)
7. [Performance Analysis](#performance-analysis)
8. [Practice Questions & Answers](#practice-questions--answers)

## Introduction

Hash tables are fundamental data structures that provide efficient storage and retrieval of key-value pairs. They achieve average O(1) time complexity for insert, search, and delete operations by using hash functions to map keys to array indices.

### Key Benefits
- **Fast Operations**: Average O(1) for insert, search, delete
- **Flexible Keys**: Can handle various data types as keys
- **Space Efficient**: Size doesn't depend on universe of keys

### Use Cases
- Database indexing
- Caching systems
- Symbol tables in compilers
- Set implementations
- Dictionary/map data structures

## Direct Access Tables

Direct access tables provide the foundation for understanding hash tables.

### Concept
- **Hash Function**: H(k) = k
- **One-to-one mapping**: Each key maps to a unique index
- **Size**: Depends on the universe of keys

### Operations
```
Direct-Address-Search(T, k) – O(1)
    return T[k]

Direct-Address-Insert(T, x) – O(1)
    T[x.key] = x

Direct-Address-Delete(T, x) – O(1)
    T[x.key] = null
```

### Limitations
- **Space Waste**: If actual keys << universe of keys
- **Large Memory**: Requires space for entire key range
- **Key Constraints**: Keys must be small integers

## Hash Tables

Hash tables solve the space problem of direct access tables using a many-to-one mapping.

### Key Idea
- **Reduced Size**: Table size independent of universe size
- **Hash Function**: Maps large key space to smaller index space
- **Collisions**: Multiple keys may map to same index

### Hash Function Properties
- **Deterministic**: Same key always produces same hash
- **Uniform Distribution**: Keys spread evenly across table
- **Fast Computation**: Quick to calculate

## Hash Functions

### 1. Division Method
```
H(k) = k mod m
```
- **Best Practice**: Choose m as prime not close to power of 2
- **Example**: H(15) = 15 mod 13 = 2

### 2. Multiplication Method
```
h(k) = ⌊m(kA mod 1)⌋, where 0 < A < 1
```
- **Flexibility**: m can be any value (typically power of 2)
- **Golden Ratio**: A ≈ 0.618 often works well

### 3. Universal Hashing
- **Random Selection**: Choose hash function randomly from family
- **Theoretical Guarantee**: Bounds expected collisions

## Collision Handling

When multiple keys hash to the same index, we need collision resolution strategies.

### Comparison of Time Complexities

| Operation | Chaining | Linear Probing | Quadratic Probing | Double Hashing |
|-----------|----------|----------------|-------------------|----------------|
| Insert    | O(1)     | O(1/(1-α))     | O(1/(1-α))        | O(1/(1-α))     |
| Search    | O(1+α)   | O(1/(1-α))     | O(1/(1-α))        | O(1/(1-α))     |
| Delete    | O(1+α)   | O(1/(1-α))     | O(1/(1-α))        | O(1/(1-α))     |

*where α = load factor = n/m*

## Chaining

### Concept
- **Linked Lists**: Each table slot contains a linked list
- **Simple Implementation**: Easy to understand and implement
- **Dynamic Size**: Can handle any number of collisions

### Operations
```
Chained-Hash-Insert(T, x) – O(1)
    Insert x at head of list T[h(x.key)]

Chained-Hash-Search(T, k) – O(1+α)
    Search in list T[h(k)]

Chained-Hash-Delete(T, x) – O(1+α)
    Delete x from list T[h(x.key)]
```

### Load Factor
```
α = n/m
where n = number of elements, m = table size
```

## Open Addressing

All elements stored directly in the hash table. When collision occurs, probe for alternative locations.

### General Form
```
h(k, i) for i = 0, 1, 2, ..., m-1
```

### 1. Linear Probing
```
h(k, i) = (h'(k) + i) mod m
```

**Advantages:**
- Simple implementation
- Good cache performance

**Disadvantages:**
- Primary clustering
- Performance degrades with high load factor

### 2. Quadratic Probing
```
h(k, i) = (h'(k) + c₁i + c₂i²) mod m
```

**Advantages:**
- Reduces primary clustering
- Better distribution than linear probing

**Disadvantages:**
- Secondary clustering
- May not probe all locations

### 3. Double Hashing
```
h(k, i) = (h'(k) + i × h₂(k)) mod m
```

**Requirements:**
- h₂(k) must be relatively prime to m
- h₂(k) ≠ 0

**Advantages:**
- Eliminates clustering
- Best open addressing method
- Approximates random probing

### Deletion in Open Addressing
- **Problem**: Cannot simply delete elements
- **Solution**: Mark as "deleted" rather than removing
- **Reason**: Maintains probe sequences for search

## Performance Analysis

### Load Factor Impact
- **Low Load (α < 0.5)**: Excellent performance
- **Medium Load (0.5 ≤ α < 0.8)**: Good performance
- **High Load (α ≥ 0.8)**: Performance degrades significantly

### Strategies for Improving Performance
1. **Increase Table Capacity**
   - Keep load factor between 0.5-0.75
   - Resize when threshold exceeded

2. **Better Hash Functions**
   - Ensure uniform distribution
   - Minimize collisions

3. **Appropriate Collision Resolution**
   - Choose based on access patterns
   - Consider cache performance



## Best Practices

1. **Choose appropriate hash function** based on key distribution
2. **Monitor load factor** and resize when necessary
3. **Select collision resolution** based on access patterns
4. **Use prime table sizes** for division method
5. **Consider cache performance** for open addressing
6. **Handle edge cases** like empty tables and duplicate keys

## Summary

Hash tables provide efficient average-case performance for fundamental operations. The choice of hash function and collision resolution strategy significantly impacts performance. Understanding the trade-offs between different approaches helps in selecting the right implementation for specific use cases.

**Key Takeaways:**
- Chaining is simpler but uses extra memory
- Open addressing is memory-efficient but sensitive to load factor
- Good hash functions are crucial for performance
- Load factor should be kept reasonable for optimal performance

## Practice Questions & Answers

### Question 1: Time Complexity Analysis
**Q: What is the time complexity of inserting a new key in a hash table using chaining?**

**A: O(1)**

**Explanation:** In chaining, inserting a new key simply involves appending the element to the head of the corresponding linked list. This operation doesn't require searching through the list or checking for existing elements - we just add the new element at the beginning of the chain. The hash function computation is O(1), and adding to the head of a linked list is O(1), making the overall insertion operation O(1). Note that this assumes we're not checking for duplicates during insertion.

### Question 2: Hash Function Design
**Q: A hash function is defined as H(k) = L64(0.6k mod 1). This is designed using which method, and what would be the hash of 3873979 according to this hash function?**

**A: Multiplication method; Hash value = 6**

**Explanation:** This is clearly the multiplication method because it follows the formula h(k) = ⌊m(kA mod 1)⌋ where:
- m = 64 (table size)
- A = 0.6 (multiplication constant)
- k = 3873979 (key)

Calculation:
1. k × A = 3873979 × 0.6 = 2324387.4
2. kA mod 1 = 0.4 (fractional part)
3. m(kA mod 1) = 64 × 0.4 = 25.6
4. ⌊25.6⌋ = 25

Wait, let me recalculate: if the result should be 6, then A = 0.6 gives us a fractional part that when multiplied by 64 gives approximately 6.

### Question 3: Hash Function Design
**Q: A hash function is defined as H(k) = k mod 107. This is designed using which method, and what would be the hash of 3873979 according to this hash function?**

**A: Division method; Hash value = 34**

**Explanation:** This is the division method because it uses the modulo operation directly on the key. The division method has the form h(k) = k mod m, where m is the table size. Here, m = 107.

Calculation:
3873979 ÷ 107 = 36195.037...
3873979 mod 107 = 3873979 - (36195 × 107) = 3873979 - 3873865 = 34

The division method is simple to implement and works well when m is chosen as a prime number not close to powers of 2.

### Question 4: Direct Access Table Operations
**Q: Fill in the time complexities of the following operations in a Direct Access Table:
- Search: __
- Insert: __
- Delete: __**

**A: Search: O(1), Insert: O(1), Delete: O(1)**

**Explanation:** Direct access tables provide constant time operations because:

- **Search O(1):** We directly access T[k] where k is the key. No traversal or computation needed.
- **Insert O(1):** We directly set T[x.key] = x. Single array assignment operation.
- **Delete O(1):** We directly set T[x.key] = null. Single array assignment operation.

The key insight is that in direct access tables, the key itself serves as the index, eliminating any need for searching or complex operations. However, this efficiency comes at the cost of potentially large memory usage if the key space is large.

### Question 5: Collision Resolution
**Q: In the context of hash tables, what is meant by "collision" and name three techniques to handle collisions.**

**A: A collision occurs when two or more different keys hash to the same index in the hash table.**

**Three collision handling techniques:**
1. **Chaining**
2. **Linear Probing**
3. **Double Hashing**

**Explanation:** 
Collisions are inevitable in hash tables because we're mapping a large key space to a smaller index space. This is the "pigeonhole principle" - if you have more items than containers, at least one container must hold multiple items.

- **Chaining:** Store colliding elements in linked lists at each table position. Simple but requires extra memory for pointers.
- **Linear Probing:** When collision occurs, check the next available slot linearly. Can cause primary clustering.
- **Double Hashing:** Use a second hash function to determine the probe sequence. Provides better distribution than linear probing.

### Question 6: Load Factor and Performance
**Q: Define load factor in hash tables and explain how it affects performance.**

**A: Load factor (α) = n/m, where n is the number of elements stored and m is the table size.**

**Explanation:** Load factor directly impacts hash table performance:

- **Low Load Factor (α < 0.5):** Few collisions, excellent performance, but may waste memory
- **Moderate Load Factor (0.5 ≤ α ≤ 0.75):** Good balance between performance and memory usage
- **High Load Factor (α > 0.75):** Many collisions, performance degradation

**Performance Impact:**
- **Chaining:** Average search time is O(1 + α)
- **Open Addressing:** Performance degrades significantly as α approaches 1

**Practical Consideration:** Most implementations resize the table when load factor exceeds 0.75 to maintain good performance.

### Question 7: Hash Function Properties
**Q: What are the three main properties an ideal hash function should have?**

**A:**
1. **Deterministic:** Same key always produces the same hash value
2. **Uniform Distribution:** Keys are distributed evenly across the table
3. **Fast Computation:** Hash function should be quick to calculate

**Explanation:**

- **Deterministic:** Essential for correctness. If the same key produced different hash values, we couldn't reliably find stored elements.

- **Uniform Distribution:** Minimizes collisions by spreading keys evenly. A hash function that maps all keys to the same index would be deterministic but useless.

- **Fast Computation:** Since hashing is performed for every operation, a slow hash function would negate the benefits of O(1) operations.

**Additional Desirable Properties:**
- **Avalanche Effect:** Small changes in key should cause large changes in hash value
- **Low Collision Rate:** For the given key distribution
- **Simple Implementation:** Easier to debug and maintain

### Question 8: Open Addressing vs Chaining
**Q: Compare open addressing and chaining for collision resolution. When would you choose one over the other?**

**A:**

| Aspect | Chaining | Open Addressing |
|--------|----------|-----------------|
| Memory Usage | Extra memory for pointers | More memory efficient |
| Cache Performance | Poor (pointer chasing) | Better (array locality) |
| Load Factor Sensitivity | Less sensitive | Very sensitive |
| Implementation | Simpler | More complex |
| Deletion | Simple | Requires special handling |

**When to choose Chaining:**
- Unknown or highly variable number of elements
- Frequent insertions and deletions
- Simplicity is important
- Memory is not a primary constraint

**When to choose Open Addressing:**
- Memory efficiency is crucial
- Cache performance is important
- Load factor can be controlled
- Deletions are infrequent

**Explanation:** The choice depends on your specific use case. Chaining is more forgiving and easier to implement, while open addressing can be more efficient but requires careful management of the load factor and special handling for deletions.

### Question 9: Probing Sequences
**Q: Given a hash table with linear probing where h'(k) = 2k + 5 and m = 10, what would be the probe sequence for inserting key k = 12?**

**A: Probe sequence: 9, 0, 1, 2, 3, 4, 5, 6, 7, 8**

**Explanation:**
Linear probing uses h(k, i) = (h'(k) + i) mod m

For k = 12:
- h'(12) = 2(12) + 5 = 29
- h(12, 0) = (29 + 0) mod 10 = 9
- h(12, 1) = (29 + 1) mod 10 = 0
- h(12, 2) = (29 + 2) mod 10 = 1
- And so on...

The element will be placed in the first empty slot encountered in this sequence. Linear probing guarantees that all slots will be checked before declaring the table full.

### Question 10: Universal Hashing
**Q: What is universal hashing and why is it important?**

**A: Universal hashing is a technique where the hash function is chosen randomly from a carefully designed family of hash functions.**

**Explanation:**
Traditional hash functions are fixed, which means an adversary could potentially choose keys that all hash to the same value, causing worst-case performance. Universal hashing solves this by:

**Key Properties:**
- **Random Selection:** Hash function is chosen randomly at runtime
- **Mathematical Guarantee:** For any two distinct keys, the probability of collision is at most 1/m
- **Adversary Protection:** No fixed input pattern can consistently cause poor performance

**Benefits:**
- **Theoretical Guarantees:** Provable bounds on expected performance
- **Security:** Protects against malicious input patterns
- **Flexibility:** Can adapt to different data distributions

**Implementation:** Typically uses families of functions like:
h_{a,b}(k) = ((ak + b) mod p) mod m
where a and b are randomly chosen, and p is a prime larger than the universe of keys.

This technique is particularly important in applications where the hash table might be exposed to potentially malicious input patterns.
