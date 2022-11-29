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



