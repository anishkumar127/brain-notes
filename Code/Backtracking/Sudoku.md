```java
package Backtracking.SudokuSolver;  
  
public class Main {  
    public static void main(String[] args) {  
        int sudoku[][] = {{3 ,0 ,6, 5, 0 ,8 ,4 ,0 ,0},  
        {5 ,2, 0, 0 ,0 ,0, 0, 0, 0},  
            {0, 8, 7 ,0 ,0 ,0 ,0 ,3 ,1 },  
                {0, 0, 3, 0, 1, 0, 0, 8, 0},  
                    {9 ,0 ,0 ,8, 6,3, 0 ,0, 5},  
                        {0 ,5, 0, 0 ,9, 0 ,6 ,0,0},  
                            {1, 3 ,0 ,0, 0, 0 ,2, 5 ,0},  
                                {0, 0, 0, 0 ,0 ,0 ,0, 7, 4},  
                                    {0 ,0 ,5, 2 ,0,6 ,3 ,0 ,0}};  
    }  
    public static boolean sudokuSolver(int  sudoku[][], int row , int col){  
        // base case  
        int nextRow = row, nextCol = col+1;  
        if(col+1==9){  
            nextRow = row+1;  
            nextCol= 0;  
        }  
        if(sudoku[row][col]!=0){  
         sudokuSolver(sudoku,nextRow,nextCol);  
        }  
        for(int digit=0; digit<=9; digit++){  
            if(isSafe(sudoku,row,col,digit)){  
                sudoku[row][col] = digit;  
                if(sudokuSolver(sudoku,nextRow,nextCol)){ // solution exists  
                    return true;  
                }  
                sudoku[row][col] = 0;  
            }  
        }  
        return false;  
    }  
}
```






till now . base case and isSafe method left.

but what we did their ?


we just iterating to 1 to 9 digit  and checking is it safe to place. then place it into the row and col = digit

and if we get 1 solution possible. then we just return the true.

if not get true. get false. then we do again sudoku row col = 0;


and existing previous value we don't need to change. because they are in the sudoku from tyhe starting so we just. check if not equal to 0 then don't do anything just do the  next row and next col


and we do one more check. we just do col plus plus now row. if col == 9 then we do row+1 

and col will be the 0.

```java
// base case  
if(row == 9 && col ==9){  
    return true;  
}else if(row==9){  
    return false;  
}
```


base case will be the. if row and col == 9 then we get it and we will return the true.

if all row == 9 and col left then we return the false.



next

![](https://i.imgur.com/H2ppIG7.png)




isSafe check.


for column check.

colum will be the constant. but row going to be ++ like [i]  and any case their col digit equal to the digit which we want to place we will simply return the false.



![](https://i.imgur.com/vHn8SU9.png)


for row checheck.

if digit equal to the horizontal row. we wil iterate over the colum and check if digit equal the that digit which we want to place then simply return the false.



for grid check

![](https://i.imgur.com/hHxV6qI.png)



we will find the starting row of the grid and the starting col of the grid.
and we will apply the formula. for that.


this is going to be the.  row/3 * 3  and col /3 * 3



![](https://i.imgur.com/2xjEiPy.png)




![](https://i.imgur.com/EKoZskA.png)




![](https://i.imgur.com/uiXL7XZ.png)



![](https://i.imgur.com/4YnbiwM.png)



![](https://i.imgur.com/s9h76ZV.png)


![](https://i.imgur.com/PLimhHk.png)


just need to _+3 and +3 for row and column_




```java
// grid 3*3  
int sRow = (row/3)*3;  
int sCol = (col/3)*3;  
for(int i=sRow; i<sRow+3; i++){  
    for(int j=sCol; j<=sCol+3; j++){  
        if(sudoku[i][j]==digit){  
            return false;  
        }  
    }  
}
```

Base case wrong

![](https://i.imgur.com/cyhDMxx.png)





![](https://i.imgur.com/RQz3J0m.png)


this will be the right base case

row == 9 and j == 0 then return it true.



```java
package Backtracking.SudokuSolver;  
  
public class Main {  
    public static void main(String[] args) {  
        int sudoku[][]  = {{3 ,0 ,6, 5, 0 ,8 ,4 ,0 ,0},  
        {5 ,2, 0, 0 ,0 ,0, 0, 0, 0},  
            {0, 8, 7 ,0 ,0 ,0 ,0 ,3 ,1 },  
                {0, 0, 3, 0, 1, 0, 0, 8, 0},  
                    {9 ,0 ,0 ,8, 6,3, 0 ,0, 5},  
                        {0 ,5, 0, 0 ,9, 0 ,6 ,0,0},  
                            {1, 3 ,0 ,0, 0, 0 ,2, 5 ,0},  
                                {0, 0, 0, 0 ,0 ,0 ,0, 7, 4},  
                                    {0 ,0 ,5, 2 ,0,6 ,3 ,0 ,0}};  
  
  
//        display(sudoku);  
//        System.out.println(sudokuSolver(sudoku,0,0));  
                if(sudokuSolver(sudoku,0,0)){  
            System.out.println("Exists Solution");  
            display(sudoku);  
        }else{  
            System.out.print("NO Exists Solution");  
        }  
    }  
    public static boolean sudokuSolver(int sudoku[][] , int row , int col){  
        // base case  
        if(row==9 && col==0) return true;  
  
        int nextRow = row, nextCol = col+1;  
  
        if(col+1==9){  
            nextRow = row+1;  
            nextCol = 0;  
        }  
  
        if(sudoku[row][col]!=0){  
       return  sudokuSolver(sudoku,nextRow,nextCol);  
        }  
  
        for(int digit=1; digit<=9; digit++){  
            if(isSafe(sudoku,row,col,digit)){  
                sudoku[row][col] = digit;  
                if(sudokuSolver(sudoku,nextRow,nextCol)){ // solution exists  
                    return true;  
                }  
                sudoku[row][col] = 0;  
            }  
        }  
        return false;  
    }  
    private static boolean isSafe(int sudoku[][] , int row , int col, int digit){  
        // column  
        for(int i=0; i<=8; i++){  
            if(sudoku[i][col]==digit){  
                return false;  
            }  
        }  
       // row  
        for(int j=0; j<=8; j++){  
            if(sudoku[row][j]==digit){  
                return false;  
            }  
        }  
        // grid 3*3  
        int sRow = ((row/3)*3);  
        int sCol = ((col/3)*3);  
  
        for(int i=sRow; i<sRow+3; i++){  
            for(int j=sCol; j<sCol+3; j++){  
                if(sudoku[i][j]==digit){  
                    return false;  
                }  
            }  
        }  
  
        return true;  
    }  
    private static void display(int sudoku[][]){  
        for(int[] arr:sudoku){  
            for(int val:arr){  
                System.out.print(val+" ");  
            }  
            System.out.println();  
        }  
    }  
}
```