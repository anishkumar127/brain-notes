
![](https://i.imgur.com/qcw0zwN.png)


**Intuition:** In preorder traversal, the tree is traversed in this way: **root,** left, right. When we visit a node, we print its value, and then we want to visit the left child followed by the right child. The fundamental problem we face in this scenario is that there is no way that we can move from a child to a parent. To solve this problem, we use recursion and the recursive call stack to locate ourselves back to the parent node when execution at a child node is completed.

**Approach:** In preorder traversal, the tree is traversed in this way: **root, left, right**.

The algorithm approach can be stated as:

-   We first visit the root node and before visiting its children we print its value.
-   After this, we recursively visit its left child.
-   Then we recursively visit the right child.
-   If we encounter a node pointing to NULL, we simply return to its parent.


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

    Node() {

  

    }

}

  

public class TUF {

    static void preOrderTrav(Node curr, ArrayList < Integer > preOrder) {

        if (curr == null)

            return;

  

        preOrder.add(curr.data);

        preOrderTrav(curr.left, preOrder);

        preOrderTrav(curr.right, preOrder);

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

  

        ArrayList < Integer > preOrder = new ArrayList < > ();

        preOrderTrav(root, preOrder);

  

        System.out.print("The preOrder Traversal is : ");

        for (int i = 0; i < preOrder.size(); i++) {

            System.out.print(preOrder.get(i) + " ");

        }

  

    }

}
```

**Time Complexity: O(N)**.

Reason: We are traversing N nodes and every node is visited exactly once.

**Space Complexity: O(N)**

Reason: Space is needed for the recursion stack. In the worst case (skewed tree), space complexity can be O(N).