## Spanning tree

A spanning tree is a sub-graph of an undirected connected graph, which includes all the vertices of the graph with a minimum possible number of edges. If a vertex is missed, then it is not a spanning tree.

The edges may or may not have weights assigned to them.

The total number of spanning trees with `n` vertices that can be created from a complete graph is equal to `n(n-2)`.



references -> [# Kruskal’s Minimum Spanning Tree Algorithm | Greedy Algo-2](https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/)

## What is a Spanning Tree?

A Spanning tree is a subset to a connected graph G, where all the edges are connected, i.e, one can traverse to any edge from a particular edge with or without intermediates. Also, a spanning tree must not have any cycle in it. Thus we can say that if there are **N** vertices in a connected graph then the no. of edges that a spanning tree may have is **N-1**_._

## **What is a Minimum Spanning Tree?** 

Given a connected and undirected graph, a spanning tree of that graph is a subgraph that is a tree and connects all the vertices together. A single graph can have many different spanning trees. A minimum spanning tree (MST) or minimum weight spanning tree for a weighted, connected, undirected graph is a spanning tree with a weight less than or equal to the weight of every other spanning tree. The weight of a spanning tree is the sum of weights given to each edge of the spanning tree.

## How many edges does a minimum spanning tree has? 

A minimum spanning tree has (V – 1) edges where **V** is the number of vertices in the given graph.


**Input Graph:**  
 

![Kruskal’s Minimum Spanning Tree Algorithm](https://media.geeksforgeeks.org/wp-content/uploads/20210727035309/UntitledDiagram92.png)

The graph contains 9 vertices and 14 edges. So, the minimum spanning tree formed will be having (9 – 1) = 8 edges. 

After sorting:
Weight   Src    Dest
1         7      6
2         8      2
2         6      5
4         0      1
4         2      5
6         8      6
7         2      3
7         7      8
8         0      7
8         1      2
9         3      4
10        5      4
11        1      7
14        3      5

Now pick all edges one by one from the sorted list of edges   
**Step 1:** Pick edge 7-6: No cycle is formed, include it.   
 

![Kruskal’s Minimum Spanning Tree Algorithm](https://media.geeksforgeeks.org/wp-content/uploads/20210727035707/UntitledDiagram100.png)

**Step 2:**  _Pick edge 8-2:_ No cycle is formed, include it.   
 

![Kruskal’s Minimum Spanning Tree Algorithm](https://media.geeksforgeeks.org/wp-content/uploads/20210727035650/UntitledDiagram99.png)

**Step 3:** _Pick edge 6-5:_ No cycle is formed, include it.   
 

![Kruskal’s Minimum Spanning Tree Algorithm](https://media.geeksforgeeks.org/wp-content/uploads/20210727035627/UntitledDiagram98.png)

**Step 4:** _Pick edge 0-1:_ No cycle is formed, include it.   
 

![Kruskal’s Minimum Spanning Tree Algorithm](https://media.geeksforgeeks.org/wp-content/uploads/20210727035604/UntitledDiagram97.png)

**Step 5:** _Pick edge 2-5:_ No cycle is formed, include it.   
 

![Kruskal’s Minimum Spanning Tree Algorithm](https://media.geeksforgeeks.org/wp-content/uploads/20210727035542/UntitledDiagram96.png)

_**Step 6:** Pick edge 8-6:_ Since including this edge results in the cycle, discard it.  
**Step 7:** _Pick edge 2-3:_ No cycle is formed, include it.   
 

![Kruskal’s Minimum Spanning Tree Algorithm](https://media.geeksforgeeks.org/wp-content/uploads/20210727035519/UntitledDiagram95.png)

**Step 8:** _Pick edge 7-8:_ Since including this edge results in the cycle, discard it.  
**Step 9:** _Pick edge 0-7:_ No cycle is formed, include it.   
 

![Kruskal’s Minimum Spanning Tree Algorithm](https://media.geeksforgeeks.org/wp-content/uploads/20210727035450/UntitledDiagram94.png)

**Step 10:** _Pick edge 1-2:_ Since including this edge results in the cycle, discard it.  
**Step 11:** _Pick edge 3-4:_ No cycle is formed, include it.   
 

![Kruskal’s Minimum Spanning Tree Algorithm](https://media.geeksforgeeks.org/wp-content/uploads/20210727035418/UntitledDiagram93.png)

**Note:** Since the number of edges included in the MST equals to (V – 1), so the algorithm stops here.


