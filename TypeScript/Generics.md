Generics
	code reuse or avoid duplication.


```typescript
  

    function logString(arg:string){

        console.log(arg);

        return arg;

    }

  

    function logNumber(arg:number){

        console.log(arg);

        return arg;

    }

  

    function logArray(arg:any[]){

        console.log(arg);

        return arg;

    }

  

    logString('logged in')

    logNumber(4);

  
  
  

logArray([4,3]);
```


above code repeation.



- one thing we can use **any** 
```ts
  function logAnything(arg:any){

        console.log(arg);

        return arg;

    }
```

but we have to avoid this because we are using typescript for our type system strong but after using **any** means we are ignoring type system.



## Generics

![](https://i.imgur.com/aJP1xa7.png)


so its automatic putting whatever type we are putting inside logAnything function. its become that type.


![](https://i.imgur.com/noUQRMM.png)






- another example


![](https://i.imgur.com/AYCRPdz.png)


we are getting only age property not getting name.
age getting because HasAge have age. but not have name.


so this we can solve using **as** (**Assertion**)  but its not good things. but we can do it.

![](https://i.imgur.com/2tSb8wJ.png)


because we are doing forcly.

now comes generics for avoid this type issues.


```typescript
  

    interface HasAge{

        age:number;

    }

  

    function getOldest<T extends HasAge>(people:T[]):T{

        return people.sort((a,b)=> b.age-a.age)[0];

    }

  

    const people:HasAge[] = [{age:50},{age:10},{age:40}];

    interface Player{

        name:string;

        age:number;

    }

    const players:Player[] = [{name:'John',age:30},{name:'Jane',age:35},{name:'Joe',age:60},]

  

   const person =  getOldest(people);

  

   console.log(person.age);
```

output -> 50.

![](https://i.imgur.com/XdjlCbR.png)


