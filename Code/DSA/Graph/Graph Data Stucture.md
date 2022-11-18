# Introduction
A graph data structure is a collection of nodes that have data and are connected to other nodes.

## Create Graph

```java
import java.util.*;

public class Main {
  static class Edge{
    int src;     // source
    int dest ;  // destination
    int wt;    // weight
    
  public Edge(int s , int d , int w){
    this.src = s;
    this.dest = d;
    this.wt = w;
  }  
  }

    public static void main(String[] args) {
    int V = 5;  // 0 to 5 vertex;
    ArrayList<Edge>[] graph = new ArrayList[V];
    
    // fill empty to array list.
    
    for(int i=0; i<V; i++){
      graph[i] = new ArrayList<>();
    }
    
    // 0 vertex
    graph[0].add(new Edge(0,1,5));
    
    // 1 vertex
    graph[1].add(new Edge(1,0,5));
    
    // 2 vertex
    graph[2].add(new Edge(2,1,1));
    graph[2].add(new Edge(2,3,1));
    graph[2].add(new Edge(2,4,2));
    
    // 3 vertex
    graph[3].add(new Edge(3,1,3));
    graph[3].add(new Edge(3,2,1));
    
    // 4 vertex
    graph[4].add(new Edge(4,2,2));
    
    
    // find the neighbours of 2's 
    for(int i=0; i<graph[2].size(); i++){
      Edge e = graph[2].get(i);
      System.out.print(e.dest+" ");   // 1 3 4 
    }
  }
}
```

```text
above code  we first create a class of Edge and it will be static class and its contains source, destination, and weight of graph.

- for un-weight graph we can skip the weight in this code.
```

## Graph Traversal

### BFS 
```java
package Graph;  
import java.util.*;  
  
public class Main {  
    static class Edge{  
        int src;     // source  
        int dest ;  // destination  
        int wt;    // weight  
  
        public Edge(int s , int d , int w){  
            this.src = s;  
            this.dest = d;  
            this.wt = w;  
        }  
  
    }  
    public static void CreateGraph(ArrayList<Edge> [] graph){  
        // fill empty to array list.  
  
        for(int i= 0; i<graph.length; i++){  
            graph[i] = new ArrayList<>();  
        }  
  
        // 0 vertex  
        graph[0].add(new Edge(0,1,1));  
        graph[0].add(new Edge(0,2,1));  
  
        graph[1].add(new Edge(1,0,1));  
        graph[1].add(new Edge(1,3,1));  
  
        graph[2].add(new Edge(2,0,1));  
        graph[2].add(new Edge(2,4,1));  
  
        graph[3].add(new Edge(3,1,1));  
        graph[3].add(new Edge(3,4,1));  
        graph[3].add(new Edge(3,5,1));  
  
        graph[4].add(new Edge(4,2,1));  
        graph[4].add(new Edge(4,3,1));  
        graph[4].add(new Edge(4,5,1));  
  
        graph[5].add(new Edge(5,3,1));  
        graph[5].add(new Edge(5,4,1));  
        graph[5].add(new Edge(5,6,1));  
  
        graph[6].add(new Edge(6,5,1));  
    }  
    public static void main(String[] args) {  
        int V = 7;  
        ArrayList<Edge> graph[]  = new ArrayList[V];  
  
        CreateGraph(graph);  
  
        // bfs traversal in graph  
        bfs(graph);  // 0 1 2 3 4 5 6   
}  
    public static void bfs(ArrayList<Edge> [] graph){  
        Queue<Integer> que = new LinkedList<>();  
        boolean [] visited = new boolean[graph.length];  
  
        que.add(0);  // we can put any source. but we are putting here 0 as a source.  
        while(!que.isEmpty()){  
            int curr = que.remove();  
            if(!visited[curr]){      // if not visited make it visited.  
                System.out.print(curr+" ");  
                visited[curr]= true;  
                for(int i=0; i<graph[curr].size(); i++){  
                    Edge e = graph[curr].get(i);  
                    que.add(e.dest);  
                }  
            }  
        }  
    }  
  
}
```

