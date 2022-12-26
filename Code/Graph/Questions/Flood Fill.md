
```java
import java.util.*;

public class Main {
    public static void FloodFill(int[][] image, int sr, int sc, int color) {
		if(image[sr][sc]==color) return;
        find(image,sr,sc,color,image[sr][sc]);
        
    }
    private  static void find(int[] [] image,int sr,int sc, int color, int initColor){
        if(sr<0 || sr>=image.length || sc<0 || sc>=image[0].length){
            return ;
        }
        if(initColor == image[sr][sc]){
            image[sr][sc]= color;
            find(image,sr+1,sc,color,initColor);
             find(image,sr,sc+1,color,initColor);
             find(image,sr-1,sc,color,initColor);
             find(image,sr,sc-1,color,initColor);
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt(), n = sc.nextInt();
        int[][] w = new int[m][n];
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; ++j)
                w[i][j] = sc.nextInt();
        }
        int x = sc.nextInt(), y = sc.nextInt(), c = sc.nextInt();
	    FloodFill(w, x, y, c);

        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++)
                System.out.print(w[i][j] + " ");
            System.out.println();
        }
    }
}
```

You are given a wall `w` represented as matrix, where each element of this wall matrix is filled with color(s).

You are also given two integers `x` and `y` and a color `c`. Your task is to fill `w[x][y]` and all its adjacent cells of the same color as `w[x][y]` with this new color `c`.

### Input Format

First line contains two space separated integers `m n`, which is the size of wall m x n

Next `m` lines contain `n` space separated integers of the wall

Last line contains three space separated integers `x` `y` and `c`.

### Output Format

Print the modified wall.

### Example 1

**Input**

```
3 3
0 1 1
0 1 1
1 0 1
1 1 2
```

**Output**

```
0 2 2
0 2 2
1 0 2
```

### Example 2

**Input**

```
3 3
1 1 1
1 1 1
1 1 1
0 0 1
```

**Output**

```
1 1 1
1 1 1
1 1 1
```

### Constraints

1 <= `m`, `n` <= 50

0 <= `w[i][j]` <= 216

0 <= `x` < m

0 <= `y` < n