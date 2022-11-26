[Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/description/)

[Balanced Binary Tree](https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1)

[Balanced Binary Tree](https://www.interviewbit.com/problems/balanced-binary-tree/)



A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

**Balance BT** --> for every node,  height (left)  - height(right) <=1;

![](https://i.imgur.com/Sk8XaRF.png)

**Solution 1:** **Naive approach**

**Intuition + Approach:** 

For a Balanced Binary Tree, Check left subtree height and right subtree height for every node present in the tree. Hence, traverse the tree recursively and [calculate the height of left and right subtree](https://takeuforward.org/data-structure/maximum-depth-of-a-binary-tree/ "https://takeuforward.org/data-structure/maximum-depth-of-a-binary-tree/") from every node, and whenever the condition of Balanced tree violates, simply return false.

Condition for Balanced Binary Tree

**For all Nodes , Absolute( Left Subtree Height – Right Subtree Height ) <= 1**
its brute force.
**Time Complexity: O(N*N)** ( For every node, Height Function is called which takes O(N) Time. Hence for every node it becomes N*N ) 

**Space Complexity: O(1)** ( Extra Space ) **+ O(H)** ( Recursive Stack Space where **“H”** is the height of tree )



anyone return -1 then return false.

in this question difference between left tree or right tree height difference should not be greater then one if it is then its not balance height binary tree.


```java
/**

 * Definition for a binary tree node.

 * public class TreeNode {

 *     int val;

 *     TreeNode left;

 *     TreeNode right;

 *     TreeNode() {}

 *     TreeNode(int val) { this.val = val; }

 *     TreeNode(int val, TreeNode left, TreeNode right) {

 *         this.val = val;

 *         this.left = left;

 *         this.right = right;

 *     }

 * }

 */

class Solution {

    public boolean isBalanced(TreeNode root) {

        if(root==null) return true;

        int getResult = isCheck(root);

        if(getResult!=-1) return true;

        else return false;

    }

    private int isCheck(TreeNode root){

        if(root==null) return 0;

        int lh = isCheck(root.left);

        int rh = isCheck(root.right);

        if(lh==-1 || rh==-1) return -1;

        if(Math.abs(lh-rh)>1) return -1;

        return Math.max(lh,rh)+1;

    }

}
```


```java
/**

 * Definition for a binary tree node.

 * public class TreeNode {

 *     int val;

 *     TreeNode left;

 *     TreeNode right;

 *     TreeNode() {}

 *     TreeNode(int val) { this.val = val; }

 *     TreeNode(int val, TreeNode left, TreeNode right) {

 *         this.val = val;

 *         this.left = left;

 *         this.right = right;

 *     }

 * }

 */

class Solution {

    public boolean isBalanced(TreeNode root) {

        return isCheck(root) !=-1;

    }

    private int isCheck(TreeNode root){

        if(root==null) return 0;

        int lh = isCheck(root.left);

        if(lh==-1) return -1;

        int rh = isCheck(root.right);

        if(rh==-1) return -1;

        if(Math.abs(lh-rh)>1) return -1;

        return Math.max(lh,rh)+1;

    }

}
```

```java
//{ Driver Code Starts
//Initial Template for Java

import java.util.LinkedList; 
import java.util.Queue; 
import java.io.*;
import java.util.*;

class Node{
    int data;
    Node left;
    Node right;
    Node(int data){
        this.data = data;
        left=null;
        right=null;
    }
}

class GfG {
    
    static Node buildTree(String str){
        
        if(str.length()==0 || str.charAt(0)=='N'){
            return null;
        }
        
        String ip[] = str.split(" ");
        // Create the root of the tree
        Node root = new Node(Integer.parseInt(ip[0]));
        // Push the root to the queue
        
        Queue<Node> queue = new LinkedList<>(); 
        
        queue.add(root);
        // Starting from the second element
        
        int i = 1;
        while(queue.size()>0 && i < ip.length) {
            
            // Get and remove the front of the queue
            Node currNode = queue.peek();
            queue.remove();
                
            // Get the current node's value from the string
            String currVal = ip[i];
                
            // If the left child is not null
            if(!currVal.equals("N")) {
                    
                // Create the left child for the current node
                currNode.left = new Node(Integer.parseInt(currVal));
                // Push it to the queue
                queue.add(currNode.left);
            }
                
            // For the right child
            i++;
            if(i >= ip.length)
                break;
                
            currVal = ip[i];
                
            // If the right child is not null
            if(!currVal.equals("N")) {
                    
                // Create the right child for the current node
                currNode.right = new Node(Integer.parseInt(currVal));
                    
                // Push it to the queue
                queue.add(currNode.right);
            }
            i++;
        }
        
        return root;
    }
    static void printInorder(Node root)
    {
        if(root == null)
            return;
            
        printInorder(root.left);
        System.out.print(root.data+" ");
        
        printInorder(root.right);
    }
    
	public static void main (String[] args) throws IOException{
	        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	        
	        int t=Integer.parseInt(br.readLine());
    
	        while(t > 0){
	            String s = br.readLine();
    	    	Node root = buildTree(s);
        	    Tree g = new Tree();
			
			    if(g.isBalanced(root) == true)
    			    System.out.println(1);
    			else 
    			    System.out.println(0);
                t--;
            
        }
    }
  
}


// } Driver Code Ends


//User function Template for Java


/* A binary tree node class
class Node
{
	int data;
	Node left,right;
	
	Node(int d)
	{
		data = d;
		left = right = null;		
	}
} */

class Tree
{
    
    //Function to check whether a binary tree is balanced or not.
    boolean isBalanced(Node root)
    {
	// Your code here
	return isCheck(root) !=-1;
    }
    private int isCheck(Node root){
        if(root==null) return 0;
        int leftHeight = isCheck(root.left);
        if(leftHeight==-1) return -1;
        int rightHeight = isCheck(root.right);
        if(rightHeight==-1) return -1;
        if(Math.abs(leftHeight-rightHeight)>1) return -1;
        return Math.max(leftHeight,rightHeight)+1;
    }
}


```


```java
/**

 * Definition for binary tree

 * class TreeNode {

 *     int val;

 *     TreeNode left;

 *     TreeNode right;

 *     TreeNode(int x) {

 *      val = x;

 *      left=null;

 *      right=null;

 *     }

 * }

 */

public class Solution {

    public int isBalanced(TreeNode root) {

          return isCheck(root) !=-1?1:0;

    }

    private int isCheck(TreeNode root){

        if(root==null) return 0;

        int lh = isCheck(root.left);

        if(lh==-1) return -1;

        int rh = isCheck(root.right);

        if(rh==-1) return -1;

        if(Math.abs(lh-rh)>1) return -1;

        return Math.max(lh,rh)+1;

    }

}
```


**Solution 2: Post Order Traversal**

**Intuition:** Can we optimize the above brute force solution? Which operation do you think can be skipped to optimize the time complexity?

Ain’t we traversing the subtrees again and again in the above example?

Yes, so can we skip the repeated traversals?

What if we can make use of post-order traversal?

So, the idea is to use post-order traversal. Since, in postorder traversal, we first traverse the left and right subtrees and then visit the parent node, similarly instead of calculating the height of the left subtree and right subtree every time at the root node, use post-order traversal, and keep calculating the heights of the left and right subtrees and perform the validation.

**Approach :** 

-   Start traversing the tree recursively and do work in Post Order.
-   For each call, caculate the height of the root node, and return it to previous calls.  
-   Simultaneously, in the Post Order of every node , Check for condition of balance as information of left and right subtree height is available.
-   If it is balanced , simply return height of current node and if not then return -1.
-   Whenever the subtree result is -1 , simply keep on returning -1.

![](https://i.imgur.com/xSMbsQk.png)


**Time Complexity:** O(N) 

**Space Complexity:** O(1) Extra Space + O(H) Recursion Stack space (Where “H”  is the height of binary tree)





**other way**


```java
// Checking if a binary tree is height balanced in Java

// Node creation
class Node {

  int data;
  Node left, right;

  Node(int d) {
    data = d;
    left = right = null;
  }
}

// Calculate height
class Height {
  int height = 0;
}

class BinaryTree {

  Node root;

  // Check height balance
  boolean checkHeightBalance(Node root, Height height) {

    // Check for emptiness
    if (root == null) {
      height.height = 0;
      return true;
    }

    Height leftHeighteight = new Height(), rightHeighteight = new Height();
    boolean l = checkHeightBalance(root.left, leftHeighteight);
    boolean r = checkHeightBalance(root.right, rightHeighteight);
    int leftHeight = leftHeighteight.height, rightHeight = rightHeighteight.height;

    height.height = (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;

    if ((leftHeight - rightHeight >= 2) || (rightHeight - leftHeight >= 2))
      return false;

    else
      return l && r;
  }

  public static void main(String args[]) {
    Height height = new Height();

    BinaryTree tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);

    if (tree.checkHeightBalance(tree.root, height))
      System.out.println("The tree is balanced");
    else
      System.out.println("The tree is not balanced");
  }
}
```




**brute force solution below**

```java
/* Java program to determine if binary tree is
height balanced or not */

/* A binary tree node has data, pointer to left child,
and a pointer to right child */
class Node {
	int data;
	Node left, right;
	Node(int d)
	{
		data = d;
		left = right = null;
	}
}

class BinaryTree {
	Node root;

	/* Returns true if binary tree with root as root is
	* height-balanced */
	boolean isBalanced(Node node)
	{
		int lh; /* for height of left subtree */

		int rh; /* for height of right subtree */

		/* If tree is empty then return true */
		if (node == null)
			return true;

		/* Get the height of left and right sub trees */
		lh = height(node.left);
		rh = height(node.right);

		if (Math.abs(lh - rh) <= 1 && isBalanced(node.left)
			&& isBalanced(node.right))
			return true;

		/* If we reach here then tree is not height-balanced
		*/
		return false;
	}

	/* UTILITY FUNCTIONS TO TEST isBalanced() FUNCTION */
	/* The function Compute the "height" of a tree. Height
	is the number of nodes along the longest path from
	the root node down to the farthest leaf node.*/
	int height(Node node)
	{
		/* base case tree is empty */
		if (node == null)
			return 0;

		/* If tree is not empty then height = 1 + max of
		left height and right heights */
		return 1
			+ Math.max(height(node.left),
					height(node.right));
	}

	public static void main(String args[])
	{
		BinaryTree tree = new BinaryTree();
		tree.root = new Node(1);
		tree.root.left = new Node(2);
		tree.root.right = new Node(3);
		tree.root.left.left = new Node(4);
		tree.root.left.right = new Node(5);
		tree.root.left.left.left = new Node(8);

		if (tree.isBalanced(tree.root))
			System.out.println("Tree is balanced");
		else
			System.out.println("Tree is not balanced");
	}
}


```


## Applications of Height-Balanced Binary Tree:

-   Balanced trees are mostly used for in-memory sorts of sets and dictionaries.
-   Balanced trees are also used extensively in database applications in which insertions and deletions are fewer but there are frequent lookups for data required.
-   It is used in applications that require improved searching apart from database applications.
-   It has applications in storyline games as well.
-   It is used mainly in corporate sectors where they have to keep the information about the employees working there and their change in shifts.

## Advantages of Height-Balanced Binary Tree:

-   It will improve the worst-case lookup time at the expense of making a typical case roughly one lookup less.
-   As a general rule, a height-balanced tree would work better when the request frequencies across the data set are more evenly spread,  
-   It gives better search time complexity.

## Disadvantages of Height-Balanced Binary Tree:

-   Longer running times for the insert and remove operations.
-   Must keep balancing info in each node.
-   To find nodes to balance, must go back up in the tree.

## How to check if a given tree is height-balanced: 

You can check if a tree is height-balanced using [**recursion**](http://www.geeksforgeeks.org/recursion/) based on the idea that every subtree of the tree will also be height-balanced. To check if a tree is height-balanced perform the following operations:

-   Use recursion and visit the left subtree and right subtree of each node:
    -   Check the height of the left subtree and right subtree.
    -   If the absolute difference between their heights is at most 1 then that node is height-balanced.
    -   Otherwise, that node and the whole tree is not balanced.


