Shortest paths from the source to all vertices (weighted graph);

Resources
https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/

https://www.programiz.com/dsa/dijkstra-algorithm
https://www.youtube.com/watch?v=XB4MIexjvY0&ab_channel=AbdulBari
https://www.youtube.com/watch?v=GazC3A4OQTE&ab_channel=Computerphile



**Input:** src = 0, the graph is shown below.
**Output:** 0 4 12 19 21 11 9 8 14  
**Explanation:** The distance from 0 to 1 = 4.  
The minimum distance from 0 to 2 = 12. 0->1->2  
The minimum distance from 0 to 3 = 19. 0->1->2->3  
The minimum distance from 0 to 4 = 21. 0->7->6->5->4  
The minimum distance from 0 to 5 = 11. 0->7->6->5  
The minimum distance from 0 to 6 = 9. 0->7->6  
The minimum distance from 0 to 7 = 8. 0->7  
The minimum distance from 0 to 8 = 14. 0->1->2->8

![](https://i.imgur.com/fsT6jQ8.png)




```java
package Graph.DijkstraShortPath;  
  
  
import java.util.*;  
public class Main {  
    static class Edge{  
        int src;     // source  
        int dest ;  // destination  
        int wt;     // weight  
  
        public Edge(int s , int d, int w){  
            this.src = s;  
            this.dest = d;  
            this.wt = w;  
        }  
  
    }  
    public static void CreateGraph(ArrayList<Edge>[] graph){  
        // fill empty to array list.  
        for(int i= 0; i<graph.length; i++){  
            graph[i] = new ArrayList<>();  
        }  
        graph[0].add(new Edge(0,1,2));  
        graph[0].add(new Edge(0,2 , 4));  
  
        graph[1].add(new Edge(1,3 , 7));  
        graph[1].add(new Edge(1,2 , 1));  
  
        graph[2].add(new Edge(2,4,3));  
  
        graph[3].add(new Edge(3,5 , 1));  
  
        graph[4].add(new Edge(4,3, 2));  
        graph[4].add(new Edge(4,5 , 5));  
  
    }  
  
    static class Pair implements  Comparable<Pair>{  
        int n ;  
        int path;  
        public Pair(int n, int path){  
            this.n= n;  
            this.path = path;  
        }  
        @Override  
        public int compareTo(Pair p2){  
            return this.path-p2.path; // path based sorting for my pairs.  
        }  
    }  
public static void dijkstra(ArrayList<Edge>[]graph , int src){  
int dist[] = new int[graph.length]; // dist[i] -> src to i;  
    for(int i=0; i<graph.length; i++){  
        if(i!=src){  
            dist[i]= Integer.MAX_VALUE; // +infinity;  
        }  
    }  
  
    boolean visited[] = new boolean[graph.length];  
  
    PriorityQueue<Pair> pq = new PriorityQueue<>();  
    pq.add(new Pair(src,0));  
    // loop  
  
    while(!pq.isEmpty()){  
        Pair curr = pq.remove();  
        if(!visited[curr.n]){  
            visited[curr.n] = true;  
            // neighbours  
            for(int i=0; i<graph[curr.n].size();i++){  
                Edge e = graph[curr.n].get(i);  
                int u = e.src;  
                int v  = e.dest;  
                int wt = e.wt;  
                if(dist[u]+wt<dist[v]){  // update distance of src to v;  
                    dist[v] = dist[u]+wt;  
                    pq.add(new Pair(v,dist[v])); // update to pq.  
                }  
            }  
        }  
    }  
    // print all source to vertices shortest dist  
    for(int i=0; i<dist.length; i++){  
        System.out.print(dist[i]+" ");  
    }  
    System.out.println();  
    }  
    public static void main(String[] args) {  
        int V = 6;  
        ArrayList<Edge>[] graph  = new ArrayList[V];  
        CreateGraph(graph);  
        int src = 0;  
        dijkstra(graph,src);  
    }  
}
```

output
0 2 3 8 6 9 


tc = V+ E log V because of PQ. otherwise it would be V^2