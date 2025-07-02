---
title: "Common Dynamic Programming Algorithms in C++"
---

## 1. 0/1 Knapsack Problem

**Description**: Given a set of items with weights and values, and a knapsack with limited capacity, find the maximum value that can be obtained by selecting items without exceeding the weight limit. Each item can only be taken once (0/1 constraint).

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int knapsack(vector<int>& weights, vector<int>& values, int W) {
    int n = weights.size();
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (weights[i-1] <= w) {
                dp[i][w] = max(values[i-1] + dp[i-1][w - weights[i-1]], 
                              dp[i-1][w]);
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][W];
}
```

## 2. Fibonacci Sequence

**Description**: Calculates the nth Fibonacci number where each number is the sum of the two preceding ones. The sequence starts with 0 and 1. This demonstrates the classic memoization technique to avoid redundant calculations.

```cpp
#include <iostream>
#include <vector>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    
    vector<int> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
```

## 3. Longest Common Subsequence (LCS)

**Description**: Finds the length of the longest subsequence common to two strings. A subsequence doesn't need to be contiguous but must maintain relative order. Useful in diff algorithms, DNA sequencing, and version control systems.

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int longestCommonSubsequence(string text1, string text2) {
    int m = text1.length();
    int n = text2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1[i-1] == text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}
```

## 4. Coin Change Problem

**Description**: Determines the minimum number of coins needed to make a given amount using available coin denominations. Returns -1 if the amount cannot be made. This is a classic example of the "minimum ways" DP pattern.

```cpp
#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i && dp[i - coin] != INT_MAX) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}
```

## 5. Longest Increasing Subsequence (LIS)

**Description**: Finds the length of the longest subsequence where elements are in strictly increasing order. The subsequence doesn't need to be contiguous. This algorithm has applications in patience sorting and box stacking problems.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int lengthOfLIS(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n, 1);
    
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
    }
    return *max_element(dp.begin(), dp.end());
}
```

## 6. Edit Distance (Levenshtein Distance)

**Description**: Calculates the minimum number of single-character edits (insertions, deletions, or substitutions) required to transform one string into another. Widely used in spell checkers, DNA analysis, and plagiarism detection.

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int minDistance(string word1, string word2) {
    int m = word1.length();
    int n = word2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));
    
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]}) + 1;
            }
        }
    }
    return dp[m][n];
}
```

## 7. Maximum Subarray Sum (Kadane's Algorithm)

**Description**: Finds the contiguous subarray with the largest sum within a one-dimensional array. This algorithm efficiently handles arrays with both positive and negative numbers and runs in linear time.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}
```

## 8. House Robber Problem

**Description**: A robber wants to rob houses along a street but cannot rob two adjacent houses (alarm will trigger). Given an array of house values, find the maximum amount that can be robbed without alerting the police.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int rob(vector<int>& nums) {
    int n = nums.size();
    if (n == 0) return 0;
    if (n == 1) return nums[0];
    
    vector<int> dp(n);
    dp[0] = nums[0];
    dp[1] = max(nums[0], nums[1]);
    
    for (int i = 2; i < n; i++) {
        dp[i] = max(dp[i-1], dp[i-2] + nums[i]);
    }
    return dp[n-1];
}
```

## 9. Climbing Stairs

**Description**: Calculate the number of distinct ways to climb a staircase with n steps, where you can climb either 1 or 2 steps at a time. This is essentially a Fibonacci sequence in disguise, demonstrating how DP patterns appear in different contexts.

```cpp
#include <iostream>
#include <vector>
using namespace std;

int climbStairs(int n) {
    if (n <= 2) return n;
    
    vector<int> dp(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
```

## 10. Unique Paths in Grid

**Description**: Count the number of unique paths from the top-left corner to the bottom-right corner of an m×n grid, where you can only move right or down. This problem appears in robotics path planning and combinatorial counting.

```cpp
#include <iostream>
#include <vector>
using namespace std;

int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));
    
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
}
```

## 11. Word Break Problem

**Description**: Determines if a string can be segmented into words from a given dictionary. Each dictionary word can be used multiple times. This problem has applications in natural language processing and parsing.

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

bool wordBreak(string s, vector<string>& wordDict) {
    unordered_set<string> wordSet(wordDict.begin(), wordDict.end());
    vector<bool> dp(s.length() + 1, false);
    dp[0] = true;
    
    for (int i = 1; i <= s.length(); i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && wordSet.count(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length()];
}
```

## 12. Matrix Chain Multiplication

**Description**: Finds the optimal way to parenthesize a chain of matrix multiplications to minimize the total number of scalar multiplications. This is a classic interval DP problem that demonstrates how to optimize associative operations.

```cpp
#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int matrixChainOrder(vector<int>& dimensions) {
    int n = dimensions.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));
    
    for (int len = 2; len < n; len++) {
        for (int i = 1; i < n - len + 1; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k <= j - 1; k++) {
                int cost = dp[i][k] + dp[k+1][j] + 
                          dimensions[i-1] * dimensions[k] * dimensions[j];
                dp[i][j] = min(dp[i][j], cost);
            }
        }
    }
    return dp[1][n-1];
}
```

## 13. Palindrome Partitioning

**Description**: Finds the minimum number of cuts needed to partition a string such that every substring is a palindrome. This combines string processing with optimization, using precomputation to efficiently check palindromes.

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int minCut(string s) {
    int n = s.length();
    vector<int> dp(n, 0);
    vector<vector<bool>> isPalindrome(n, vector<bool>(n, false));
    
    // Precompute palindrome table
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            if (s[i] == s[j] && (i - j <= 2 || isPalindrome[j+1][i-1])) {
                isPalindrome[j][i] = true;
            }
        }
    }
    
    for (int i = 0; i < n; i++) {
        if (isPalindrome[0][i]) {
            dp[i] = 0;
        } else {
            dp[i] = i;
            for (int j = 1; j <= i; j++) {
                if (isPalindrome[j][i]) {
                    dp[i] = min(dp[i], dp[j-1] + 1);
                }
            }
        }
    }
    return dp[n-1];
}
```

## Key Characteristics of DP Problems

1. **Optimal Substructure**: The optimal solution contains optimal solutions to subproblems
2. **Overlapping Subproblems**: The same subproblems are solved multiple times
3. **Memoization**: Store results of subproblems to avoid recomputation

## Common DP Patterns

- **Linear DP**: 1D array (Fibonacci, Climbing Stairs)
- **Grid DP**: 2D array (Unique Paths, LCS)
- **Interval DP**: Problems on ranges (Matrix Chain Multiplication)
- **Tree DP**: Dynamic programming on trees
- **Bitmask DP**: Using bitmasks to represent states