```java
import java.io.*;
import java.util.*;

class Solution {
	
    static class Heap {
        private ArrayList<Integer> data;

        public Heap(){
            data = new ArrayList<>();
        }

        private void swap(int i, int j){
            int valAtI = data.get(i);
            int valAtJ = data.get(j);
            
            data.set(i,valAtJ);
            data.set(j,valAtI);
        }

        private void upHeapify(int ci){
            int pi = (ci-1)/2;

            if(pi>=0 && data.get(pi) > data.get(ci)){
                swap(ci,pi);
                upHeapify(pi);
            }
        }
        // add
        public void add(int val){
            data.add(val);

            upHeapify(data.size()-1);
        }

        private void downHeapify(int pi){
            int lci = 2*pi + 1;
            int rci = 2*pi + 2;

            int mini = pi;

            if(lci < data.size() &&  data.get(lci) < data.get(mini)){
                mini = lci;
            }

            if(rci < data.size() && data.get(rci) < data.get(mini)){
                mini = rci;
            }

            if(mini != pi){
                swap(pi,mini);
                downHeapify(mini);
            }
        }
        // remove
        public int remove(){
            if(data.size()==0){
                System.out.println("There is no element in heap");
                return -1;
            }

            swap(0,data.size()-1);
            int rv = data.remove(data.size()-1);

            downHeapify(0);

            return rv;
        }

        // peek
        public int peek(){
            if(data.size()==0){
                System.out.println("There is no element in heap");
                return -1;
            }

            return data.get(0);
        }

        // size
        public int size(){
            return data.size();
        }
    }

    void heapSort(int arr[], int n)
    {
        // write code here
		Heap pq = new Heap();

		for(int i=0; i<n; i++){
			pq.add(arr[i]);
		}

		for(int i=0; i<n; i++){
			arr[i] = pq.remove();
		}
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;
        n = sc.nextInt();
        int arr1[] = new int[n];
        for(int i=0;i<n;i++)
            arr1[i] = sc.nextInt();
        Solution Obj = new Solution();
        Obj.heapSort(arr1, n);
        for(int i=0;i<n;i++){
            System.out.print(arr1[i]+" ");
        }
    }
}
```

# Heap Sort

Given an array of size N. The task is to sort the array elements by implementing Heap Sort.

-   Hint: Make two functions **heapify**() and **heapSort**().
-   The passed array needs to be sorted

### Input Format

The first line contains an integer N, the size of the array.

The second line contains N spaced integers, the elements of the array.

### Output Format

Print the sorted array.

**Expected Time Complexity:** O(N*logN)

### Example 1

**Input**

```
5
4 1 3 9 7
```

**Output**

```
1 3 4 7 9
```

**Explanation**

After sorting elements using heap sort, elements will be in order as 1,3,4,7,9.

### Example 2

**Input**

```
10
10 9 8 7 6 5 4 3 2 1
```

**Output**

```
1 2 3 4 5 6 7 8 9 10
```

**Explanation**

After sorting elements using heap sort, elements will bein order as 1,2,3,4,5,6,7,8,9,10.

### Constraints

```
- 1 ≤ N ≤ 10⁴  
- 1 ≤ arr[i] ≤ 10⁶
```