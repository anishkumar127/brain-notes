```java
import java.util.*;

class Main{
    static int HeightOfHeap(int n,int[] arr){
        //write
		return  (int) (Math.log(n)  / Math.log(2));
    }
}

public class Main {
    public static void main(String[] args) throws Throwable {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;++i){
            arr[i] = sc.nextInt();
        }
        Main obj = new Main();
        int ans=obj.HeightOfHeap(n,arr);
        System.out.println(ans);
    }
}

```

# Height of Heap

Given a Binary Heap of size **N** in an array **arr[]**. Write a program to calculate the height of the Heap.

### Input Format

The first line contains an integer N, the number of elements in the Binary Heap.  
The second line contains N spaced integers, the array arr.

### Output Format

Print an integer, the height of the Binary Heap.

### Example 1

**Sample Input**

```
6
1 3 6 5 9 8
```

**Sample Output**

```
2
```

**Explanation**

```
 The tree is like the following
       (1)
      /   \
    (3)    (6)
    / \     /
  (5) (9) (8)
```

### Example 2

**Sample Input**

```
9
3 6 9 2 15 10 14 5 12
```

**Sample Output**

```
3
```

**Explanation**

```
The tree looks like following
           (2)
        /      \
      (3)      (9)
     /  \     /   \
   (5) (15) (10) (14)
   / \
 (6) (12)
```

### Constraints

-   1 ≤ N ≤ 10⁴
-   1 ≤ arr[i] ≤ 10⁶
