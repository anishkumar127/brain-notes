
```java
//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String s = br.readLine().trim();
            Solution ob = new Solution();
            List<String> ans = ob.AllPossibleStrings(s);
            for(String i: ans)
                System.out.print(i + " ");
            System.out.println();
            
        }
    }
}

// } Driver Code Ends


//User function Template for Java

class Solution
{
    public List<String> AllPossibleStrings(String s)
    {
        // Code here
        ArrayList<String> ans = new ArrayList<>();
       subsets(s,"",0,ans);
       Collections.sort(ans);
       return ans;
    }
    private void subsets(String s , String val, int idx , ArrayList<String> ans){
        if(idx == s.length()){
            if(val!=""){
            ans.add(val);
            }
            return ;
        }
        subsets(s,val+s.charAt(idx),idx+1,ans);
        subsets(s,val,idx+1,ans);
    }
}
```



# Another


```java
public List<String> AllPossibleStrings(String str1){
        List<String>list=new ArrayList<>();
        String st="";
        betterString(str1, st, list);
        Collections.sort(list);
        return list;
    }
    public static void betterString(String str1,String st, List<String>list) {
        if(str1.length()==0){
            if(st.length()>0){list.add(st);}
            return;}
        betterString(str1.substring(1), st+str1.charAt(0),list);
        betterString(str1.substring(1),st,list);
    }
```
```java
class Solution

{

    public List<String> AllPossibleStrings(String s)

    {

        String out="";

        List<String> ans=new ArrayList<String>();

        solve(s,out,ans);

        ans.remove("");

    Collections.sort(ans);

    return ans;

    }

    // helper function

    public static void solve(String input ,String output,List<String> ans){

       // base case

        if(input.length()==0){

        ans.add(output);

        return;}

        String out1=output;

        String out2=output;

        out2+=input.charAt(0);

        input=input.substring(1);

        solve( input,out1,ans);

        solve( input,out2,ans);

    }

}
```





Given a string S, Find all the possible subsequences of the String in lexicographically-sorted order.

**Example 1:**

**Input :** str = "abc"
**Output:** a ab abc ac b bc c
**Explanation :** There are 7 subsequences that 
can be formed from abc.

**Example 2:**

**Input:** str = "aa"
**Output:** a a aa
**Explanation :** There are 3 subsequences that 
can be formed from aa.

**Your Task:**  
You don't need to read input or print anything. Your task is to complete the function **AllPossibleStrings()** which takes S as the input parameter and returns a list of all possible subsequences (non-empty) that can be formed from S in lexicographically-sorted order.

**Expected Time Complexity:** O(2n) where n is the length of the String  
**Expected Space Complexity:** O(n * 2n)  
 

**Constraints:**   
1 <= Length of String <= 16