
[Segregate 0s and 1s](https://practice.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article)

```java
//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());
        while (tc-- > 0) {
            String[] inputLine;
            inputLine = br.readLine().trim().split(" ");
            int n = Integer.parseInt(inputLine[0]);
            int[] arr = new int[n];
            inputLine = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }
            new Solution().segregate0and1(arr, n);
            for (int i = 0; i < n; i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.println();
        }
    }
}


// } Driver Code Ends


//User function Template for Java

class Solution {
    void segregate0and1(int[] arr, int n) {
        // code here
        int s = 0;
        int e = n-1;
        while(s<e){
            if(arr[s]==1  && arr[e]==0){
                swap(arr,s,e);
                s++;
                e--;
            }
            else if(arr[s]==0) s++;
            else if(arr[e]==1) e--;
        }
    }
    private void swap (int [] arr , int s , int e){
        int temp = arr[e];
        arr[e] = arr[s];
        arr[s] = temp;
    }

}

```

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




