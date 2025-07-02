---
title : "Graphs"
---

## Graph Terminologies and Fundamentals

### Basic Definition

**Graph G = (V, E)**
- **V** = Vertices (also called nodes)
- **E** = Edges (connections between vertices)
- **|X|** = number of elements in set X
- **Constraint**: Always |E| ≤ |V|²
- **Adjacent vertices**: (u, v) ∈ E means u and v are adjacent

### Types of Graphs

1. **Undirected Graph**: u ←→ v (bidirectional connection)
2. **Directed Graph**: u → v (unidirectional connection)  
3. **Weighted Graph**: Edges have associated weights/costs

### Vertex Degree Concepts

- **In-degree**: Number of incoming edges to a vertex (directed graphs)
- **Out-degree**: Number of outgoing edges from a vertex (directed graphs)
- **Degree**: Total number of edges connected to a vertex (undirected graphs)

### Path and Connectivity

- **Path**: A sequence of vertices where each adjacent pair is connected by an edge
- **Simple Path**: A path where no vertex is repeated (no cycles)
- **Path Length**: Number of edges in a path
- **Path Cost**: Sum of edge weights in a weighted graph (also called path weight)
- **Reachability**: Vertex v is reachable from vertex u if there exists a path from u to v

### Graph Properties

- **Subgraph**: A subset of vertices and edges from the original graph
- **Connected Graph**: There exists a path between every pair of vertices
- **Connected Component**: A maximal set of vertices such that every pair is connected
- **Cycle**: A path that starts and ends at the same vertex
- **Acyclic**: A graph with no cycles

### Graph Density Classification

- **Dense Graph**: |E| ≈ |V|² (many edges relative to vertices)
- **Sparse Graph**: |E| << |V|² (few edges relative to vertices)

### Special Graph Types

- **Tree**: A connected, acyclic graph where |E| = |V| - 1
- **Forest**: A collection of trees (acyclic graph)
- **Complete Graph**: Every pair of vertices is connected by an edge
- **Bipartite Graph**: Vertices can be divided into two sets with edges only between sets

### Edge Classification in DFS

- **Tree Edges**: Edges in the DFS spanning tree
- **Back Edges**: Edges from descendant to ancestor (indicate cycles in directed graphs)
- **Forward Edges**: Edges from ancestor to descendant (non-tree edges)
- **Cross Edges**: All other edges (between different subtrees)

### Directed Acyclic Graph (DAG)

- **Definition**: A directed graph with no directed cycles
- **Key Property**: A directed graph is acyclic if and only if DFS yields no back edges
- **Applications**: Topological sorting, dependency resolution, scheduling

## Graph Implementation Methods

There are two primary ways to represent graphs in memory:

### Space and Time Complexity Comparison

| Operation | Adjacency List | Adjacency Matrix |
|-----------|----------------|------------------|
| Space | O(V + E) | O(V²) |
| Add Edge | O(1) | O(1) |
| Remove Edge | O(degree) | O(1) |
| Check Edge | O(degree) | O(1) |
| Get Neighbors | O(degree) | O(V) |

**Best Use Cases:**
- **Adjacency List**: Sparse graphs, when you need to iterate over neighbors frequently
- **Adjacency Matrix**: Dense graphs, when you need fast edge lookups

## Adjacency List Implementation

Space-efficient representation using arrays of linked lists.

**Advantages:**
- Space efficient for sparse graphs: O(V + E)
- Fast neighbor iteration
- Easy to add edges

**Disadvantages:**
- Slower edge existence checking: O(degree of vertex)
- More complex implementation

<details>
<summary><strong>Adjacency List C++ Implementation</strong></summary>

```cpp
#include <iostream>
#include <vector>
#include <list>
using namespace std;

class AdjacencyList {
private:
    int numVertices;
    vector<list<int>> adjList;

public:
    // Constructor
    AdjacencyList(int vertices) : numVertices(vertices) {
        adjList.resize(vertices);
    }
    
    // Add edge
    void addEdge(int src, int dest) {
        adjList[src].push_back(dest);
        adjList[dest].push_back(src); // For undirected graph
    }
    
    // Remove edge
    void removeEdge(int src, int dest) {
        adjList[src].remove(dest);
        adjList[dest].remove(src); // For undirected graph
    }
    
    // Display graph
    void display() {
        for (int i = 0; i < numVertices; i++) {
            cout << i << " -> ";
            for (int neighbor : adjList[i]) {
                cout << neighbor << " ";
            }
            cout << endl;
        }
    }
    
    // Check if edge exists
    bool hasEdge(int src, int dest) {
        for (int neighbor : adjList[src]) {
            if (neighbor == dest) return true;
        }
        return false;
    }
    
    // Get all neighbors of a vertex
    list<int> getNeighbors(int vertex) {
        return adjList[vertex];
    }
};
```

</details>

## Adjacency Matrix Implementation

2D array representation where matrix[i][j] indicates edge between vertices i and j.

**Advantages:**
- Fast edge existence checking: O(1)
- Simple implementation
- Can store edge weights directly

**Disadvantages:**
- Space inefficient for sparse graphs: O(V²)
- Slow neighbor iteration: O(V)

<details>
<summary><strong>Adjacency Matrix C++ Implementation</strong></summary>

