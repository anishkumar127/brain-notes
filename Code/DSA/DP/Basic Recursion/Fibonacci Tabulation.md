Tabulation (Bottom UP)

```java
package DP.Basic_Recursion;  
  
public class FeboTabo {  
    public static void main(String[] args) {  
        int n = 6;  
        System.out.println(fiboTabulation(n));  
    }  
    private static int fiboTabulation(int n){  
        int dp[] = new int[n+1];  
        dp[0] =0;  
        dp[1]=1;  
        for(int i=2; i<=n; i++){  
            dp[i] = dp[i-1]+dp[i-2];  
        }  
        return dp[n];  
    }  
}
```
