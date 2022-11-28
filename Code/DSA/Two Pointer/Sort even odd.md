
- there we are not following any sorting order like sort by numbering 1 2 3 like that. we are just sorting according to the even odd.

# brute force

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
int[] arr = {1,2,3,4,5,6,7};

int[] x = new int[arr.length];
int idx =0;
for(int i=0; i<arr.length; i++){
  if(arr[i]%2==0){
    x[idx++]= arr[i];
  }
}

for(int i=0; i<arr.length; i++){
  if(arr[i]%2!=0) x[idx++]= arr[i];
}


System.out.println(Arrays.toString(x));
  }
}
```



# two pointer 

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
int[] arr = {1,2,3,4,5,6,7};
int s = 0;
int e = arr.length-1;

while(s<e){
if(arr[s]%2==0 && arr[e]%2!=0) {
  s++;
  e--;
}
if(arr[s]%2!=0 && arr[e]%2!=0){
  e--;
}
if(arr[s]%2!=0 && arr[e]%2==0){
  // swap
  int temp = arr[e];
  arr[e] = arr[s];
  arr[s] = temp;
  s++;
  e--;
}
}

System.out.println(Arrays.toString(arr));
  }
}
```



```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
int[] arr = {1,2,3,4,5,6,7};
int s = 0;
int e = arr.length-1;

while(s<e){
if(arr[s]%2==1 && arr[e]%2==0){
  // swap
  int temp = arr[e];
  arr[e] = arr[s];
  arr[s] = temp;
  s++;
  e--;
}
if(arr[s]%2==0) s++;
if(arr[e]%2==1) e--;
}

System.out.println(Arrays.toString(arr));
  }
}

```