```cpp
#include <iostream>
#include <vector>
using namespace std;

class AdjacencyMatrix {
private:
    int numVertices;
    vector<vector<int>> adjMatrix;

public:
    // Constructor
    AdjacencyMatrix(int vertices) : numVertices(vertices) {
        adjMatrix.resize(vertices, vector<int>(vertices, 0));
    }
    
    // Add edge
    void addEdge(int src, int dest, int weight = 1) {
        adjMatrix[src][dest] = weight;
        adjMatrix[dest][src] = weight; // For undirected graph
    }
    
    // Remove edge
    void removeEdge(int src, int dest) {
        adjMatrix[src][dest] = 0;
        adjMatrix[dest][src] = 0; // For undirected graph
    }
    
    // Display graph
    void display() {
        cout << "Adjacency Matrix:" << endl;
        cout << "   ";
        for (int i = 0; i < numVertices; i++) {
            cout << i << " ";
        }
        cout << endl;
        
        for (int i = 0; i < numVertices; i++) {
            cout << i << ": ";
            for (int j = 0; j < numVertices; j++) {
                cout << adjMatrix[i][j] << " ";
            }
            cout << endl;
        }
    }
    
    // Check if edge exists
    bool hasEdge(int src, int dest) {
        return adjMatrix[src][dest] != 0;
    }
    
    // Get edge weight
    int getWeight(int src, int dest) {
        return adjMatrix[src][dest];
    }
};
```

</details>

## BFS Algorithm (Breadth-First Search)

**Principle**: Explore all neighbors at the current depth before moving to vertices at the next depth level.

**Data Structure**: Queue (FIFO - First In, First Out)

### Algorithm Steps:
1. Start from a given vertex (source)
2. Create a visited array and queue, mark source as visited
3. Add source to queue
4. While queue is not empty:
   - Dequeue front vertex
   - Visit all unvisited neighbors
   - Mark neighbors as visited and enqueue them

### Key Properties:
- **Shortest Path**: Finds shortest path in unweighted graphs
- **Level-order**: Visits vertices level by level
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)

### Applications:
- Finding shortest path in unweighted graphs
- Social network analysis (connections within N degrees)
- Web crawling
- GPS navigation systems
- Level-order traversal

### BFS Tree (Predecessor Subgraph):
After BFS completion:
- **Vπ** = {v ∈ V : π[v] ≠ NIL} ∪ {s} (vertices with predecessors + source)
- **Eπ** = {(π[v], v) ∈ E : v ∈ Vπ - {s}} (parent-to-child edges)

**Properties:**
- Contains all vertices reachable from source
- Unique simple path from source to any vertex
- These paths are shortest paths in the original graph
- Tree structure: |Eπ| = |Vπ| - 1

<details>
<summary><strong>BFS Algorithm C++ Implementation</strong></summary>

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <list>
using namespace std;

class Graph {
private:
    int numVertices;
    vector<list<int>> adjList;

public:
    Graph(int vertices) : numVertices(vertices) {
        adjList.resize(vertices);
    }
    
    void addEdge(int src, int dest) {
        adjList[src].push_back(dest);
        adjList[dest].push_back(src); // Undirected graph
    }
    
    void BFS(int startVertex) {
        vector<bool> visited(numVertices, false);
        queue<int> bfsQueue;
        vector<int> parent(numVertices, -1);
        vector<int> level(numVertices, -1);
        
        visited[startVertex] = true;
        bfsQueue.push(startVertex);
        level[startVertex] = 0;
        
        cout << "BFS traversal starting from vertex " << startVertex << ": ";
        
        while (!bfsQueue.empty()) {
            int currentVertex = bfsQueue.front();
            bfsQueue.pop();
            cout << currentVertex << " ";
            
            // Process all unvisited neighbors
            for (int neighbor : adjList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    parent[neighbor] = currentVertex;
                    level[neighbor] = level[currentVertex] + 1;
                    bfsQueue.push(neighbor);
                }
            }
        }
        cout << endl;
        
        // Print BFS tree information
        cout << "BFS Tree - Parent relationships:" << endl;
        for (int i = 0; i < numVertices; i++) {
            if (parent[i] != -1) {
                cout << "Parent of " << i << " is " << parent[i] << " (level " << level[i] << ")" << endl;
            } else if (i == startVertex) {
                cout << "Vertex " << i << " is the root (level 0)" << endl;
            }
        }
    }
    
    void displayGraph() {
        cout << "Graph structure:" << endl;
        for (int i = 0; i < numVertices; i++) {
            cout << i << " -> ";
            for (int neighbor : adjList[i]) {
                cout << neighbor << " ";
            }
            cout << endl;
        }
    }
};

