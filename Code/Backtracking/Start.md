
![](https://i.imgur.com/3AyGXii.png)
![](https://i.imgur.com/7FN6PoQ.png)
![](https://i.imgur.com/HLoIvRt.png)


```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
     int[]arr = new int[5];
     
     changeArray(arr,0,1);
     printArray(arr);
  }
  static void changeArray(int [] arr ,int i , int val){
    if(i==arr.length){
      printArray(arr);
      return;
    }
    arr[i] = val;
    changeArray(arr,i+1,val+1);
    arr[i] = arr[i]-2;
  }
  static void printArray(int [] arr ){
    for(int val:arr){
      System.out.print(val+" ");
    }
    System.out.println();
  }
}
```

Output:

1 2 3 4 5 
-1 0 1 2 3


![](https://i.imgur.com/MRy4KaH.png)
 TC - O(N);
 