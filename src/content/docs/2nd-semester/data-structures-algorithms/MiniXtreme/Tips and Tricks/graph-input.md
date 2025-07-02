---
title: "Graph Input Methods for Competitive Programming"
---

A comprehensive guide for building adjacency matrices and adjacency lists from standard input in C++ for HackerRank and LeetCode problems.

## Table of Contents
- [Method 1: Adjacency Matrix (Fixed Size)](#method-1-adjacency-matrix-fixed-size)
- [Method 2: Weighted Adjacency Matrix](#method-2-weighted-adjacency-matrix)
- [Method 3: Adjacency List (Vector of Vectors)](#method-3-adjacency-list-vector-of-vectors)
- [Method 4: Weighted Adjacency List](#method-4-weighted-adjacency-list)
- [Method 5: Map-based Adjacency List](#method-5-map-based-adjacency-list)
- [Method 6: Edge List](#method-6-edge-list)
- [Common Input Patterns](#common-input-patterns)
- [Sample Input Formats](#sample-input-formats)
- [Tips for Competitive Programming](#tips-for-competitive-programming)

## Method 1: Adjacency Matrix (Fixed Size)

Best for dense graphs with small n (≤ 1000) due to O(n²) space complexity.

```cpp
#include <iostream>
#include <vector>
using namespace std;

void buildAdjacencyMatrix() {
    int n, m;  // n = nodes, m = edges
    cin >> n >> m;
    
    // Create adjacency matrix (1-indexed)
    vector<vector<int>> adj(n + 1, vector<int>(n + 1, 0));
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u][v] = 1;  // For directed graph
        adj[v][u] = 1;  // Add this line for undirected graph
    }
    
    // Usage: check if edge exists between u and v
    // if (adj[u][v]) { /* edge exists */ }
}
```

**Input Format:**
```
5 6
1 2
2 3
3 4
4 5
5 1
2 4
```

## Method 2: Weighted Adjacency Matrix

Ideal for algorithms like Floyd-Warshall shortest path.

```cpp
void buildWeightedAdjacencyMatrix() {
    int n, m;
    cin >> n >> m;
    
    // Initialize with infinity (or large value)
    const int INF = 1e9;
    vector<vector<int>> adj(n + 1, vector<int>(n + 1, INF));
    
    // Distance from node to itself is 0
    for (int i = 1; i <= n; i++) {
        adj[i][i] = 0;
    }
    
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        adj[u][v] = w;
        adj[v][u] = w;  // For undirected graph
    }
}
```

**Input Format:**
```
4 5
1 2 10
2 3 20
3 4 30
4 1 40
1 3 50
```

## Method 3: Adjacency List (Vector of Vectors)

Most commonly used method - memory efficient for sparse graphs.

```cpp
void buildAdjacencyList() {
    int n, m;
    cin >> n >> m;
    
    vector<vector<int>> adj(n + 1);  // 1-indexed
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);  // Remove for directed graph
    }
    
    // Usage: iterate through neighbors of node u
    // for (int neighbor : adj[u]) { /* process neighbor */ }
}
```

## Method 4: Weighted Adjacency List

Using pairs to store both neighbor and edge weight.

```cpp
void buildWeightedAdjacencyList() {
    int n, m;
    cin >> n >> m;
    
    vector<vector<pair<int, int>>> adj(n + 1);
    
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        adj[u].push_back({v, w});  // {neighbor, weight}
        adj[v].push_back({u, w});  // For undirected graph
    }
    
    // Usage: iterate through weighted edges
    // for (auto& edge : adj[u]) {
    //     int neighbor = edge.first;
    //     int weight = edge.second;
    // }
}
```

## Method 5: Map-based Adjacency List

Useful for sparse graphs or when node labels aren't sequential.

```cpp
#include <unordered_map>

void buildAdjacencyListMap() {
    int m;
    cin >> m;
    
    unordered_map<int, vector<int>> adj;
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);  // For undirected graph
    }
    
    // Usage: check if node exists before accessing
    // if (adj.find(u) != adj.end()) {
    //     for (int neighbor : adj[u]) { /* process */ }
    // }
}
```

## Method 6: Edge List

Stores edges separately - useful for algorithms like Kruskal's MST.

```cpp
void buildEdgeList() {
    int n, m;
    cin >> n >> m;
    
    vector<pair<int, int>> edges;  // For unweighted
    // vector<tuple<int, int, int>> weightedEdges;  // For weighted: {u, v, weight}
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        edges.push_back({u, v});
        
        // For weighted version:
        // int w;
        // cin >> u >> v >> w;
        // weightedEdges.push_back({u, v, w});
    }
}
```

## Common Input Patterns

### Standard Graph Input
```cpp
void standardGraphInput() {
    int n, m;  // n = nodes, m = edges
    cin >> n >> m;
    
    vector<vector<int>> adj(n + 1);  // 1-indexed
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);  // Remove for directed graph
    }
}
```

### Tree Input (n-1 edges)
```cpp
void treeInput() {
    int n;
    cin >> n;
    
    vector<vector<int>> adj(n + 1);
    
    for (int i = 0; i < n - 1; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
}
```

### Grid as Graph
```cpp
void gridInput() {
    int rows, cols;
    cin >> rows >> cols;
    
    vector<string> grid(rows);
    for (int i = 0; i < rows; i++) {
        cin >> grid[i];
    }
    
    // Convert grid to adjacency list
    vector<vector<int>> adj(rows * cols);
    
    // Directions: up, down, left, right
    int dx[] = {-1, 1, 0, 0};
    int dy[] = {0, 0, -1, 1};
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (grid[i][j] == '#') continue;  // Skip walls
            
            int current = i * cols + j;  // Convert 2D to 1D index
            
            for (int d = 0; d < 4; d++) {
                int ni = i + dx[d];
                int nj = j + dy[d];
                
                if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && grid[ni][nj] != '#') {
                    int neighbor = ni * cols + nj;
                    adj[current].push_back(neighbor);
                }
            }
        }
    }
}
```

## Fast I/O Setup

Always include this for competitive programming:

```cpp
void setupFastIO() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
}

int main() {
    setupFastIO();
    // Your code here
    return 0;
}
```

## Sample Input Formats

### Basic Undirected Graph
```
5 6
1 2
2 3
3 4
4 5
5 1
2 4
```

### Weighted Graph
```
4 5
1 2 10
2 3 20
3 4 30
4 1 40
1 3 50
```

### Tree
```
5
1 2
2 3
2 4
4 5
```

### Grid (as strings)
```
3 4
....
.##.
....
```

## Tips for Competitive Programming

### Memory Considerations
- **Adjacency List**: O(V + E) space - preferred for sparse graphs
- **Adjacency Matrix**: O(V²) space - only use when V ≤ 1000

### When to Use Each Method

| Method | Best For | Space Complexity | Time to Check Edge |
|--------|----------|------------------|-------------------|
| Adjacency Matrix | Dense graphs, small V | O(V²) | O(1) |
| Adjacency List | Sparse graphs, large V | O(V + E) | O(degree) |
| Edge List | MST, Edge-based algorithms | O(E) | O(E) |

### Common Mistakes to Avoid
- Forgetting to handle directed vs undirected graphs
- Using wrong indexing (0-based vs 1-based)
- Not setting up fast I/O for large inputs
- Using adjacency matrix for large graphs (memory limit exceeded)

### Template Structure
```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

void solve() {
    int n, m;
    cin >> n >> m;
    
    vector<vector<int>> adj(n + 1);  // Choose appropriate method
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);  // For undirected
    }
    
    // Your algorithm here
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    solve();
    return 0;
}
```