```text
in this we create a visited array for that avoid cycle in graph.
we don't want to go again and again same node(edges) again.
so we create a visited boolean array. when we visit. we make true.
by default in java boolean array are false.
so if false then we visist it and make it true. so next time we will never go to same node again.
```

### DFS
```java
package Graph.DFS;  
import java.util.*;  
  
public class Main {  
    static class Edge{  
        int src;     // source  
        int dest ;  // destination  
        int wt;    // weight  
  
        public Edge(int s , int d , int w){  
            this.src = s;  
            this.dest = d;  
            this.wt = w;  
        }  
  
    }  
    public static void CreateGraph(ArrayList<Edge> [] graph){  
        // fill empty to array list.  
  
        for(int i= 0; i<graph.length; i++){  
            graph[i] = new ArrayList<>();  
        }  
  
        // 0 vertex  
        graph[0].add(new Edge(0,1,1));  
        graph[0].add(new Edge(0,2,1));  
  
        graph[1].add(new Edge(1,0,1));  
        graph[1].add(new Edge(1,3,1));  
  
        graph[2].add(new Edge(2,0,1));  
        graph[2].add(new Edge(2,4,1));  
  
        graph[3].add(new Edge(3,1,1));  
        graph[3].add(new Edge(3,4,1));  
        graph[3].add(new Edge(3,5,1));  
  
        graph[4].add(new Edge(4,2,1));  
        graph[4].add(new Edge(4,3,1));  
        graph[4].add(new Edge(4,5,1));  
  
        graph[5].add(new Edge(5,3,1));  
        graph[5].add(new Edge(5,4,1));  
        graph[5].add(new Edge(5,6,1));  
  
        graph[6].add(new Edge(6,5,1));  
    }  
    public static void main(String[] args) {  
        int V = 7;  
        ArrayList<Edge> graph[]  = new ArrayList[V];  
  
        CreateGraph(graph);  
  
        // bfs traversal in graph  
        dfs(graph,0,new boolean[V]);  // 0 1 2 3 4 5 6  
    }  
    public static void dfs(ArrayList<Edge> [] graph , int curr , boolean visited[]){  
     System.out.print(curr+" ");  
     visited[curr]=true;  
     for(int i=0; i<graph[curr].size(); i++){  
         Edge e = graph[curr].get(i);  
         if(!visited[e.dest]){  
             dfs(graph,e.dest,visited);  
         }  
     }  
    }  
  
}
```

```text
above code simply making curr to visited.
and then our curr source making true. because its visisted.
now destination become source. and destination will be destination.

if we didn't visited destionation before then we do dfs call.

```



#### Q 1. for given src & dest tell if a path exists from src to dest.
` src =0 , dest = 5 -> return true if path exists else return false`

```java
package Graph.DFS;  
import java.util.*;  
  
public class hasPath {  
    static class Edge{  
        int src;     // source  
        int dest ;  // destination  
        int wt;    // weight  
  
        public Edge(int s , int d , int w){  
            this.src = s;  
            this.dest = d;  
            this.wt = w;  
        }  
  
    }  
    public static void CreateGraph(ArrayList<Edge> [] graph){  
        // fill empty to array list.  
  
        for(int i= 0; i<graph.length; i++){  
            graph[i] = new ArrayList<>();  
        }  
  
        // 0 vertex  
        graph[0].add(new Edge(0,1,1));  
        graph[0].add(new Edge(0,2,1));  
  
        graph[1].add(new Edge(1,0,1));  
        graph[1].add(new Edge(1,3,1));  
  
        graph[2].add(new Edge(2,0,1));  
        graph[2].add(new Edge(2,4,1));  
  
        graph[3].add(new Edge(3,1,1));  
        graph[3].add(new Edge(3,4,1));  
        graph[3].add(new Edge(3,5,1));  
  
        graph[4].add(new Edge(4,2,1));  
        graph[4].add(new Edge(4,3,1));  
        graph[4].add(new Edge(4,5,1));  
  
        graph[5].add(new Edge(5,3,1));  
        graph[5].add(new Edge(5,4,1));  
        graph[5].add(new Edge(5,6,1));  
  
        graph[6].add(new Edge(6,5,1));  
    }  
    public static void main(String[] args) {  
        int V = 7;  
        ArrayList<Edge> graph[]  = new ArrayList[V];  
  
        CreateGraph(graph);  
  
        // bfs traversal in graph  
        System.out.println(hasPathInGraph(graph,0,5,new boolean[V]));  
  
    }  
    public static boolean hasPathInGraph(ArrayList<Edge> [] graph , int src , int dest,  boolean visited[]){  
      if(src==dest){  
          return true;  
      }  
      visited[src]=true;  
      for(int i=0; i<graph[src].size(); i++){  
          Edge e  = graph[src].get(i);  
          // e.dest neighbours.  
          if(!visited[e.dest] && hasPathInGraph(graph,e.dest,dest,visited)){  
              return true;  
          }  
      }  
          return false;  
    }  
  
}
```


