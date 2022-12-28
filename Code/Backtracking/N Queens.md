
```java
public static boolean isQueenSafe(int row, int col, boolean[][] board){

int n = board.length;

int[][] dirs = {{-1,-1},{-1,0},{-1,1},{0,1},{1,1},{1,0},{-1,-1},{0,-1}};

for(int rad=1; rad<n; rad++){

for(int[] dir : dirs){

int i = row + rad * dir[0];

int j = col + rad * dir[1];

if(i>=0 && j>=0 && i<n && j<n && board[i][j]==true) return false;

}

}

return true;

}

public static void NQueens(int row, int n,boolean[][] board, String asf){

if(row==n){

System.out.println(asf);

return;

}

for(int col=0; col<n; col++){

if(isQueenSafe(row,col,board)==true){

board[row][col] = true;

NQueens(row+1, n, board, asf+"("+row+" , "+col+")");

board[row][col] = false;

}

}

}
public static void main(String[] args) {


Scanner scn = new Scanner(System.in);

int n = scn.nextInt();

scn.close();

NQueens(0, n, new boolean[n][n], "");

}
```




![](https://i.imgur.com/agIIYcM.png)


not able to place the n=3 queens into the 3 into 3 cross chess board.

because queens can go left right top bottom and digalons



![](https://i.imgur.com/fuaDO7J.png)




![](https://i.imgur.com/Q4IUcKF.png)


![](https://i.imgur.com/GrIiLQg.png)



next

![](https://i.imgur.com/loaHjgX.png)


![](https://i.imgur.com/8Nh0dBt.png)
