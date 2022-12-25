```cpp
#include <bits/stdc++.h>
using namespace std;

void CamelCaseWords(string s) {
    //Write your code here
    string word = "";
    for(char a : s) {
    if('A' <= a and a <= 'Z') {
        if(word != "")
            cout<<word<<endl;
        word = "";
    }
    word += a;
    }
    cout<<word;
}

int main()
{
    string a;
    cin>>a;
    CamelCaseWords(a);
    return 0;
}

```