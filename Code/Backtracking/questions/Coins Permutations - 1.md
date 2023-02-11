```java

import java.util.*;

class Solution {
    public static void coinChange(int[] coins, int amt){
        //Write your code here
		int n = coins.length;
		boolean [] vis = new boolean[n];
		getPermutations(coins,amt,0, vis, "");
    }
	private static void getPermutations(int[] coins, int tar, int csum,boolean[] vis,String asf){
		if(csum>tar) return;

		if(csum==tar){
			System.out.println(asf);
		}

		for(int i=0; i<coins.length; i++){
			if(vis[i]==false){
				vis[i] = true;
				getPermutations(coins,tar,csum+coins[i],vis,asf+coins[i]+" ");
				vis[i] = false;
			}
		}
	}
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] coins = new int[n];
        for (int i = 0; i < n; i++) {
            coins[i] = sc.nextInt();
        }
        int amt = sc.nextInt();

        Solution Obj = new Solution();
        Obj.coinChange(coins, amt);
    }
}
```




only function

```java
   public static void coinChange(int[] coins, int amt){
        //Write your code here
		int n = coins.length;
		boolean [] vis = new boolean[n];
		getPermutations(coins,amt,0, vis, "");
    }
	private static void getPermutations(int[] coins, int tar, int csum,boolean[] vis,String asf){
		if(csum>tar) return;

		if(csum==tar){
			System.out.println(asf);
		}

		for(int i=0; i<coins.length; i++){
			if(vis[i]==false){
				vis[i] = true;
				getPermutations(coins,tar,csum+coins[i],vis,asf+coins[i]+" ");
				vis[i] = false;
			}
		}
	}
```


# Theory

# Coins Permutations - 1

You are given `n` coins of various denominations. Along with that you are also given amount `amt`.

You are required to calculate and print the permutations of the `n` coins (non-duplicate) using which the amount `amt` can be paid.

**Note:**

-   Print all the permutations following the order in which the coins are present.
    
-   Use the code snippet and follow the algorithm discussed in the question video. The judge can't force you, but the intention is to teach a concept. Play in the spirit of the question.
    

### Input Format

First line contains the integer `n`

Second line contains `n` space separated integers representing various denominations

Third line contains an integer `amt`

### Output Format

Print the various permutations in different lines, each element in a permutation should be space-separated.

### Example 1

**Input**

```
5
2 3 5 6 7
12
```

**Output**

```
2 3 7
2 7 3
3 2 7
3 7 2
5 7
7 2 3
7 3 2
7 5
```

### Example 2

**Input**

```
5
5 4 2 3 1
7
```

**Output**

```
5 2 
4 2 1 
4 3 
4 1 2 
2 5 
2 4 1 
2 1 4 
3 4 
1 4 2 
1 2 4 
```

### Constraints

1 <= `n` <= 30

1 <= `coin[i]` <= 20

0 <= `amt` <= 50