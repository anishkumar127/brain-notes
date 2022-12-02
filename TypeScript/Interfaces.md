  - its shape of object like alias
  - there will not be = sign  its like we are creating class.
- its also called some languages contract's 

```ts
  

interface Transaction {

  payerAccountNumber: number;

  payeeAccountNUmber:number;

}

  
  

interface BankAccount{

    accountNumber:number;

    accountHolder:string;

    balance:number;

    isActive:boolean;

    transactions:Transaction[]; // it will be array but type of Transaction interface.

}

  

const transaction1:Transaction = {

    payerAccountNumber:123,

    payeeAccountNUmber:444,

}

const transaction2:Transaction = {

    payerAccountNumber:123,

    payeeAccountNUmber:443,

}

const bankAccount : BankAccount={

    accountNumber:1234,

    accountHolder:"anish kumar",

    balance:5000,

    isActive:true,

    transactions:[transaction1,transaction2]

}
```







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

so features in **typescript** is if we have more then 1 same name #interface then it will **merged**.

