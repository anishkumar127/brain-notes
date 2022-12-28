
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
      String s = "abc";
      findSubset(s,"",0);
  }
  private static void findSubset(String s , String ans, int idx){
    
    if(idx==s.length()){
      if(ans.length()==0){
        System.out.println("null");
      }else System.out.println(ans);
      
      return;
    }
    
    //  Yes 
    findSubset(s,ans+s.charAt(idx), idx+1);
    
    // No 
    findSubset(s,ans,idx+1);
  }
}
```

Output:

abc
ab
ac
a
bc
b
c
null

Time Complexit  -  O(n * 2^n)
Sc - O(n);

![](https://i.imgur.com/2kK4wel.png)


![](https://i.imgur.com/l0RAUGp.png)



//////////////////

diagrams.
![](https://i.imgur.com/5UvEI9x.png)
choices 
![](https://i.imgur.com/XzYHvNg.png)


![](https://i.imgur.com/Hb5Xrjw.png)
![](https://i.imgur.com/l0l4nD4.png)


![](https://i.imgur.com/6mAwmTt.png)
![](https://i.imgur.com/BQOW8Kt.png)
![](https://i.imgur.com/HVGLhpk.png)
![](https://i.imgur.com/4gVJ3NB.png)


![](https://i.imgur.com/7scSWqS.png)


![](https://i.imgur.com/IqHJ6yl.png)
![](https://i.imgur.com/4x6yzfc.png)
