# With ParseInt
1010

how to do. ->   digit  *  with 2  and then right to left increase order digit

1 * 2^3       0  * 2 ^ 2        1 * 2 ^ 1  0 * 2 ^ 0


```java
function binToDec(bin){
  return parseInt(bin,2);
}

console.log(binToDec("1010"));
```

output : - 10

# Without Parse Int

we need to reverse. easy to give power first time 0 then 1 then 2.

