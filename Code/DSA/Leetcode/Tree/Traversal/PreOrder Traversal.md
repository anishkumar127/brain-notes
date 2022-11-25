
[144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

its stack so we will push first right child and then left child.
because stack LIFO case.
we have to push right first and then left so that we can pop left child first.


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

    public List<Integer> preorderTraversal(TreeNode root) {

        List<Integer> ans = new ArrayList<>();

        if(root==null) return ans;

  

        Stack<TreeNode> helper_Stack = new Stack<>();

        helper_Stack.push(root);

        while(!helper_Stack.isEmpty()){

            root = helper_Stack.pop();

            ans.add(root.val);

            if(root.right!=null) helper_Stack.push(root.right);

            if(root.left!=null) helper_Stack.push(root.left);

        }

  
  

        return ans;

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

    public List<Integer> preorderTraversal(TreeNode root) {

        ArrayList<Integer> ans = new ArrayList<>();

        Stack<TreeNode> st= new Stack<>();

        if(root==null) return ans;

        st.push(root);

        while(!st.isEmpty()){

            TreeNode curr = st.pop();

            ans.add(curr.val);

            if(curr.right!=null) st.push(curr.right);

            if(curr.left!=null) st.push(curr.left);

        }

        return ans;

    }

}
```

