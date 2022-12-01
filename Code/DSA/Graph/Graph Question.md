# Topological Sorting
Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u v, vertex u comes before v in the ordering.

**Note:** Topological Sorting for a graph is not possible if the graph is not a DAG.

- Directed Acyclic Graph (DAG) is a s directed graph with no cycle.
- Topological Sorting is used only for DAGs (not for non-DAGs)
- It is a linear order of vertices such that every directed edge u -> v, the vertex u comes before v in the order.


we use DFS in this.
**For example,** a topological sorting of the following graph is “5 4 2 3 1 0”. There can be more than one topological sorting for a graph. Another topological sorting of the following graph is “4 5 2 3 1 0”. The first vertex in topological sorting is always a vertex with an in-degree of 0 (a vertex with no incoming edges).

![](https://i.imgur.com/8GR8sdJ.png)



```java
package Graph.TopoSort;  
  
import java.util.ArrayList;  
  
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
  
        graph[2].add(new Edge(2,3));  
        graph[3].add(new Edge(3,1));  
        graph[4].add(new Edge(4,0));  
        graph[4].add(new Edge(4,1));  
  
        graph[5].add(new Edge(5,0));  
        graph[5].add(new Edge(5,2));  
  
  
    }  
public static void topSort(ArrayList<Edge>[] graph){  
        boolean[] visited = new boolean[graph.length];  
        Stack<Integer> helper_Stack = new Stack<>();  
        for(int i=0; i<graph.length; i++){  
            if(!visited[i]){  
                topSortUtil(graph,i, visited,helper_Stack);  // modified dfs  
            }  
        }  
        // print  
    while(!helper_Stack.isEmpty()){  
        System.out.print(helper_Stack.pop()+" ");  
    }  
}  
  
public static void topSortUtil(ArrayList<Edge>[] graph, int curr, boolean[] visited, Stack<Integer>helper_Stack){  
        visited[curr] = true;  
        for(int i=0; i<graph[curr].size(); i++){  
            Edge e = graph[curr].get(i);  
            if(!visited[e.dest]){  
                topSortUtil(graph,e.dest,visited,helper_Stack);  
            }  
        }  
            helper_Stack.push(curr);  
}  
    public static void main(String[] args) {  
        int V = 6;  
        ArrayList<Edge>[] graph  = new ArrayList[V];  
  
        CreateGraph(graph);  
        topSort(graph);  
    }  
  
}
```


output 
>5 4 2 3 1 0 

TC - O(V+E);



# Topological Sort Using BFS

Kahn's Algorithms we will use in BFS.

in-Degree(incoming)
out-Degree (outgoing)
we will use.

![](https://i.imgur.com/yfJMFJy.png)



		Degree       0  1  2  3   4   5 
		in-degree    2  2  1  1   0   0
		out-degree   0  0  1  1   2   2

we will use now in-degree we can also use out-degree

in-degree 0 and out-degree 0  longest path.

dependency. like for b should b a. 

in-degree ->

2 2 1 1 0 0  in-degree
0 1 2 3 4 5 index.

we will use Queue.

now we store in queue which have 0 degree. in degree

store  in queue - > 4 5.

and then pop 4.
and output - 4.

and then 4 pointing to 0 and 1 . so here we can directly -1 degree or 0 and 1.

why -1 ? because i printed 4. and now i am directly reached through 4. to 0 and 1.


only in-degree only 0 degree wale add honge queue me.

and -1 because next time queue me 0 degree wale add kr saku.



pop 5 and add to output.

removed from queue 5.

now 5 pointing to 0 and 2.
so -1 of 0 and 2.

now in-degree of 0 and 2 is 0.

now add queue to 0 and 2. because his degre is 0.

pop 0. and print to output. and removed from queue.
now 0 don't have neighbours. wo we will not add anyone.

now pop from queue 2. and there print to output. and check neighbours of 2. there will be a neighbours of 2. which is 3. and we do -1. in-degree of 3.

now 3 degree is 0. add to queue.

pop 3. and print 3.
and 3 neighbours is 1. and now do -1 of 1.

add to queue 1. because degree 0.

pop 1. and print.
1 don't  have neighbours.

now we have final ouput topological sort. is - >  4 5 0 2 3 1

here bfs we didn't use visited array.



# bfs topological sort

```java
package Graph.TopoSort.BFS;  
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
  
        graph[2].add(new Edge(2,3));  
        graph[3].add(new Edge(3,1));  
        graph[4].add(new Edge(4,0));  
        graph[4].add(new Edge(4,1));  
  
        graph[5].add(new Edge(5,0));  
        graph[5].add(new Edge(5,2));  
  
  
    }  
    public static void calcIndeg(ArrayList<Edge>[] graph, int [] indeg){  
        for(int i=0; i<graph.length; i++){  
            int v = i;  
            for(int j=0; j<graph[v].size();j++){  
                Edge e = graph[v].get(j);  
                indeg[e.dest]++;  
            }  
        }  
    }  
    public static void topSort(ArrayList<Edge>[] graph){  
        int indeg[] = new int[graph.length];  
        calcIndeg(graph,indeg);  
        Queue<Integer> que = new LinkedList<>();  
        for(int i=0; i<graph.length; i++){  
            if(indeg[i]==0){  
                que.add(i);  
            }  
        }  
        // bfs  
        while(!que.isEmpty()){  
            int curr = que.remove();  
            System.out.print(curr+" ");  
  
            for(int i=0; i<graph[curr].size(); i++){  
                Edge e = graph[curr].get(i);  
                indeg[e.dest]--;  
                if(indeg[e.dest]==0){  
                    que.add(e.dest);  
                }  
            }  
        }  
        System.out.println();  
    }  
  
  
    public static void main(String[] args) {  
        int V = 6;  
        ArrayList<Edge>[] graph  = new ArrayList[V];  
        CreateGraph(graph);  
        topSort(graph);  
    }  
}
```






# next Question
# All Paths from source to Target

#### Directed Graph


![](https://i.imgur.com/0rMrLw4.png)



Source = 5, destination = 1


so source to des path is 5 to 1.

1. 5 2 3 1
2. 5 0 3 1

total 2 path source to dest reach.

do using DFS

TC vpowerV   -  O(v^v);



```java
package Graph.AllPathStoD;  
  
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
        graph[0].add(new Edge(0,3));  
        graph[2].add(new Edge(2,3));  
        graph[3].add(new Edge(3,1));  
        graph[4].add(new Edge(4,0));  
        graph[4].add(new Edge(4,1));  
  
        graph[5].add(new Edge(5,0));  
        graph[5].add(new Edge(5,2));  
  
  
    }  
  
    // exponetial worst case canario.  
    public static void printAllPath(ArrayList<Edge>[] graph, int src, int dest, String path){  
        if(src==dest){  
            System.out.println(path+dest);  
            return;  
        }  
        // if not the neighbours call.  
        for(int i=0; i<graph[src].size(); i++){  
            Edge e = graph[src].get(i);  
            printAllPath(graph,e.dest,dest,path+src);  
        }  
    }  
    public static void main(String[] args) {  
        int V = 6;  
        ArrayList<Edge>[] graph  = new ArrayList[V];  
        CreateGraph(graph);  
        int src = 5;  
        int dest = 1;  
        printAllPath(graph,src,dest,"");  
    }  
}
```

 output - >
  5031
  5231


