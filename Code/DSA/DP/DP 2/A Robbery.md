

![](https://i.imgur.com/n5zTma1.png)



![](https://i.imgur.com/1LcaVB0.png)




![](https://i.imgur.com/QjfdfpC.png)





![](https://i.imgur.com/RHlqP5A.png)




![](https://i.imgur.com/jA78Xkw.png)



![](https://i.imgur.com/MWtpqJb.png)


# Recursion TLE

```java
private static int Robber(int[] arr, int idx) {  
    if(idx>=arr.length) return 0;  
    int take = arr[idx] + Robber(arr,idx+2);  
    int notTake = Robber(arr,idx+1);  
  
    int ans = Math.max(take,notTake);  
  
    return ans;  
}
```


# Most optimal

![](https://i.imgur.com/uITGkT4.png)




# MEMO

```java
class Solution {
    public int rob(int[] nums) {
        int n = nums.length;
		  int[] dp = new int[n+1];
		Arrays.fill(dp,-1);
        return RobberMemo(nums,0,dp);
    }
     private static int RobberMemo(int[] arr, int idx, int[] dp){
        if(idx==arr.length){
            return dp[idx] = 0;
        }
        int take = arr[idx];
        int notTake = 0;
        if(dp[idx]!=-1) return dp[idx];
        if(idx+2<=arr.length){
            take+=RobberMemo(arr,idx+2,dp);
        }
        notTake+= RobberMemo(arr,idx+1,dp);
        int ans = Math.max(take,notTake);
        return dp[idx] = ans;
    }
}
```



# most optimal solution

```java
private static int mostOptimal(int[] arr){  
    int prevInclude = arr[0];  
    int prevExclude = 0;  
    for(int i=1; i<arr.length; i++){  
        int meInclude = arr[i] + prevExclude;  
        int meExclude = Math.max(prevExclude,prevInclude);  
        prevInclude = meInclude;  
        prevExclude = meExclude;  
    }  
    return Math.max(prevExclude,prevInclude);  
}
```

