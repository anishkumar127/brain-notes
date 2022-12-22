```java
import java.util.*;

public class Main {
    public static void main(String[] args) throws Throwable {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for(int i=0;i<n;i++) {
                arr[i] = sc.nextInt();
            }
            int ans = Solution.maxFrequencyNumber(n, arr);
            System.out.println(ans);
        }
    }
}
class Solution {

	static int maxFrequencyNumber(int n, int[] arr) {
		HashMap<Integer,Integer> map = new HashMap<>();
		for(int val:arr){
			map.put(val,map.getOrDefault(val,0)+1);
		}
		int max =0;
		for(int val:map.values()){
			max =Math.max(max,val);
		}
		for(int val:arr){
			if(map.get(val)==max){
				return val;
			}
		}
		return -1;
	}
}

```

# Maximum Frequency Number

Albus is given an array of integers that contain numbers in random order. He needs to write a program to find and return the number which occurs the maximum times in the given input. He needs your help to solve this problem.

If two or more elements contend for the maximum frequency, print the element which occurs in the array first, i.e., whose index is lowest.

### Input Format

The first line contains an integer `T`, which denotes the number of test cases or queries to be run.

The first line of each test case contains a single integer `N` denoting the size of the array.

The second line of each test case contains `N` space-separated integers denoting the elements of the array.

### Output Format

For each case, we need to print an integer in a new line that has the maximum frequency.

### Example 1

**Input**

```
1 
13
2 12 2 11 -12 2 -1 2 2 11 12 2 -6 
```

**Output**

```
2
```

**Explanation**

Test case 1: For the first test case of sample output 1, as we start traveling the array, ‘2’ has the highest frequency, hence our answer is ‘2’.

### Example 2

**Input**

```
2 
3
4 -5 1
4
1 -2 1 -2
```

**Output**

```
4
1
```

**Explanation**

Test case 1: For the first test case of sample output 2, as all the elements have only occurred once, so we will take the first element that has occurred once. Therefore our output will be ‘4’.

Test case 2: -2 has the highest frequency.

### Constraints

1 <= T <= 5

1 <= N <= 10000

-10 ^ 3 <= |arr| <= 10 ^ 3