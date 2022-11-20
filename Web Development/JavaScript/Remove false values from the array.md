```js
var mixedArr = [0,"blue","",NaN,true,undefined];
```

- if we do 
 > console.log(mixedArr);

- run cmd
> node index.js
  
- output
``[ 0, 'blue', '', NaN, true, undefined ]``


# To Remove False Value

- using Filter method 
- code
```js
var mixedArr = [0,"blue","",NaN,true,undefined];
```
- filtering
```js
const answer =mixedArr.filter(Boolean);
```

- if check
```
console.log(answer);
```
- run cmd
 >node index.js

- output
``[ 'blue', true ]``