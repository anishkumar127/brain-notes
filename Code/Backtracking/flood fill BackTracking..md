
```java
public static void floodFill(int i, int j, int[][] mat, int n, int m, String psf,boolean[][] visited){

if(i<0 || j<0 || i>=n || j>=m || mat[i][j]==1 || visited[i][j] == true){

return;

}

if(i==n-1 && j==m-1){

System.out.println(psf);

return;

}

visited[i][j] = true;

floodFill(i-1, j, mat, n, m, psf+"t",visited);

floodFill(i, j-1, mat, n, m, psf+"l",visited);

floodFill(i+1, j, mat, n, m, psf+"d",visited);

floodFill(i, j+1, mat, n, m, psf+"r",visited);

visited[i][j] = false;

}

public static void main(String[] args) {

 int[][] matrix = {{0,1,0,1,1,1},{0,1,0,1,1,0},{0,1,0,0,0,0},{0,0,0,1,1,0},{0,1,0,1,1,0},{0,0,0,1,1,0}};

 int n = matrix.length;

 int m = matrix[0].length;

 boolean[][] visited = new boolean[n][m];

  System.out.println(maxSum(0, 0, matrix, matrix.length, matrix[0].length));

 floodFill(1,0,matrix,n,m,"",visited);
```




![](https://i.imgur.com/lxV2AHL.png)
![](https://i.imgur.com/7Ql8BIo.png)



so we can go 4 direction. but we can't go by the 1 value we can walk on the 0 value.



stack overflow case.

![](https://i.imgur.com/eLoRdYd.png)


![](https://i.imgur.com/cVaViEg.png)


keep looping only one way. go back go back go back go back.



next after viisted array same issue

![](https://i.imgur.com/wuOJxRm.png)



i can go up down right down. when i did visited true. then after that again i want to do come back then there will be the issue.
because there is no way to come back. because below call is viistied true. and left righttop is the blockage.

![](https://i.imgur.com/L3ImbIL.png)


reached the end.
then start the returning.

![](https://i.imgur.com/2oHcLOl.png)



![](https://i.imgur.com/fgT7xTn.png)


above call recursion

last 
![](https://i.imgur.com/Nux6vBc.png)


this is the backtracking.

![](https://i.imgur.com/0fHmVFz.png)


![](https://i.imgur.com/cxIeSfP.png)



