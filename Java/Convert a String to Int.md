This method is used to get the primitive data type of a certain String. parseXxx() is a static method and can have one argument or two.


## Syntax

Following are all the variants of this method −

static int parseInt(String s)
static int parseInt(String s, int radix)

## Parameters

Here is the detail of parameters −

-   **s** − This is a string representation of decimal.
    
-   **radix** − This would be used to convert String s into integer.
    

## Return Value

-   **parseInt(String s)** − This returns an integer (decimal only).
    
-   **parseInt(int i)** − This returns an integer, given a string representation of decimal, binary, octal, or hexadecimal (radix equals 10, 2, 8, or 16 respectively) numbers as input.

```java
public class Test { 

   public static void main(String args[]) {
      int x =Integer.parseInt("9");
      double c = Double.parseDouble("5");
      int b = Integer.parseInt("444",16);

      System.out.println(x);
      System.out.println(c);
      System.out.println(b);
   }
}
```

## Output

``9
5.0
1092``


```java
// Java program to demonstrate working parseInt()
// Where No NumberFormatException is Thrown

// Main class
public class GFG {

	// Main driver method
	public static void main(String args[])
	{
		// Custom wide-varied inputs to illustrate
		// usage of valueOf() method
		int decimalExample = Integer.parseInt("20");
		int signedPositiveExample = Integer.parseInt("+20");
		int signedNegativeExample = Integer.parseInt("-20");
		int radixExample = Integer.parseInt("20", 16);
		int stringExample = Integer.parseInt("geeks", 29);

		// Print commands on console
		System.out.println(decimalExample);
		System.out.println(signedPositiveExample);
		System.out.println(signedNegativeExample);
		System.out.println(radixExample);
		System.out.println(stringExample);
	}
}

```

**Output**

20
20
-20
32
11670324


# parseInt vs valueOf

1.  **parseLong():** parses the string to Long
2.  **parseDouble():** parses the string to Double  
    If we want to convert the string to integer **without using parseInt()**, we can use _**valueOf()** method_. It also has two variants similar to parseInt()
3.  **Difference between parseInt() and valueOf():** parseInt() parses the string and returns the primitive integer type. However, valueOf() returns an Integer object.

> **Note:** valueOf() uses parseInt() internally to convert to integer.


```java
// Java Program to Demonstrate Working of valueOf() Method

// Main class
public class GFG {

	// Main driver method
	public static void main(String args[])
	{
		// Custom wide-varied inputs to illustrate
		// usage of valueOf() method
		int decimalExample = Integer.valueOf("20");
		int signedPositiveExample = Integer.valueOf("+20");
		int signedNegativeExample = Integer.valueOf("-20");
		int radixExample = Integer.valueOf("20", 16);
		int stringExample = Integer.valueOf("geeks", 29);

		// Print statements
		System.out.println(decimalExample);
		System.out.println(signedPositiveExample);
		System.out.println(signedNegativeExample);
		System.out.println(radixExample);
		System.out.println(stringExample);
	}
}

```

**Output**

20
20
-20
32
11670324


## Conclusion

-   The method parseInt() belongs to the Integer class which is under **java.lang package**. It is used to parse the string value as a signed decimal value.
-   Following are how the parseInt() method can be declared in java :
    -   public static int parseInt (String s).
    -   public static int parseInt (String s, int radix).
    -   public static int parseInt (CharSequence s, int startIndex, int endIndex, int radix).
-   It is used in java for converting a string value to an integer by using the method parseInt().
-   The parseInt() method throws three exceptions: NullPointerException, IndexOutOfBoundsException, NumberFormatException when the input arguments are not according to the conventions.




# Integer to Binary String

#method


- to convert integer to binary string we will use method toBinaryString(argument);
>Integer.toBinaryString(variable_name);




# Remove Leading Zero
- after reverse method. in String Builder
#method 

``while(sb.charAt(sb.length()-1)=='0') sb.setLength(sb.length()-1);``

