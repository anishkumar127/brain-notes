![](https://i.imgur.com/czLsGzl.png)


![](https://i.imgur.com/qlHy3Ew.png)


*so return the max between up right and down diag and current what is my max. so current standing also include.*

# Recursion

```java
package DP_Questions.maximumGold;  
  
import java.util.Scanner;  
  
public class Main {  
    public static void main(String[] args) {  
        Scanner sc = new Scanner(System.in);  
        int n = sc.nextInt();  
        int m = sc.nextInt();  
        int M[][] = new int[n][m];  
        for(int i = 0;i < n*m;i++){  
            M[i/m][i%m] = sc.nextInt();  
        }  
    int ans =0;  
    for(int i=0; i<n; i++){  
        ans = Math.max(ans,maxGold(i,0,M));  
    }  
        System.out.println(ans);  
    }  
    private static int maxGold(int i , int j , int[][] m){  
        if(i<0 || i>=m.length || j<0 || j>=m[0].length) return 0;  
  
        if(j==m[0].length-1) return m[i][j];  
  
        int upDiag = maxGold(i-1,j+1,m);  
        int rightDiag = maxGold(i,j+1,m);  
        int downDiag = maxGold(i+1,j+1,m);  
  
        return Math.max(upDiag,Math.max(rightDiag,downDiag))+m[i][j];  
    }  
}
```

3 3
1 3 3
2 1 4
0 6 4
**ans = 12**

![](https://i.imgur.com/ymv5hoo.png)


![](https://i.imgur.com/XxNnNdY.png)



*for loop because we need to check from each index. so if we not start then assume like 60. so we not able to check the 60. so we start from starting of each index like 0 1 2 and its row.*


![](https://i.imgur.com/sT546l1.png)

*if we are standing on last column so we not getting anything. so we return the current value where we are standing.  if(j==m[0].length-1) return m[i][j];*  

# dp memorization
```java
import java.io.*;
import java.util.*;

class Main{
    public static void main(String args[])throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int M[][] = new int[n][m];
        for(int i = 0;i < n*m;i++){
            M[i/m][i%m] = sc.nextInt();
        }
        
        Solution ob = new Solution();
        System.out.println(ob.maxGold(n, m, M));
    }
} 

class Solution{
    static int maxGold(int n, int m, int M[][]){
        //Write code here
		 int[][] dp = new int[n][m];
        for(int [] val:dp){
            Arrays.fill(val,-1);
        }

    int ans =0;
    for(int i=0; i<n; i++){
        ans = Math.max(ans,maxGoldMemo(i,0,M,dp));
    }
        // System.out.println(ans);
		return ans;
    }   
	private static int maxGoldMemo(int i, int j, int[][] m , int[][] dp){
        if(i<0 || i>=m.length || j<0 || j>=m[0].length) return 0;

        if(j==m[0].length-1) return m[i][j];

        if(dp[i][j]!=-1) return dp[i][j];

        int upDiag = maxGoldMemo(i-1,j+1,m,dp);
        int rightDiag = maxGoldMemo(i,j+1,m,dp);
        int downDiag = maxGoldMemo(i+1,j+1,m,dp);

        return  dp[i][j] = Math.max(upDiag,Math.max(rightDiag,downDiag))+m[i][j];
    }
}
```


**another**


```java
package DP_Questions.maximumGold;  
  
import java.util.Arrays;  
import java.util.Scanner;  
  
public class Main {  
    public static void main(String[] args) {  
        Scanner sc = new Scanner(System.in);  
        int n = sc.nextInt();  
        int m = sc.nextInt();  
        int M[][] = new int[n][m];  
        for(int i = 0;i < n*m;i++){  
            M[i/m][i%m] = sc.nextInt();  
        }  
        int[][] dp = new int[n][m];  
        for(int [] val:dp){  
            Arrays.fill(val,-1);  
        }  
  
    int ans =0;  
    for(int i=0; i<n; i++){  
        ans = Math.max(ans,maxGoldMemo(i,0,M,dp));  
    }  
        System.out.println(ans);  
    }  
    // Recursion  
    private static int maxGold(int i , int j , int[][] m){  
        if(i<0 || i>=m.length || j<0 || j>=m[0].length) return 0;  
  
        if(j==m[0].length-1) return m[i][j];  
  
        int upDiag = maxGold(i-1,j+1,m);  
        int rightDiag = maxGold(i,j+1,m);  
        int downDiag = maxGold(i+1,j+1,m);  
  
        return Math.max(upDiag,Math.max(rightDiag,downDiag))+m[i][j];  
    }  
    // Dp  
    private static int maxGoldMemo(int i, int j, int[][] m , int[][] dp){  
        if(i<0 || i>=m.length || j<0 || j>=m[0].length) return 0;  
  
        if(j==m[0].length-1) return m[i][j];  
  
        if(dp[i][j]!=-1) return dp[i][j];  
  
        int upDiag = maxGoldMemo(i-1,j+1,m,dp);  
        int rightDiag = maxGoldMemo(i,j+1,m,dp);  
        int downDiag = maxGoldMemo(i+1,j+1,m,dp);  
  
        return  dp[i][j] = Math.max(upDiag,Math.max(rightDiag,downDiag))+m[i][j];  
    }  
}
```


