---
title: "Graph Algorithms"
---
## Minimum Spanning Tree

### Prim's Algorithm

```cpp
#include <vector>
#include <queue>
#include <climits>
using namespace std;

struct Edge {
    int to, weight;
};

int primMST(vector<vector<Edge>>& graph, int n) {
    vector<bool> inMST(n, false);
    vector<int> key(n, INT_MAX);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    
    key[0] = 0;
    pq.push({0, 0}); // {weight, vertex}
    
    int mstWeight = 0;
    
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        
        if (inMST[u]) continue;
        
        inMST[u] = true;
        mstWeight += key[u];
        
        for (Edge& e : graph[u]) {
            int v = e.to;
            int weight = e.weight;
            
            if (!inMST[v] && weight < key[v]) {
                key[v] = weight;
                pq.push({key[v], v});
            }
        }
    }
    
    return mstWeight;
}
```

### Kruskal's Algorithm

```cpp
#include <vector>
#include <algorithm>
using namespace std;

struct Edge {
    int u, v, weight;
    bool operator<(const Edge& other) const {
        return weight < other.weight;
    }
};

class UnionFind {
public:
    vector<int> parent, rank;
    
    UnionFind(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    bool unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        
        if (rank[px] < rank[py]) {
            parent[px] = py;
        } else if (rank[px] > rank[py]) {
            parent[py] = px;
        } else {
            parent[py] = px;
            rank[px]++;
        }
        return true;
    }
};

int kruskalMST(vector<Edge>& edges, int n) {
    sort(edges.begin(), edges.end());
    UnionFind uf(n);
    
    int mstWeight = 0;
    int edgesUsed = 0;
    
    for (Edge& e : edges) {
        if (uf.unite(e.u, e.v)) {
            mstWeight += e.weight;
            edgesUsed++;
            if (edgesUsed == n - 1) break;
        }
    }
    
    return mstWeight;
}
```

## Single Source Shortest Path

### Dijkstra's Algorithm

```cpp
#include <vector>
#include <queue>
#include <climits>
using namespace std;

struct Edge {
    int to, weight;
};

vector<int> dijkstra(vector<vector<Edge>>& graph, int src, int n) {
    vector<int> dist(n, INT_MAX);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    
    dist[src] = 0;
    pq.push({0, src}); // {distance, vertex}
    
    while (!pq.empty()) {
        int u = pq.top().second;
        int d = pq.top().first;
        pq.pop();
        
        if (d > dist[u]) continue;
        
        for (Edge& e : graph[u]) {
            int v = e.to;
            int weight = e.weight;
            
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
    
    return dist;
}
```

### Bellman-Ford Algorithm

```cpp
#include <vector>
#include <climits>
using namespace std;

struct Edge {
    int from, to, weight;
};

pair<vector<int>, bool> bellmanFord(vector<Edge>& edges, int n, int src) {
    vector<int> dist(n, INT_MAX);
    dist[src] = 0;
    
    // Relax edges n-1 times
    for (int i = 0; i < n - 1; i++) {
        for (Edge& e : edges) {
            if (dist[e.from] != INT_MAX && dist[e.from] + e.weight < dist[e.to]) {
                dist[e.to] = dist[e.from] + e.weight;
            }
        }
    }
    
    // Check for negative cycles
    for (Edge& e : edges) {
        if (dist[e.from] != INT_MAX && dist[e.from] + e.weight < dist[e.to]) {
            return {dist, true}; // Negative cycle detected
        }
    }
    
    return {dist, false}; // No negative cycle
}
```

**Key Differences:**

**Minimum Spanning Tree:**
- Prim's: Grows MST one vertex at a time, uses priority queue
- Kruskal's: Sorts all edges, uses Union-Find to detect cycles

**Single Source Shortest Path:**
- Dijkstra's: Works only with non-negative weights, uses priority queue
- Bellman-Ford: Handles negative weights, detects negative cycles, slower O(VE) complexity