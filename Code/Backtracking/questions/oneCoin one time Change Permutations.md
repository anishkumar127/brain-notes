
```java
package Backtracking.CoinsPermutations;  
  
public class oneCoin {  
    public static void main(String[] args) {  
        int[] arr = {2,3,5,6,7};  
        combination_oneCoin(arr, 0, 12,0 , "");  
    }  
    public static void combination_oneCoin(int[] arr, int idx, int tar, int csum, String asf){  
        if(csum>tar){  
            return;  
        }  
        if(idx == arr.length){  
            if(csum==tar){  
                System.out.println(asf);  
            }  
            return;  
        }  
  
        // include  
        combination_oneCoin(arr, idx+1, tar, csum+arr[idx], asf+arr[idx]+",");  
  
        // not include  
        combination_oneCoin(arr, idx+1, tar, csum, asf);  
    }  
}
```

``take not take.``

![](https://i.imgur.com/p5zB9S1.png)