### Detect Cycle In Graph DFS UN-DIRECT_GRAPH

```java
package Graph.DetectCycle.DFS;  
  
import java.util.*;  
  
public class Main {  
// TC O(V+E)
    static class Edge{  
        int src;     // source  
        int dest ;  // destination  
  
        public Edge(int s , int d){  
            this.src = s;  
            this.dest = d;  
        }  
  
    }  
    public static void CreateGraph(ArrayList<Edge>[] graph){  
        // fill empty to array list.  
  
        for(int i= 0; i<graph.length; i++){  
            graph[i] = new ArrayList<>();  
        }  
  
        // 0 vertex  
        graph[0].add(new Edge(0,1));  
        graph[0].add(new Edge(0,2));   // if comment this 0 to 2  and 2 to 0 return false.  
        graph[0].add(new Edge(0,3));  
  
        graph[1].add(new Edge(1,0));  
        graph[1].add(new Edge(1,2));  
  
        graph[2].add(new Edge(2,0));  // if comment this 0 to 2  and 2 to 0 return false.  
        graph[2].add(new Edge(2,1));  
  
        graph[3].add(new Edge(3,0));  
        graph[3].add(new Edge(3,4));  
    }  
  
    public static void main(String[] args) {  
        int V = 5;  
        ArrayList<Edge>[] graph  = new ArrayList[V];  
  
        CreateGraph(graph);  
  
        // bfs traversal in graph  
        System.out.println(detectCycle(graph));  
    }  
  
    public static boolean detectCycle(ArrayList<Edge> [] graph){  
        boolean[] visited = new boolean[graph.length];  
        for(int i=0; i<graph.length; i++){  
            if(!visited[i]){  
                if(detectCycleUtil(graph,visited,i,-1)) {   // from whom we start don't have parent so -1;  
                    return true;  // cycle exists in one of the parts.  
                }  
            }  
        }  
        return false;  
    }  
    public  static  boolean detectCycleUtil(ArrayList<Edge>[] graph, boolean[] visited , int curr, int parent){  
        visited[curr] = true;  
        for(int i=0; i<graph[curr].size(); i++){  
            Edge e = graph[curr].get(i);  
            // case 3.  
            if(!visited[e.dest]){  
                if( detectCycleUtil(graph,visited,e.dest,curr)){  
                return true;  
                }  
            }else if(visited[e.dest] && e.dest!=parent){  
                // case 2.  
                return true;  
            }  
            // case 2;  
//                continue; do nothing  
        }  
        return false;  
    }  
  
}
```


