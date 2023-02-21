
![](https://i.imgur.com/JoFkxEx.png)




![](https://i.imgur.com/QZd94DW.png)




*so in that we start from index 0 which have the value 3. so from 0 we can jump to index 1 , 2 3 and then from index 1 has the value 3 so its also can jump 3 so it can jump 2 3 4. and then index 2. has the 0 value so jump to return it Bec its can't jump further .*



![](https://i.imgur.com/SmcmAiB.png)

**5 to reach 6 only 1 way below image.** 

![](https://i.imgur.com/ldOEExS.png)



**next**

![](https://i.imgur.com/Ka658KO.png)



**don't let them call f7 if f5 try to do call.**

![](https://i.imgur.com/QfJGoq8.png)



**now comes part to optimization**
**so both call 5 give the different answer ? can check into below image.**

![](https://i.imgur.com/Wt8qOeL.png)


**now f3 option have f4 and f5 so sum of f4+f5 is 3 + 1**

![](https://i.imgur.com/dPq4lmF.png)



**next**
![](https://i.imgur.com/aqfar9i.png)






![](https://i.imgur.com/SbF28Yr.png)





# by Recursion

```java
package DP_Questions.VariableJump;  
  
public class Main {  
    public static void main(String[] args) {  
        int n =6;  
        int[] arr ={ 3 ,3, 0, 2, 2, 3};  
        int[] dp = new int[n+1];  
        System.out.println(recur(arr,0));  
    }  
    private static int recur(int[] jump , int idx){  
        if(idx==jump.length) return 1;  // 1 jump possible.  
        int ans = 0;  
        for(int i=1; i<=jump[idx]; i++){  
            if(i+idx<=jump.length){  
                ans+=recur(jump,i+idx);  
            }  
        }  
        return ans;  
    }  
}
```

**another way**

```java
package DP_Questions.VariableJump;  
  
public class Main {  
    public static void main(String[] args) {  
        int n =6;  
        int[] arr ={ 3 ,3, 0, 2, 2, 3};  
        int[] dp = new int[n+1];  
        System.out.println(recur(arr,0));  
    }  
    private static int recur(int[] jump , int idx){  
        if(idx==jump.length) return 1;  // 1 jump possible.  
        int ans = 0;  
        for(int i=1; i<=jump[idx] && i+idx<=jump.length; i++){  
                ans+=recur(jump,i+idx);  
        }  
        return ans;  
    }  
}
```

**output:- 8**


# dp memo

```js
package DP_Questions.VariableJump;  
  
public class Main {  
    public static void main(String[] args) {  
        int n =6;  
        int[] arr ={ 3 ,3, 0, 2, 2, 3};  
        int[] dp = new int[n+1];  
        System.out.println(memoWay(arr,0,dp));  
    }  
    // Memorization  
    private static int memoWay(int[]jump , int idx, int[] dp){  
        if(idx==jump.length) return dp[idx] = 1;  
        int ans = 0;  
        if(dp[idx]!=0) return dp[idx];  
        for(int i=1; i<=jump[idx] && i+idx<=jump.length; i++){  
            ans+=memoWay(jump,i+idx,dp);  
            dp[idx] = ans;  
        }  
        return ans;  
    }  
}
```

**another way**

```java
ass Solution {
    public int stairWays(int[] jump) {
        //Write code here
		int n= jump.length;
		        int[] dp = new int[n+1];
       return memoWay(jump,0,dp);
    }
	private  int memoWay(int[]jump , int idx, int[] dp){
        if(idx==jump.length) return 1;
        int ans = 0;
        if(dp[idx]!=0) return dp[idx];
        for(int i=1; i<=jump[idx] && i+idx<=jump.length; i++){
            ans+=memoWay(jump,i+idx,dp);
        }
        return  dp[idx] = ans;
    }
```


# tabulation
**need to know**
**dp array will be n+1 because 0 index will store the answer becuase start iterating from backswords.**
**start from recursion base case. where base case hit on recursion where our tabulation will start**
**instead of function name we  will put dp**
**put first base case value into dp and then continue.**

****
```java
private static int tabulation(int[] jump, int[] dp){  
    for(int idx=jump.length; idx>=0; idx--){  
        if(idx==jump.length)  
        {  
            dp[idx] = 1;  
            continue;  
        }  
        int ans = 0;  
        for(int i=1; i<=jump[idx] && i+idx<=jump.length; i++){  
            ans+= dp[idx+i]; //memoWay(jump,i+idx,dp);  
        }  
        dp[idx] = ans;  
    }  
    return dp[0];  
}
```