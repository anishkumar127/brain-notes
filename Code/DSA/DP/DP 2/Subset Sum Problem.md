

![](https://i.imgur.com/VgzkshZ.png)





# Recurison myself TLE

```java
public boolean subsetSum(int[] arr, int n, int sum) {  
    if(subset(arr,0,sum)){  
        return true;  
    }else return false;  
}  
private boolean subset(int[] arr, int idx, int sum){  
    if(idx==arr.length) return false;  
    if(sum<0) return false;  
    if(sum==0) return true;  
     boolean pick = subset(arr, idx+1,sum-arr[idx]);  
      boolean notpick =   subset(arr,idx+1,sum);  
   return pick || notpick;  
}
```


**another way**

```java
class Solution {  
    public boolean subsetSum(int[] arr, int n, int sum) {  
        if(subset(arr,0,sum)){  
            return true;  
        }else return false;  
    }  
    private boolean subset(int[] arr, int idx, int sum){  
        if(idx==arr.length || sum<0 ) return false;  
        if(sum==0) return true;  
         boolean pick = subset(arr, idx+1,sum-arr[idx]);  
          boolean notpick =   subset(arr,idx+1,sum);  
       return pick || notpick;  // anyone true return true.  
    }  
}
```



# next 

*for DP what we needed. exsume what is changing in our recursive code ? there is changing only index and sum so so we needed 2 parameter so. we use 2D matrix our here.*

# dp self TLE
```java
public boolean subsetSum(int[] arr, int n, int sum) {  
    boolean[][] dp = new boolean[n+1][sum+1];  
  
    if(subset(arr,0,sum,dp)){  
        return true;  
    }else return false;  
}  
private boolean subset(int[] arr, int idx, int sum, boolean[][] dp){  
    if(idx==arr.length || sum<0 ) return false;  
    if(sum==0) return true;  
    if(dp[idx][sum]!=false) return dp[idx][sum];  
     boolean pick = subset(arr, idx+1,sum-arr[idx],dp);  
      boolean notpick =   subset(arr,idx+1,sum,dp);  
   return  dp[idx][sum] =  pick || notpick;  // anyone true return true.  
  
}
```
# Tabulation Strategy and rule

![](https://i.imgur.com/ByyiyYF.png)



# direct tabulation

![](https://i.imgur.com/vtW9Mv1.png)




![](https://i.imgur.com/61xuvZv.png)




![](https://i.imgur.com/YPAulxW.png)




![](https://i.imgur.com/CQF6M7Z.png)




![](https://i.imgur.com/mhSVqmM.png)




![](https://i.imgur.com/81vW894.png)



![](https://i.imgur.com/2Tm0yF0.png)




![](https://i.imgur.com/9dsSvLK.png)





# tabulation working

```java
import java.util.*;
import java.io.*;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line = br.readLine().split(" ");
        int n = Integer.parseInt(line[0]);
        int sum = Integer.parseInt(line[1]);
        int[] arr = new int[n];
        line = br.readLine().split(" ");
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(line[i]);
        }
        Solution sol = new Solution();
        Boolean ans = sol.subsetSum(arr, n, sum);
        if(ans) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }
    }
}

class Solution {
    public boolean subsetSum(int[] arr, int n, int sum) {
		 if(tabulation(arr,sum)){
            return true;
        }else return false;
    }
	    private static boolean tabulation(int []arr , int sum){
        boolean[] [] dp = new boolean[arr.length+1][sum+1];
        for(int i=0; i<arr.length; i++){
            dp[i][0] = true;
        }
        for(int i=1; i<=arr.length; i++){
            for(int j =1; j<=sum; j++){
                boolean exclude = dp[i-1][j];
                boolean include = j-arr[i-1]>=0 ? dp[i-1][j-arr[i-1]]:false;
                dp[i][j] = exclude || include;
            }
        }

        return dp[arr.length][sum];
    }
}
```

```java
public boolean subsetSum(int[] arr, int n, int sum) {  
    boolean[][] dp = new boolean[n+1][sum+1];  
  
    if(tabulation(arr,sum)){  
        return true;  
    }else return false;  
}
private static boolean tabulation(int []arr , int sum){  
    boolean[] [] dp = new boolean[arr.length+1][sum+1];  
    for(int i=0; i<arr.length; i++){  
        dp[i][0] = true;  
    }  
    for(int i=1; i<=arr.length; i++){  
        for(int j =1; j<=sum; j++){  
            boolean exclude = dp[i-1][j];  
            boolean include = j-arr[i-1]>=0 ? dp[i-1][j-arr[i-1]]:false;  
            dp[i][j] = exclude || include;  
        }  
    }  
  
    return dp[arr.length][sum];  
}
```

## Approach 1: Recursion

Let f(i, sum) be true if there is a subset of the array from index `i` to `n-1` with sum equal to `sum`. Then, the answer is f(0, sum).

`f(i, sum) = f(i+1, sum) or f(i+1, sum - arr[i])`

**Time Complexity: ** O(2^n)

**Space Complexity: ** O(n)

## Approach 2: Dynamic Programming

Let `dp[i][j]` be true if there is a subset of the array from index `i` to `n-1` with sum equal to `j`. Then, the answer is `dp[0][sum]`.

`dp[i][j] = dp[i+1][j] or dp[i+1][j - arr[i]]`

**Time Complexity: ** O(n * sum)

**Space Complexity: ** O(n * sum)

Below is the implementation of this algorithm:

1.  Java

```java
import java.util.*;
import java.io.*;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line = br.readLine().split(" ");
        int n = Integer.parseInt(line[0]);
        int sum = Integer.parseInt(line[1]);
        int[] arr = new int[n];
        line = br.readLine().split(" ");
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(line[i]);
        }
        Solution sol = new Solution();
        Boolean ans = sol.subsetSum(arr, n, sum);
        if(ans) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }
    }
}

class Solution {
    public boolean subsetSum(int[] arr, int n, int sum) {
        boolean[][] dp = new boolean[n + 1][sum + 1];
        for (int i = 0; i <= n; i++) {
            dp[i][0] = true;
        }
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= sum; j++) {
                if (j < arr[i - 1]) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
                }
            }
        }
        return dp[n][sum];
    }
}
```