```java
import java.io.*;
import java.util.*;


class Solution{
        public static boolean equalArray(int a[], int b [], int n){
        // Write your code here
			HashMap<Integer,Integer> map = new HashMap<>();
			for(int val:a){
				map.put(val,map.getOrDefault(val,0)+1);
			}
			for(int val:b){
				map.put(val,map.getOrDefault(val,0)-1);
			}
			
			for(int val:map.values()){
				if(val!=0){
					return false;
				}
			}
			return true;
        }
}
public class Main {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int[] a = new int[n];
        int[] b = new int[n];

        for(int i = 0; i < n; i++){
            a[i] = input.nextInt();
        }
        for(int i = 0; i < n; i++){
            b[i] = input.nextInt();
        }
        Solution obj = new Solution();
        System.out.println(obj.equalArray(a,b,n));
    }
}
```

```java
import java.io.*;
import java.util.*;


class Solution{
        public static boolean equalArray(int a[], int b [], int n){
        // Write your code here
			HashMap<Integer,Integer> map = new HashMap<>();
			for(int i =0; i<n; i++){
				int x  = a[i];
				int y = b[i];
				map.put(x,map.getOrDefault(x,0)+1);
				map.put(y,map.getOrDefault(y,0)-1);
			}
			
			for(int val:map.values()){
				if(val!=0){
					return false;
				}
			}
			return true;
        }
}
public class Main {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int[] a = new int[n];
        int[] b = new int[n];

        for(int i = 0; i < n; i++){
            a[i] = input.nextInt();
        }
        for(int i = 0; i < n; i++){
            b[i] = input.nextInt();
        }
        Solution obj = new Solution();
        System.out.println(obj.equalArray(a,b,n));
    }
}
```

Given two arrays A and B of equal size n, the task is to find if given arrays are equal or not. Two arrays are said to be equal if both of them contain same set of elements, arrangements (or permutation) of elements may be different though.

Note : If there are repetitions, then counts of repeated elements must also be same for two array to be equal.

### Input

line 1: contains an integer n denoting size of array.

line 2: contains n spaced integers denoting elements of array A.

line 3: contains n spaced integers denoting elements of array B.

### Output

Print `true` if the two arrays are equal otherwise print `false`.

### Example 1

**Input**

```
5
1 2 5 4 0
2 4 5 0 1
```

**Output**

```
true
```

**Explanation**

Both the arrays contain the same set of elements same number of times.

### Example 2

**Input**

```
5
1 2 5 0 0
2 5 5 0 1
```

**Output**

```
false
```

**Explanation**

Both the arrays contain the same set of elements same but the frequency is different.

### Constraints

1<=n<=10^6

1<=A[i],B[i]<=10^6