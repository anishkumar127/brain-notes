
![](https://i.imgur.com/WpOkb1G.png)


![](https://i.imgur.com/IrmTQ93.png)
![](https://i.imgur.com/2H1dq3V.png)




when other added its compare with this and others.


![](https://i.imgur.com/jlDyzaQ.png)





# Matrix

![](https://i.imgur.com/JgXLLNR.png)


![](https://i.imgur.com/qQVseP2.png)
2D array is array of 1D array

![](https://i.imgur.com/o7tsskI.png)


```java
import java.util.ArrayList;
import java.util.PriorityQueue;

public class Example {
    public static void main(String[] args) {
        int[][] matrix={{3,2,3},{1,4,5},{2,7,8}};

        PriorityQueue<int[]> pq = new PriorityQueue<>((int[] t, int[] o) ->{
            // return t[0] - o[0]; // min pq
            return o[1] - t[1]; // max pq
        });

        for(int i=0; i<matrix.length; i++){
            pq.add(matrix[i]);
        }

        int[] top=pq.remove();
        for(int i=0; i<top.length; i++){
            System.out.print(top[i]+" ");
        }
        // System.out.println(pq.peek()[0]);
    }
}
```