int main() {
    // Example 1: Simple connected graph
    cout << "=== Example 1: Simple Connected Graph ===" << endl;
    Graph g1(5);
    g1.addEdge(0, 1);
    g1.addEdge(0, 2);
    g1.addEdge(1, 3);
    g1.addEdge(2, 4);
    g1.addEdge(3, 4);
    
    g1.displayGraph();
    cout << endl;
    g1.BFS(0);
    
    cout << endl << endl;
    
    // Example 2: Disconnected graph
    cout << "=== Example 2: Disconnected Graph ===" << endl;
    Graph g2(7);
    g2.addEdge(0, 1);
    g2.addEdge(0, 2);
    g2.addEdge(1, 2);
    g2.addEdge(3, 4);
    g2.addEdge(4, 5);
    g2.addEdge(5, 6);
    
    g2.displayGraph();
    cout << endl;
    cout << "BFS from vertex 0 (first component):" << endl;
    g2.BFS(0);
    cout << endl;
    cout << "BFS from vertex 3 (second component):" << endl;
    g2.BFS(3);
    
    return 0;
}
```

</details>

## DFS Algorithm (Depth-First Search)

**Principle**: Explore as far as possible along each branch before backtracking.

**Data Structure**: Stack (LIFO - Last In, First Out) or Recursion

### Algorithm Steps:
1. Start from a given vertex (source)
2. Create a visited array and stack, mark source as visited
3. Add source to stack
4. While stack is not empty:
   - Pop top vertex
   - Visit all unvisited neighbors
   - Mark neighbors as visited and push them to stack (in reverse order for consistent traversal)

### Key Properties:
- **Memory Efficient**: Uses less space than BFS
- **Path Finding**: Good for finding any path (not necessarily shortest)
- **Backtracking**: Natural for problems requiring exploration of all possibilities
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V) for recursion stack

### Applications:
- Topological sorting
- Cycle detection in graphs
- Maze solving
- Finding strongly connected components
- Backtracking algorithms

### DFS Forest (Predecessor Subgraph):
- **Vπ** = V (all vertices in the graph)
- **Eπ** = {(π[v], v) : v ∈ V and π[v] ≠ NIL}

**Properties:**
- Contains ALL vertices in the graph
- Forms a forest (collection of trees)
- Acyclic property: No cycles in the DFS forest
- Forest structure: |Eπ| ≤ |V| - k (where k = number of components)

<details>
<summary><strong>DFS Algorithm C++ Implementation (Both Iterative and Recursive)</strong></summary>

```cpp
#include <iostream>
#include <vector>
#include <stack>
#include <list>
using namespace std;

class GraphDFS {
private:
    int numVertices;
    vector<list<int>> adjList;

public:
    GraphDFS(int vertices) : numVertices(vertices) {
        adjList.resize(vertices);
    }
    
    void addEdge(int src, int dest) {
        adjList[src].push_back(dest);
        adjList[dest].push_back(src); // Undirected graph
    }
    
    // Iterative DFS implementation
    void DFS_Iterative(int startVertex) {
        vector<bool> visited(numVertices, false);
        stack<int> dfsStack;
        vector<int> parent(numVertices, -1);
        
        dfsStack.push(startVertex);
        
        cout << "DFS traversal (iterative) starting from vertex " << startVertex << ": ";
        
        while (!dfsStack.empty()) {
            int currentVertex = dfsStack.top();
            dfsStack.pop();
            
            if (!visited[currentVertex]) {
                visited[currentVertex] = true;
                cout << currentVertex << " ";
                
                // Add neighbors in reverse order for consistent DFS order
                vector<int> neighbors;
                for (int neighbor : adjList[currentVertex]) {
                    if (!visited[neighbor]) {
                        neighbors.push_back(neighbor);
                        if (parent[neighbor] == -1) {
                            parent[neighbor] = currentVertex;
                        }
                    }
                }
                
                // Push in reverse order to maintain left-to-right traversal
                for (int i = neighbors.size() - 1; i >= 0; i--) {
                    dfsStack.push(neighbors[i]);
                }
            }
        }
        cout << endl;
        
        // Print DFS tree information
        cout << "DFS Tree - Parent relationships:" << endl;
        for (int i = 0; i < numVertices; i++) {
            if (parent[i] != -1) {
                cout << "Parent of " << i << " is " << parent[i] << endl;
            } else if (i == startVertex) {
                cout << "Vertex " << i << " is the root" << endl;
            }
        }
    }
    
    // Recursive DFS helper function
    void DFS_Recursive_Helper(int vertex, vector<bool>& visited, vector<int>& parent) {
        visited[vertex] = true;
        cout << vertex << " ";
        
        for (int neighbor : adjList[vertex]) {
            if (!visited[neighbor]) {
                parent[neighbor] = vertex;
                DFS_Recursive_Helper(neighbor, visited, parent);
            }
        }
    }
    
    // Recursive DFS implementation
    void DFS_Recursive(int startVertex) {
        vector<bool> visited(numVertices, false);
        vector<int> parent(numVertices, -1);
        
        cout << "DFS traversal (recursive) starting from vertex " << startVertex << ": ";
        DFS_Recursive_Helper(startVertex, visited, parent);
        cout << endl;
        
        // Print DFS tree information
        cout << "DFS Tree - Parent relationships:" << endl;
        for (int i = 0; i < numVertices; i++) {
            if (parent[i] != -1) {
                cout << "Parent of " << i << " is " << parent[i] << endl;
            } else if (i == startVertex) {
                cout << "Vertex " << i << " is the root" << endl;
            }
        }
    }
    
    void displayGraph() {
        cout << "Graph structure:" << endl;
        for (int i = 0; i < numVertices; i++) {
            cout << i << " -> ";
            for (int neighbor : adjList[i]) {
                cout << neighbor << " ";
            }
            cout << endl;
        }
    }
};

