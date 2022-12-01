
```typeScript
    type ID = number | string; 

    function printId(id:ID){

        console.log(id);

    }

  
    printId(1);
```

so here we can use ID as a **number** OR **string** both will be supported.

so if we try to access property of String. like **toUpperCase** method .
then it will throw warnning. because there are string in ID but also number so there can be error comes. so that typescript giving the warnning.

![](https://i.imgur.com/LdBkt9D.png)



to avoid this issue we will do some checks.
and is called **Narrowing**

### Narrowing

```typescript
    type ID = number | string;

    function printId(id:ID){

        if(typeof id ==='string'){

            console.log(id.toUpperCase());

        }else{

            console.log(id);

        }

    }

    printId('1');
```


![](https://i.imgur.com/o5jPIGy.png)




# example using slice method


```typescript
  

    function getFirstThree(x:string |  number[]){

        return x.slice(0,3);

    }

    console.log(getFirstThree('hello'));
```

output -> Hel

above code we did with string hello
OR if we do array.

`` console.log(getFirstThree([1,2,3]));``

output -> [ 1, 2, 3 ]


one more thing
![](https://i.imgur.com/m7Q9dfd.png)


here on hover function showing string | number[] is ok but also showing after coln : string | nums[]  
that means return type also will be string or numbers[] array.
so that's means typescript is smart language.
its decide what will be the return type of that function.

