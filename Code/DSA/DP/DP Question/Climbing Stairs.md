
in this base case gonna be.
if n == 0 then return 1. because i am on ground and if i do jump on ground then its going to be 1 jump.
if n < 0 means I can't go below or jump below ground then its going to be 0.

and there also be a case. if n = 1. then the recursive call be go till n-1 and n-2. so n - 1 =0 and = return 0; and n-2 is -1 so its negative value. so for that return 0 if negative call.

its same like Fibonacci series.


# Using Recursion Fibonacci pattern

```java
package DP.Basic_Recursion;  
  
public class ClimbingStairsRecursion {  
    public static int countWays(int n){  
        if(n==0) return 1;  
        if(n<0) return 0;  
        return countWays(n-1)+countWays(n-2);  
    }  
    public static void main(String[] args) {  
        int n = 5; // n =3 -> 3 & n=4 ->5 => 8  
        System.out.println(countWays(n));  
    }  
}
```

just finding n-1 and n-2 way to reach nth


# Tree Visualize

![](https://i.imgur.com/CarCSU3.png)
![](https://i.imgur.com/ltSZEm2.png)


# DP Memorization (Top Bottom)

```java
class Solution {

    public int climbStairs(int n) {

        int[] f = new int[n+1];

        return countWays(n,f);

    }

    private int countWays(int n, int[] f){

        if(n==0) return 1;

        if(n<0) return 0;

        if(f[n]!=0){

            return f[n];

        }

        f[n] = countWays(n-1,f)+countWays(n-2,f);

        return f[n];

    }

}
```


# visualize
![](https://i.imgur.com/OqCkTuL.png)


![](https://i.imgur.com/LbvawHW.png)
![](https://i.imgur.com/dYRNkDt.png)




# another way

we feel into array -1;


```java
class Solution {

    public int climbStairs(int n) {

        int[] f = new int[n+1];

        Arrays.fill(f,-1);

        return countWays(n,f);

    }

    private int countWays(int n, int[] f){

        if(n==0) return 1;

        if(n<0) return 0;

        if(f[n]!=-1){

            return f[n];

        }

        f[n] = countWays(n-1,f)+countWays(n-2,f);

        return f[n];

    }

}
```



# Tabulation

```java
class Solution {

    public int climbStairs(int n) {

        int[] dp =  new int[n+1]; // o to n;

        dp[0] = 1;

        for(int i=1; i<=n; i++){

            if(i==1){

                dp[i] = dp[i-1]+0;

            }else{

                dp[i] = dp[i-1]+dp[i-2];

            }

        }

        return dp[n];

    }

}
```