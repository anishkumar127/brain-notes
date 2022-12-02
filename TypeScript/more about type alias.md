
```ts
type ID = number;

  

const userId :ID = 123;

  

console.log(userId);
```

**output**
>123

there type ID is the type of number.
:ID is type of number can assign into the userID 
if we try to assign anything else instead of number it will throw the error.



# | or in typescript

```ts
type ID = number | string;

  

const userId :ID = '123';

  

console.log(userId);

console.log(typeof(userId))
```

- **|** this is **Union** type   there userID can be number or string both.
so over there output will be.
![](https://i.imgur.com/OFV8QXU.png)

**as a String type.**


# Difference between type and Interface



1. #type not support duplicate but [[Interfaces]] support duplicate and merge them.
2. #type use for premitive and interfaces use for objects.

ex.   

    type SanitizedString = string;

    type Numbers = number;
 - its primitive so we are using type. for object we will use [[Interfaces]] ;

