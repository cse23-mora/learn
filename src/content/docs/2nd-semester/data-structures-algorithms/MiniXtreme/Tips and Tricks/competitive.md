---
title: "Useful C++ Code Snippets"
description: "Essential C++ code snippets for competitive programming"
---

## Common Headers and Setup

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>
#include <map>
#include <set>
#include <unordered_map>
#include <unordered_set>
#include <queue>
#include <stack>
#include <climits>
using namespace std;
```

## Input/Output Operations

### 1. Read Space-Separated Integers into Vector
```cpp
vector<int> readIntArray(int n) {
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    return arr;
}
```

### 2. Read Entire Line of Space-Separated Integers
```cpp
vector<int> readLineInts() {
    string line;
    getline(cin, line);
    stringstream ss(line);
    vector<int> nums;
    int num;
    while (ss >> num) {
        nums.push_back(num);
    }
    return nums;
}
```

### 3. Read 2D Array/Matrix
```cpp
vector<vector<int>> read2DArray(int rows, int cols) {
    vector<vector<int>> matrix(rows, vector<int>(cols));
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }
    return matrix;
}
```

### 4. Fast I/O Setup (for Large Inputs)
```cpp
void fastIO() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
}
```

## String Operations

### 5. Split String by Delimiter
```cpp
vector<string> split(string str, char delimiter) {
    vector<string> tokens;
    stringstream ss(str);
    string token;
    while (getline(ss, token, delimiter)) {
        tokens.push_back(token);
    }
    return tokens;
}
```

### 6. Check if String is Palindrome
```cpp
bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}
```

## Array/Vector Utilities

### 7. Print Vector
```cpp
void printVector(const vector<int>& v) {
    for (int i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i < v.size() - 1) cout << " ";
    }
    cout << endl;
}
```

### 8. Find Max and Min in Array
```cpp
pair<int, int> findMinMax(const vector<int>& arr) {
    int minVal = *min_element(arr.begin(), arr.end());
    int maxVal = *max_element(arr.begin(), arr.end());
    return {minVal, maxVal};
}
```

### 9. Count Frequency of Elements
```cpp
map<int, int> countFrequency(const vector<int>& arr) {
    map<int, int> freq;
    for (int x : arr) {
        freq[x]++;
    }
    return freq;
}
```

## Mathematical Operations

### 10. Greatest Common Divisor (GCD)
```cpp
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}
```

### 11. Least Common Multiple (LCM)
```cpp
int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}
```

### 12. Check if Number is Prime
```cpp
bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}
```

### 13. Modular Exponentiation (a^b mod m)
```cpp
long long power(long long a, long long b, long long mod = 1e9 + 7) {
    long long result = 1;
    a %= mod;
    while (b > 0) {
        if (b & 1) result = (result * a) % mod;
        a = (a * a) % mod;
        b >>= 1;
    }
    return result;
}
```

## Graph Algorithms

### 14. Depth-First Search (DFS)
```cpp
void dfs(int node, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[node] = true;
    cout << node << " ";
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, adj, visited);
        }
    }
}
```

### 15. Breadth-First Search (BFS)
```cpp
void bfs(int start, vector<vector<int>>& adj) {
    vector<bool> visited(adj.size(), false);
    queue<int> q;
    q.push(start);
    visited[start] = true;
    
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";
        
        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}
```

## Searching and Sorting

### 16. Binary Search
```cpp
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // not found
}
```

### 17. Custom Comparator for Sorting
```cpp
bool customSort(pair<int, int> a, pair<int, int> b) {
    return a.second < b.second; // sort by second element
}

// Usage: sort(vec.begin(), vec.end(), customSort);
```

## Advanced Patterns

### 18. Sliding Window Maximum
```cpp
vector<int> slidingWindowMax(vector<int>& nums, int k) {
    deque<int> dq; // stores indices
    vector<int> result;
    
    for (int i = 0; i < nums.size(); i++) {
        // Remove elements outside window
        while (!dq.empty() && dq.front() <= i - k) {
            dq.pop_front();
        }
        
        // Remove smaller elements
        while (!dq.empty() && nums[dq.back()] <= nums[i]) {
            dq.pop_back();
        }
        
        dq.push_back(i);
        
        if (i >= k - 1) {
            result.push_back(nums[dq.front()]);
        }
    }
    return result;
}
```

### 19. Two Pointers Technique
```cpp
bool twoSum(vector<int>& arr, int target) {
    sort(arr.begin(), arr.end());
    int left = 0, right = arr.size() - 1;
    
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
}
```

## Main Function Template

### 20. Basic Template for HackerRank Problems
```cpp
int main() {
    fastIO();
    
    int t;
    cin >> t; // number of test cases
    
    while (t--) {
        // Read input
        int n;
        cin >> n;
        vector<int> arr = readIntArray(n);
        
        // Process and output result
        // Your solution here
        
    }
    
    return 0;
}
```

## Pro Tips

- **Always use `fastIO()`** for time-critical problems with large inputs
- **Use `vector<int>` instead of arrays** when size isn't known at compile time
- **Handle edge cases** like empty arrays, single elements, or negative numbers
- **Use `stringstream`** for complex string parsing operations
- **Use `long long`** when dealing with large numbers to avoid integer overflow
- **Remember the MOD value** - often `1e9 + 7` in competitive programming
- **Test with sample inputs** before submitting to catch common mistakes