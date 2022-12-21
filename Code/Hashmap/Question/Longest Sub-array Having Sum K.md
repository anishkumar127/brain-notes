```java
import java.util.*;

public class Main
{
    static int subarraySum(int[] arr, int k) {
		if(arr.length==0) return 0;
    //Write your code here   
		int sum =0;
		int max = 0;
		HashMap<Integer,Integer> map = new HashMap<>();
		for(int i=0; i<arr.length; i++){
			sum+=arr[i];
			if(sum==k) max = i+1;
			if(map.containsKey(sum-k)){
				max = Math.max(max,i-map.get(sum-k));
			}  
            if(!map.containsKey(sum)){
                map.put(sum,i); // sum and index.
            }
		}
		return max;
    }
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		int t = input.nextInt();
		for(int i=0; i<t; i++)
		{
		    int n, k;
		    n=input.nextInt();
		    k=input.nextInt();
	        int arr[] = new int[n];
	        for(int j=0; j<n; j++)
	        {
	            arr[j] = input.nextInt();
	        }
	        System.out.println(subarraySum(arr,k));
		}
	}
}

```


```java
//{ Driver Code Starts
//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;


class Array {
    
    // Driver code
	public static void main (String[] args) throws IOException{
		// Taking input using buffered reader
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int testcases = Integer.parseInt(br.readLine());
		
		// looping through all testcases
		while(testcases-- > 0){
		    String line = br.readLine();
		    String[] element = line.trim().split("\\s+");
		    int sizeOfArray = Integer.parseInt(element[0]);
		    int K = Integer.parseInt(element[1]);
		    
		    int arr [] = new int[sizeOfArray];
		    
		    line = br.readLine();
		    String[] elements = line.trim().split("\\s+");
		    for(int i = 0;i<sizeOfArray;i++){
		        arr[i] = Integer.parseInt(elements[i]);
		    }
		    
		    Solution obj = new Solution();
		    int res = obj.lenOfLongSubarr(arr, sizeOfArray, K);
		    
		    System.out.println(res);
		}
	}
}



// } Driver Code Ends


//User function Template for Java

class Solution{
    
   
    // Function for finding maximum and value pair
    public static int lenOfLongSubarr (int A[], int N, int K) {
        HashMap<Integer,Integer>map = new HashMap<>();
        
        int sum=0;
        int ans =0;
        for(int i=0; i<N; i++){
            sum+=A[i];
            
            if(sum==K) ans  = i+1; // if sum present
            
            if(map.containsKey(sum-K)){  // if map contains sum sum-K before 
                ans = Math.max(ans,i-map.get(sum-K));
            }
            
            if(!map.containsKey(sum)){
                map.put(sum,i); // sum and index.
            }
        }
        
        return ans;
    }
}



```

Given an array containing N integers and an integer K. Your task is to find the length of the longest Sub-Array with sum of the elements equal to the given value K.

### Input Format

The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test case consists of two lines. The first line of each test case contains two integers N and K and the second line contains N space-separated elements of the array.

### Output Format

For each test case, print the required length of the longest Sub-Array in a new line. If no such sub-array can be formed print 0.

### Example 1

**Input**

```
3
6 15
10 5 2 7 1 9
6 -5
-5 8 -14 2 4 12
3 6
-1 2 3
```

**Output**

```
4
5
0
```

**Explanation**

Testcase 1: The sub-array is {5,2,7,1} with sum 15.

Testcase 2: The sub-array is {-5,8,-14,2,4} with sum -5.

Testcase 3: No sub-array exists with sum equal to 6.

### Example 2

**Input**

```
1
3 6
2 4 6
```

**Output**

```
2
```

**Explanation**

Subarray [2, 4] is the longest subarray of length 2 with sum 6.

### Constraints

```
1<=T<=500
1<=N,K<=10^5
-10^5<=A[i]<=10^5
Sum of N over all test cases does not exceed 10^5
```


