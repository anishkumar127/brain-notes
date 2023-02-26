
![](https://i.imgur.com/iO2bp1k.png)

![](https://i.imgur.com/O3FbhMm.png)




![](https://i.imgur.com/5wCF0lb.png)


![](https://i.imgur.com/rIusKFQ.png)



![](https://i.imgur.com/gnbhmJu.png)


# Recursion

```java
package DP_Questions.PaintHouse;  
  
import java.util.*;  
  
public class Main {  
  
    public static void main(String[] args) {  
        Scanner sc = new Scanner(System.in);  
        int n = sc.nextInt(), k = sc.nextInt();  
        int[][] costs = new int[n][k];  
        for (int i = 0; i < n; i++) {  
            for (int j = 0; j < k; j++) {  
                costs[i][j] = sc.nextInt();  
            }  
        }  
        sc.close();  
        System.out.println(minCost(costs));  
    }  
  
    public static int minCost(int[][] cost) {  
        int n = cost.length;  
        return Math.min(recur(cost,n-1,0),Math.min(recur(cost,n-1,1),recur(cost,n-1,2)));  
    }  
    private static int recur(int[][] cost , int idx , int color){  
        if(idx==-1) return 0; // -1 index cost 0;  
  
        if(color==0){  
            int pb = recur(cost,idx-1,1);  
            int pg = recur(cost,idx-1,2);  
            return Math.min(pb,pg)+cost[idx][color];  
        }else if(color==1){  
            int pr = recur(cost,idx-1,0);  
            int pg = recur(cost,idx-1,2);  
            return Math.min(pr,pg)+cost[idx][color];  
        }else{  
            int pr = recur(cost,idx-1,0);  
            int pb = recur(cost,idx-1,1);  
            return Math.min(pb,pr)+cost[idx][color];  
        }  
    }  
}
```

```java
public static int minCost(int[][] cost) {  
        int n = cost.length;  
        return Math.min(recur(cost,n-1,0),Math.min(recur(cost,n-1,1),recur(cost,n-1,2)));  
    }  
    private static int recur(int[][] cost , int idx , int color){  
        if(idx==0) return cost[idx][color];  
  
        if(color==0){  
            int pb = recur(cost,idx-1,1);  
            int pg = recur(cost,idx-1,2);  
            return Math.min(pb,pg)+cost[idx][color];  
        }else if(color==1){  
            int pr = recur(cost,idx-1,0);  
            int pg = recur(cost,idx-1,2);  
            return Math.min(pr,pg)+cost[idx][color];  
        }else{  
            int pr = recur(cost,idx-1,0);  
            int pb = recur(cost,idx-1,1);  
            return Math.min(pb,pr)+cost[idx][color];  
        }  
    }  
}
```



# Tabulation
**not working proper**

```java
private static int tabulation(int cost[][]){  
        int dp[][] = new int[cost.length][3];  
        int n = dp.length;  
  
        for(int idx =0; idx<cost.length; idx++){  
            for(int color = 0; color<3; color++){  
                if(idx==0){  
                    dp[idx][color] = cost[idx][color];  
                    continue;  
                }  
                if(color==0){  
                    int pb = dp[idx-1][1];  
                    int pg = dp[idx-1][2];  
                    dp[idx][color] = Math.min(pb,pg)+cost[idx][color];  
                }else if(color==1){  
                    int pr = dp[idx-1][0];  
                    int pg = dp[idx-1][2];  
                    dp[idx][color] = Math.min(pr,pg)+cost[idx][color];  
                }else{  
                    int pr = dp[idx-1][0];  
                    int pb = dp[idx-1][1];  
                    dp[idx][color] = Math.min(pb,pr)+cost[idx][color];  
                }  
            }  
        }  
  
        return Math.min(dp[n-1][0],Math.min(dp[n-1][1],dp[n-1][2]));  
}
```