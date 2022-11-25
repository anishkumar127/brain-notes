![](https://i.imgur.com/ULHFo1y.png)
**Approach:** In postorder traversal, the tree is traversed in this way: **left, right**, **root**.

The algorithm approach can be stated as:

-   We first recursively visit the left child and go on left till we find a node pointing to NULL.
-   Then we return to its parent.
-   Then we recursively visit the right child.
-   After we have returned from the right child as well, only then will we print the  current node value.


Postorder traversal of this tree: 2,3,1

Initially, we pass the root node pointing to 1 to our traversal function. The algorithm steps are as follows:

-   As we are doing a postorder traversal, the first thing we will do is to recursively visit the left child. We continue till the time we find a node pointing to NULL
-   As we can’t move further left, we need to return back to node 2 but how do we do so? Remember that our nodes only have pointers to the children and not to the parent, therefore we can move only from parent to child and not from a child to the parent.
-   The answer to this question is **recursion**. We recursively called the same function with the current node pointing to the NULL node.This second function was pushed to our call stack. We do our execution which is to return from that node(as the node is pointing to NULL).
-   As the execution stops, we need to come back to the parent, we simply return to it as is present at the top of the recursion call stack.
-   Similar execution is performed at all nodes.


```java
import java.util.*;

class Node {

    int data;

    Node left, right;

    Node(int data) {

        this.data = data;

        left = null;

        right = null;

    }

}

public class TUF {

    static void postOrderTrav(Node curr, ArrayList < Integer > postOrder) {

        if (curr == null)

            return;

  

        postOrderTrav(curr.left, postOrder);

        postOrderTrav(curr.right, postOrder);

        postOrder.add(curr.data);

    }

  

    public static void main(String args[]) {

  

        Node root = new Node(1);

        root.left = new Node(2);

        root.right = new Node(3);

        root.left.left = new Node(4);

        root.left.right = new Node(5);

        root.left.right.left = new Node(8);

        root.right.left = new Node(6);

        root.right.right = new Node(7);

        root.right.right.left = new Node(9);

        root.right.right.right = new Node(10);

  

        ArrayList < Integer > postOrder = new ArrayList < > ();

        postOrderTrav(root, postOrder);

  

        System.out.println("The postOrder Traversal is : ");

        for (int i = 0; i < postOrder.size(); i++) {

            System.out.print(postOrder.get(i) + " ");

        }

    }

}
```
