
![](https://i.imgur.com/mC6gai7.png)


```java
import java.util.*;
import java.lang.*; 
import java.io.* ;
class Solution{
    public static int kthsmall( int arr [], int n, int k){
		PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());

		// for(int val:arr){
		// 	small.add(val);
		// 	if(small.size()>k){
		// 		small.remove();
		// 	}
		// }
		for(int i=0; i<n; i++){
			small.add(arr[i]);
			if(small.size()>k){
				small.remove();
			}
		}
		return small.peek();
	}
    public static int kthlarge( int arr [], int n, int k){
		PriorityQueue<Integer> large = new PriorityQueue<>();
		// for(int val:arr){
		// 	large.add(val);
		// 	if(large.size()>k){
		// 		large.remove();
		// 	}
		// }
		for(int i=0; i<n; i++){
			large.add(arr[i]);
			if(large.size()>k){
				large.remove();
			}
		}
		return large.peek();
	}
    public static void kSmallLarge( int arr [], int n, int k){
       //Write your code and print here

		int a = kthsmall(arr,n,k);
		int b = kthlarge(arr,n,k);
		System.out.println(a);
		System.out.println(b);
    }
}
public class Main{
   public static void main(String args[]){
      
      int n;
      Scanner sc = new Scanner(System.in);
      n = sc.nextInt();
      int arr[]=new int[n]; 
      for(int i=0; i<n; i++){
         arr[i]=sc.nextInt();
      }

      int k; 
      k=sc.nextInt(); 

      Solution obj= new Solution();
      obj.kSmallLarge(arr,n, k);


   }
}
```


still one test case above code.
but below code working.

```java
import java.util.*;
import java.lang.*; 
import java.io.* ;
class Solution{
   public static int findKthLargest(int[] arr, int n, int k){
		PriorityQueue<Integer> pq = new PriorityQueue<>();

		for(int i=0; i<n; i++){
			pq.add(arr[i]);

			if(pq.size() > k){
				pq.remove();
			}
		}

		return pq.peek();
	}

	public static int findKthSmallest(int[] arr, int n, int k){
		PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

		for(int i=0; i<n; i++){
			pq.add(arr[i]);

			if(pq.size() > k){
				pq.remove();
			}
		}

		return pq.peek();
	}
	
    public static void kSmallLarge( int arr [], int n, int k){
       int a = findKthLargest(arr,n,k);
		int b = findKthSmallest(arr,n,k);
		
		System.out.println(b);
		System.out.println(a);
		
    }
}
public class Main{
   public static void main(String args[]){
      
      int n;
      Scanner sc = new Scanner(System.in);
      n = sc.nextInt();
      int arr[]=new int[n]; 
      for(int i=0; i<n; i++){
         arr[i]=sc.nextInt();
      }

      int k; 
      k=sc.nextInt(); 

      Solution obj= new Solution();
      obj.kSmallLarge(arr,n, k);


   }
}
```

Write a program to print the Kth smallest and Kth largest element of array `arr` of size `N`. Find the Kth smallest and Kth largest number from the unsorted array.

It is given that all elements of array are distinct

### Input Format

The first line contains an integer 'N' denoting the number of elements.

The Second line  contains 'N' space seprated integers denoting the elements of the array.

The Third line contains an integer 'K'.

### Output Format

In line 1, print the Kth smallest element of array.

In line 2, print the Kth largest element of array.

### Example 1

**Input**

```
6
7 10 4 3 20 15
4
```

**Output**

```
10
7
```

**Explanation**

10 is the 4th smallest element, and 7 is the 4th largest element.

### Example 2

**Input**

```
 5
 11 5 12 6 13
 2
```

**Output**

```
6
12
```

**Explanation**

6 is the 2nd smallest element, and 12 is the 2nd largest element

### Constraints

1 <= nums.length <= 10^5

-10^9 <= nums[i] <= 10^9

1 <= k <= nums.length