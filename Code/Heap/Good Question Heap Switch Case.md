- first give switch case total case.
- then if case 1. then add value. and break; also have to take that from the input.
- then if case 2. then take value from input and then remove it that value from the heap.
- then if case 3. then just check the peek value. and then print it.
- and one thing this is min heap.


```java

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
        for (int i=0;i<n;i++) {
            int cmd = s.nextInt();
            switch (cmd) {
                case 1:
                    int val = s.nextInt();
                    pq.add(val);
                    break;
                case 2:
                    val = s.nextInt();
                    pq.remove(val);
                    break;
                case 3:
                    val = pq.peek();
                    System.out.println(val);
                    break;
            }
        }
        s.close();
    }
}

```

This question is designed to help you get a better understanding of _basic heap_ operations.

There are 3 types of queries:

"1" - Add an element- to the heap.

"2" - Delete the element- from the heap.

"3" - Print the minimum of all the elements in the heap.

**NOTE**

It is guaranteed that the element to be deleted will be there in the heap. Also, at any instant, only distinct elements will be in the heap.

### Input Format

The first line contains the number of queries, Q.

Each of the next Q lines contains one of the 3 types of query.

### Output Format

For each query of type 3, print the minimum value on a single line.

### Example 1

**Input**

```
5
1 4
1 9
3
2 4
3
```

**Output**

```
4  
9 
```

**Explanation**

After the first 2 queries, the heap contains {4, 9}. Printing the minimum gives 4 as the output. Then, the 4th query deletes 4 from the heap, and the 5th query gives 9 as the output.

### Example 2

**Input**

```
3
1 4
1 9
3
```

**Output**

```
4
```

**Explanation**

After the first 2 queries, the heap contains {4, 9}. Printing the minimum gives 4 as the output.

### Constraints

1 <= Q <= 10⁵

-10⁹ <= v <= 10⁹