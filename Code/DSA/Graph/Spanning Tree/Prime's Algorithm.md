## How does Prim’s Algorithm Work? 

The idea behind Prim’s algorithm is simple, a spanning tree means all vertices must be connected. So the two disjoint subsets (discussed above) of vertices must be connected to make a _Spanning_ Tree. And they must be connected with the minimum weight edge to make it a _Minimum_ Spanning Tree.

### Follow the given steps to find MST using Prim’s Algorithm:

-   Create a set _mstSet_ that keeps track of vertices already included in MST. 
-   Assign a key value to all vertices in the input graph. Initialize all key values as INFINITE. Assign the key value as 0 for the first vertex so that it is picked first. 
-   While mstSet doesn’t include all vertices 
    -   Pick a vertex _u_ which is not there in _mstSet_ and has a minimum key value. 
    -   Include _u in the_ mstSet. 
    -   Update the key value of all adjacent vertices of _u_. To update the key values, iterate through all adjacent vertices. For every adjacent vertex _v_, if the weight of edge _u-v_ is less than the previous key value of _v_, update the key value as the weight of _u-v_

The idea of using key values is to pick the minimum weight edge from the [cut](http://en.wikipedia.org/wiki/Cut_(graph_theory)). The key values are used only for vertices that are not yet included in MST, the key value for these vertices indicates the minimum weight edges connecting them to the set of vertices included in MST. 

Let us understand with the following illustration:  
 

> **Input graph:**
> 
> [![Prim’s Minimum Spanning Tree](https://www.geeksforgeeks.org/wp-content/uploads/Fig-11.jpg)](https://www.geeksforgeeks.org/wp-content/uploads/Fig-11.jpg)
> 
> **Step 1:** The set _mstSet_ is initially empty and keys assigned to vertices are {0, INF, INF, INF, INF, INF, INF, INF} where INF indicates infinite. Now pick the vertex with the minimum key value. The vertex 0 is picked, include it in _mstSet_. So _mstSet_ becomes {0}. After including it to _mstSet_, update key values of adjacent vertices. Adjacent vertices of 0 are 1 and 7. The key values of 1 and 7 are updated as 4 and 8. Following subgraph shows vertices and their key values, only the vertices with finite key values are shown. The vertices included in MST are shown in green color.
> 
> [![Prim’s Minimum Spanning Tree Algorithm 1](https://www.geeksforgeeks.org/wp-content/uploads/MST1.jpg)](https://www.geeksforgeeks.org/wp-content/uploads/MST1.jpg)
> 
> **Step 2:** Pick the vertex with minimum key value and which is not already included in the MST (not in mstSET). The vertex 1 is picked and added to mstSet. So mstSet now becomes {0, 1}. Update the key values of adjacent vertices of 1. The key value of vertex 2 becomes 8.  
>  
> 
> [![Prim’s Minimum Spanning Tree Algorithm 2](https://www.geeksforgeeks.org/wp-content/uploads/MST2.jpg)](https://www.geeksforgeeks.org/wp-content/uploads/MST2.jpg)
> 
> **Step 3:** Pick the vertex with minimum key value and which is not already included in the MST (not in mstSET). We can either pick vertex 7 or vertex 2, let vertex 7 is picked. So mstSet now becomes {0, 1, 7}. Update the key values of adjacent vertices of 7. The key value of vertex 6 and 8 becomes finite (1 and 7 respectively).   
>  
> 
> [![Prim’s Minimum Spanning Tree Algorithm 3](https://www.geeksforgeeks.org/wp-content/uploads/MST3.jpg)](https://www.geeksforgeeks.org/wp-content/uploads/MST3.jpg)
> 
> **Step 4:** Pick the vertex with minimum key value and not already included in MST (not in mstSET). Vertex 6 is picked. So mstSet now becomes {0, 1, 7, 6}. Update the key values of adjacent vertices of 6. The key value of vertex 5 and 8 are updated.  
>  
> 
> [![Prim’s Minimum Spanning Tree Algorithm 4](https://www.geeksforgeeks.org/wp-content/uploads/MST4.jpg)](https://www.geeksforgeeks.org/wp-content/uploads/MST4.jpg)
> 
> **Step 5:** Repeat the above steps until _mstSet_ includes all vertices of given graph. Finally, we get the following graph.  
>  
> 
> [![Prim’s Minimum Spanning Tree Algorithm 5](https://www.geeksforgeeks.org/wp-content/uploads/MST5.jpg)](https://www.geeksforgeeks.org/wp-content/uploads/MST5.jpg)




**Spanning tree -** A spanning tree is the subgraph of an undirected connected graph.

**Minimum Spanning tree -** Minimum spanning tree can be defined as the spanning tree in which the sum of the weights of the edge is minimum. The weight of the spanning tree is the sum of the weights given to the edges of the spanning tree.

Now, let's start the main topic.

**Prim's Algorithm** is a greedy algorithm that is used to find the minimum spanning tree from a graph. Prim's algorithm finds the subset of edges that includes every vertex of the graph such that the sum of the weights of the edges can be minimized.

Prim's algorithm starts with the single node and explores all the adjacent nodes with all the connecting edges at every step. The edges with the minimal weights causing no cycles in the graph got selected.


References - >

https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/

https://www.javatpoint.com/prim-algorithm

https://www.programiz.com/dsa/prim-algorithm



# Question
so here basically we are creating priority queue and then adding vertex and there minimum cost.
and also doing if not visited then make visited and 

we are using visited array.  we are also using pair class or compare for priority queue


```java
package Graph.MST.PrimesAlgo;  
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
    static class Pair implements Comparable<Pair>{  
        int v;  
        int cost;  
        public Pair (int v, int c){  
            this.v=v;  
            this.cost = c;  
        }  
        @Override  
        public int compareTo(Pair p2){  
            return this.cost  - p2.cost; // accending.  
        }  
    }  
    public static void CreateGraph(ArrayList<Edge>[] graph){  
        // fill empty to array list.  
        for(int i= 0; i<graph.length; i++){  
            graph[i] = new ArrayList<>();  
        }  
        // undirected weight graph  
        graph[0].add(new Edge(0,1,10));  
        graph[0].add(new Edge(0,2 , 15));  
        graph[0].add(new Edge(0,3 , 30));  
  
        graph[1].add(new Edge(1,0,10));  
        graph[1].add(new Edge(1,3,40));  
  
        graph[2].add(new Edge(2,0,15));  
        graph[2].add(new Edge(2,3,50));  
  
        graph[3].add(new Edge(3,1 , 40));  
        graph[3].add(new Edge(3,2 , 50));  
  
    }  
    public static void primsMST(ArrayList<Edge>[] graph){  
        boolean [] visited = new boolean[graph.length];  
        PriorityQueue<Pair> pq = new PriorityQueue<>();  
        pq.add(new Pair(0,0));  
        int finalCost = 0; // MST Cost/ toal min weight;  
        while(!pq.isEmpty()){  
            Pair curr = pq.remove();  
            if(!visited[curr.v]){  
                visited[curr.v] = true;  
                finalCost +=curr.cost;  
  
                for(int i=0; i<graph[curr.v].size(); i++){  
                    Edge e = graph[curr.v].get(i);  
                    pq.add(new Pair(e.dest,e.wt));  
                }  
            }  
        }  
        // print  
        System.out.println("final(min) cost of MST = "+finalCost);  
    }  
    public static void main(String[] args) {  
        int V = 4;  
        ArrayList<Edge>[] graph  = new ArrayList[V];  
        CreateGraph(graph);  
        primsMST(graph);  
    }  
}
```


output -> ``final(min) cost of MST = 55``

