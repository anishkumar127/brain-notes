```java
import java.util.*;

class Accio {
    public void printPermutations(String S) {
         ArrayList<String> ans = new ArrayList<>();
        allPermutation(S,"",ans);
        HashSet<String> set = new HashSet<>(ans);
        ans.clear();
        ans.addAll(set);
        Collections.sort(ans);
        for(String val:ans){
			System.out.println(val);
		}
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

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        Accio Obj = new Accio();
        Obj.printPermutations(str);
    }
}
```

# Permutation Printing

You are given a string `str`. Your task is to calculate and print all the distinct permutations of the given string `str` in lexicographically sorted order.

Note: Lexicographical order is a generalization of the alphabetical order of the dictionaries to sequences of ordered symbols

### Input Format

The first line contains the string `str` which consists of the only lowercase alphabet

### Output Format

Print all the distinct permutations of `str` in the lexicographically sorted order in the form of the string, with each permutation in the new line

### Example 1

**Input**

```
bac
```

**Output**

```
abc
acb
bac
bca
cab
cba
```

**Explanation**

abc has 6 possible permutations and those are abc,acb,bac,bca,cab, and cba.

### Example 2

**Input**

```
aa
```

**Output**

```
aa
```

**Explanation**

aa has 2 possible permutations and those are "aa" and "aa" both are the same so we print only one "aa"

### Constraints

1 <= `str.size` <= 7