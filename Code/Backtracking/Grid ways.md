

```java
package Backtracking.GridWays;  
  
public class Main {  
    public static void main(String[] args) {  
        int n = 3, m = 3;  
        System.out.println(gridWays(0,0,n,m));  
    }  
    private static int gridWays(int i , int j , int n , int m){  
        // base case  
        if(i == n-1 && j==m-1){  
            return 1;  
        }else if(i==n  || j ==m){  
            return 0;  
        }  
  
        int w1= gridWays(i+1,j,n,m);  
        int w2 = gridWays(i,j+1,n,m);  
  
        return w1+w2;  
    }  
}
```

output - 6.

tc- too high complexity. its greater then n^2 

![](https://i.imgur.com/O7YV3rI.png)



![](https://i.imgur.com/rbvWK2x.png)

![](https://i.imgur.com/cu2QoFI.png)



quetisons.


![](https://i.imgur.com/FDmu33R.png)
![](https://i.imgur.com/0OtOg2i.png)



# Another Ways using Permutations


```java

```





![](https://i.imgur.com/6H8Hdjh.png)


![](https://i.imgur.com/kz2nwZJ.png)
![](https://i.imgur.com/L2b4loz.png)


![](https://i.imgur.com/NeYpkT5.png)


![](https://i.imgur.com/ybwcOht.png)



![](https://i.imgur.com/0avjhlw.png)
