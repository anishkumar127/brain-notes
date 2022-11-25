**Approach:** In inorder traversal, the tree is traversed in this way: **left,** root, **right**.

The algorithm approach can be stated as:

-   We first recursively visit the left child and go on till we find a leaf node.
-   Then we print that node value.
-   Then we recursively visit the right child.
-   If we encounter a node pointing to NULL, we simply return to its parent.


Inorder traversal of this tree: 2,1,3

Initially, we pass the root node pointing to 1 to our traversal function. The algorithm steps are as follows:

-   As we are doing an inorder traversal, the first thing we will do is to recursively visit the left child. We continue till the time we find a leaf node. At node 2, as there is no more left child, we print its value.
-   Then we need to move back to node 1 but how do we do so? Remember that our nodes only have pointers to the children and not to the parent, therefore we can move only from parent to child and not from a child to the parent.
-   The answer to this question is **recursion**. When we move to node 2, we call it recursively. This second function is then pushed to our call stack. We do our execution which is to visit the left child of node 2, return from it as it is NULL, print current node value and then again recursively call its right child. 
-   This second function will then be removed from our call stack and we will return to the first function. Then we again recursively call the function for the right child and do the execution, i.e print 1 and then visit its right child.




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

  

    static void inOrderTrav(Node curr, ArrayList < Integer > inOrder) {

        if (curr == null)

            return;

  

        inOrderTrav(curr.left, inOrder);

        inOrder.add(curr.data);

        inOrderTrav(curr.right, inOrder);

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

  

        ArrayList < Integer > inOrder = new ArrayList < > ();

        inOrderTrav(root, inOrder);

  

        System.out.println("The inOrder Traversal is : ");

        for (int i = 0; i < inOrder.size(); i++) {

            System.out.print(inOrder.get(i) + " ");

        }

    }

}

```

**Output:**

The inOrder Traversal is : 4 2 8 5 1 6 3 9 7 10 

**Time Complexity: O(N)**.

Reason: We are traversing N nodes and every node is visited exactly once.

**Space Complexity: O(N)**

Reason: Space is needed for the recursion stack. In the worst case (skewed tree), space complexity can be O(N).