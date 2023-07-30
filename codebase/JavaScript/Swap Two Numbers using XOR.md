```java
import java.io.*;
import java.util.*;
import java.lang.*;

class Solution{
    static List<Integer> get(int a,int b){
        // Write your code here
		ArrayList<Integer> ans = new ArrayList<>();
		a^=b;
		b^=a;
		a^=b;
		ans.add(a);
		ans.add(b);
		return ans;
    }
}
public class Main{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        Solution ob = new Solution();
        List<Integer> ans = ob.get(a,b);
        System.out.println(ans.get(0)+" "+ans.get(1));
    }
}
```


### Example 1

**Input**

```
8 9
```

**Output**

```
9 8
```

**Explanation**

Here, 8 is swapped with 9 and vice versa.

