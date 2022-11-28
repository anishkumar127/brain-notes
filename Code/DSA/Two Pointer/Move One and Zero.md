```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
      int arr[] = {1,0,0,1,0,1,1,0,0};
      
      int countZero =0;
      int countOne = 0;
      
      int idx =0;
      for(int value:arr){
        if(value==0) {
          arr[idx++] = 0;
        }
        else countOne++;
      }
      // while(countZero-->0){
      //   arr[idx++]=0;
      // }
      while(countOne-->0) arr[idx++] = 1;
      System.out.println(Arrays.toString(arr));
  }
}
```

# 2nd method.

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
      int arr[] = {1,0,0,1,0,1,1,0,0};
      
      int countZero =0;
      int countOne = 0;
      
      int idx =0;
      for(int value:arr){
        if(value==0) {
          countZero++;
        }
      }
      
      for(int i=0; i<arr.length; i++){
        if(i<countZero){
          arr[i] = 0;
        }else arr[i] = 1;
      }
      System.out.println(Arrays.toString(arr));
  }
}
```



