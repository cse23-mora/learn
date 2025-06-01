---
title: "Game Scheduler"
---

<div class="span-sm-11 hr_tour-problem-statement problem-statement"> 
<div class="content-text challenge-text mlB">
    <div class="challenge_problem_statement"><div class="msB challenge_problem_statement_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><p>You are organizing a series of game rounds for a tournament, with each round represented by a team number by English alphabetical letter. However, there's a constraint: according to the game rules, rounds for the same team must be separated by at least n intervals to ensure fair gameplay which is under game rules.
Your task is to determine the minimum number of intervals required to complete all the game rounds, considering the constraint on the separation of rounds for the same team.</p>

<p>Example 1:</p>

<p>Input: </p>

<div class="highlight"><pre><span></span><span class="p">[</span><span class="s2">"A"</span><span class="p">,</span><span class="s2">"A"</span><span class="p">,</span><span class="s2">"A"</span><span class="p">,</span><span class="s2">"B"</span><span class="p">,</span><span class="s2">"B"</span><span class="p">,</span><span class="s2">"B"</span><span class="p">]</span>
<span class="mi">2</span>
</pre></div>


<p>Output: </p>

<div class="highlight"><pre><span></span><span class="mi">8</span>
</pre></div>


<p>Explanation: A possible sequence is: A -&gt; B -&gt; idle -&gt; A -&gt; B -&gt; idle -&gt; A -&gt; B.</p>

<p>After participate team A, you must wait two cycles before participating  A again. The same applies to team B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.</p>

<p>Example 2:</p>

<p>Input: </p>

<div class="highlight"><pre><span></span><span class="p">[</span><span class="s2">"A"</span><span class="p">,</span><span class="s2">"C"</span><span class="p">,</span><span class="s2">"A"</span><span class="p">,</span><span class="s2">"B"</span><span class="p">,</span><span class="s2">"D"</span><span class="p">,</span><span class="s2">"B"</span><span class="p">]</span>
<span class="mi">1</span>
</pre></div>


<p>Output: </p>

<div class="highlight"><pre><span></span><span class="mi">6</span>
</pre></div>


<p>Explanation: A possible sequence is: A -&gt; B -&gt; C -&gt; D -&gt; A -&gt; B.</p>

<p>With a interval of 1, you can participate a team after just one other round.</p>

<p>Example 3:</p>

<p>Input: </p>

<div class="highlight"><pre><span></span><span class="p">[</span><span class="s2">"A"</span><span class="p">,</span><span class="s2">"A"</span><span class="p">,</span><span class="s2">"A"</span><span class="p">,</span> <span class="s2">"B"</span><span class="p">,</span><span class="s2">"B"</span><span class="p">,</span><span class="s2">"B"</span><span class="p">]</span>
<span class="mi">3</span>
</pre></div>


<p>Output: </p>

<div class="highlight"><pre><span></span><span class="mi">10</span>
</pre></div>


<p>Explanation: A possible sequence is: A -&gt; B -&gt; idle -&gt; idle -&gt; A -&gt; B -&gt; idle -&gt; idle -&gt; A -&gt; B.</p>

<p>There are only two types of teams, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these team rounds.</p></div></div></div><div class="challenge_input_format"><div class="msB challenge_input_format_title"><p><strong>Input Format</strong></p></div><div class="msB challenge_input_format_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><p>First-line contains an array of teams
The second line contains n as the interval</p></div></div></div><div class="challenge_constraints"><div class="msB challenge_constraints_title"><p><strong>Constraints</strong></p></div><div class="msB challenge_constraints_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><p>1 &lt;= rounds.length &lt;= 104</p>

<p>teams[i] is an uppercase English letter.</p>

<p>0 &lt;= n &lt;= 100</p></div></div></div><div class="challenge_output_format"><div class="msB challenge_output_format_title"><p><strong>Output Format</strong></p></div><div class="msB challenge_output_format_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><p>n</p></div></div></div><div class="challenge_sample_input"><div class="msB challenge_sample_input_title"><p><strong>Sample Input 0</strong></p></div><div class="msB challenge_sample_input_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><div class="highlight"><pre><span></span><span class="err">["A","A","A","B","B","B"]</span>
<span class="err">2</span>
</pre></div>
</div></div></div><div class="challenge_sample_output"><div class="msB challenge_sample_output_title"><p><strong>Sample Output 0</strong></p></div><div class="msB challenge_sample_output_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><div class="highlight"><pre><span class="err">8</span>
</pre></div>
</div></div></div><div class="challenge_sample_input"><div class="msB challenge_sample_input_title"><p><strong>Sample Input 1</strong></p></div><div class="msB challenge_sample_input_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><div class="highlight"><pre><span></span><span class="err">["A","C","A","B","D","B"]</span>
<span class="err">1</span>
</pre></div>
</div></div></div><div class="challenge_sample_output"><div class="msB challenge_sample_output_title"><p><strong>Sample Output 1</strong></p></div><div class="msB challenge_sample_output_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><div class="highlight"><pre><span class="err">6</span>
</pre></div>
</div></div></div><div class="challenge_sample_input"><div class="msB challenge_sample_input_title"><p><strong>Sample Input 2</strong></p></div><div class="msB challenge_sample_input_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><div class="highlight"><pre><span></span><span class="err">['Y', 'K', 'F', 'H', 'K', 'W', 'W', 'C', 'H', 'N', 'A', 'B', 'P', 'B', 'B', 'G', 'X', 'Z', 'O', 'X', 'C', 'C', 'P', 'X', 'N', 'O', 'Y', 'R', 'G', 'U', 'O', 'P', 'U', 'S', 'T', 'K', 'E', 'F', 'G', 'N', 'T', 'O', 'W', 'B', 'A', 'B', 'W', 'S', 'Y', 'M', 'P', 'I', 'M', 'O', 'K', 'Z', 'G', 'H', 'U', 'I', 'I', 'M', 'X', 'Y', 'D', 'B', 'K', 'T', 'H', 'J', 'L', 'I', 'M']</span>
<span class="err">96</span>
</pre></div>
</div></div></div><div class="challenge_sample_output"><div class="msB challenge_sample_output_title"><p><strong>Sample Output 2</strong></p></div><div class="msB challenge_sample_output_body"><div class="hackdown-content"><svg style="display: none;"><defs id="MathJax_SVG_glyphs"></defs></svg><div class="highlight"><pre><span></span><span class="err">486</span>
</pre></div>
</div></div></div>
            </div>
</div>