**Intuition:** In preorder traversal, the tree is traversed in this way: **root,** left, right. When we visit a node, we print its value, and then we want to visit the left child followed by the right child. The fundamental problem we face in this scenario is that there is no way that we can move from a child to a parent. To solve this problem, we use an explicit stack data structure. While traversing we can insert node values to the stack in such a way that we always get the next node value at the top of the stack.

**Approach:** 

The algorithm approach can be stated as:

-   We first take an explicit stack data structure and push the root node to it.(if the root node is not NULL).
-   Then we use a while loop to iterate over the stack till the stack remains non-empty.
-   In every iteration we first pop the stack’s top and print it. 
-   Then we first push the right child of this popped node and then push the left child, if they are not NULL. We do so because stack is a last-in-first-out(LIFO) data structure. We need to access the left child first, so we need to push it at the last.
-   The execution continues and will stop when the stack becomes empty. In this process, we will get the preorder traversal of the tree.

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