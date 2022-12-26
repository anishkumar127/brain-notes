[GFG](https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1)

code TLE
```java
  
class Solution{
    static int maximumPath(int N, int Matrix[][])
    {
        // code here
        int ans = 0;
        for(int i=0; i<Matrix[0].length; i++){
            ans = Math.max(ans,maxSum(0,i,Matrix,Matrix.length,Matrix[0].length));
        }
      return ans;
    }
    public static int maxSum(int i, int j, int[][] matrix, int n, int m){
        if(i>=n || j>=m || i<0 || j<0){
            return 0;
        }

        if(i==n-1){
            return matrix[i][j];
        }

        // right direction
        int a = maxSum(i+1, j+1, matrix, n, m);

        int c = maxSum(i+1,j-1,matrix,n,m);
        
        // downwards direction
        int b = maxSum(i+1, j, matrix, n, m);

        int ans = Math.max(a,Math.max(b,c)) + matrix[i][j];
        
        return ans;
    }
}
```



dp

```java
//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int N = Integer.parseInt(in.readLine());
            String input_line[] = in.readLine().trim().split("\\s+");
            int Matrix[][] = new int[N][N];
            for(int i = 0; i < N*N; i++)
                Matrix[(i/N)][i%N] = Integer.parseInt(input_line[i]);
            
            Solution ob = new Solution();
            System.out.println(ob.maximumPath(N, Matrix));
        }
    }
}

// } Driver Code Ends


//User function Template for Java

class Solution{
    static int maximumPath(int N, int Matrix[][])
    {
        // code here
        int n = N;
        int ans = 0;
        int dp[][] = new int[N][N];
        // Arrays.fill(dp,-1);
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                dp[i][j] = -1;
            }
        }
        for(int i=0; i<Matrix[0].length; i++){
            ans = Math.max(ans,maxSum(0,i,Matrix,Matrix.length,Matrix[0].length,dp));
        }
      return ans;
    }
    public static int maxSum(int i, int j, int[][] matrix, int n, int m, int dp[][]){
        if(i>=n || j>=m || i<0 || j<0){
            return 0;
        }
        if(dp[i][j]!=-1){
            return dp[i][j];
        }

        if(i==n-1){
            return matrix[i][j];
        }

        // right direction
        int a = maxSum(i+1, j+1, matrix, n, m, dp);

        int c = maxSum(i+1,j-1,matrix,n,m, dp);
        
        // downwards direction
        int b = maxSum(i+1, j, matrix, n, m,dp);

        int ans = Math.max(a,Math.max(b,c)) + matrix[i][j];
        
        return    dp[i][j] = ans ;
    }
}
```
![](https://i.imgur.com/L6u9Qp4.png)


maxtrix[i][j] is the starting root.
because we doing max a and b . but what is the path path is the. matrix i j

![](https://i.imgur.com/4ldV9i1.png)

do i and j+1 out of bound return 0

then go down
![](https://i.imgur.com/FgadtU4.png)


and then down ka left. and then its also return.

now
![](https://i.imgur.com/E1l3vg9.png)

i am reached  n-1 and m-1

![](https://i.imgur.com/iqTUzDn.png)

return return 11.
next
![](https://i.imgur.com/EIhN2hv.png)


now 2,3 return 11, nd 1,4 return 0. and matrix i,j is 3.

so 11+3 = 14. its return 14.

2,3 vs 1,4 max is 2,3 wala 11, and + matrix i,j is 3, so 11+3 = 14


![](https://i.imgur.com/lxPxNjd.png)

that return 23,  below call 14 and curr is matrix i j is 9 so 14+9 is 23
next

![](https://i.imgur.com/sAAYxwn.png)




![](https://i.imgur.com/cBtpwy9.png)
next
![](https://i.imgur.com/IWk2XBe.png)

next
![](https://i.imgur.com/YYjPYsJ.png)


so 15 is greater then 14. so we choose 15. which is 4 11 path.
![](https://i.imgur.com/Sx97Lfx.png)
