

```java
package Backtracking.countWays;  
  
  
import java.util.*;  
public class Main {  
    public static void main(String[] args) {  
        int n = 5;  
        char[][] board = new char[n][n];  
        // initialise  
        for(int i=0; i<n; i++){  
            for(int j=0; j<n; j++){  
                board[i][j] = '.';  
            }  
        }  
        NQueens(board,0);  
        System.out.println(count);  
    }  
    private static boolean isSafe(char[][] board, int row,int col){  
        int n = board.length;  
        // vertical up  
        for(int i = row-1; i>=0; i--){  
            if(board[i][col] =='Q'){  // if go up already queen then return false;  
                return false;  
            }  
        }  
//        digaonal left  
        for(int i=row-1,  j = col-1 ;  i>=0 && j>=0 ; i-- ,j--) {  
            if(board[i][j]=='Q'){  
                return false;  
            }  
        }  
        // dioagonal right  
        for(int i=row-1,  j = col+1 ;  i>=0 && j<n ; i-- ,j++) {  
            if(board[i][j]=='Q'){  
                return false;  
            }  
        }  
        return true;  
    }  
    // nqueens  
    static  int count =0;  
    private static void NQueens(char[][] board, int row){  
        if(row==board.length){  
            count++;  
            return;  
        }  
        // column loop  
        for(int j=0; j<board.length; j++){  
            if(isSafe(board,row,j)){  
                board[row][j] = 'Q';  
                NQueens(board,row+1); // function call.  
                board[row][j] ='.'; // backtracking  
            }  
        }  
    }  
}
```


just add a static variable. where we are hitting the base case over their we just need to do the count++; 
and then just print it count. as in the main method.



![](https://i.imgur.com/LS0duqT.png)
