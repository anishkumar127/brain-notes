
```java
import java.util.*;

public class Main {
	private static void solve(int[]arr , int tar,int idx, int currSum,ArrayList<Integer>curr, ArrayList<ArrayList<Integer>>ans){
		if(currSum>tar) return;
		if(idx==arr.length){
			if(currSum==tar){
				ans.add(new ArrayList<>(curr));
			}
				return;
		}
			// include
			 curr.add(arr[idx]);
			solve(arr,tar,idx+1,currSum+arr[idx],curr,ans);
			curr.remove(curr.size()-1);
			// not include
			solve(arr,tar,idx+1,currSum,curr,ans);
		
	}
    public static ArrayList<ArrayList<Integer>> findSubsets(int[] arr, int tar) {
        // write code here
		ArrayList<ArrayList<Integer>> ans = new ArrayList<>();

		ArrayList<Integer> curr = new ArrayList<>();
		solve(arr,tar,0,0,curr,ans);
		return ans;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, tar;
        n = sc.nextInt();
        tar = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
        ArrayList<ArrayList<Integer>> subsets = findSubsets(arr, tar);
        Collections.sort(subsets, new Comparator<ArrayList<Integer>>() {
            public int compare(ArrayList<Integer> o1, ArrayList<Integer> o2) {
                return o1.get(0).compareTo(o2.get(0));
            }
        });
        if (subsets.isEmpty()) {
            System.out.println(-1);
        } else {
            for (int i = 0; i < subsets.size(); i++) {
                for (int j = 0; j < subsets.get(i).size(); j++)
                    System.out.print(subsets.get(i).get(j) + " ");
                System.out.println();
            }
        }
        sc.close();
    }
}
```

![](https://i.imgur.com/QCRdVRV.png)




![](https://i.imgur.com/KC4y5YR.png)


![](https://i.imgur.com/rWmx59L.png)






![](https://i.imgur.com/qBpccWE.png)




same memory point. then if not do new array list. and if we remove from curr  then also will remove from the ans list also. because same memory address pointing.
so that's why we do new Array list. instead of direct add.



![](https://i.imgur.com/mue7pBf.png)



so new array list create a copy of array list and that will be added to the ans list.

![](https://i.imgur.com/RhWZ4Rp.png)


# Target Subset Sums

You are given an array `arr` of size `n` and a target number `tar`. You are required to return the subsets of `arr` that sum to the target `tar`.

**Note**

If there are no subsets that sum to target then return an empty container(Arraylist/Vector)

### Input Format

First line contains two spaced integers the array size n and the target integer.

Next line contains n spaced integers representing the array elements.

### Output Format

Return the subsets that sum to target. Printing is handled by the driver code.

### Example 1

**Input**

```
5 60
10 20 30 40 50
```

**Output**

```
10 20 30
10 50
20 40
```

**Explanation**

Here all the subsets sum to the target 60.

### Example 2

**Input**

```
5 8
1 2 3 4 5
```

**Output**

```
1 2 5
1 3 4
3 5
```

**Explanation**

Here all the subsets sum to the target 8.

### Constraints

1 <= n <= 30

1 <= arr[i] <= 50

0 <= tar <= 60