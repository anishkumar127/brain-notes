# Recursion
```java
import java.util.*;

class Solution {
    public int stairWays(int[] jump) {
        //Write code here
		return countWays(0, jump);
    }
	private int countWays(int idx , int [] arr){
		if(idx==arr.length){
			return 1;
		}
		int ans = 0;
		for(int jump = 1; jump<=arr[idx]; jump++){
			if(idx+jump <=arr.length){
				ans+=countWays(idx+jump,arr);
			}
		}
		return ans;
	}
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
        Solution Obj = new Solution();
        int res = Obj.stairWays(arr);
        System.out.println(res);
        sc.close();
    }
}
```

# DP

```java
import java.util.*;

class Solution {
    public int stairWays(int[] jump) {
        //Write code here
		int n = jump.length;
		int dp[] = new int[n+1];
		return countWays(0, jump,dp);
    }
	private int countWays(int idx , int [] arr,int[] dp){
		if(idx==arr.length){
			return dp[idx] = 1;
		}
		if(dp[idx]!=0) return dp[idx];
		int ans = 0;
		for(int jump = 1; jump<=arr[idx]; jump++){
			if(idx+jump <=arr.length){
				ans+=countWays(idx+jump,arr, dp);
			}
		}
		return dp[idx] = ans;
	}
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
        Solution Obj = new Solution();
        int res = Obj.stairWays(arr);
        System.out.println(res);
        sc.close();
    }
}
```

# Tabulation

```java
import java.util.*;

class Solution {
    public int stairWays(int[] jump) {
        //Write code here
		int n = jump.length;
		int dp[] = new int[n+1];
		return tabulation(0, jump,dp);
    }
	private int tabulation(int idx, int [] arr, int [] dp){
		for(idx = arr.length; idx>=0; idx--){
			if(idx==arr.length){
			 dp[idx] = 1;
				continue;
		}
		int ans = 0;
		for(int jump = 1; jump<=arr[idx]; jump++){
			if(idx+jump <=arr.length){
				ans+=dp[idx+jump];
			}
		}
		dp[idx] = ans;
		}
		return dp[0];
	}
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
        Solution Obj = new Solution();
        int res = Obj.stairWays(arr);
        System.out.println(res);
        sc.close();
    }
}
```
![](https://i.imgur.com/8i2S9d8.png)



![](https://i.imgur.com/1oBYbIr.png)




-
![](https://i.imgur.com/AHtSKis.png)

![](https://i.imgur.com/6wQX82s.png)

![](https://i.imgur.com/fhnMIQh.png)


![](https://i.imgur.com/USVuycZ.png)

# Climb Stairs With Variable Jumps

You are given a number `n`, representing the number of stairs in a staircase. You are on the 0th step and are required to climb to the top.

You are given `n` numbers in an array `jumps`, where `ith` element's value represents - till how far from the step you could jump to in a single move. You can of course jump **fewer number** of steps in the move.

Return the number of ways to reach the top via different paths.

### Input Format

On the first line you are given `n`, the size of the array `jumps`.

On the next line there are `n` spaced integers that represent the elements of the array `jumps`.

### Output Format

Return the number of ways to reach the top via different paths.

### Example 1

**Input**

```
6
3 3 0 2 2 3
```

**Output**

```
8
```

**Explanation**

```
We have total 8 unique ways to reach from the 0th step to the 6th step.
```

### Example 2

**Input**

```
6
2 1 3 3 3 2
```

**Output**

```
14
```

**Explanation**

```
We have total 14 unique ways to reach from the 0th step to the 6th step.
```

### Constraints

1 <= n <= 20

1 <= jump[i] <= 20

