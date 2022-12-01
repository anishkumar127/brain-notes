
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



# Interface Extends #extends

```typeScript
  

interface Book{

    name:string;

    price:number;

}

  

interface EBook {

    name:string;

    price:number;

    fileSize:number;

    format:string;

}

  

interface AudioBook {

    name:string;

    price:number;

    fileSize:number;

    format:string;

    duration:number;

}

  

const book:AudioBook={

    name:'Atomic habits',

    price:1200,

    fileSize:400,

    format:"pdf",

    duration:5,

  

}
```


above code issue  is some things repeating or we are creating again and again interfaces.
and some things are commune. so its having duplication


so avoid this issue we can use **extends** features to extends interface.


```typeScript
interface Book{

    name:string;

    price:number;

}

  

interface EBook extends Book{

    fileSize:number;

    format:string;

}

  

interface AudioBook extends EBook {

    duration:number;

}

  

const book:AudioBook={

    name:'Atomic habits',

    price:1200,

    fileSize:400,

    format:"pdf",

    duration:5,

}
```

so above code we **extends** interfaces to avoid duplication.



# Merge Interface #merge

if we use same of more then 1 or 2 interface then it will merge their property.


```ts
  

interface Book{

    name:string;

    price:number;

}

  
  

interface Book{

    size:number;

}

  
  
  
  

const book :Book={

    name:"x",

    price:33,

    size:3,

}
```




![](https://i.imgur.com/jeyIC9z.png)


throwing error because we didn't put any property to the book **object**. but one thing u can notice.

mainly if we do in JavaScript it will **override** but in typescript its **merged**.

so features in **typescript** is if we have more then 1 same name interface then it will **merged**.



