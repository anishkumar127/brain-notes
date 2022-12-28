```java
import java.io.*;
import java.util.*;
public class Main {
  
  public static void solution(String s) {
    for(int i=0; i<s.length(); i++){
             System.out.print(s.charAt(i));
            if(i+1 != s.length() && s.charAt(i+1)>='A' && s.charAt(i+1)<='Z'){
                System.out.println();
            }
        }
  }

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    String str = scn.next();
    solution(str);
  }
}
```

# Inverse Camel Case

One of the important aspect of object oriented programming is readability of the code. To enhance the readability of code, developers write function and variable names in Camel Case.

You are given a string `S`, written in Camel Case. Find All The Words Contained In It.

**Note** Complete the given function. The input would be handled by the driver code. You only have to print the answer.

### Input Format

The only line contains the string `S`.

### Output Format

Print each word in a new line

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

**Explanation**

We separate each word and print them in a new line.

### Example 2

**Input**

```
OnePiece
```

**Output**

```
One
Piece
```

**Explanation**

We separate each word and print them in a new line.

### Constraints

1 <= |str| <= 10000