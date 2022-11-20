# String 

```js
const myObject = '{"name:"anish,"age":22}';
console.log(myObject);

console.log(typeof(myObject));
```

- output

> {{"name":"anish","age":22}

> type  
``string``



# convert to object

```js
const myObject = '{"name":"anish","age":22}';

const answer = JSON.parse(myObject);

console.log(answer);

console.log(typeof(answer));
```

- output
``{ name: 'anish', age: 22 }``
- type 
``object``