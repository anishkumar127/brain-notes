```java
import java.util.*;
import java.io.*;
import java.lang.*;

class Main
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
         int num = sc.nextInt();
            int k = sc.nextInt();
            
            int arr[] = new int[num];
            for(int i = 0; i < num; i++)
                arr[i] = sc.nextInt();
            
            ArrayList <Integer> res = new Solution().nearlySorted(arr, num, k);
            for (int i = 0; i < res.size (); i++)
                System.out.print (res.get (i) + " ");
            System.out.println();
        
    }
}


class Solution
{
    ArrayList <Integer> nearlySorted(int arr[], int num, int k)
    {
        // your code here
		PriorityQueue<Integer> pq = new PriorityQueue<>();
		ArrayList<Integer> ans = new ArrayList<>();
		for(int val:arr){
			pq.add(val);
			if(pq.size()>k){
				ans.add(pq.remove());
			}
		}
		while(pq.size()>0){
			ans.add(pq.remove());
		}
		return ans;
    }
}

```




# gfg 

```java
//{ Driver Code Starts
import java.util.*;
import java.io.*;
import java.lang.*;

class gfg
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while(t-- > 0)
        {
            int num = sc.nextInt();
            int k = sc.nextInt();
            
            int arr[] = new int[num];
            for(int i = 0; i < num; i++)
                arr[i] = sc.nextInt();
            
            ArrayList <Integer> res = new Solution().nearlySorted(arr, num, k);
            for (int i = 0; i < res.size (); i++)
                System.out.print (res.get (i) + " ");
            System.out.println();
        }
    }
}


// } Driver Code Ends


class Solution
{
   
    ArrayList <Integer> nearlySorted(int arr[], int num, int k)
    {
        ArrayList<Integer> ans = new ArrayList<>();
        
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        for(int i=0; i<arr.length; i++){
            pq.offer(arr[i]);
            if(pq.size()>k){
                ans.add(pq.poll());
            }
        }
        
        while(!pq.isEmpty()){
            ans.add(pq.poll());
        }
        
        return ans;
    }
}

```

# Other
Approach: Heaps

Priority Queue (Min Heap) stores the value in the non-decreasing order. By using the Min Heap we can store the initial K elements in sorted way and iterate over the remaining part of the array and keeping on storing and popping out of the top element of Priority Queue(Min Heap).

Implementation:

In the problem it mentioned that sorted element is at most a distance of K. So by storing the first K elements in Min Heap and looping over the remaining elements each time we get a minimum element at the top element of the Priority Queue(Min Heap). By storing the top element of Priority Queue(Min Heap) and popping out the top element continue this till the Priority Queue(Min Heap) is empty.

Time Complexity: O(N*logK).

Space Complexity: O(N).

Below is the implementation of above idea:

1.  Java: import java.util._; import java.io._; import java.lang.*;

class Main { public static void main(String args[]) { Scanner sc = new Scanner(System.in); int num = sc.nextInt(); int k = sc.nextInt();

```
        int arr[] = new int[num];
        for(int i = 0; i < num; i++)
            arr[i] = sc.nextInt();
        
        ArrayList <Integer> res = new Solution().nearlySorted(arr, num, k);
        for (int i = 0; i < res.size (); i++)
            System.out.print (res.get (i) + " ");
        System.out.println();
    
}
```

}

class Solution { ArrayList nearlySorted(int arr[], int num, int k) { // your code here ArrayList list = new ArrayList<>(); PriorityQueue pq = new PriorityQueue<>(); for(int i=0;i<=k;i++){ pq.add(arr[i]); } for(int i=k+1;i<num;i++){ list.add(pq.poll()); pq.add(arr[i]); } while(!pq.isEmpty()){ list.add(pq.poll()); } return list;

```
}
```

}




# Nearly Sorted

Given an array `arr` of `n` elements, where each element is at most `k` distance away from its target position. Your task is to sort the array optimally without the use of `sort()` functions.

### Input Format

The first line of the input contains two space-separated integers `N` and `K`, the number of elements in the array and K as specified in the problem statement.

The second line contains `N` space-separated integers.

### Output

The only line of output should contain N space-separated integers denoting the sorted array.

### Example 1

**Input**

```
7 3
6 5 3 2 8 10 9
```

**Output**

```
2 3 5 6 8 9 10
```

**Explanation**

The sorted array will be 2 3 5 6 8 9 10

### Example 2

**Input**

```
5 2
3 1 4 2 5
```

**Output**

```
1 2 3 4 5
```

**Explanation**

The sorted array will be 1 2 3 4 5

### Constraints

1 <= n <= 106

1 <= k < n

1 <= arr[i] <= 107