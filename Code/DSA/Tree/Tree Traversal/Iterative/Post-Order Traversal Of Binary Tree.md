**Intuition:** In postorder traversal, the tree is traversed in this way: **left,** right, root. We first visit the left child, after returning from it we visit the right child, and after returning from both of them, we print the value of the current node. The fundamental problem we face in this scenario is that there is no way that we can move from a child to the parent using as our node points to only children and not to the parent. To solve this problem, we use an explicit stack data structure. While traversing we can insert node values to the stack in such a way that we always get the next node value at the top of the stack.

**Solution 1: Using two stacks**

**Approach:** 

The algorithm approach can be stated as:

-   We take two explicit stacks S1 and S2.
-   We insert our node to S1(if it’s not pointing to NULL).
-   We will set up a while loop to run till S1 is non-empty.
-   In every iteration, we pop out the top of S1 and then push this popped node to S2. Moreover we will push the left child and right child of this popped node to S1.(If they are not pointing to NULL).
-   Then we start the next iteration with the next node as top of S1.
-   We stop the iteration when S1 becomes empty.
-   At last we start popping at the top of S2 and print the node values, we will get the postorder traversal.

Stack is a Last-In-First-Out (LIFO) data structure. To understand the two-stack approach, we need to understand how we insert and remove nodes in both stacks.




![](https://i.imgur.com/iifYlmj.png)



![](https://i.imgur.com/eZ6Z98D.png)



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

    static ArrayList < Integer > postOrderTrav(Node curr) {

  

        ArrayList < Integer > postOrder = new ArrayList < > ();

        if (curr == null) return postOrder;

  

        Stack < Node > s1 = new Stack < > ();

        Stack < Node > s2 = new Stack < > ();

        s1.push(curr);

        while (!s1.isEmpty()) {

            curr = s1.peek();

            s1.pop();

            s2.push(curr);

            if (curr.left != null)

                s1.push(curr.left);

            if (curr.right != null)

                s1.push(curr.right);

        }

        while (!s2.isEmpty()) {

            postOrder.add(s2.peek().data);

            s2.pop();

        }

        return postOrder;

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

        postOrder = postOrderTrav(root);

  

        System.out.println("The postOrder Traversal is : ");

        for (int i = 0; i < postOrder.size(); i++) {

            System.out.print(postOrder.get(i) + " ");

        }

    }

}
```

**Output**

The postOrder Traversal is : 4 8 5 2 6 9 10 7 3 1

**Time Complexity: O(N)**.

Reason: We are traversing N nodes and every node is visited exactly once.

**Space Complexity: O(N+N)**



**Solution 2: Using a single stack:**

**Intuition:** First we need to understand what we do in a postorder traversal. We first explore the left side of the root node and keep on moving left until we encounter a node pointing to NULL. As now there is nothing more to traverse on the left, we move to the immediate parent(say node P) of that NULL node. Now we again start our left exploration from the right child of that node P. We will print a node’s value only when we have returned from its both children.

Approach:

The algorithm steps can be stated as:

-   We take an explicit data structure and a cur pointer pointing to the root of the tree.
-   We run a while loop till the time the cur is not pointing to NULL or the stack is non-empty.
-   If cur is not pointing to NULL, it means then we simply push that value to the stack and move the cur pointer to its left child because we want to explore the left child before the root or the right child.
-   If the cur is pointing to NULL, it means we can’t go further left, then we take a variable temp and set it to  cur’s parent’s right child (as we have visited the left child, now we want to visit the right child). We have node cur’s parent at the top of the stack.
-   If node temp is not pointing to NULL, we simply initialise cur as node temp so that we can again start looking at the left of node temp from the next iteration.
-   If node temp is pointing to NULL, then first of all we are sure that we have visited both children of temp’s parent, so it’s time to print it. Therefore we set temp to its parent( present at the top of stack), pop the stack and then print temp’s value. Additionally,  this new temp(parent of NULL-pointing node) can be the right child of the node present at the top of stack after popping.In that case the node at top of the stack is parent of temp and the next node to be printed. Therefore we run an additional while loop to check if that is the case, if true then again move temp to its parent and print its value.


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

    static ArrayList < Integer > postOrderTrav(Node cur) {

  

        ArrayList < Integer > postOrder = new ArrayList < > ();

        if (cur == null) return postOrder;

  

        Stack < Node > st = new Stack < > ();

        while (cur != null || !st.isEmpty()) {

  

            if (cur != null) {

                st.push(cur);

                cur = cur.left;

            } else {

                Node temp = st.peek().right;

                if (temp == null) {

                    temp = st.peek();

                    st.pop();

                    postOrder.add(temp.data);

                    while (!st.isEmpty() && temp == st.peek().right) {

                        temp = st.peek();

                        st.pop();

                        postOrder.add(temp.data);

                    }

                } else cur = temp;

            }

        }

        return postOrder;

  
  

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

        postOrder = postOrderTrav(root);

  

        System.out.println("The postOrder Traversal is : ");

        for (int i = 0; i < postOrder.size(); i++) {

            System.out.print(postOrder.get(i) + " ");

        }

    }

}
```


**Output:**

The postOrder Traversal is : 4 8 5 2 6 9 10 7 3 1

**Time Complexity: O(N)**.

**Space Complexity: O(N)**