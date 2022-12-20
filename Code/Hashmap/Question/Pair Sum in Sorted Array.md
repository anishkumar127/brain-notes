
Brute Force

```java
import java.io.*;
import java.util.*;

class Solution {
    void pairSum(int n, int k, int a[])
    {
       for(int i=0; i<n; i++){
            for(int j=i+1; j<n; j++){
                int sum = a[i]+a[j];
                if(sum==k){
                    System.out.println("Yes");
                   return;
                }
            }
        }
        System.out.println("No");
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt(), k = input.nextInt();
        int a[] = new int[n];
        for(int i = 0; i < n; i++){
            a[i] = input.nextInt();
        }
        Solution Obj = new Solution();
        Obj.pairSum(n,k,a);
    }
}
```



# Using Hashmap

- one case it should be target -sum not be sum - target.
-  like **k-sum** not **sum-k**

```java
import java.io.*;
import java.util.*;

class Solution {
    void pairSum(int n, int k, int a[])
    {
      HashMap<Integer,Integer> map = new HashMap<>();
      int sum =0;
      for(int i=0; i<n; i++){
           sum += a[i];
          int previousSum = k-sum;
          if(map.containsKey(previousSum)){
              System.out.println("Yes");
              return;
          }else{
              map.put(sum,i);
          }
      }
        System.out.println("No");
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt(), k = input.nextInt();
        int a[] = new int[n];
        for(int i = 0; i < n; i++){
            a[i] = input.nextInt();
        }
        Solution Obj = new Solution();
        Obj.pairSum(n,k,a);
    }
}
```

Given a sorted array A having N integer elements, find if there exists any pair of elements such that (A[i], A[j]) have the sum equal to X (i < j)

### Input Format

The first line of each test case contains N size of array and X. Second line contains elements of array separated by space.

### Output Format

For each test case you need to print "Yes" if pair exists otherwise "No".

### Example 1

**Input**

```
5 4 
1 2 3 4 5 
```

**Output**

```
Yes 
```

### Example 2

**Input**

```
5 6 
2 3 5 7 8 
```

**Output**

```
No
```

### Constraints

```
1 <= N <= 100000 
1 <= X <= 1000 
1 <= A[i] <= 1000000 
```


