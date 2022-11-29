- **-g** means global over here.
``npm install -g typescript``

- check installed or not. 
``tsc --help``


# First do in Js then TypeScript.

how to know which is type or which is js. from extension.
- .js
- .ts

- first gonna do with javaScript
**app.js**

```js
function calculate (num1,num2){

    return num1+num2;

}

console.log(calculate(1,4));
```
``// 5 output``



there will be error with javaScript 
```js
let num1 = '1';

function calculate (num1,num2){

    return num1+num2;

}
console.log(calculate(num1,4));
```

output gonna be different because we are doing sum with character string.
and sum gonna be **14** instead of 5.

and its also not throwing any error. its just manipulate the our output.

so *about this type of issue we will use typeScript so that its throw error at compile time. so that our production level development not effect and our result also not effect*



**now try in TypeScript same js code**

file name **index.ts**


![](https://i.imgur.com/JR2QNGA.png)


it will throw error like. we are assign string into number.

over here what we did. we define the type of num1  we did **num1:number** that's means its a number type variable. if we did like that then typeScript throw an error.

```ts
let num1:number = '1';

function calculate (num1,num2){

    return num1+num2;

}

console.log(calculate(num1,4));
```

// 2nd way
```ts
let num1 = '1';

function calculate (num1:number,num2:number){

    return num1+num2;

}

console.log(calculate(num1,4));
```

but still it will throw error because we are doing **'1'** and its a string value.


- now do right everything.
```ts
let num1 = 1;

function calculate (num1:number,num2:number){

    return num1+num2;

}

console.log(calculate(num1,4));
```

now run this typeScript code. we have to compile this.

using cmd ``tsc index.ts``
and this cmd again convert this typeScript code to Javascript.

- now we need to run javaScript code. using this cmd `` node index.js``
- and now finally output we will get
> output 5




#  with Object Example

**index.js** tying to create object and get firstName from object.

```js
// object

const User = {

    firstName: "Anish",

    lastName: "Kumar",

    role: "admin"

}

console.log(User.firstName)
```

> output will be Anish

- User. will not suggest in JavaScript but if we use over here TypeScript then it will be show suggestion of that User.firstName or lastName role etc. whatever we define in **User** Object.
