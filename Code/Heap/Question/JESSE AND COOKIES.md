- just add to min heap. 
- then define steps and 
- pq size should be greater then 1 because we want minimum 2 cookies.
- and then if any time pq size greater than equal to k then return it directly steps.
- and then just pop 2 value and then multi with   `1` `2`
- and then add again to pq. and count step +`1`
- and then if pq elements still less then k and peek is less then k then return it -1.
- else return the steps. if not less then k.
```java
package Heap.JESSEANDCOOKIES;  
  
import java.util.*;  
import java.io.*;  
  
class Solution{  
    static int solve(int a[],int n,int k){  
        PriorityQueue<Integer> pq = new PriorityQueue<>();  
        for(int val:a){  
            pq.add(val);  
        }  
        int steps =0;  
        while(pq.size()>1){  
            if(pq.peek()>=k) return steps;  
            int x = pq.remove();  
            int y = pq.remove();  
            int newSweetness = 1*x + 2*y;  
            pq.add(newSweetness);  
            steps++;  
        }  
        if(pq.peek()<k) return -1;  
        return steps;  
    }  
}  
public class Main {  
  
    public static void main(String args[]) {  
        Scanner input = new Scanner(System.in);  
        int n = input.nextInt();  
        int k = input.nextInt();  
        int a[] = new int[n];  
        for(int i = 0; i < n; i++){  
            a[i] = input.nextInt();  
        }  
        System.out.println(Solution.solve(a,n,k));  
    }  
}
```


# other  appraoch
### Approach:

The simplest approach here will be we use a data structure that will give us the minimum the array and we can insert and delete from it. So we will keep checking till our minimum element is less then k.If our minimum element is less then take the first minimum and second minimum and apply the operation on it and delete them and reinsert them.

**Algorithm:**

To write the above algorithm:

-   Iterate over the array and push all elements in the priority_queue which is keeping element in ascending order i.e. top element is the minimum.
-   Compare the top element of the priority_queue if its less then k then take the second minimum and if second minimum is not present then print -1 otherwise apply the operation on them and remove them from priority_queue and add them after applying the given operation
-   If the top element is not less then k then break the loop
-   When the loop is complete print the number of times the loop run if the top element of priority queue Is not less then k
  

**Time Complexity**

O(NlogN).

**Space Complexity**

O(N)

Below is the implementation of above idea:

**1. Java:**

```java

import java.io.*;
import java.util.*;
 
public class Main{
    public static void main (String args[]){
        Scanner input = new Scanner(System.in);
        int n = input.nextInt(), k = input.nextInt();
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i = 0; i < n; i++){
            pq.add(input.nextInt());
        }
        int cnt = 0;
        while(pq.size() >= 2 && pq.peek() < k){
            int x = pq.poll();
            int y = pq.poll();
            pq.add(x + 2 * y);
            cnt++;
        }
        if(pq.peek() >= k){
            System.out.println(cnt);
        }else{
            System.out.println(-1);
        }
    }
}
```



# theory



Jesse loves cookies and wants the sweetness of some cookies to be greater than value k. To do this, two cookies with the least sweetness are repeatedly mixed. This creates a special combined cookie with:

sweetness = (1 * Least sweet cookie + 2 * 2nd least sweet cookie).

This occurs until all the cookies have a sweetness>=k.

Given the sweetness of a number of cookies, determine the minimum number of operations required. If it is not possible, print -1.

### Input Format

Line 1 contains two space-separated integers n and k denoting size of array of sweetness values and the minimum required sweetness required.

Line 2 contains n spaced integers denoting elements of array.

### Output Format

Print a single integer denoting number of operations required or if it is not possible print -1.

### Example 1

**Input**

```
6 7
1 2 3 9 10 12
```

**Output**

```
2
```

**Explanation**

Combine the first two cookies to create a cookie with sweetness = 1*1 + 2*2=5

After this operation, the cookies are 3,5,9,10,12.

Then, combine the cookies with sweetness 3 and sweetness 5, to create a cookie with resulting sweetness = 1*3 + 2*5= 13

Now, the cookies are 9,10,12,13.

All the cookies have a sweetness>=7.

Thus, 2 operations are required to increase the sweetness.

### Example 2

**Input**

```
6 10
1 2 3 9 10 12
```

**Output**

```
3
```

**Explanation**

Combine the first two cookies to create a cookie with sweetness = 1*1 + 2*2=5

After this operation, the cookies are 3,5,9,10,12.

Then, combine the cookies with sweetness 3 and sweetness 5, to create a cookie with resulting sweetness = 1*3 + 2*5= 13

Now, the cookies are 9,10,12,13.

Then, combine the cookies with sweetness 9 and sweetness 10, to create a cookie with resulting sweetness = 1*9 + 2*10= 29

Now, the cookies are 12,13,29.

Thus, 3 operations are required to increase the sweetness.

### Constraints

1<=n<=10^6

0<=k<=10^9

0<=A[i]<=10^6