int main() {
    // Example 1: Simple connected graph
    cout << "=== Example 1: Simple Connected Graph ===" << endl;
    GraphDFS g1(5);
    g1.addEdge(0, 1);
    g1.addEdge(0, 2);
    g1.addEdge(1, 3);
    g1.addEdge(2, 4);
    g1.addEdge(3, 4);
    
    g1.displayGraph();
    cout << endl;
    g1.DFS_Iterative(0);
    cout << endl;
    g1.DFS_Recursive(0);
    
    cout << endl << endl;
    
    // Example 2: Disconnected graph with more complexity
    cout << "=== Example 2: Disconnected Graph ===" << endl;
    GraphDFS g2(8);
    g2.addEdge(0, 1);
    g2.addEdge(0, 2);
    g2.addEdge(1, 3);
    g2.addEdge(2, 3);
    g2.addEdge(4, 5);
    g2.addEdge(5, 6);
    g2.addEdge(6, 7);
    g2.addEdge(4, 7);
    
    g2.displayGraph();
    cout << endl;
    cout << "DFS from vertex 0 (first component):" << endl;
    g2.DFS_Iterative(0);
    cout << endl;
    g2.DFS_Recursive(0);
    cout << endl << endl;
    
    cout << "DFS from vertex 4 (second component):" << endl;
    g2.DFS_Iterative(4);
    cout << endl;
    g2.DFS_Recursive(4);
    
    return 0;
}
```

</details>

## Key Differences: BFS vs DFS

| Property | BFS | DFS |
|----------|-----|-----|
| **Data Structure** | Queue (FIFO) | Stack/Recursion (LIFO) |
| **Traversal Pattern** | Level by level | Depth first, then backtrack |
| **Path Found** | Shortest (unweighted) | Any path |
| **Memory Usage** | Higher (stores entire level) | Lower (only current path) |
| **Implementation** | Iterative preferred | Recursive preferred |
| **Tree Structure** | Single tree from source | Forest of all vertices |
| **Best for** | Shortest path, level analysis | Cycle detection, topological sort |
| **Space Complexity** | O(V) | O(V) |
| **When to Use** | Find minimum steps/hops | Explore all possibilities |

### Minimum Spanning Tree (MST) Concepts

- **Spanning Tree**: A connected, acyclic subgraph containing all vertices
- **Minimum Spanning Tree**: A spanning tree with minimum total edge weight
- **Safe Edge**: An edge that can be added to form an MST without violating MST properties
- **Light Edge**: Among all edges crossing a cut, the one with smallest weight
- **Cut**: A partition of vertices into two disjoint sets
- **Crossing Edge**: An edge with endpoints in different parts of a cut

## Kruskal's MST Algorithm

**Strategy**: "Always pick the cheapest edge available, unless it creates a cycle!"

**Approach**: Edge-based greedy algorithm using Union-Find data structure.

### Algorithm Steps:
1. Sort all edges by weight (ascending order)
2. Initialize Union-Find structure for cycle detection
3. Start with empty MST
4. For each edge in sorted order:
   - If edge doesn't create cycle, add it to MST
   - Otherwise, skip the edge
5. Continue until MST has V-1 edges

### Key Features:
- **Time Complexity**: O(E log E) due to sorting
- **Space Complexity**: O(V) for Union-Find
- **Best for**: Sparse graphs
- **Cycle Detection**: Uses Union-Find (Disjoint Set Union)

### Union-Find Operations:
- **Find**: Determine which set an element belongs to
- **Union**: Merge two sets together
- **Path Compression**: Optimization for Find operation
- **Union by Rank**: Optimization for Union operation


<details>
<summary><strong>Kruskal's MST Algorithm C++ Implementation (with Union-Find)</strong></summary>

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Edge {
    int src, dest, weight;
    
    // Operator for sorting edges by weight
    bool operator<(const Edge& other) const {
        return weight < other.weight;
    }
};

class UnionFind {
private:
    vector<int> parent, rank;
    
public:
    UnionFind(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }
    
    // Find with path compression
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    // Union by rank
    bool unite(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX == rootY) return false; // Already in same set (would create cycle)
        
        // Union by rank optimization
        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
        return true;
    }
};

class KruskalMST {
private:
    int numVertices;
    vector<Edge> edges;
    
public:
    KruskalMST(int vertices) : numVertices(vertices) {}
    
    void addEdge(int src, int dest, int weight) {
        edges.push_back({src, dest, weight});
    }
    
    void findMST() {
        // Step 1: Sort edges by weight
        sort(edges.begin(), edges.end());
        
        cout << "Sorted edges by weight:" << endl;
        for (const Edge& edge : edges) {
            cout << edge.src << "-" << edge.dest << " : " << edge.weight << endl;
        }
        cout << endl;
        
        UnionFind uf(numVertices);
        vector<Edge> mst;
        int totalWeight = 0;
        
        cout << "Building MST:" << endl;
        
        // Step 2: Process edges in sorted order
        for (const Edge& edge : edges) {
            if (uf.unite(edge.src, edge.dest)) {
                mst.push_back(edge);
                totalWeight += edge.weight;
                cout << "Added edge: " << edge.src << "-" << edge.dest 
                     << " (weight: " << edge.weight << ")" << endl;
                
                // MST complete when we have V-1 edges
                if (mst.size() == numVertices - 1) break;
            } else {
                cout << "Rejected edge: " << edge.src << "-" << edge.dest 
                     << " (would create cycle)" << endl;
            }
        }
        
        cout << endl << "Minimum Spanning Tree (Kruskal's):" << endl;
        for (const Edge& edge : mst) {
            cout << edge.src << " - " << edge.dest << " : " << edge.weight << endl;
        }
        cout << "Total MST weight: " << totalWeight << endl;
    }
    
    void displayEdges() {
        cout << "All edges in the graph:" << endl;
        for (const Edge& edge : edges) {
            cout << edge.src << "-" << edge.dest << " : " << edge.weight << endl;
        }
    }
};

int main() {
    // Example 1: Simple connected graph
    cout << "=== Example 1: Simple Connected Graph ===" << endl;
    KruskalMST g1(4);
    g1.addEdge(0, 1, 10);
    g1.addEdge(0, 2, 6);
    g1.addEdge(0, 3, 5);
    g1.addEdge(1, 3, 15);
    g1.addEdge(2, 3, 4);
    
    g1.displayEdges();
    cout << endl;
    g1.findMST();
    
    cout << endl << endl;
    
    // Example 2: More complex graph
    cout << "=== Example 2: Complex Graph ===" << endl;
    KruskalMST g2(6);
    g2.addEdge(0, 1, 4);
    g2.addEdge(0, 2, 2);
    g2.addEdge(1, 2, 1);
    g2.addEdge(1, 3, 5);
    g2.addEdge(2, 3, 8);
    g2.addEdge(2, 4, 10);
    g2.addEdge(3, 4, 2);
    g2.addEdge(3, 5, 6);
    g2.addEdge(4, 5, 3);
    
    g2.displayEdges();
    cout << endl;
    g2.findMST();
    
    return 0;
}
```

