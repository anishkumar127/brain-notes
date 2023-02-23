Given an array `arr` of size `N`. Return the maximum sum of subsequence with the constraint that no two elements are adjacent in the given array `arr`.

_**Note: You just need to complete maximumNonAdjacentSum() function and return the maximum sum.**_

### Input Format

The first line contains an integer `N` denotes the size of the array `arr`. Next line contains `N` spaced integers representing the elements of the array `arr`.

### Output Format

Print the maximum sum of subsequence with the constraint that no two elements are adjacent in the given array `arr`.

### Example 1

**Input**

```
6
5 5 10 100 10 5
```

**Output**

```
110
```

**Explanation**

```
We can choose the subsequence as [5,100,5] and get the maximum sum as 110. 
```

### Example 2

**Input**

```
4
3 2 5 10
```

**Output**

```
13
```

**Explanation**

```
We can choose the subsequence as [3,10] and get the maximum sum as 13. 
```

### Constraints

1 <= n <= 104

1 <= arr[i] <= 104



```java
import java.util.*;
class Solution
{
    public static int maximumNonAdjacentSum(int arr[], int n)
    {
        //Write your code here
		  int[] dp = new int[n+1];
		Arrays.fill(dp,-1);
        return RobberMemo(arr,0,dp);
        
    }
	private static int RobberMemo(int[] arr, int idx, int[] dp){
        if(idx==arr.length){
            return dp[idx] = 0;
        }
        int take = arr[idx];
        int notTake = 0;
        if(dp[idx]!=-1) return dp[idx];
        if(idx+2<=arr.length){
            take+=RobberMemo(arr,idx+2,dp);
        }
        notTake+= RobberMemo(arr,idx+1,dp);
        int ans = Math.max(take,notTake);
        return dp[idx] = ans;
    }
}
public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0 ; i < n ; ++i){
            arr[i] = sc.nextInt();
        }
        System.out.print(Solution.maximumNonAdjacentSum(arr,n));
    }
}
```

