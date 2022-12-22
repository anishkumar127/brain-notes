```java
import java.util.*;

class Accio {
    public void minOperations(int[] arr) {
        // Write code and print output here
		HashMap<Integer,Integer> map = new HashMap<>();
		for(int val:arr){
			map.put(val,map.getOrDefault(val,0)+1);
		}
		int max =0;
		for(int val:map.values()){
			max = Math.max(max,val);
		}
		System.out.println(arr.length-max);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t > 0) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; ++i)
                arr[i] = sc.nextInt();
            Accio Obj = new Accio();
            Obj.minOperations(arr);
            t--;
        }
        sc.close();
    }
}
```

# Minimum Operations

Given an array `arr` with `n` positive integers. Find the minimum number of operation to make all elements of the array equal.

You can perform addition, subtraction, multiplication, or division with any integer on an array element.

### Input Format

The first line contains the number of test cases.

The second line of input contains the integer `n`.

The last line contains `n` spaced integers.

### Output Format

For each test case print a single integer in a new line, denoting the minimum number of operations.

### Example 1

**Input**

```
1
4
2 4 1 3
```

**Output**

```
3 
```

**Explanation**

Since all elements are different, we need to perform at least three operations to make them equal. For example, we can make them all equal to '1' by doing three subtractions.

### Example 2

**Input**

```
1
3
1 1 2
```

**Output**

```
1
```

**Explanation**

We can subtract '1' from '2' to make all the elements of the array equal to '1'.

### Constraints

1 <= t <= 10

1 <= n <= 10000

0 <= arr[i] <= 100000