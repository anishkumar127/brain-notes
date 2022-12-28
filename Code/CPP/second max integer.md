
```cpp
#include <bits/stdc++.h>
using namespace std;
int largestElements(int arr[] , int size){
    int max = INT_MIN;
    int maxIndex =-1;
    for(int i=0; i<size; i++){
        if(arr[i]>max){
            max = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}
int main()
{
    int arr[] = {1,2,3,4,5};
    int n =sizeof(arr) / sizeof(int);
    int maxIndex = largestElements(arr,n);
    arr[maxIndex] = -1;
    int secondMax = largestElements(arr,n);
    cout<<arr[secondMax];
 
    return 0;
}

```
