[leetcode](https://leetcode.com/problems/n-queens/)

```java
class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> ans = new ArrayList<>();
          char[][] board = new char[n][n];
        // initialise
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                board[i][j] = '.';
            }
        }
        NQueens(board,0,ans);
        return ans;
    }
     private boolean isSafe(char[][] board, int row,int col){
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
    private void NQueens(char[][] board, int row,List<List<String>> ans){
        if(row==board.length){
            ans.add(new ArrayList<>(display(board)));
            return;
        }
        // column loop
        for(int j=0; j<board.length; j++){
            if(isSafe(board,row,j)){
            board[row][j] = 'Q';
            NQueens(board,row+1,ans); // function call.
            board[row][j] ='.'; // backtracking
            }
        }
    }
       private ArrayList<String> display(char [][] board){
           ArrayList<String> ans = new ArrayList<>();
         for(char[] arr:board){
             String curr = "";
           for(char val:arr){
            // ans.add(curr==val);
               curr +=val;
           }
             ans.add(curr);
         }
           return ans;
    }
}
```

# Other
// normal backtracking

```java
package Backtracking;  
  
import java.util.*;  
public class Main {  
    public static void main(String[] args) {  
        int n = 2;  
        char[][] board = new char[n][n];  
        // initialise  
        for(int i=0; i<n; i++){  
            for(int j=0; j<n; j++){  
                board[i][j] = '.';  
            }  
        }  
        NQueens(board,0);  
    }  
    // nqueens  
    private static void NQueens(char[][] board, int row){  
        if(row==board.length){  
            display(board);  
            return;  
        }  
        // column loop  
        for(int j=0; j<board.length; j++){  
            board[row][j] = 'Q';  
            NQueens(board,row+1); // function call.  
            board[row][j] ='.'; // backtracking  
        }  
    }  
    //  print  
    private static void display(char [][] board){  
        System.out.println("-------- chess board --------");  
         for(char[] arr:board){  
           for(char val:arr){  
             System.out.print(val+" ");  
           }  
             System.out.println();  
         }  
    }  
}
```


now nqueens work

```java
package Backtracking;  
  
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
    private static void NQueens(char[][] board, int row){  
        if(row==board.length){  
            display(board);  
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
    //  print  
    private static void display(char [][] board){  
        System.out.println("-------- chess board --------");  
         for(char[] arr:board){  
           for(char val:arr){  
             System.out.print(val+" ");  
           }  
             System.out.println();  
         }  
    }  
}
```

![](https://i.imgur.com/0jOZtIq.png)


unsafe
![](https://i.imgur.com/FjM4YQ0.png)




another queen safe if other position

![](https://i.imgur.com/eH3QdiI.png)


next

![](https://i.imgur.com/mbMBZmW.png)

![](https://i.imgur.com/oz0JE9K.png)
