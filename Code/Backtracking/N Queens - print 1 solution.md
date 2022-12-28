```java
package Backtracking.Print1Solution;  
import java.util.*;  
public class Main {  
    public static void main(String[] args) {  
        int n = 3;  
        char[][] board = new char[n][n];  
        // initialise  
        for(int i=0; i<n; i++){  
            for(int j=0; j<n; j++){  
                board[i][j] = '.';  
            }  
        }  
//        NQueens(board,0);  
//        if(NQueens(board,0)){  
//            System.out.println("TRUE");  
//        }else{  
//            System.out.println("FALSE");  
//        }  
        System.out.println(NQueens(board,0));  
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
    private static boolean NQueens(char[][] board, int row){  
        if(row==board.length){  
            count++;  
            return true;  
        }  
        // column loop  
        for(int j=0; j<board.length; j++){  
            if(isSafe(board,row,j)){  
                board[row][j] = 'Q';  
                if(NQueens(board,row+1)){  
                    return true;  
                }  
                board[row][j] ='.'; // backtracking  
            }  
        }  
        return false;  
    }  
}
```

if 1 solution exists then return it true. if not then return it false.
if 1 solution exists then no further call.
if not then keep do backtracking and check till not found the 1 excitsing solutions. 



![](https://i.imgur.com/zccq92X.png)