</details>


## Prim's MST Algorithm

**Strategy**: Start with a single vertex and grow the MST by adding the minimum weight edge from the current tree to a new vertex.

**Approach**: Vertex-based greedy algorithm using priority queue.

### Algorithm Steps:
1. Start with arbitrary vertex (mark as visited)
2. Add all edges from current vertex to priority queue
3. While priority queue is not empty:
   - Extract minimum weight edge
   - If destination vertex is unvisited, add edge to MST
   - Mark destination as visited
   - Add all edges from new vertex to priority queue
4. Continue until all vertices are in MST

### Key Features:
- **Time Complexity**: O(V log V + E) with binary heap
- **Space Complexity**: O(V) for priority queue
- **Best for**: Dense graphs
- **Data Structure**: Priority Queue (Min-Heap)

### Advantages over Kruskal's:
- No need to sort all edges initially
- Better for dense graphs
- Can find MST incrementally

<details>
<summary><strong>Prim's MST Algorithm C++ Implementation (with Priority Queue)</strong></summary>

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

class PrimMST {
private:
    int numVertices;
    vector<vector<pair<int, int>>> adjList; // {neighbor, weight}
    
public:
    PrimMST(int vertices) : numVertices(vertices) {
        adjList.resize(vertices);
    }
    
    void addEdge(int src, int dest, int weight) {
        adjList[src].push_back({dest, weight});
        adjList[dest].push_back({src, weight});
    }
    
    void findMST() {
        vector<int> key(numVertices, INT_MAX);     // Minimum weight to reach vertex
        vector<int> parent(numVertices, -1);      // Parent in MST
        vector<bool> inMST(numVertices, false);   // Whether vertex is in MST
        
        // Priority queue: {weight, vertex}
        priority_queue<pair<int, int>, 
                      vector<pair<int, int>>, 
                      greater<pair<int, int>>> pq;
        
        // Start from vertex 0
        int startVertex = 0;
        key[startVertex] = 0;
        pq.push({0, startVertex});
        
        int totalWeight = 0;
        
        cout << "Building MST step by step:" << endl;
        
        while (!pq.empty()) {
            int u = pq.top().second;
            int weight = pq.top().first;
            pq.pop();
            
            // Skip if vertex already in MST
            if (inMST[u]) continue;
            
            // Add vertex to MST
            inMST[u] = true;
            totalWeight += key[u];
            
            if (parent[u] != -1) {
                cout << "Added edge: " << parent[u] << "-" << u 
                     << " (weight: " << key[u] << ")" << endl;
            } else {
                cout << "Starting vertex: " << u << endl;
            }
            
            // Update keys of adjacent vertices
            for (auto& edge : adjList[u]) {
                int v = edge.first;
                int edgeWeight = edge.second;
                
                // If v is not in MST and weight of (u,v) is smaller than current key of v
                if (!inMST[v] && edgeWeight < key[v]) {
                    key[v] = edgeWeight;
                    parent[v] = u;
                    pq.push({key[v], v});
                    cout << "  Updated key of vertex " << v << " to " << key[v] 
                         << " via " << u << endl;
                }
            }
        }
        
        cout << endl << "Minimum Spanning Tree (Prim's):" << endl;
        for (int i = 1; i < numVertices; i++) {
            if (parent[i] != -1) {
                cout << parent[i] << " - " << i << " : " << key[i] << endl;
            }
        }
        cout << "Total MST weight: " << totalWeight << endl;
    }
    
    void displayGraph() {
        cout << "Graph adjacency list:" << endl;
        for (int i = 0; i < numVertices; i++) {
            cout << i << " -> ";
            for (auto& edge : adjList[i]) {
                cout << "(" << edge.first << "," << edge.second << ") ";
            }
            cout << endl;
        }
    }
};

