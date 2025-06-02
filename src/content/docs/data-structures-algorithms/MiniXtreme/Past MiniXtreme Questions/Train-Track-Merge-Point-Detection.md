---
title: "Train Track Merge Point Detection"
---


<div class="content-text challenge-text mlB">
<div class="challenge_problem_statement"><div class="msB challenge_problem_statement_body"><div class="hackdown-content"><style id="MathJax_SVG_styles">.MathJax_SVG_Display {text-align: center; margin: 1em 0em; position: relative; display: block!important; text-indent: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; width: 100%}
.MathJax_SVG .MJX-monospace {font-family: monospace}
.MathJax_SVG .MJX-sans-serif {font-family: sans-serif}
.MathJax_SVG {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0; min-height: 0; border: 0; padding: 0; margin: 0}
.MathJax_SVG * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.mjx-svg-href {fill: blue; stroke: blue}
.MathJax_SVG_LineBox {display: table!important}
.MathJax_SVG_LineBox span {display: table-cell!important; width: 10000em!important; min-width: 0; max-width: none; padding: 0; border: 0; margin: 0}
</style><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><p>A railway company is analyzing its train routes and wants to determine if two train tracks merge at any station. Each train route is represented as a singly linked list, where each node represents a station, and the <code>next</code> pointer links to the next station on the route.</p>

<p>The company has given you two train routes (linked lists) and wants to return the name(value of node) of the first common station where the routes merge. If the routes do not merge, return the string <code>No merging station</code>.</p>

<p>Your task is to implement a function <strong><code>getMergingStation</code></strong> that finds the first station where the routes merge and returns a <strong>string</strong>.</p>

<p>You are <strong>ONLY allowed to modify</strong> the <strong><code>getMergingStation</code></strong> function. <strong>You are NOT allowed to modify the given template.</strong></p>

