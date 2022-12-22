[GFG](https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1)



```java
//{ Driver Code Starts
import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
	public static void main(String[] args) throws IOException
	{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while(t-->0)
        {
            String S = br.readLine().trim();
            Solution obj = new Solution();
            List<String> ans = obj.find_permutation(S);
            for( int i = 0; i < ans.size(); i++)
            {
                System.out.print(ans.get(i)+" ");
            }
            System.out.println();
                        
        }
	}
}


// } Driver Code Ends


class Solution {
    public List<String> find_permutation(String S) {
        // Code here
        ArrayList<String> ans = new ArrayList<>();
        allPermutation(S,"",ans);
        // HashSet<String> set = new HashSet<>(ans);
        TreeSet<String> set = new TreeSet<>(ans);
        ans.clear();
        ans.addAll(set);
        // Collections.sort(ans);
        return ans;
    }
    private void allPermutation(String s, String helpString, ArrayList<String>ans){
        if(s.length()==0){
            ans.add(helpString);
            return;
        }
        for(int i=0; i<s.length(); i++){
            char curr = s.charAt(i);
            String newStr = s.substring(0,i) + s.substring(i+1);
            allPermutation(newStr,helpString+curr,ans);
        }
    }
}
```

```java
//{ Driver Code Starts
import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
	public static void main(String[] args) throws IOException
	{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while(t-->0)
        {
            String S = br.readLine().trim();
            Solution obj = new Solution();
            List<String> ans = obj.find_permutation(S);
            for( int i = 0; i < ans.size(); i++)
            {
                System.out.print(ans.get(i)+" ");
            }
            System.out.println();
                        
        }
	}
}


// } Driver Code Ends


class Solution {
    public List<String> find_permutation(String S) {
        // Code here
        ArrayList<String> ans = new ArrayList<>();
        allPermutation(S,"",ans);
        HashSet<String> set = new HashSet<>(ans);
        ans.clear();
        ans.addAll(set);
        Collections.sort(ans);
        return ans;
    }
    private void allPermutation(String s, String helpString, ArrayList<String>ans){
        if(s.length()==0){
            ans.add(helpString);
            return;
        }
        for(int i=0; i<s.length(); i++){
            char curr = s.charAt(i);
            String newStr = s.substring(0,i) + s.substring(i+1);
            allPermutation(newStr,helpString+curr,ans);
        }
    }
}
```


if n then n factorial permutations.
Tc O(n * n!);

diagrams.

![](https://i.imgur.com/fjirhxW.png)


![](https://i.imgur.com/NYK1cPQ.png)
![](https://i.imgur.com/m1cX2F0.png)


![](https://i.imgur.com/Saafouq.png)
![](https://i.imgur.com/UHurSOF.png)
![](https://i.imgur.com/SKxj82j.png)
![](https://i.imgur.com/vRTuHRz.png)
![](https://i.imgur.com/rIUyzXh.png)
![](https://i.imgur.com/0wQvYQ8.png)
