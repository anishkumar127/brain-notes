
# With To  String Method

```java
function decToBin(dec){
  let bin = (dec >>> 0).toString(2); // >>> fill up with 0 right side.
  return bin;
}

console.log(decToBin(13));

```

Output:

1101


# Without To String Method


we will use math.floor it will do round of below. and math.ciel do up level round up.

and we will use bin string because we need to concat overtimes.

```java

function decToBin(dec){
 var bin = "";
 while(dec>0){
   bin = (dec % 2) +bin;
   dec =  Math.floor(dec/2);
 }
 return bin;
}

console.log(decToBin(13));
```


bin need to add after dec  % 2

