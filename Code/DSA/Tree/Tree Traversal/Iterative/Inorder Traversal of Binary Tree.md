![](https://i.imgur.com/GHntXDk.png)




**Intuition:** In inorder traversal, the tree is traversed in this way: **root,** left, right. We first visit the left child, after returning from it we print the current node value, then we visit the right child. The fundamental problem we face in this scenario is that there is no way that we can move from a child to a parent. To solve this problem, we use an explicit stack data structure. While traversing we can insert node values to the stack in such a way that we always get the next node value at the top of the stack.

**Approach:** 

The algorithm approach can be stated as:

-   We first take an explicit stack data structure and set an infinite loop.
-   In every iteration we check whether our current node is pointing to NULL or not.
-   If it is not pointing to null, we simply push the current value to the stack and move the current node to its left child.
-   If it is pointing to NULL, we first check whether the stack is empty or not. If the stack is empty, it means that we have traversed the tree and we break out of the loop.
-   If the stack is not empty, we pop the top value of the stack, print it and move the current node to its right child.

Stack is a Last-In-First-Out (LIFO) data structure, therefore when we encounter a node, we simply push it to the stack and try to find nodes on its left. When the current node points to NULL, it means that there is nothing left to traverse and we should move to the parent. This parent is always placed at the top of the stack. If the stack is empty, then we had already traversed the whole tree and should stop the execution.


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

class TUF {

    static ArrayList < Integer > inOrderTrav(Node curr) {

        ArrayList < Integer > inOrder = new ArrayList < > ();

        Stack < Node > s = new Stack < > ();

        while (true) {

            if (curr != null) {

                s.push(curr);

                curr = curr.left;

            } else {

                if (s.isEmpty()) break;

                curr = s.peek();

                inOrder.add(curr.data);

                s.pop();

                curr = curr.right;

            }

        }

        return inOrder;

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

  

        ArrayList < Integer > inOrder;

        inOrder = inOrderTrav(root);

  

        System.out.println("The inOrder Traversal is : ");

        for (int i = 0; i < inOrder.size(); i++) {

            System.out.print(inOrder.get(i) + " ");

        }

    }

}
```



**Time Complexity: O(N)**.

Reason: We are traversing N nodes and every node is visited exactly once.

**Space Complexity: O(N)**

Reason: In the worst case (a tree with just left children), the space complexity will be O(N).