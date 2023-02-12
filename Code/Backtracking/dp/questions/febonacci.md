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


# Tabulation DP

```java
private static int tabulation(int n){  
    int[] dp = new int[n+1];  
    dp[0] = 0;  
    dp[1] = 1;  
    for(int i=2; i<=n; i++){  
        dp[i] = dp[i-1] + dp[i-2];  
    }  
    return dp[n];  
}
```



# Another DP 

![](https://i.imgur.com/pUN8Yff.png)



![](https://i.imgur.com/wONd7Un.png)




```java
private static int tab(int n, int [] dp){  
    for(int i=0; i<=n; i++){  
        if(i==0 || i == 1){  
            dp[i] = i;  
            continue;  
        }  
        int ans = dp[i-1] + dp[i-2];  
        dp[i] = ans;  
    }  
    return dp[n];  
}
```

## better written

```java
private static int tab(int N, int [] dp){  
    for(int n=0; n<=N; n++){  
        if(n==0 || n == 1){  
            dp[n] = n;  
            continue;  
        }  
        int ans = dp[n-1] + dp[n-2];  
        dp[n] = ans;  
    }  
    return dp[N];  
}
```



# complete all DP way

```java
package DP_Questions;  
  
public class Febo {  
    public static void main(String[] args) {  
        int n = 6;  
        int memo[] = new int[n+1];  
//        int ans = febo(n,memo);  
//        int ans = febo2nd(n,memo);  
//        int ans = febo3rd(n,memo);  
//        System.out.println(ans);  
//  
//        int result = tabulation(n);  
//        System.out.println(result);  
  
        int[] dp = new int[n+1];  
        System.out.println(tab(n, dp));  
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
  
    private static int tabulation(int n){  
        int[] dp = new int[n+1];  
        dp[0] = 0;  
        dp[1] = 1;  
        for(int i=2; i<=n; i++){  
            dp[i] = dp[i-1] + dp[i-2];  
        }  
        return dp[n];  
    }  
  
    private static int tab(int N, int [] dp){  
        for(int n=0; n<=N; n++){  
            if(n==0 || n == 1){  
                dp[n] = n;  
                continue;  
            }  
            int ans = dp[n-1] + dp[n-2];  
            dp[n] = ans;  
        }  
        return dp[N];  
    }  
}
```

## most optimized Fibonacci series

```java
private static int febo_most_optimized(int n){  
    int first_term = 0;  
    int second_term = 1;  
    int third_term = first_term + second_term;  
    for(int i=2; i<=n; i++){  
        third_term = first_term + second_term;  
        first_term  = second_term ;  
        second_term = third_term ;  
    }  
    return  third_term;  
}
```