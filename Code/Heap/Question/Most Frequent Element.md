```java
import java.util.*;

class Solution {
    public int[] KMostFrequentElements(int[] arr, int k) {
        // Write your code here
		HashMap<Integer,Integer> map = new HashMap<>();
		for(int val:arr){
			map.put(val,map.getOrDefault(val,0)+1);
		}
		PriorityQueue<Integer> pq = new PriorityQueue<>((Integer t, Integer o) -> {return map.get(t) - map.get(o);});
		for(int val:map.keySet()){
			pq.add(val);
			if(pq.size()>k){
				pq.remove();
			}
		}
		// ArrayList<Integer> ans = new ArrayList<>();
		int[] ans = new int [pq.size()];
		int idx =0;
		while(!pq.isEmpty()){
			int val = pq.remove();
			// ans.add(val);
			ans[idx++]=val;
		}
		return ans;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), k = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
	    Solution Obj = new Solution();
        int[] ans = Obj.KMostFrequentElements(arr, k);
        Arrays.sort(ans);
        for(int a : ans)
            System.out.print(a + " ");
    }
}
```

# Most Frequent Element

You are given an array `arr` of size `n` and an integer `k`. Your task is to find the `k` most frequent elements in `arr`.

### Input Format

First line contains two integers `n` and `k`

Second line contains `n` space separated integers

### Output Format

Return an array consisting of `k` most frequent elements. Elements in that array can be in any order.

### Example 1

**Input**

```
6 2
5 5 5 6 6 7
```

**Output**

```
5 6
```

**Explanation**

Various elements and their count's are: {(5, 3), (6, 2), (7, 1)}. We are given k = 2, So {5, 6} is the required answer.

### Example 2

**Input**

```
1 1
3
```

**Output**

```
3
```

### Constraints

-   1 <= `n` <= 105
    
-   -104 <= `arr[i]` <= 104
    
-   `k` will never be more than the number of unique elements of `arr`