int main() {
    // Example 1: Simple connected graph
    cout << "=== Example 1: Simple Connected Graph ===" << endl;
    PrimMST g1(4);
    g1.addEdge(0, 1, 10);
    g1.addEdge(0, 2, 6);
    g1.addEdge(0, 3, 5);
    g1.addEdge(1, 3, 15);
    g1.addEdge(2, 3, 4);
    
    g1.displayGraph();
    cout << endl;
    g1.findMST();
    
    cout << endl << endl;
    
    // Example 2: More complex graph
    cout << "=== Example 2: Complex Graph ===" << endl;
    PrimMST g2(6);
    g2.addEdge(0, 1, 4);
    g2.addEdge(0, 2, 2);
    g2.addEdge(1, 2, 1);
    g2.addEdge(1, 3, 5);
    g2.addEdge(2, 3, 8);
    g2.addEdge(2, 4, 10);
    g2.addEdge(3, 4, 2);
    g2.addEdge(3, 5, 6);
    g2.addEdge(4, 5, 3);
    
    g2.displayGraph();
    cout << endl;
    g2.findMST();
    
    return 0;
}
```

</details>

## MST Algorithm Comparison

| Aspect | Kruskal's Algorithm | Prim's Algorithm |
|--------|-------------------|------------------|
| **Approach** | Edge-based | Vertex-based |
| **Data Structure** | Union-Find + Sorting | Priority Queue |
| **Time Complexity** | O(E log E) | O(V log V + E) |
| **Space Complexity** | O(V) | O(V) |
| **Best for** | Sparse graphs | Dense graphs |
| **Edge Processing** | Global (sort all edges) | Local (process adjacent edges) |
| **Implementation** | Sort edges first | Grow tree incrementally |
| **Memory Access** | Less cache-friendly | More cache-friendly |

### Shortest Path Concepts

- **Single Source Shortest Path (SSSP)**: Finding shortest paths from one source to all other vertices
- **Shortest Path**: A path with minimum total weight between two vertices
- **Relaxation**: Process of updating distance estimates when a shorter path is found
- **Negative Cycle**: A cycle whose total weight is negative
- **Optimal Substructure**: Subpaths of shortest paths are also shortest paths

## Bellman-Ford SSSP Algorithm

**Purpose**: Find shortest paths from a single source to all other vertices in a weighted graph.

**Key Features**:
- **Supports negative edge weights** (unlike Dijkstra's)
- **Detects negative cycles**
- **Uses Dynamic Programming approach**
- **Works on directed and undirected graphs**

### Algorithm Steps:
1. Initialize distances: source = 0, all others = ∞
2. **Relax all edges** |V| - 1 times:
   - For each edge (u,v): if dist[u] + weight(u,v) < dist[v], update dist[v]
3. **Check for negative cycles** in one more iteration:
   - If any distance can still be reduced, negative cycle exists

### Relaxation Process:
**Relaxation** is the process of updating the shortest distance to a vertex if a shorter path is found.
```
if distance[u] + weight(u,v) < distance[v]:
    distance[v] = distance[u] + weight(u,v)
    parent[v] = u
```

### Key Properties:
- **Time Complexity**: O(VE)
- **Space Complexity**: O(V)
- **Negative Cycle Detection**: Can detect and report negative cycles
- **Optimal Substructure**: Uses the fact that shortest paths have optimal substructure

### Why |V| - 1 iterations?
- In a graph with V vertices, the shortest simple path can have at most V-1 edges
- After i iterations, we have correct distances for all paths with at most i edges
- Therefore, V-1 iterations guarantee correct shortest distances

<details>
<summary><strong>Bellman-Ford SSSP Algorithm C++ Implementation</strong></summary>

```cpp
#include <iostream>
#include <vector>
#include <climits>
using namespace std;

struct Edge {
    int src, dest, weight;
};

class BellmanFord {
private:
    int numVertices, numEdges;
    vector<Edge> edges;
    
public:
    BellmanFord(int vertices) : numVertices(vertices), numEdges(0) {}
    
    void addEdge(int src, int dest, int weight) {
        edges.push_back({src, dest, weight});
        numEdges++;
    }
    
    void findShortestPaths(int source) {
        vector<long long> distance(numVertices, LLONG_MAX);
        vector<int> predecessor(numVertices, -1);
        
        // Step 1: Initialize distance to source as 0
        distance[source] = 0;
        
        cout << "Initial distances:" << endl;
        for (int i = 0; i < numVertices; i++) {
            cout << "Vertex " << i << ": ";
            if (distance[i] == LLONG_MAX) cout << "∞";
            else cout << distance[i];
            cout << endl;
        }
        cout << endl;
        
        // Step 2: Relax all edges |V| - 1 times
        cout << "Relaxation process:" << endl;
        for (int iteration = 0; iteration < numVertices - 1; iteration++) {
            bool updated = false;
            cout << "Iteration " << (iteration + 1) << ":" << endl;
            
            for (const Edge& edge : edges) {
                if (distance[edge.src] != LLONG_MAX && 
                    distance[edge.src] + edge.weight < distance[edge.dest]) {
                    
                    long long oldDist = distance[edge.dest];
                    distance[edge.dest] = distance[edge.src] + edge.weight;
                    predecessor[edge.dest] = edge.src;
                    updated = true;
                    
                    cout << "  Relaxed edge " << edge.src << "->" << edge.dest 
                         << ": distance[" << edge.dest << "] changed from ";
                    if (oldDist == LLONG_MAX) cout << "∞";
                    else cout << oldDist;
                    cout << " to " << distance[edge.dest] << endl;
                }
            }
            
            if (!updated) {
                cout << "  No updates in this iteration - early termination" << endl;
                break;
            }
            cout << endl;
        }
        
        // Step 3: Check for negative cycles
        cout << "Checking for negative cycles:" << endl;
        bool hasNegativeCycle = false;
        for (const Edge& edge : edges) {
            if (distance[edge.src] != LLONG_MAX && 
                distance[edge.src] + edge.weight < distance[edge.dest]) {
                hasNegativeCycle = true;
                cout << "Negative cycle detected via edge " << edge.src 
                     << "->" << edge.dest << endl;
                break;
            }
        }
        
        if (hasNegativeCycle) {
            cout << "Graph contains negative cycle - shortest paths undefined!" << endl;
            return;
        }
        
        cout << "No negative cycle found." << endl << endl;
        
        // Display results
        cout << "Bellman-Ford Shortest Paths from vertex " << source << ":" << endl;
        for (int i = 0; i < numVertices; i++) {
            cout << "Vertex " << i << ": ";
            if (distance[i] == LLONG_MAX) {
                cout << "Not reachable" << endl;
            } else {
                cout << "Distance = " << distance[i];
                
                // Print path
                vector<int> path;
                int current = i;
                while (current != -1) {
                    path.push_back(current);
                    current = predecessor[current];
                }
                
                if (path.size() > 1) {
                    cout << ", Path: ";
                    for (int j = path.size() - 1; j >= 0; j--) {
                        cout << path[j];
                        if (j > 0) cout << " -> ";
                    }
                }
                cout << endl;
            }
        }
    }
    
