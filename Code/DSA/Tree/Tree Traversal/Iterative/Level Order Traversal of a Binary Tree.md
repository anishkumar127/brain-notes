
![](https://i.imgur.com/8F5QfAP.png)


**Output**:

20 10 30 5 15 25 35

We will print the nodes of the first level (20), then we will print nodes of second level(10,30) and at last we will print nodes of the last level(5,15,25,35)


**Approach:**

The algorithm steps are stated as:

-   Take a queue data structure and push the root node to the queue.
-   Set a while loop which will run till our queue is non-empty.
-   In every iteration, pop out from the front of the queue and assign it to a variable (say temp).
-   If temp has a left child, push it to the queue.
-   If temp has a right child, push it to the queue.
-   At last push the value of the temp node to our “ans” data structure.

```java
class Solution {

    public List<Integer> levelOrder(TreeNode root) {

        Queue<TreeNode> queue = new LinkedList<TreeNode>();

        List<Integer> wrapList = new List<Integer>();

        if(root == null) return wrapList;

        queue.offer(root);

        while(!queue.isEmpty()){

            if(queue.peek().left != null)

                queue.offer(queue.peek().left);

            if(queue.peek().right != null)

                queue.offer(queue.peek().right);

            wrapList.add(queue.poll().val);

        }

        return wrapList;

    }

}
```


**Time Complexity:** O(N)

**Space Complexity:** O(N)

**What if we have to print the level numbers as well?**

In the above approach we print the nodes level-wise but we can’t differentiate from our ans that whether two nodes are from the same level or not.

To store the level-order traversal along with individual levels stored together ( [[20],[10,30],[5,15,25,35]]), we need to make the following changes:

-   First we need to declare a 2d array to store our answer( vector<vector<int>> in C++ and List<List<int>> in Java).
-   Inside the while loop, first we declare a list to store nodes of a level (say level), then we need to set another for loop, which iterates for the size of the queue and inside this for loop we need to write the logic which we had discussed in the first approach
-   The for loop ensures that all the nodes of a particular level are inserted together and when the iteration of the for loop ends, the queue contains the elements of only one level at a time.
-   Inside the for loop we push the value of temp to ‘level’.
-   After the for loop ends, we push ‘level’ to the answer.

**Note:** The inner for loop runs just for the size of the queue, for which the while loop would also have to run, therefore introducing the for loop doesn’t increase the time complexity of the program.


