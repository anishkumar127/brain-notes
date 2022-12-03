
```java
package Graph.GQ_CheapestFlight;  
  
import java.util.ArrayList;  
import java.util.LinkedList;  
import java.util.Queue;  
  
public class Main {  
    static class Edge{  
        int src;  
        int dest;  
        int wt;  
        public Edge(int s, int d, int w){  
            this.src = s;  
            this.dest = d;  
            this.wt = w;  
        }  
    }  
  
    public static void createGraph(int flights[][],ArrayList<Edge>graph[]){  
        for(int i=0; i<graph.length; i++){  
            graph[i] = new ArrayList<>();  
        }  
        for(int i=0; i<flights.length; i++){  
            int src = flights[i][0];  
            int dest = flights[i][1];  
            int wt = flights[i][2];  
            Edge e = new Edge(src,dest,wt);  
            graph[src].add(e);  
        }  
    }  
    static class Info{  
        int v;  
        int cost;  
        int stops;  
        public Info(int v, int c, int s){  
            this.v = v;  
            this.cost= c;  
            this.stops=s;  
        }  
    }  
    public static int cheapestFlight(int n , int flights[][] , int src, int dest, int k){  
        ArrayList<Edge> graph[] = new ArrayList[n];  
        createGraph(flights,graph);  
        int dist[] = new int[n];  
        for(int i=0; i<n; i++){  
            if(i!=src){  
                dist[i] = Integer.MAX_VALUE;  
            }  
        }  
        Queue<Info> que = new LinkedList<>();  
        que.add(new Info(src,0,0));  
        while(!que.isEmpty()){  
            Info curr = que.remove();  
            if(curr.stops>k){  
                break;  
            }  
            for(int i=0; i<graph[curr.v].size(); i++){  
                Edge e = graph[curr.v].get(i);  
                int u = e.src;  
                int v = e.dest;  
                int wt = e.wt;  
//                if(dist[u]!=Integer.MAX_VALUE && dist[u]+wt<dist[v] && curr.stops<=k){  
                if(curr.cost+wt<dist[v] && curr.stops<=k){  
                    dist[v] = dist[u]+wt;  
                    que.add(new Info(v,dist[v],curr.stops+1));  
                }  
            }  
        }  
  
        // dist[dest];  
  
        if(dist[dest]==Integer.MAX_VALUE){  
            return -1;  
        }else{  
            return dist[dest];  
        }  
    }  
    public static void main(String[] args) {  
        int n = 4;  
        int flights[][] = {{0,1,100},{1,2,100},{2,0,100},{1,3,600},{2,3,200}};  
        int src = 0;  
        int dst = 3;  
        int k=1;  
        ArrayList<Edge>[] graph = new ArrayList[n];  
        int ans = cheapestFlight(n,flights,src,dst,k);  
        System.out.println(ans);  
    }  
}
```


output - 700

