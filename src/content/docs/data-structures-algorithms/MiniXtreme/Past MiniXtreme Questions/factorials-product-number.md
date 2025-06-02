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

## Solution 1
> By Nadeesha Jayamanne

```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <stack>
#include <map>
using namespace std;

int fact(int num){
    map<int,int> factorials={{2,2},{3,6},{4,24},{5,120},{6,720},{7,5040},{8,40320},{9,362880}};
    return factorials[num];
}
bool isPrime(int num){
    if(num==2 || num==3 || num==5 || num==7 )
    return true;
    else return false;
}

int Big_Prime(int digit, vector<int> &X){
    for(int i=digit;i>1;i--){
        if(isPrime(i)){
            X.push_back(i);
            int Rest=1;
            Rest=fact(digit)/fact(i);            
            return Rest;
        }
    }
    return -1;
}


void div_prime(int value, vector<int> &X){
    int Rest=0;
    for(int i=value;i>1;i--){
        if(isPrime(i) && value%i==0){
            X.push_back(i);
            Rest=value/fact(i);
            break;
        }
    }       
    if(Rest>2){
        div_prime(Rest, X);
    }
    else if (Rest==2){
        X.push_back(Rest);
    }
}

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    int n;
    long long a;
    cin >> n;
    cin >> a;
    stack<int> digits;
    for(int i=n; i>0;i--){
        int num = a%10;
        a /= 10;
        digits.push(num);
    }
    
    vector<int> X;
    
    while(!digits.empty()){
        int digit = digits.top();
        digits.pop();
        
        if(digit==0 || digit ==1){
            continue;
        }
        int rest = Big_Prime(digit, X);
        div_prime(rest, X);
    }
    sort(X.begin(), X.end(), greater<int>());
    for (int i : X){
        cout<< i;
    }
    
    return 0;
}
```

## Solution 2
> By Chanupa Gurusinghe
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    int n;
    string a;
    cin >> n >> a;

    vector<char> result;

    for (char ch : a) {
        switch (ch) {
            case '0': case '1':
                break; // skip
            case '2':
                result.push_back('2');
                break;
            case '3':
                result.push_back('3');
                break;
            case '4':
                result.push_back('3');
                result.push_back('2');
                result.push_back('2');
                break;
            case '5':
                result.push_back('5');
                break;
            case '6':
                result.push_back('5');
                result.push_back('3');
                break;
            case '7':
                result.push_back('7');
                break;
            case '8':
                result.push_back('7');
                result.push_back('2');
                result.push_back('2');
                result.push_back('2');
                break;
            case '9':
                result.push_back('7');
                result.push_back('3');
                result.push_back('3');
                result.push_back('2');
                break;
        }
    }

    sort(result.begin(), result.end(), greater<char>());

    for (char c : result)
        cout << c;
    cout << endl;

    return 0;
}
```
