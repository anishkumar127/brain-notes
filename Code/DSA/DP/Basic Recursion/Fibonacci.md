```java
package DP.Basic_Recursion;  
  
public class Febo {  
    public static void main(String[] args) {  
        int n = 5;  
        System.out.println(febo(n));  
  
    }  
    private static int febo(int n){  
        if(n==0 || n==1) return n;  
        System.out.println(n);  
        return febo(n-1)+febo(n-2);  
    }  
}
```

Fibonacci 6. output -8.

and repetitions 2 in Fibonacci 6. is 5.
and 3 repetitions 3 times in Fibonacci 6.

![](https://i.imgur.com/QaySvdZ.png)


![](https://i.imgur.com/3UkOagE.png)




![](https://i.imgur.com/EkfG58n.png)




above image we can se repetitions.

so we can use storage to avoid repetitions.


```java
package DP.Basic_Recursion;  
  
public class Febo {  
    public static void main(String[] args) {  
        int n = 6;  
        int f[] = new int[n+1];  
        System.out.println(febo(n,f));  
    }  
    private static int febo(int n,int[] f){  
        if(n==0 || n==1) return n;  
        if(f[n]!=0){ // already calculate or visited.  
            return f[n];  
        }  
        f[n] = febo(n-1,f)+febo(n-2,f); // store  
        return f[n]; // store above and then return.  
    }  
}
```

above code what we are doing. we just storing the call or calculated or visited.

1. first we are creating a array of size n+1;
2. then we are calling febo function. if n==0  || n==1 then we are just return n;
3. if array n is not equal 0 that's means we already storage something. so we just return it that array.
4. if not storage then we call our call and calculate or do something what we want to do and then storage into array and then return it that array.
![](https://i.imgur.com/woqJo8B.png)


![](https://i.imgur.com/WS52BGB.png)


its called DP and storing called memorization


