
## Problem Statement

Given a binary tree, the task is to print the level order traversal line by line of the tree

Level Order Traversal is the algorithm to process all nodes of a tree by traversing through depth, first the root, then the child of the root, etc.

## Recursive Approach

There are basically two functions in this approach. One of them is used to print all nodes at a particular level (CurrentLevel), and another is used to print level order traversal of the tree (Levelorder).

-   In the CurrentLevel function, we find the height of the tree and call the LevelOrder function for every level between 1 to height.
-   In the LevelOrder function we pass two parameters level and root. we follow the below steps:
    -   First check if root is null then return.
    -   Check if level is equal to 1 then print the current root value.
    -   Now, call recursively call both the children of the current root with decrementing the value of level by 1.

```java
// Recursive Java program for level
// order traversal of Binary Tree

/* Class containing left and right child of current
node and key value*/
class Node {
	int data;
	Node left, right;
	public Node(int item)
	{
		data = item;
		left = right = null;
	}
}

class Main {
	Node root;

	public Main() { root = null; }

	void LevelOrder()
	{
        int h = height(root);
        int i;
        for (i=1; i<=h; i++)
            CurrentLevel(root, i);
	}
	int height(Node root) {
    	if (root == null)
        	  return 0; 
    	else {
       		int lheight = height(root.left);
       		int rheight = height(root.right);
       		if (lheight > rheight)
            	return(lheight+1);
       		else return(rheight+1);
    	}
	}
	void CurrentLevel (Node root ,int level) {
     	if (root == null){
        	    return;
		}
     	if (level == 1){
        	  System.out.print(root.data + " ");
		}
     	else if (level > 1) {
        	CurrentLevel(root.left, level-1);
        	CurrentLevel(root.right, level-1);
     	 }
	}
	public static void main(String args[])
	{
		Main tree = new Main();
		tree.root = new Node(1);
		tree.root.left = new Node(2);
		tree.root.right = new Node(3);
		tree.root.left.left = new Node(4);
		tree.root.left.right = new Node(5);

		tree.LevelOrder();

	}
}
```


**Time complexity:** For a skewed tree, time complexity will be O(n^2).  
**Space complexity:** For a skewed tree space complexity will be O(n) and for a Balanced tree, the call stack uses O(log n) space, (i.e., the height of the balanced tree).

## Level Order Traversal Using Queue

Firstly we insert the root into the queue and iterate over the queue until the queue is empty.  
In every iteration, we will pop from the top of the queue and print the value at the top of the queue.  
Then, add its left and right nodes to the end of the queue.




```java
// Iterative Queue based Java program
// to do level order traversal
// of Binary Tree

/* importing the inbuilt java classes
required for the program */
import java.util.LinkedList;
import java.util.Queue;

/* Class to represent Tree node */
class Node {
	int data;
	Node left, right;

	public Node(int item)
	{
		data = item;
		left = null;
		right = null;
	}
}
class Main {

	Node root;

	void printLevelOrder()
	{
		Queue<Node> queue = new LinkedList<Node>();
		queue.add(root);
		while (!queue.isEmpty()) {

			Node tempNode = queue.poll();
			System.out.print(tempNode.data + " ");
			if (tempNode.left != null) {
				queue.add(tempNode.left);
			}
			if (tempNode.right != null) {
				queue.add(tempNode.right);
			}
		}
	}

	public static void main(String args[])
	{
		Main tree_level = new Main();
		tree_level.root = new Node(1);
		tree_level.root.left = new Node(2);
		tree_level.root.right = new Node(3);
		tree_level.root.left.left = new Node(4);
		tree_level.root.left.right = new Node(5);

		tree_level.printLevelOrder();
	}
}
```



**Time Complexity:** O(N) where n is the number of nodes in the binary tree.  
**Space Complexity:** O(N) where n is the number of nodes in the binary tree.