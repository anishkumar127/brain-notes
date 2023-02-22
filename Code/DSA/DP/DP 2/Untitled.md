```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] grid = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                grid[i][j] = sc.nextInt();
            }
        }
        Solution s = new Solution();
        System.out.println(s.minimumTotal(grid));
    }

}

class Solution {
    public static int minimumTotal(int[][] grid) {
		   int[][] dp = new int[grid.length+1][grid[0].length+1];
        for(int [] el:dp) Arrays.fill(el,-1);
        return sumMemo(grid,0,0,dp);
    }
	  private static int sumMemo(int [][] M , int i , int j , int[][] dp){
        int n = M.length;
        int m = i+1;
        if(i>=n || j>=m) return Integer.MAX_VALUE;

        if(i==n-1) return M[i][j];

        if(dp[i][j]!=-1) return dp[i][j];

        int left = sumMemo(M,i+1,j,dp);
        int right = sumMemo(M,i+1,j+1,dp);
        return dp[i][j] = Math.min(left,right)+M[i][j];
    }
}
```

# Recursion

```java
    public static int minimumTotal(int[][] grid) {  
        return minTotal(grid,0,0);  
    }
// Recursion  
private static int minTotal(int M[][] , int i , int j){  
    int n = M.length;  
    int m = i+1;  
  
    if(i>=n || j>=m) return Integer.MAX_VALUE;  
  
    if(i==n-1) return M[i][j];  
  
    int left = minTotal(M,i+1,j);  
    int right = minTotal(M,i+1,j+1);  
    return Math.min(left,right)+M[i][j];  
}
```


# dp memo

```java
   public static int minimumTotal(int[][] grid) {  
        int[][] dp = new int[grid.length+1][grid[0].length+1];  
        for(int [] el:dp) Arrays.fill(el,-1);  
        return sumMemo(grid,0,0,dp);  
    }  
  
    //Dp  
    private static int sumMemo(int [][] M , int i , int j , int[][] dp){  
        int n = M.length;  
        int m = i+1;  
        if(i>=n || j>=m) return Integer.MAX_VALUE;  
  
        if(i==n-1) return M[i][j];  
  
        if(dp[i][j]!=-1) return dp[i][j];  
  
        int left = sumMemo(M,i+1,j,dp);  
        int right = sumMemo(M,i+1,j+1,dp);  
        return dp[i][j] = Math.min(left,right)+M[i][j];  
    }
```




# leetcode dp

```java
class Solution {

    private int pathSum(List<List<Integer>>M , int i , int j, int [][] dp){

        int n= M.size();

        int m = i+1;

        if(i==n-1) return M.get(i).get(j);

        if(dp[i][j]!=(int)1e5) return dp[i][j];

        int left = pathSum(M, i+1, j,dp);

        int right = pathSum(M, i+1 , j+1,dp);

        return dp[i][j] = Math.min(left,right) + M.get(i).get(j);

    }

    public int minimumTotal(List<List<Integer>> triangle) {

        int [][]  dp = new int[triangle.size()][triangle.size()];

        for(int []arr:dp) Arrays.fill(arr,(int)1e5); // becuase in question negative also a value.

        // for(int i=0; i<triangle.size(); i++){

        //     Arrays.fill(dp[i],(int)1e5);

        // }

        return pathSum(triangle,0,0,dp);

    }

}
```

*so above question . dp array fill up with 1e5 because of array also containing the negative value.*



# next

![](https://i.imgur.com/FXywZoW.png)


*last row we having the base case. if last index then it will be the same that current value..*


![](https://i.imgur.com/JuJP4P5.png)


*7 taking the min value. between 8 and 3.* 
**i+1 , j is 8.**
**i+1 , j+1 is 3.**

![](https://i.imgur.com/Vf42Mug.png)


**now 7 become 10.

**because 7 + 3 = 10;**


![](https://i.imgur.com/huyty18.png)


**now 5 + 1  or 5 + 8 which minimum so we do 6.**


![](https://i.imgur.com/SJiTtpl.png)


