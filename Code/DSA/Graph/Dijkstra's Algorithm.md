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
