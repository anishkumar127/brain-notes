
1. we square but its not sorted order. yeah its sorted kind of decreasing order. but we need to sort non-decreasing order.
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
int[] arr ={-10,-3,-2,1,4,5};
int s = 0;
int e = arr.length-1;
int [] output = new int[arr.length];
int idx =0;
while(s<=e){
if(Math.abs(arr[s])>Math.abs(arr[e])){
  output[idx++] = arr[s]*arr[s];
  s++;
}else{
  output[idx++] = arr[e] * arr[e];
  e--;
}
}


System.out.println(Arrays.toString(output));
  }
}
```


2. in this we sorted into non-decreasing order.
3. there are we are using the in-place reverse algo.
4.  here we can also use recursion to reverse.

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
int[] arr ={-10,-3,-2,1,4,5};
int s = 0;
int e = arr.length-1;
int [] output = new int[arr.length];
int idx =0;
while(s<=e){
if(Math.abs(arr[s])>Math.abs(arr[e])){
  output[idx++] = arr[s]*arr[s];
  s++;
}else{
  output[idx++] = arr[e] * arr[e];
  e--;
}
}
reverseArray(output,0, output.length-1);
System.out.println(Arrays.toString(output));
  }
  
  private static void reverseArray(int arr[] , int s , int e){
    while(s<e){
      int temp = arr[e];
      arr[e]  = arr[s];
      arr[s] = temp;
      s++;
      e--;
    }
  }
}
```


[977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/description/)

```java
class Solution {

    public int[] sortedSquares(int[] nums) {

        int s =0;

        int e = nums.length -1;

        int[] arr = new int[nums.length];

        int idx =0;

        while(s<=e){

            if(Math.abs(nums[s])>Math.abs(nums[e])){

                arr[idx++] =(int) Math.pow(nums[s],2);

                s++;

            }else{

                arr[idx++] = (int)Math.pow(nums[e],2);

                e--;

            }

        }

  

        reverseArray(arr,0, arr.length-1);

  

        return arr;

    }

    private void reverseArray(int[] arr , int s , int e){

        while(s<e){

            int temp = arr[e];

            arr[e] = arr[s];

            arr[s]= temp;

            s++;

            e--;

        }

    }

}

// bc took 1 hours. to debug silly mistake. i did nums[e] instead did arr[e] in while loop first condition
```

> another way

```java
class Solution {
    // TC:- O(n);
    public int[] sortedSquares(int[] nums) {
       // square all elements.
        for(int i=0; i<nums.length; i++){
            nums[i] = nums[i]*nums[i];
        }
        int head = 0;
        int tail = nums.length-1;
       int[] ans = new int[nums.length]; // extra space. sc:- O(n) tc:- O(n);
        // set them at right place in the []ans array.
        for(int i=nums.length-1; i>=0; i--){
            if(nums[head]>nums[tail]){
               ans[i] = nums[head];
               head++;
            }else{
                ans[i] = nums[tail];
                tail--;
            }
        }
        return ans;
    }
}
```