    void displayEdges() {
        cout << "Graph edges:" << endl;
        for (const Edge& edge : edges) {
            cout << edge.src << " -> " << edge.dest << " (weight: " << edge.weight << ")" << endl;
        }
    }
};

int main() {
    // Example 1: Simple graph with negative weights
    cout << "=== Example 1: Graph with Negative Weights ===" << endl;
    BellmanFord g1(4);
    g1.addEdge(0, 1, -1);
    g1.addEdge(0, 2, 4);
    g1.addEdge(1, 2, 3);
    g1.addEdge(1, 3, 2);
    g1.addEdge(3, 2, 5);
    
    g1.displayEdges();
    cout << endl;
    g1.findShortestPaths(0);
    
    cout << endl << endl;
    
    // Example 2: More complex graph
    cout << "=== Example 2: Complex Graph ===" << endl;
    BellmanFord g2(5);
    g2.addEdge(0, 1, 6);
    g2.addEdge(0, 2, 7);
    g2.addEdge(1, 2, 8);
    g2.addEdge(1, 3, -4);
    g2.addEdge(1, 4, 5);
    g2.addEdge(2, 3, 9);
    g2.addEdge(2, 4, -3);
    g2.addEdge(3, 4, 7);
    
    g2.displayEdges();
    cout << endl;
    g2.findShortestPaths(0);
    
    return 0;
}
```
</details>


## Dijkstra's SSSP Algorithm

**Purpose**: Find shortest paths from a single source to all other vertices in a weighted graph with **non-negative edge weights**.

**Key Features**:
- **Greedy approach** - always processes the closest unvisited vertex
- **Does not support negative weights**
- **Faster than Bellman-Ford** for non-negative weights
- **Uses priority queue** for efficient vertex selection

### Algorithm Steps:
1. Initialize distances: source = 0, all others = ∞
2. Add source to priority queue
3. While priority queue is not empty:
   - Extract vertex with minimum distance
   - Mark as visited
   - **Relax all adjacent vertices**
   - Add updated vertices to priority queue
4. Continue until all reachable vertices are processed

### Why No Negative Weights?
Dijkstra's greedy choice assumes that once a vertex is processed (added to the shortest path tree), its shortest distance is final. Negative weights can invalidate this assumption.

### Key Properties:
- **Time Complexity**: O((V + E) log V) with binary heap
- **Space Complexity**: O(V)
- **Optimal for non-negative weights**
- **Greedy algorithm** - makes locally optimal choices

### Optimizations:
- **Binary Heap**: O(log V) for extract-min and decrease-key
- **Fibonacci Heap**: O(log V) for extract-min, O(1) for decrease-key
- **Early termination**: Stop when target vertex is reached

<details>
<summary><strong>Dijkstra's SSSP Algorithm C++ Implementation</strong></summary>

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

class Dijkstra {
private:
    int numVertices;
    vector<vector<pair<int, int>>> adjList; // {neighbor, weight}
    
public:
    Dijkstra(int vertices) : numVertices(vertices) {
        adjList.resize(vertices);
    }
    
    void addEdge(int src, int dest, int weight) {
        adjList[src].push_back({dest, weight});
    }
    
    void findShortestPaths(int source) {
        vector<int> distance(numVertices, INT_MAX);
        vector<int> predecessor(numVertices, -1);
        vector<bool> visited(numVertices, false);
        
        // Priority queue: {distance, vertex} - min heap
        priority_queue<pair<int, int>, 
                      vector<pair<int, int>>, 
                      greater<pair<int, int>>> pq;
        
        // Initialize source
        distance[source] = 0;
        pq.push({0, source});
        
        cout << "Dijkstra's algorithm execution:" << endl;
        cout << "Initial: distance[" << source << "] = 0" << endl << endl;
        
        int step = 1;
        while (!pq.empty()) {
            int u = pq.top().second;
            int dist = pq.top().first;
            pq.pop();
            
            // Skip if vertex already processed
            if (visited[u]) continue;
            
            // Mark vertex as visited (add to shortest path tree)
            visited[u] = true;
            
            cout << "Step " << step++ << ": Processing vertex " << u 
                 << " (distance: " << dist << ")" << endl;
            
            // Relax all adjacent vertices
            for (auto& edge : adjList[u]) {
                int v = edge.first;
                int weight = edge.second;
                
                if (!visited[v] && distance[u] + weight < distance[v]) {
                    int oldDist = distance[v];
                    distance[v] = distance[u] + weight;
                    predecessor[v] = u;
                    pq.push({distance[v], v});
                    
                    cout << "  Relaxed edge " << u << "->" << v 
                         << " (weight " << weight << "): distance[" << v << "] ";
                    if (oldDist == INT_MAX) cout << "∞";
                    else cout << oldDist;
                    cout << " -> " << distance[v] << endl;
                }
            }
            cout << endl;
        }
        
        // Display results
        cout << "Dijkstra's Shortest Paths from vertex " << source << ":" << endl;
        for (int i = 0; i < numVertices; i++) {
            cout << "Vertex " << i << ": ";
            if (distance[i] == INT_MAX) {
                cout << "Not reachable" << endl;
            } else {
                cout << "Distance = " << distance[i];
                
                // Print path
                vector<int> path;
                int current = i;
                while (current != -1) {
                    path.push_back(current);
                    current = predecessor[current];
                }
                
                if (path.size() > 1) {
                    cout << ", Path: ";
                    for (int j = path.size() - 1; j >= 0; j--) {
                        cout << path[j];
                        if (j > 0) cout << " -> ";
                    }
                }
                cout << endl;
            }
        }
    }
    
    void displayGraph() {
        cout << "Graph adjacency list:" << endl;
        for (int i = 0; i < numVertices; i++) {
            cout << i << " -> ";
            for (auto& edge : adjList[i]) {
                cout << "(" << edge.first << "," << edge.second << ") ";
            }
            cout << endl;
        }
    }
};

int main() {
    // Example 1: Simple connected graph
    cout << "=== Example 1: Simple Connected Graph ===" << endl;
    Dijkstra g1(5);
    g1.addEdge(0, 1, 1);
    g1.addEdge(0, 2, 4);
    g1.addEdge(1, 2, 2);
    g1.addEdge(1, 3, 5);
    g1.addEdge(2, 3, 1);
    g1.addEdge(3, 4, 3);
    
    g1.displayGraph();
    cout << endl;
    g1.findShortestPaths(0);
    
    cout << endl << endl;
    
    // Example 2: More complex graph
    cout << "=== Example 2: Complex Graph ===" << endl;
    Dijkstra g2(6);
    g2.addEdge(0, 1, 4);
    g2.addEdge(0, 2, 2);
    g2.addEdge(1, 2, 1);
    g2.addEdge(1, 3, 5);
    g2.addEdge(2, 3, 8);
    g2.addEdge(2, 4, 10);
    g2.addEdge(3, 4, 2);
    g2.addEdge(3, 5, 6);
    g2.addEdge(4, 5, 3);
    
    g2.displayGraph();
    cout << endl;
    g2.findShortestPaths(0);
    
    return 0;
}
```
</details>