### Is Graph Bipartite? 
#### BFS
```java
package Graph.BipartiteGraph.BFS;  
  
import java.util.*;  
  
public class Main {  
    static class Edge{  
        int src;     // source  
        int dest ;  // destination  
  
        public Edge(int s , int d){  
            this.src = s;  
            this.dest = d;  
        }  
  
    }  
    public static void CreateGraph(ArrayList<Edge>[] graph){  
        // fill empty to array list.  
  
        for(int i= 0; i<graph.length; i++){  
            graph[i] = new ArrayList<>();  
        }  
  
        // 0 vertex  
        graph[0].add(new Edge(0,1));  
        graph[0].add(new Edge(0,2));  
  
        graph[1].add(new Edge(1,0));  
        graph[1].add(new Edge(1,3));  
  
        graph[2].add(new Edge(2,0));  
        graph[2].add(new Edge(2,4));  
  
        graph[3].add(new Edge(3,1));  
        graph[3].add(new Edge(3,4));  // if comments this part cycle will remove and its return true. it will be bipartite graph.  
  
        graph[4].add(new Edge(4,2));  
        graph[4].add(new Edge(4,3));   // if comments this part cycle will remove and its return true. it will be bipartite graph.  
    }  
  
    public static void main(String[] args) {  
        int V = 5;  
        ArrayList<Edge>[] graph  = new ArrayList[V];  
  
        CreateGraph(graph);  
  
        // bfs traversal in graph  
        System.out.println(isBipartite(graph)); // return false. because cycle not exists.  
//        note -> which graph doesn't has cycle that always will be bipartite graph. if have cycle then its not bipartite graph.  
    }  
  
    public static boolean isBipartite(ArrayList<Edge>[] graph){  
        int[] color = new int [graph.length];  
        Arrays.fill(color,-1); // no color  
  
        Queue<Integer> que = new LinkedList<>();  
        for(int i=0; i< graph.length; i++){  
            if(color[i]==-1){  
                // bfs  
                que.add(i);  
                color[i] = 0; // yellow  
                while(!que.isEmpty()){  
                    int curr = que.remove();  
                    for(int j=0; j<graph[curr].size(); j++){  
                        Edge e = graph[curr].get(j);  // neighbours e.dest  
                        // case 1 . not color.                        if(color[e.dest]==-1){  
                            int nextColor = color[curr]==0 ? 1 : 0;  
                            color[e.dest] = nextColor;  
                            que.add(e.dest);  
                        }else if(color[e.dest] == color[curr]){  
                            return false;  // color same. not bipartite  
                        }  
                    }  
                }  
            }  
        }  
        return true;  
    }  
}
```

```text
Bipartite Graph
1. Acyclic(no cycle) =  TRUE - always.
2. Even Cycle        =  TRUE
3. Odd Cycle         =  FALSE
```


### Directed Graph Cycle Detection - DFS
```java
package DetectCycle_UndirectGraph_DFS;  
  
import java.util.*;  
  
public class Main {  
    static class Edge{  
        int src;     // source  
        int dest ;  // destination  
  
        public Edge(int s , int d){  
            this.src = s;  
            this.dest = d;  
        }  
  
    }  
    public static void CreateGraph(ArrayList<Edge>[] graph){  
        // fill empty to array list.  
  
        for(int i= 0; i<graph.length; i++){  
            graph[i] = new ArrayList<>();  
        }  
  
        // for cycle it will. return true.  
        /*        graph[0].add(new Edge(0,2));  
        graph[1].add(new Edge(1,0));  
        graph[2].add(new Edge(2,3));  
        graph[3].add(new Edge(3,0));        */                // for no cycle it will return false.  
        graph[0].add(new Edge(0,1));  
        graph[0].add(new Edge(0,2));  
  
        graph[1].add(new Edge(1,3));  
  
        graph[2].add(new Edge(2,3));  
  
    }  
  
    public static void main(String[] args) {  
        int V = 4;  
        ArrayList<Edge>[] graph  = new ArrayList[V];  
  
        CreateGraph(graph);  
  
        // bfs traversal in graph  
        System.out.println(isCycle(graph));  
    }  
  
   public static boolean isCycle(ArrayList<Edge>[] graph){  
        boolean[] visited = new boolean[graph.length];  
        boolean[] stack = new boolean[graph.length];  
  
        for(int i=0; i< graph.length; i++){  
            if(!visited[i]){  
                if(isCycleUtil(graph,i,visited,stack)){  
                    return true;  
                }  
            }  
        }  
        return false;  
   }  
   public static boolean isCycleUtil(ArrayList<Edge>[] graph,int curr , boolean[] visited, boolean[] stack){  
  
        visited[curr]=true;  
        stack[curr] = true;  
  
        for(int i=0; i<graph[curr].size(); i++){  
            Edge e = graph[curr].get(i);  
            if(stack[e.dest]){  
                // already true then return true cycle present.  
                return true;  
            }else if(!visited[e.dest] && isCycleUtil(graph,e.dest,visited,stack)){  
                return true;  
            }  
        }  
       stack[curr] = false;  
        return false;  
   }  
}
```