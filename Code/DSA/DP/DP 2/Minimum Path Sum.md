

*if we return 0 then it will return the zero . so its wrong below code.*

![](https://i.imgur.com/wbJBKpL.png)



*so we return the infinity. because we need to minimum path sum. and 0 always will be minimum so we return infinity .*

![](https://i.imgur.com/v46pq3O.png)


*so next why dp? because overlapping problem 4 asking 5 and 30 asking 5.*

![](https://i.imgur.com/eJXfACn.png)




```java
import java.util.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
class Solution {

	public static int minPathSum(int[][] grid) {
		//Your code goes here
		 if(grid==null || grid.length==0){
            return 0;
        }
        HashMap<String, Integer> map = new HashMap<>();
        
        int ans = maxSumRecursion(0,0,grid,map);
        
        return ans;
	}
	   private static int maxSumRecursion(int i , int j , int [][] grid, HashMap<String,Integer>map){
        int n = grid.length-1;
        int m = grid[0].length-1;
        
        if(i>n || j>m){
            return Integer.MAX_VALUE;
        }
        if(i==n && j==m){
            return grid[i][j];
        }
        
        String key = i+"#"+j;
        if(map.containsKey(key)){
            return map.get(key);
        }
            
        int x = maxSumRecursion(i+1,j,grid,map);
        int y = maxSumRecursion(i,j+1,grid,map);
        map.put(key,Math.min(x,y)+grid[i][j]);
        return Math.min(x,y)+grid[i][j];
        
    }
}
public class Main {

    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    
    public static int[][] take2DInput() throws IOException {
        String[] strRowsCols = br.readLine().trim().split("\\s");
        int mRows = Integer.parseInt(strRowsCols[0]);
        int nCols = Integer.parseInt(strRowsCols[1]);

        if (mRows == 0) {
            return new int[0][0];
        }


        int[][] mat = new int[mRows][nCols];

        for (int row = 0; row < mRows; row++) {
            String[] strNums; 
            strNums = br.readLine().trim().split("\\s");
            
            for (int col = 0; col < nCols; col++) {
                mat[row][col] = Integer.parseInt(strNums[col]);
            }
        }

        return mat;
    }


    public static void main(String[] args) throws NumberFormatException, IOException {
        int[][] mat = take2DInput();
        System.out.println(Solution.minPathSum(mat));
    }
}
```


**another**
# Recursion

```java
private static int recur(int [][] m , int i,int j){  
    if(i>=m.length || j>=m[0].length) return Integer.MAX_VALUE;  
  
    if(i==m.length-1 && j==m[0].length-1) return m[i][j];  
  
    int right = recur(m,i,j+1); // only go right row will not move.  
    int down = recur(m,i+1,j); // only row move column will not move.  
    return Math.min(right,down) + m[i][j];  
}  
    public static int minPathSum(int[][] input) {  
        //Your code goes here  
        return recur(input,0,0);  
    }
```


# dp

```java
package DP_Questions.MinimumPathSum;  
  
import java.util.*;  
import java.io.BufferedReader;  
import java.io.IOException;  
import java.io.InputStreamReader;  
class Solution {  
    // Dp memo  
    private static int pathSum(int[][] m , int i, int j, int [][]dp){  
        if(i>=m.length || j>=m[0].length) return Integer.MAX_VALUE;  
  
        if(i==m.length-1 && j==m[0].length-1) return m[i][j];  
  
        if(dp[i][j]!=-1) return dp[i][j];  
  
        int right = pathSum(m,i,j+1,dp); // only go right row will not move.  
        int down = pathSum(m,i+1,j,dp); // only row move column will not move.  
        return dp[i][j] =  Math.min(right,down) + m[i][j];  
    }  
 
    public static int minPathSum(int[][] input) {  
        //Your code goes here  
        int[][] dp = new int[input.length+1][input[0].length+1];  
        for(int[] val:dp){  
            Arrays.fill(val,-1);  
        }  
        return pathSum(input, 0, 0,dp);  
    }  
}  
public class Main {  
  
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));  
  
    public static int[][] take2DInput() throws IOException {  
        String[] strRowsCols = br.readLine().trim().split("\\s");  
        int mRows = Integer.parseInt(strRowsCols[0]);  
        int nCols = Integer.parseInt(strRowsCols[1]);  
  
        if (mRows == 0) {  
            return new int[0][0];  
        }  
  
  
        int[][] mat = new int[mRows][nCols];  
  
        for (int row = 0; row < mRows; row++) {  
            String[] strNums;  
            strNums = br.readLine().trim().split("\\s");  
  
            for (int col = 0; col < nCols; col++) {  
                mat[row][col] = Integer.parseInt(strNums[col]);  
            }  
        }  
  
        return mat;  
    }  
  
  
    public static void main(String[] args) throws NumberFormatException, IOException {  
        int[][] mat = take2DInput();  
        System.out.println(Solution.minPathSum(mat));  
    }  
}
```


```java
private static int pathSum(int[][] m , int i, int j, int [][]dp){  
    if(i>=m.length || j>=m[0].length) return Integer.MAX_VALUE;  
  
    if(i==m.length-1 && j==m[0].length-1) return m[i][j];  
  
    if(dp[i][j]!=-1) return dp[i][j];  
  
    int right = pathSum(m,i,j+1,dp); // only go right row will not move.  
    int down = pathSum(m,i+1,j,dp); // only row move column will not move.  
    return dp[i][j] =  Math.min(right,down) + m[i][j];  
}

 public static int minPathSum(int[][] input) {  
        //Your code goes here  
        int[][] dp = new int[input.length+1][input[0].length+1];  
        for(int[] val:dp){  
            Arrays.fill(val,-1);  
        }  
        return pathSum(input, 0, 0,dp);  
    }
```


# tabulation

![](https://i.imgur.com/K6prTwi.png)


