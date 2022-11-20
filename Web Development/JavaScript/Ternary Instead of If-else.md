```js
const getResult=(marks)=>{
if(marks>=35){
return 'Pass';
}else{
return 'Fail';
}
};
 console.log(getResult(34));
```

>output -> fail


 *to simplify this we will can use ternary operator*

```js
const getResult=(marks)=>{
 return marks >= 35 ? 'Pass' : 'Fail';
};
 console.log(getResult(36));
```

> output - Pass