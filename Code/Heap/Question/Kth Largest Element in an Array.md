
```java
import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
    int k = sc.nextInt();
    sc.close();
    System.out.println(findKthLargest(arr, k));
  }

  public static int findKthLargest(int[] arr, int k) {
    // your code here
	    //Write your code and print here
		PriorityQueue<Integer> minHeap = new PriorityQueue<>();
		for(int val:arr){
			minHeap.add(val);
			if(minHeap.size()>k){
				minHeap.remove();
			}
		}

	  return minHeap.peek();
  }
}
```

Given an integer array `arr` and an integer `k`, return the `kth` largest element in the array.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

Can your solve it in `O(n)` time complexity?

### Input Format

First line contains an integer `n`

Second line consists of `n` spaced integers representing the array `arr`

Third line contains an integer `k`

### Output Format

Print the `kth` largest element in the array

### Example 1

**Input**

```
6
3 2 1 5 6 4
2
```

**Output**

```
5
```

**Explanation**

Sorted order -> `6, 5, 4, 3, 2, 1`

### Example 2

**Input**

```
9
3 2 3 1 2 4 5 5 6
4
```

**Output**

```
4
```

**Explanation**

Sorted order -> `6, 5, 5, 4, 3, 3, 2, 2, 1`

### Constraints

`1 <= nums.length <= 10^5`

`1 <= k <= nums.length <= 10^5`

`0 <= nums[i] <= 10^4`