## SSSP Algorithm Comparison

| Aspect | Bellman-Ford | Dijkstra's |
|--------|--------------|------------|
| **Negative Weights** | ✅ Supported | ❌ Not supported |
| **Negative Cycle Detection** | ✅ Yes | ❌ No |
| **Time Complexity** | O(VE) | O((V + E) log V) |
| **Space Complexity** | O(V) | O(V) |
| **Approach** | Dynamic Programming | Greedy |
| **Data Structure** | Arrays | Priority Queue |
| **Best Use Case** | Graphs with negative weights | Non-negative weight graphs |
| **Early Termination** | ❌ Must complete all iterations | ✅ Can stop at target |
| **Implementation** | Simpler | More complex |

## Complete Algorithm Summary

### Search Algorithms
| Algorithm | Purpose | Time | Space | Best For |
|-----------|---------|------|-------|----------|
| **BFS** | Level-order traversal | O(V+E) | O(V) | Shortest path (unweighted) |
| **DFS** | Depth-first exploration | O(V+E) | O(V) | Cycle detection, topological sort |

### Minimum Spanning Tree
| Algorithm | Approach | Time | Space | Best For |
|-----------|----------|------|-------|----------|
| **Kruskal's** | Edge-based + Union-Find | O(E log E) | O(V) | Sparse graphs |
| **Prim's** | Vertex-based + Priority Queue | O(V log V + E) | O(V) | Dense graphs |

### Shortest Path
| Algorithm | Constraints | Time | Space | Best For |
|-----------|-------------|------|-------|----------|
| **Bellman-Ford** | Allows negative weights | O(VE) | O(V) | Negative weights, cycle detection |
| **Dijkstra's** | Non-negative weights only | O((V+E) log V) | O(V) | Fastest for non-negative weights |

## Key Theorems and Properties

### Cut Property (MST)
For any cut (S, V-S) of a graph, the light edge crossing the cut is safe for the MST.

### Shortest Path Property  
If p is a shortest path from source s to vertex v, then any subpath of p is also a shortest path between its endpoints.

### Optimal Substructure
Both MST and shortest path problems exhibit optimal substructure, making them suitable for greedy and dynamic programming approaches.

### Cycle Detection
- **Undirected graphs**: Edge to already visited vertex (except parent) indicates cycle
- **Directed graphs**: Back edge in DFS indicates cycle

