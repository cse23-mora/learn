---
title: "Factorials Product Number"
---

<div>
<div>
<div>
<div>
<div>
<p>In mathematics, there is a little game. The following is how a function F(x) is defined:</p>
<ul>
<li>F(x) = Product of the factorials of digits in x.</li>
</ul>
<p><em>ex</em> : <br /> &emsp;&emsp; <strong><em>F</em> (234) = 2! * 3! * 4!</strong></p>
<p>A decimal number <strong>a</strong> is selected which has n digits. This number can have leading zeros as well. Furthermore, <strong><em>&lsquo;a&rsquo;</em></strong> has at least one digit larger than 1.</p>
<p><br /><strong>Task</strong></p>
<p>You should be able to find maximum positive number <strong><em>x</em></strong> with satisfying <strong><em>F(x)=F(a)</em></strong> and <strong><em>x</em></strong> contains <strong>neither digit 0 nor digit 1</strong>. This number may have more digits than the original number.</p>
</div>
</div>
</div>
<div>
<div>
<p><strong>Input Format</strong></p>
</div>
<div>
<div>
<p>First-line contains an integer <strong><em>n</em></strong>, the number of digits in <strong><em>a</em></strong><br /> The second line contains <strong><em>n</em></strong> digits of <strong><em>a</em></strong><br /><br /> (<strong><em>&lsquo;a&rsquo;</em></strong> has at least one digit larger than 1. This number can have leading zeros as well)</p>
</div>
</div>
</div>
<div>
<div>
<p><strong>Constraints</strong></p>
</div>
<div>
<div>
<p>1&thinsp;&le;&thinsp;<em>n</em>&thinsp;&le;&thinsp;15</p>
</div>
</div>
</div>
<div>
<div>
<p><strong>Output Format</strong></p>
</div>
<div>
<div>
<p>An Integer, maximum possible number satisfying the conditions. <br /><br /> (There should be <strong>no 0's and 1's</strong> in this number's decimal representation)</p>
</div>
</div>
</div>
<div>
<div>
<p><strong>Sample Input 0</strong></p>
</div>
<div>
<div>
<div>
<pre>4
1256
</pre>
</div>
</div>
</div>
</div>
<div>
<div>
<p><strong>Sample Output 0</strong></p>
</div>
<div>
<div>
<div>
<pre>5532
</pre>
</div>
</div>
</div>
</div>
<div>
<div>
<p><strong>Sample Input 1</strong></p>
</div>
<div>
<div>
<div>
<pre>3
564
</pre>
</div>
</div>
</div>
</div>
<div>
<div>
<p><strong>Sample Output 1</strong></p>
</div>
<div>
<div>
<div>
<pre>553322
</pre>
</div>
</div>
</div>
</div>
</div>
</div>