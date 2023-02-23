
# Recursion TLE

```java
package DP_Questions.CoinChange;  
  
import java.util.*;  
import java.io.*;  
  
class Main {  
    public static void main(String[] args) throws IOException {  
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));  
        StringTokenizer st = new StringTokenizer(br.readLine());  
        int n = Integer.parseInt(st.nextToken());  
        int sum = Integer.parseInt(st.nextToken());  
        int[] arr = new int[n];  
        st = new StringTokenizer(br.readLine());  
        for (int i = 0; i < n; i++) {  
            arr[i] = Integer.parseInt(st.nextToken());  
        }  
        Solution s = new Solution();  
        System.out.println(s.coinChange(arr, sum));  
    }  
}  
  
class Solution {  
    private int recur(int[] arr, int idx , int csum){  
        if(csum==0) return 1;  
        if(csum<0 || idx==arr.length) return 0;  
  
        int stay = recur(arr,idx,csum-arr[idx]);  
        int move = recur(arr,idx+1,csum);  
  
        return stay+move;  
    }  
    public int coinChange(int[] arr, int sum) {  
        return recur(arr,0,sum);  
    }  
}
```



**another**

```java
private int recur(int[] arr, int idx , int csum){  
    if(csum==0) return 1;  
    if(csum<0 || idx==arr.length) return 0;  
  
    int stay = recur(arr,idx,csum-arr[idx]);  
    int move = recur(arr,idx+1,csum);  
  
    return stay+move;  
}  
public int coinChange(int[] arr, int sum) {  
    return recur(arr,0,sum);  
}
```


# dp memo TLE

```java
    public int coinChange(int[] arr, int sum) {  
        int[][] dp = new int[arr.length+1][sum+1];  
//        return recur(arr,0,sum);  
        return coinMemo(arr,0,sum,dp);  
    }  
    private int coinMemo(int[] arr, int idx , int csum,int[][]dp){  
        if(csum==0) return 1;  
        if(csum<0 || idx==arr.length) return 0;  
  
        if(dp[idx][csum]!=0) return dp[idx][csum];  
  
        int stay = coinMemo(arr,idx,csum-arr[idx],dp);  
        int move = coinMemo(arr,idx+1,csum,dp);  
        return dp[idx][csum] = stay+move;  
    }
```



# tabulation working

```java
import java.util.*;
import java.io.*;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int sum = Integer.parseInt(st.nextToken());
        int[] arr = new int[n];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }
        Solution s = new Solution();
        System.out.println(s.coinChange(arr, sum));
    }
}

class Solution {
    public int coinChange(int[] arr, int sum) {
		        return tabulation(arr,sum);
    }
    private int tabulation(int[] arr, int sum){
        int[][] dp = new int[arr.length][sum+1];
        for(int idx=arr.length-1; idx>=0; idx--){ // idx out of bound return 0; base case
            for(int csum = 0; csum<=sum; csum++){ // sum becoming 0 so sum changing base case.
                if(csum==0){
                    dp[idx][csum] = 1;
                    continue;
                }
                int stay = csum-arr[idx]>=0 ? dp[idx][csum-arr[idx]] : 0 ; //... out of bound check. base case.
                int move = idx+1<arr.length ? dp[idx+1][csum] : 0 ; // also base case handling.
                dp[idx][csum] = stay+move;
            }
        }
        return dp[0][sum]; // last index.
    }
}
```
*same base case which we used in recursion*
*some times needed to check all the base cases. where increasing where to stop*



