```java
import java.util.*;

public class Main {
    public static void CamelCaseWords(String s) {
        //Write your code here
		for(int i=0; i<s.length(); i++){
             System.out.print(s.charAt(i));
            if(i+1 != s.length() && s.charAt(i+1)>='A' && s.charAt(i+1)<='Z'){
                System.out.println();
            }
        }

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        CamelCaseWords(s);
    }
}
```


Approach 1:

We need to Print all the different words form sentences in new line, so to do this, we make a string word, where we add all the alphabets, each word begins with a Uppercase alphabet. So as soon as we enccounter a uppercase alphabet, we print the string word and reinitialise it as empty string. And then parse the remaining string.

Time Complexity: O(n) Space Complexity: O(n)

Below is the implementation of the above idea:

1.  Java
```
import java.util.*;

public class Main { public static void CamelCaseWords(String s) { StringBuilder word = new StringBuilder();

```
    for(int i = 0; i < s.length(); i++) {
        if('A' <= s.charAt(i) && s.charAt(i) <= 'Z') {
            if(!word.toString().equals(""))
                System.out.println(word);
            word = new StringBuilder();
        }
        word.append(s.charAt(i));
    }
    System.out.println(word);
}
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String s = sc.nextLine();
    CamelCaseWords(s);
}
```

}
```

# Camel Case Words

One of the important aspect of object oriented programming is readability of the code. To enhance the readability of code, developers write function and variable names in Camel Case. You are given a string, `s`, written in Camel Case. Find All The Words Contained In It.

Print each word in a newline in the order as they appear in the original string `s`

### Input Format

First line contains a string `s`

### Output Format

Print each word in a newline

### Example 1

**Input**

```
IAmAJavaProgrammer
```

**Output**

```
I
Am
A
Java
Programmer
```

### Constraints

1 <= s.size() <= 500