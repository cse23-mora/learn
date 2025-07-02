---
title: "Even Odd Query"
---

<div class="span-sm-11 hr_tour-problem-statement problem-statement">
            
            
            
            
<div class="content-text challenge-text mlB">
    <div class="challenge_problem_statement"><div class="msB challenge_problem_statement_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><p>You are given an array <em>A</em> of size <em>N</em>. You are also given an integer <em>Q</em>. Can you figure out the answer to each of the <em>Q</em> queries?</p>

<p>Each query contains 2 integers x and y, and you need to find whether the value find(x,y) is Odd or Even:</p>

<pre><code>find(int x,int y)
{
    if(x&gt;y) return 1;
    ans = pow(A[x],find(x+1,y))
    return ans
}
</code></pre>

<p>Note : pow(a,b) = <em>a<sup>b</sup></em>.</p>

<p><strong>Input Format</strong> <br>
The first line of the input contains an integer <em>N</em>. 
The next line contains <em>N</em> space separated non-negative integers(whole numbers less than or equal to 9). <br>
The line after that contains a positive integer, <em>Q</em> , the denotes the number of queries to follow.
<em>Q</em> lines follow, each line contains two positive integer <em>x</em> and <em>y</em> separated by a single space.   </p>

<p><strong>Output Format</strong> <br>
For each query, display 'Even' if the value returned is Even, otherwise display 'Odd'.</p>

<p><strong>Constraints</strong> <br>
2 ≤ <em>N</em> ≤ 10<sup>5</sup> <br>
2 ≤ <em>Q</em> ≤ 10<sup>5</sup> <br>
1 ≤ <em>x,y</em> ≤ <em>N</em> <br>
<em>x</em> ≤ <em>y</em></p>

<p>Array is 1-indexed.  </p>

<p><em>No 2 consecutive entries in the array will be zero.</em></p>

<p><strong>Sample Input</strong> </p>

<pre><code>3
3 2 7
2
1 2
2 3
</code></pre>

<p><strong>Sample Output</strong> </p>

<pre><code>Odd
Even
</code></pre>

<p><strong>Explanation</strong></p>

<p>find(1,2) = 9, which is Odd <br>
find(2,3) = 128, which is even  </p></div></div></div>
            </div>
            

            
</div>

## Solution
> By 

```cpp



```