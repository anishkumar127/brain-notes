
Bellman Ford algorithm helps us find the shortest path from a vertex to all other vertices of a weighted graph.

It is similar to [Dijkstra's algorithm](https://www.programiz.com/dsa/dijkstra-algorithm) but it can work with graphs in which edges can have negative weights.

## Why would one ever have edges with negative weights in real life?

Negative weight edges might seem useless at first but they can explain a lot of phenomena like cashflow, the heat released/absorbed in a chemical reaction, etc.

For instance, if there are different ways to reach from one chemical A to another chemical B, each method will have sub-reactions involving both heat dissipation and absorption.

If we want to find the set of reactions where minimum energy is required, then we will need to be able to factor in the heat absorption as negative weights and heat dissipation as positive weights.

reference learning ->
https://www.programiz.com/dsa/bellman-ford-algorithm

https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/

**Step 1:** Let the given source vertex be 0. Initialize all distances as infinite, except the distance to the source itself. Total number of vertices in the graph is 5, so _all edges must be processed 4 times._  
 

![Bellman–Ford Algorithm Example Graph 1](https://media.geeksforgeeks.org/wp-content/uploads/bellmanford1.png)

**Step 2:** Let all edges are processed in the following order: (B, E), (D, B), (B, D), (A, B), (A, C), (D, C), (B, C), (E, D). We get the following distances when all edges are processed the first time. The first row shows initial distances. The second row shows distances when edges (B, E), (D, B), (B, D) and (A, B) are processed. The third row shows distances when (A, C) is processed. The fourth row shows when (D, C), (B, C) and (E, D) are processed.   
 

![Bellman–Ford Algorithm Example Graph 2](https://media.geeksforgeeks.org/wp-content/uploads/bellmanford2.png)

**Step 3:** The first iteration guarantees to give all shortest paths which are at most 1 edge long. We get the following distances when all edges are processed second time (The last row shows final values).   
 

![Bellman–Ford Algorithm Example Graph 3](https://media.geeksforgeeks.org/wp-content/uploads/bellmanford3.png)

**Step 4:** The second iteration guarantees to give all shortest paths which are at most 2 edges long. The algorithm processes all edges 2 more times. The distances are minimized after the second iteration, so third and fourth iterations don’t update the distances.


#imp Note- Integer.MAX_VALUE is inifity in java and c++ if we add into inifinity value its not added and increase . its convert into negative .






# code

```java
package Graph.BellmanFordAlgo;  
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
  
        graph[1].add(new Edge(1,2,-4));  
  
        graph[2].add(new Edge(2,3,2));  
  
        graph[3].add(new Edge(3,4 , 4));  
  
        graph[4].add(new Edge(4,1, -1));  
  
    }  
    public static void bellmanFord(ArrayList<Edge>[] graph , int src){  
        int dist[]  = new int[graph.length];  
        for(int i=0; i<dist.length; i++){  
            if(i!=src){  
                dist[i] = Integer.MAX_VALUE;  
            }  
        }  
        int V = graph.length;  
        // algo  
        for(int i=0; i<V-1; i++){  
            // edges - O(E);  
            for(int j=0; j<graph.length; j++){  
                for(int k=0; k<graph[j].size(); k++){  
                    Edge e= graph[j].get(k);  
                    // u, v , wt  
                    int u = e.src;  
                    int v = e.dest;  
                    int wt = e.wt;  
                    // relaxation  
                    if(dist[u] !=Integer.MAX_VALUE && dist[u]+ wt < dist[v]){  
                        dist[v] = dist[u]+wt;  
                    }  
                }  
            }  
        }  
        // display  
        for(int i=0; i<dist.length; i++){  
            System.out.print(dist[i]+" ");  
        }  
        System.out.println();  
    }  
  
    public static void main(String[] args) {  
        int V = 5;  
        ArrayList<Edge>[] graph  = new ArrayList[V];  
        CreateGraph(graph);  
        bellmanFord(graph,0);  
    }  
}
```


output - > ``0 2 -2 0 4 ``

O(V * E) TC



# Simple Without [] Array

```java
package Graph.BellmanFordAlgo.WithoutArray;  
  
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
    public static void bellmanFord(ArrayList<Edge> graph , int src, int V){  
        int dist[]  = new int[V];  
        for(int i=0; i<dist.length; i++){  
            if(i!=src){  
                dist[i] = Integer.MAX_VALUE;  
            }  
        }  
        // algo  
        for(int i=0; i<V-1; i++){  
            // edges - O(E);  
            for(int j=0; j<graph.size(); j++){  
                    Edge e= graph.get(j);  
                    // u, v , wt  
                    int u = e.src;  
                    int v = e.dest;  
                    int wt = e.wt;  
                    // relaxation  
                    if(dist[u] !=Integer.MAX_VALUE && dist[u]+ wt < dist[v]){  
                        dist[v] = dist[u]+wt;  
                    }  
                }  
            }  
        // display  
        for(int i=0; i<dist.length; i++){  
            System.out.print(dist[i]+" ");  
        }  
        System.out.println();  
    }  
  
    public static void main(String[] args) {  
        int V = 5;  
        ArrayList<Edge> graph  = new ArrayList<>();  
        CreateGraph2(graph);  
        bellmanFord(graph,0,V);  
    }  
    public static void CreateGraph2(ArrayList<Edge>graph){  
        graph.add(new Edge(0,1,2));  
        graph.add(new Edge(0,2 , 4));  
  
        graph.add(new Edge(1,2,-4));  
  
        graph.add(new Edge(2,3,2));  
  
        graph.add(new Edge(3,4 , 4));  
  
        graph.add(new Edge(4,1, -1));  
  
    }  
}
```


 same time complexity. 
no deference from loop  like nested or 3 loop.


