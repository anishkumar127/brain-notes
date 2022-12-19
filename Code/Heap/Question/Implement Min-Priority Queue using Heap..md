```java
import java.io.*;
import java.util.*;

public class Main {

  public static class PriorityQueue {
    ArrayList<Integer> data;

    public PriorityQueue() {
      data = new ArrayList<>();
    }

 private void swap(int i, int j) {
            int valAtI = data.get(i);
            int valAtJ = data.get(j);

            data.set(i, valAtJ);
            data.set(j, valAtI);
        }

        private void upHeapify(int ci) {
            int pi = (ci - 1) / 2;

            if (pi >= 0 && data.get(pi) > data.get(ci)) {
                swap(ci, pi);
                upHeapify(pi);
            }
        }

        public void add(int val) {
            // write your code here
            data.add(val);

            upHeapify(data.size() - 1);
        }


        private void downHeapify(int pi) {
            int lci = 2 * pi + 1;
            int rci = 2 * pi + 2;

            int maxi = pi;

            if (lci < data.size() && data.get(lci) < data.get(maxi)) {
                maxi = lci;
            }

            if (rci < data.size() && data.get(rci) < data.get(maxi)) {
                maxi = rci;
            }

            if (maxi != pi) {
                swap(pi, maxi);
                downHeapify(maxi);
            }
        }

        public int remove() {
            // write your code here
            if (data.size() == 0) {
                System.out.println("Underflow");
                return -1;
            }

            swap(0, data.size() - 1);
            int rv = data.remove(data.size() - 1);

            downHeapify(0);

            return rv;
        }

        public int peek() {
            // write your code here
            if (data.size() == 0) {
                System.out.println("Underflow");
                return -1;
            }

            return data.get(0);
        }

        public int size() {
            // write your code here
            return data.size();
        }
    }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    PriorityQueue qu = new PriorityQueue();

    String str = br.readLine();
    while (str.equals("quit") == false) {
      if (str.startsWith("add")) {
        int val = Integer.parseInt(str.split(" ")[1]);
        qu.add(val);
      } else if (str.startsWith("remove")) {
        int val = qu.remove();
        if (val != -1) {
          System.out.println(val);
        }
      } else if (str.startsWith("peek")) {
        int val = qu.peek();
        if (val != -1) {
          System.out.println(val);
        }
      } else if (str.startsWith("size")) {
        System.out.println(qu.size());
      }
      str = br.readLine();
    }
  }
}
```

You are required to complete the code of our Priority Queue class using the heap data structure. we want you to make add of **logn** complexity, remove of **logn** complexity and peek of **O(1)** complexity

Here is the list of functions that you are supposed to complete:

-   add -> Should accept new data.
-   remove -> Should remove and return smallest value, if available or print "Underflow" otherwise and return -1.
-   peek -> Should return smallest value, if available or print "Underflow"
-   otherwise and return -1.
-   size -> Should return the number of elements available.

Input and Output is managed for you.

### Input Format

`add` followed by an integer represent a number to be added.

`size` should return the number of elements available

`peek` should return the smallest value if available or print "Underflow"

`remove` should remove and return smallest value if available or print "Underflow"

### Output Format

As mentioned in the input format,

`add` followed by an integer represent a number to be added, hence no output here.

`size` should return the number of elements available.

`peek` should return the smallest value if available or print "Underflow".

`remove` should remove and return smallest value if available or print "Underflow".

### Example 1

**Input**

```
add 10
add 20
add 30
add 40
peek
add 50
peek
remove
peek
remove
peek
remove
peek
remove
peek
quit
```

**Output**

```
10
10
10
20
20
30
30
40
40
50
```

**Explanation**

After 4th operation, min = 10

After 6th operation, min = 10

After 8th operation, min = 20

After 10th operation, min = 30

After 12th operation, min = 40

After 14th operation, min = 50

### Example 2

**Input**

```
add 10
add 20
add 30
peek
add 40
peek
remove
peek
remove
peek
remove
peek
remove
peek
quit
```

**Output**

```
10
10
10
20
20
30
30
40
40
Underflow
```

**Explanation**

After 3rd operation, min = 10

After 5th operation, min = 10

After 7th operation, min = 20

After 9th operation, min = 30

After 11th operation, min = 40

After 13th operation, heap is empty

### Constraints

`1 <= number of operations <= 500`