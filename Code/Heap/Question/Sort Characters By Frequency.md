
```java
import java.util.*;

class Solution {
    public String frequencySort(String s) {

        HashMap<Character, Integer> elFreq = new HashMap<>();

        for (char n : s.toCharArray()) {
            elFreq.put(n, elFreq.getOrDefault(n, 0) + 1);
        }

        PriorityQueue<Character> pq = new PriorityQueue<>((n1, n2) -> elFreq.get(n1) - elFreq.get(n2));

        for (Character n : elFreq.keySet()) {
            pq.add(n);
        }

        String result = "";
        while (!pq.isEmpty()) {
            Character c = pq.poll();
            int count = elFreq.get(c);
            while (count-- > 0) {
                result = c + result;
            }
        }

        return result;

    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        Solution Obj = new Solution();
        String result = Obj.frequencySort(s);
        System.out.println(result);
        sc.close();
    }
}
```


Given a string `s`, sort it in **decreasing order** based on the **frequency** of the characters. The **frequency** of a character is the number of times it appears in the string.

Return the _sorted_ string. If there are multiple answers, return **lexicographically largest** of them.

### Input Format

Input consists of a single line that has the string `s`.

### Output Format

Return the _sorted_ string. If there are multiple answers, return **lexicographically largest** of them.

### Example 1

**Input**

```
tree
```

**Output**

```
eetr
```

**Explanation**

'e' appears twice while 'r' and 't' both appear once. So 'e' must appear before both 'r' and 't'. 't' comes before 'r' as we return the lexicographically largest string and 'r'<'t'

### Example 2

**Input**

```
cccaaa
```

**Output**

```
cccaaa
```

**Explanation**

Both 'c' and 'a' appear three times, but 'c' is larger so it comes before 'a' and we return lexicographically larger string.

Note that "cacaca" is incorrect, as the same characters must be together.

### Constraints

`1 <= s.length <= 10^5`

`s` contains lowercase English letters.