```java
import java.util.*;

class Accio{
    static int MaximumDistance(int N,int[] arr){
        //write code here
		  int max =0;
        HashMap<Integer,Integer> map = new HashMap<>();
        for(int i=0; i<N; i++){
            int el = arr[i];
            if(map.containsKey(el)){
                max = Math.max(max,i-map.get(el));
            }else{
                map.put(el,i);
            }
        }
        return max;
    }
}

public class Main {
    public static void main(String[] args) throws Throwable {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int nums[]=new int[n];
        for(int i = 0; i < n; i++)
        {
            nums[i] = sc.nextInt();
        }
        Accio obj = new Accio();
        int ans=obj.MaximumDistance(n,nums);
        System.out.println(ans);
    }
}
```

You have been given an array `arr` that might contain duplicate elements. Your task is to find the maximum possible distance between occurrences of two repeating elements i.e. elements having the same value. If there are no duplicate elements in the array, print 0.

### Input Format

The first line of input contains an integer N denoting the length of the array.

The second line of input contains N integers denoting the elements of the array `arr`.

### Output Format

The output prints a single line containing an integer denoting the maximum distance.

### Example 1

**Input**

```
9
1 3 1 4 5 6 4 8 3
```

**Output**

```
7 
```

**Explanation**

In the above array, the repeating elements are:- (1, 3, 4)  
Distance between first and last occurrence of 1 = 2(index2 - index0)  
Distance between first and last occurrence of 3 = 7(index8 - index1)  
Distance between first and last occurrence of 4 = 3(index6 - index3)

So, for the above array, you must return 7, as this is the maximum possible distance between two repeating elements having the same value.

### Example 2

**Input**

```
4
1 3 2 4
```

**Output**

```
0
```

**Explanation**

There are no repeated elements

### Constraints :

0 <= N <= 10^6  
-10^9 <= ARR[i] <= 10^9