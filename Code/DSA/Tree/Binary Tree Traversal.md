
![](https://i.imgur.com/dkx6rqV.png)



![](https://i.imgur.com/JpGBMcD.png)

## Inorder Traversal With Recursion

In inorder the flow of traversing will be left_subtree -> current -> right_subtree.

-   Base case: we have to check whether the node is present or not, i.e. not NULL.
-   Traverse left the child with a recursive call passing the current->left as root.
-   After returning from this call, the node would be leftmost so that we can store this first node of the inorder traversal.
-   Now we have left child, and the root now makes a recursive call for the right subtree.

### Java Implementation

```java
void InOrder(Tree root) {
   if (root == null)
     return;
   InOrder(root.left);
   System.out.print(root.key + " ");
   InOrder(root.right);
}
```

**Time complexity:** O(N), Where N is no of nodes in the tree.  
**Space complexity:** O(1)

## Inorder Traversal Iterative

By this method, we iteratively traverse the trees. In this, we have to use the stack data structure.

-   Create a stack to store the values while traversing to the leftmost child.
-   Create a current node as root.
-   Traverse till current node is not null or we have elements in our stack to process
-   As in order, we need the leftmost child first, so traverse to get the leftmost child in a nested loop.
-   Pop the top element from the stack and print it as it’s the first node we needed and so on.
-   As our curr will be null after returning from the nested loop, make our current to the right of the top element as the left subtree, and the current node of the top element of the stack is processed, and now we have to traverse the right subtree.

### Java Implementation – Iterative Method
```java
void inorder() {
  if (root == null)
    return;
  Stack < Tree > s = new Stack < Tree > ();
  Tree curr = root;
  while (curr != null || s.size() > 0) {
    while (curr != null) {
      curr = curr.left;
    }
    curr = s.pop();
    System.out.print(curr.data + " ");
    curr = curr.right;
  }
}

```

**Time complexity:** O(N), Where N is no of nodes in the tree.  
**Space complexity:** O(N).


**Inorder Traversal in Binary Search Tree:** We can do inorder traversal in the binary search tree and find that the result will always be in the sorted order because of the property of the binary search tree that the left child is always smaller than the root and root will be smaller than the right child.

Considering this BST we can see that the in-order traversal of this tree will be

**In-order – 4 5 6 7 8**

## Frequently Asked Questions

**How do you find the inorder on a traversal?**  
We can find the inorder using recursion or traversing the tree iteratively using a stack.

**Is inorder traversal o(n)?**  
Yes, but n here is the number of nodes in the tree.

**Which tree traversal is most efficient?**  
From Inorder, preorder, and postorder it depends according to your requirement as all the traversals are similar in terms of time complexities. Iterative is more efficient than recursive.

**What is in order traversal used for?**  
It is used to traverse the tree in a given manner and use it according to our requirements and store in other data structures or containers.

