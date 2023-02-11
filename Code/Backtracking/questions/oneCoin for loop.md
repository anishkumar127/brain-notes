
```java
package Backtracking.CoinsPermutations;  
  
public class oneCoinForLoop {  
    public static void main(String[] args){  
        int[] arr = {2,3,5,6,7};  
        combination(arr, 0, 12,0 , "");  
    }  
    private static void combination(int[] arr , int idx ,int tar, int csum,String asf){  
  
        if(csum>tar) return;  
        if(idx==arr.length){  
            if(csum==tar){  
            System.out.println(asf+"");  
            }  
        return;  
        }  
  
        for(int i=idx; i<arr.length; i++){  
            combination(arr,i+1,tar,csum+arr[i],asf+arr[i]+",");  
        }  
    }  
}
```