
```java
import java.util.*;

class Solution {
    boolean checkHeap(int arr[]) {
        int n = arr.length;
        for (int i = 0; i <= (n - 2) / 2; i++) {
            if (arr[2 * i + 1] < arr[i]) {
                return false;
            }

            if (2 * i + 2 < n && arr[2 * i + 2] < arr[i]) {
                return false;
            }
        }
        return true;
    }
	void swap(int[] data , int i, int j){
		int temp = data[i];
		 data[i] = data[j];
		data[j] = temp;
	}
	void upHeapify(int data[] , int i){
	int pi = (i-1)/2;
		if(pi>=0 && data[pi]>data[i]){
			swap(data,pi,i);
			upHeapify(data,pi);
		}
	}
    void buildHeap(int arr[]) {
        //Write code here
		for(int i=0; i<arr.length; i++){
			upHeapify(arr,i);
		}
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;
        n = sc.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
        Solution Obj = new Solution();
        Obj.buildHeap(arr);
        if (Obj.checkHeap(arr)) {
            System.out.println("Correct");
        } else {
            System.out.println("Incorrect");
        }
        sc.close();
    }
}
```

**theory

You are given an integer array `arr` of size `n`. Your task is to build a **binary min heap** from the given array. You need to just min-heapify the array and return it printing is handled by the driver code.

**Note**

A binary heap is a complete tree so that it can be represented in array format.

The indices for child, parent are:

```
Root is at index 0 in array.
Left child of i-th node is at (2*i + 1)th index.
Right child of i-th node is at (2*i + 2)th index.
Parent of i-th node is at (i-1)/2 index.
```

### Input Format

Input consists of two lines.

First line contains an integer `n` which is the size of array

Next line contains `n` spaced integers which are the elements of the array.

### Output Format

Change the input array to a heap and implement this in the `buildHeap()` function. The output printed is `Correct` if your heap is correct. Otherwise it prints `Incorrect`.

You may return any min heap.

### Example 1

**Input**

```
5
4 10 3 5 1
```

**Output**

```
Correct
```

**Explanation**

Here after heapifying we get the following binary tree of the array.

```
        1
    4          3
5       10
```

So we have the level order of the binary tree as `1 4 3 5 10`, you need change the input array to this array or any other valid min-heap.

### Example 2

**Input**

```
11
1 3 5 4 6 13 10 9 8 15 17
```

**Output**

```
Correct
```

**Explanation**

Here after heapifying we get the following binary tree of the array.

```
            1
      3             5
  4       6      13      10
9   8   15   17
```

So we have the level order of the binary tree as `1 3 5 4 6 13 10 9 8 15 17`, you need change the input array to this array or any other valid min-heap.

### Constraints

`1 <= n <= 10^5`

`1 <= arr[i] <= 10^3`


