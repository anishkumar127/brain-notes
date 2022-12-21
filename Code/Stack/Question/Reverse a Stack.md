[GFG](https://practice.geeksforgeeks.org/problems/reverse-a-stack/1)

# Brute Force

```java
//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;
import java.lang.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
        PrintWriter out=new PrintWriter(System.out);
        
        //taking testcases
        int t = Integer.parseInt(br.readLine()); 
    	for(int i=0;i<t;i++)
    	{
            String str=br.readLine();
    		
    		//input n and d
    	    int n=Integer.parseInt(str);
    		Stack<Integer> stack=new Stack<>();
    		String str1=br.readLine();
    		String[] starr1=str1.split(" ");
    		//inserting elements in the array
    		for(int j=0;j<n;j++)
    		{
    		    stack.push(Integer.parseInt(starr1[j]));
    		}
    		//calling reverse() function
            Solution.reverse(stack);
            for(int j:stack){
                out.print(j+" ");
            }
            out.println();
         }
         out.close();
    }
}
// } Driver Code Ends


//User function Template for Java

class Solution
{ 
    static void reverse(Stack<Integer> s)
    {
        // add your code here
        Stack<Integer> stack = new Stack<>();
        
        for(int val:s){
            stack.push(val);
        }
        int n = s.size();
        int idx =0;
        s.clear();
        for(int i =0; i<n; i++){
          s.push(stack.pop());
        }
    }
}
```

what i did above code. just create new stack. and add the all value. and then previus stack value all clear and add the next stack value inside the previous stack.


# Using Recursion

Time Complexity - O(N^2);



```java
//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;
import java.lang.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
        PrintWriter out=new PrintWriter(System.out);
        
        //taking testcases
        int t = Integer.parseInt(br.readLine()); 
    	for(int i=0;i<t;i++)
    	{
            String str=br.readLine();
    		
    		//input n and d
    	    int n=Integer.parseInt(str);
    		Stack<Integer> stack=new Stack<>();
    		String str1=br.readLine();
    		String[] starr1=str1.split(" ");
    		//inserting elements in the array
    		for(int j=0;j<n;j++)
    		{
    		    stack.push(Integer.parseInt(starr1[j]));
    		}
    		//calling reverse() function
            Solution.reverse(stack);
            for(int j:stack){
                out.print(j+" ");
            }
            out.println();
         }
         out.close();
    }
}
// } Driver Code Ends


//User function Template for Java

class Solution
{ 
    static void insertAtBottom(Stack<Integer> s, int num){
        if(s.size()==0){
            s.push(num);
            return;
        }
        int val = s.pop();
        insertAtBottom(s,num);
        s.push(val);
    }
    static void reverse(Stack<Integer> s)
    {
        if(s.size()==0){
            return ;
        }
        int num = s.pop();
        reverse(s);
        insertAtBottom(s,num);
    }
}
```