<p><strong>NOTE</strong>: The linked lists are constructed such that if there is a merging point, the nodes from that point onward are the same objects in memory (i.e., the two lists share the exact same node instances starting from the merging station).</p></div></div></div><div class="challenge_input_format"><div class="msB challenge_input_format_title"><p><strong>Input Format</strong></p></div><div class="msB challenge_input_format_body"><div class="hackdown-content"><style id="MathJax_SVG_styles">.MathJax_SVG_Display {text-align: center; margin: 1em 0em; position: relative; display: block!important; text-indent: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; width: 100%}
.MathJax_SVG .MJX-monospace {font-family: monospace}
.MathJax_SVG .MJX-sans-serif {font-family: sans-serif}
.MathJax_SVG {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0; min-height: 0; border: 0; padding: 0; margin: 0}
.MathJax_SVG * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.mjx-svg-href {fill: blue; stroke: blue}
.MathJax_SVG_LineBox {display: table!important}
.MathJax_SVG_LineBox span {display: table-cell!important; width: 10000em!important; min-width: 0; max-width: none; padding: 0; border: 0; margin: 0}
</style><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><ul>
<li>The first input line contains m space-separated strings, where each string represents a unique station name in Train Route A.</li>
<li>The second input line contains n space-separated strings, where each string represents a unique station name in Train Route B.</li>
<li>Next three lines contain integers required to create linked lists (You don't need to use these inputs).</li>
</ul></div></div></div><div class="challenge_constraints"><div class="msB challenge_constraints_title"><p><strong>Constraints</strong></p></div><div class="msB challenge_constraints_body"><div class="hackdown-content"><style id="MathJax_SVG_styles">.MathJax_SVG_Display {text-align: center; margin: 1em 0em; position: relative; display: block!important; text-indent: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; width: 100%}
.MathJax_SVG .MJX-monospace {font-family: monospace}
.MathJax_SVG .MJX-sans-serif {font-family: sans-serif}
.MathJax_SVG {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0; min-height: 0; border: 0; padding: 0; margin: 0}
.MathJax_SVG * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.mjx-svg-href {fill: blue; stroke: blue}
.MathJax_SVG_LineBox {display: table!important}
.MathJax_SVG_LineBox span {display: table-cell!important; width: 10000em!important; min-width: 0; max-width: none; padding: 0; border: 0; margin: 0}
</style><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><ul>
<li>1 ≤ m, n ≤ 10^7 (Each train route has at most 10^7 stations)</li>
</ul></div></div></div><div class="challenge_output_format"><div class="msB challenge_output_format_title"><p><strong>Output Format</strong></p></div><div class="msB challenge_output_format_body"><div class="hackdown-content"><style id="MathJax_SVG_styles">.MathJax_SVG_Display {text-align: center; margin: 1em 0em; position: relative; display: block!important; text-indent: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; width: 100%}
.MathJax_SVG .MJX-monospace {font-family: monospace}
.MathJax_SVG .MJX-sans-serif {font-family: sans-serif}
.MathJax_SVG {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0; min-height: 0; border: 0; padding: 0; margin: 0}
.MathJax_SVG * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.mjx-svg-href {fill: blue; stroke: blue}
.MathJax_SVG_LineBox {display: table!important}
.MathJax_SVG_LineBox span {display: table-cell!important; width: 10000em!important; min-width: 0; max-width: none; padding: 0; border: 0; margin: 0}
</style><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><ul>
<li>Return Merge at  if the routes merge at some station.</li>
<li>Return No merging station if they do not merge.</li>
</ul></div></div></div><div class="challenge_sample_input"><div class="msB challenge_sample_input_title"><p><strong>Sample Input 0</strong></p></div><div class="msB challenge_sample_input_body"><div class="hackdown-content"><style id="MathJax_SVG_styles">.MathJax_SVG_Display {text-align: center; margin: 1em 0em; position: relative; display: block!important; text-indent: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; width: 100%}
.MathJax_SVG .MJX-monospace {font-family: monospace}
.MathJax_SVG .MJX-sans-serif {font-family: sans-serif}
.MathJax_SVG {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0; min-height: 0; border: 0; padding: 0; margin: 0}
.MathJax_SVG * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.mjx-svg-href {fill: blue; stroke: blue}
.MathJax_SVG_LineBox {display: table!important}
.MathJax_SVG_LineBox span {display: table-cell!important; width: 10000em!important; min-width: 0; max-width: none; padding: 0; border: 0; margin: 0}
</style><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><div class="highlight"><pre><span></span><span class="err">31 39 56 34 32 96 35 17 48 51 52 70 97 16 76 38</span>
<span class="err">11 8 50 12 19 68 37 20 10 5 98 43 84 53 79 87 77 54 57 90 70 97 16 76 38</span>
<span class="err">1</span>
<span class="err">11</span>
<span class="err">20</span>
</pre></div>
</div></div></div><div class="challenge_sample_output"><div class="msB challenge_sample_output_title"><p><strong>Sample Output 0</strong></p></div><div class="msB challenge_sample_output_body"><div class="hackdown-content"><style id="MathJax_SVG_styles">.MathJax_SVG_Display {text-align: center; margin: 1em 0em; position: relative; display: block!important; text-indent: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; width: 100%}
.MathJax_SVG .MJX-monospace {font-family: monospace}
.MathJax_SVG .MJX-sans-serif {font-family: sans-serif}
.MathJax_SVG {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0; min-height: 0; border: 0; padding: 0; margin: 0}
.MathJax_SVG * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.mjx-svg-href {fill: blue; stroke: blue}
.MathJax_SVG_LineBox {display: table!important}
.MathJax_SVG_LineBox span {display: table-cell!important; width: 10000em!important; min-width: 0; max-width: none; padding: 0; border: 0; margin: 0}
</style><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><div class="highlight"><pre><span></span><span class="err">Merge at 70</span>
</pre></div>
</div></div></div><div class="challenge_sample_input"><div class="msB challenge_sample_input_title"><p><strong>Sample Input 1</strong></p></div><div class="msB challenge_sample_input_body"><div class="hackdown-content"><style id="MathJax_SVG_styles">.MathJax_SVG_Display {text-align: center; margin: 1em 0em; position: relative; display: block!important; text-indent: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; width: 100%}
.MathJax_SVG .MJX-monospace {font-family: monospace}
.MathJax_SVG .MJX-sans-serif {font-family: sans-serif}
.MathJax_SVG {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0; min-height: 0; border: 0; padding: 0; margin: 0}
.MathJax_SVG * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.mjx-svg-href {fill: blue; stroke: blue}
.MathJax_SVG_LineBox {display: table!important}
.MathJax_SVG_LineBox span {display: table-cell!important; width: 10000em!important; min-width: 0; max-width: none; padding: 0; border: 0; margin: 0}
</style><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><div class="highlight"><pre><span></span><span class="err">47 43 7 91 9 14 38 54 1 11 25 8 46 39</span>
<span class="err">64 41 81 83 90 67 87 27 22 18 25 8 46 39</span>
<span class="err">1</span>
<span class="err">10</span>
<span class="err">10</span>
</pre></div>
</div></div></div>










## Solution
> Solution by Sangeeth

```cpp

#include <iostream>
#include <unordered_set>
#include <vector>
#include <sstream>

using namespace std;

struct ListNode {
    string val;
    ListNode* next;
    ListNode(string x) : val(x), next(nullptr) {}
};

string getMergingStation(ListNode* headA, ListNode* headB) {
    vector <int> listA;
    vector<int> listB;
      while (headA != nullptr) {
        listA.push_back(stoi(headA->val));
        headA = headA->next;
    }
    
     while (headB != nullptr) {
        listB.push_back(stoi(headB->val));
        headB = headB->next;
    }
    
    
 
    
    
    
   int i = listA.size() - 1;
    int j = listB.size() - 1;
    int intersectionPoint = -1; // Default value if no intersection

    while (i >= 0 && j >= 0) {
        if (listA[i] == listB[j]) {
            intersectionPoint = listA[i];
            i--;
            j--;
        }  else {
           break;
        }
    }
    

   
    if (intersectionPoint== -1){
        return "No merging station";
    }
    else {return "Merge at " + to_string(intersectionPoint) ;}
    /* Enter your code here. */
}

ListNode* createLinkedLists(string intersect_val, vector<string>& listA_vals, vector<string>& listB_vals, int skipA, int skipB, ListNode*& headB) {
    if (listA_vals.empty() || listB_vals.empty()) return nullptr;
    
    vector<ListNode*> nodesA;

    for (const string& val : listA_vals) nodesA.push_back(new ListNode(val));
    for (size_t i = 0; i < nodesA.size() - 1; ++i) nodesA[i]->next = nodesA[i + 1];
    ListNode* headA = nodesA[0];
    
    if (intersect_val == "0") {
        vector<ListNode*> nodesB;
        for (const string& val : listB_vals) nodesB.push_back(new ListNode(val));
        for (size_t i = 0; i < nodesB.size() - 1; ++i) nodesB[i]->next = nodesB[i + 1];
        headB = nodesB[0];
    } else {
        vector<ListNode*> nodesB;
        int s = listB_vals.size();
        for (int i = 0; i < skipB && i < s; ++i) nodesB.push_back(new ListNode(listB_vals[i]));
        for (size_t i = 0; i < nodesB.size() - 1; ++i) nodesB[i]->next = nodesB[i + 1];
        headB = nodesB.empty() ? nullptr : nodesB[0];
        
        int n_s = nodesA.size();
        ListNode* intersection_node = (skipA < n_s) ? nodesA[skipA] : nullptr;
        if (!nodesB.empty() && intersection_node) nodesB.back()->next = intersection_node;
        else if (nodesB.empty()) headB = intersection_node;
    }
    return headA;
}

int main() {
    vector<string> listA_vals, listB_vals;
    string station;
    
    string inputA, inputB;
    getline(cin, inputA);
    getline(cin, inputB);
    
    istringstream streamA(inputA), streamB(inputB);
    while (streamA >> station) listA_vals.push_back(station);
    while (streamB >> station) listB_vals.push_back(station);
    
    string intersect_val;
    cin >> intersect_val;
    
    int skipA, skipB;
    cin >> skipA >> skipB;
    
    ListNode* headA;
    ListNode* headB;
    headA = createLinkedLists(intersect_val, listA_vals, listB_vals, skipA, skipB, headB);
    
    cout << getMergingStation(headA, headB) << endl;
    return 0;
}