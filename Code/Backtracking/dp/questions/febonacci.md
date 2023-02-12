```java
package DP_Questions;  
  
public class Febo {  
    public static void main(String[] args) {  
        int n = 6;  
        int memo[] = new int[n+1];  
//        int ans = febo(n,memo);  
//        int ans = febo2nd(n,memo);  
        int ans = febo3rd(n,memo);  
        System.out.println(ans);  
    }  
    private static int febo(int n , int[] memo){  
        if(n==0 || n==1) return n;  
  
        if(memo[n]!=0) return memo[n];  
  
        int ans = febo(n-1,memo)+febo(n-2,memo);  
        memo[n] = ans;  
        return ans;  
    }  
    private static int febo2nd(int n, int [] dp){  
        if(n==0 || n==1) return n;  
  
        if(dp[n]!=0) return dp[n];  
  
      return  dp[n] = febo2nd(n-1,dp)+febo2nd(n-2,dp);  
//        return dp[n];  
    }  
    private static int febo3rd(int n, int [] dp){  
        if(n==0 || n==1){  
            return dp[n] = n;  
        }  
        if(dp[n]!=0) return dp[n];  
        int ans = febo3rd(n-1,dp)+febo3rd(n-2,dp);  
        return dp[n] = ans;  
    }  
}
```


# another one 

```java
private static int febo3rd(int n, int [] dp){  
    if(n==0 || n==1){  
        return dp[n] = n;  
    }  
    if(dp[n]!=0) return dp[n];  
    int ans = febo3rd(n-1,dp)+febo3rd(n-2,dp);  
    return dp[n] = ans;  
}
```


![](https://i.imgur.com/vYEVw1Q.png)


![](https://i.imgur.com/yj90mKw.png)
