
# map method
map is a high order funtion.

```js
// Double
const arr = [5,1,2,6,7];

function double(x){
  return x*2;
}

const output = arr.map(double);

console.log(output);
```

``Output:
``[ 10, 2, 4, 12, 14 ]``

its double each value in the array. iterate arr and pass into double function and return that
elements*2 and then return as a array.
map method return array.


**Triple** the value

```js

// triple
const arr = [5,1,2,6,7];

function triple(x){
  return x*3;
}

const output = arr.map(triple);

console.log(output);
```

Output:

``[ 15, 3, 6, 18, 21 ]``


**Binary Convert**

```js

// binary Convert
const arr = [5,1,2,6,7];

function binary(x){
  return x.toString(2);
}
const output = arr.map(binary);

console.log(output);
```
Output:

``[ '101', '1', '10', '110', '111' ]``



#### different way.

```js

// binary Convert
const arr = [5,1,2,6,7];


const output = arr.map(function binary(x){
  return x.toString(2);
});

console.log(output);
```

Output:

``[ '101', '1', '10', '110', '111' ]``

this is also valid way. we can use function inside the map method.

**Another way we can also use arrow function

```js

// binary Convert
const arr = [5,1,2,6,7];


const output = arr.map((x)=>{
  return x.toString(2);
});

console.log(output);
```

above code we are writing arrow function. this is just a anonymous function we are passing.

**we can also remove the return and { } from code if our code is one line

```js

// binary Convert
const arr = [5,1,2,6,7];


const output = arr.map((x)=> x.toString(2));

console.log(output);
```


its also work and return same output.


# filter function in array

1. check value odd or not.

```js
// its used filter value inside the array.
const arr = [5,1,2,6,7];

// filter odd values

function isOdd(x){
  return x % 2;
}

const output = arr.filter(isOdd);

console.log(output);
```

Output:

``[ 5, 1, 7 ]`` returning the odd elements **array**

2. value even or not

```js
// its used filter value inside the array.
const arr = [5,1,2,6,7];

function isEven(x){
  return x % 2===0;
}

const output = arr.filter(isEven);

console.log(output);
```

Output:

``[ 2, 6 ]``




3. find value greater then 4.

```js
// its used filter value inside the array.
const arr = [5,1,2,6,7];

function findGreater(x){
  return x > 4;
}

const output = arr.filter(findGreater);

console.log(output);
```

Output:

``[ 5, 6, 7 ]`` returning the array who is greater then 4.


 above code another way.
```js
// its used filter value inside the array.
const arr = [5,1,2,6,7];

const output = arr.filter(function findGreater(x){
  return x > 4;
}
);

console.log(output);
```

passing inside filter function a function

this also have a another way. using anonymous function , arrow function


```js
// its used filter value inside the array.
const arr = [5,1,2,6,7];

const output = arr.filter((x)=>{
  return x > 4;
}
);

console.log(output);
```


and also

```js
// its used filter value inside the array.
const arr = [5,1,2,6,7];

const output = arr.filter((x) => x > 4);

console.log(output);
```



# Reduce function
and a name its not reduce anything 😜

before using reduce method. we will see how we do without reduce method.
- non functional programming way. normal function 
we are doing sum. as a normally we do without reduce function.
```js
const arr = [5,1,2,6,7];

// sum or maximum


function findSum(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum = sum+arr[i];
  }
  return sum;
}
console.log(findSum(arr));
```

output - ``21``



**Now comes part reduce method

function inside reduce method take two parameter. acc (accumulator) and current.
curr is actually value inside array. 
acc acculumate the value , acculumate the result. result present inside array.
we acculumate sum. like above normal function we acculumate sum inside for loop

how we pass initial value to accu ? if its work like sum 

so reduce method also taking 2 paramter .
first is the functin and second is the intitial value which we want to pass to the accumulator.


```js
const arr = [5,1,2,6,7];
// sum 
const output = arr.reduce(function(acc,curr){
  acc = acc + curr;
  return acc;
},0);

console.log(output);

```


another way using arrow function

```js

const arr = [5,1,2,6,7];
// sum 
const output = arr.reduce((acc,curr)=>{
  acc = acc + curr;
  return acc;
},0);

console.log(output);


```

2. Find may normal way
```js

const arr = [5,1,2,6,7];

// sum or maximum

// non functional programming way. normal function 


function findMax(arr){
  let max = 0;
  for(let i=0; i<arr.length; i++){
   if(arr[i]>max){
     max = arr[i];
   }
  }
  return max;
}
console.log(findMax(arr));
```



now using reduce method

```js
const output  = arr.reduce(function(acc,curr){
  if(curr>acc){
    acc=curr;
  }
  return acc;
},0);

console.log(output);
```

rename variable.

```js

const output  = arr.reduce(function(max,curr){
  if(curr>max){
    max=curr;
  }
  return max;
},0);

console.log(output);
```



# Extra Example like real world

1. if we want to show list of all the users full name list.so we will use map method .
2. and map method return the value.
3. in map x iterate over array inside object.
4. we can only iterate over the array. because map only iterate over array.

```js
const users = [
  
  {firstName:"anish", lastName:"kumar", age:24},
  {firstName:"b", lastName:"bb", age:25},
  {firstName:"c", lastName:"cc", age:35},
  {firstName:"d", lastName:"dd", age:30},
  {firstName:"e", lastName:"ee", age:40},
  
  ]
  
  //list of full Names 
  
  const output = users.map(x=>x.firstName+" "+x.lastName);
  
  console.log(output)
```

Output:

``[ 'anish kumar', 'b bb', 'c cc', 'd dd', 'e ee' ]``


# another example

1. find how many user have particular age. ? particular unique age. ?

we use reduce. count value and return one object. 
initial  value will be empty object. 
we check if value not present in accumulator then we assign 1.
if its already present then we increase by ++;
same like in java map array. like map.getOrDefault() ; in java. 


```js
const users = [
  
  {firstName:"anish",lastName:"kumar", age:24},
  {firstName:"b", lastName:"bb", age:25},
  {firstName:"c", lastName:"cc", age:35},
  {firstName:"d", lastName:"dd", age:24},
  {firstName:"e", lastName:"ee", age:40}
  
  ];
  
const output =  users.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
  }else{
    acc[curr.age] = 1;
  }
  return acc;
},{})

console.log(output);
```

Output:

``{ '24': 2, '25': 1, '35': 1, '40': 1 }``


when we need to iterate over the array. and come up with single value then picture come into mind we can use the reduce function.


# filter 
find out full name all the user whose age less then 30. 

```js
const users = [
  
  {firstName:"anish",lastName:"kumar", age:24},
  {firstName:"b", lastName:"bb", age:25},
  {firstName:"c", lastName:"cc", age:35},
  {firstName:"d", lastName:"dd", age:24},
  {firstName:"e", lastName:"ee", age:40}
  
  ];
  
 
 const output = users.filter(function(x){
   if(x.age<30){
     return x.firstName + " " + x.lastName;
   }
 })
 
 console.log(output); 
```

but output return

Output:
```
[
  { firstName: 'anish', lastName: 'kumar', age: 24 },
  { firstName: 'b', lastName: 'bb', age: 25 },
  { firstName: 'd', lastName: 'dd', age: 24 }
]
```

return all the object age less then 30.

```js
const users = [
  
  {firstName:"anish",lastName:"kumar", age:24},
  {firstName:"b", lastName:"bb", age:25},
  {firstName:"c", lastName:"cc", age:35},
  {firstName:"d", lastName:"dd", age:24},
  {firstName:"e", lastName:"ee", age:40}
  
  ];

 const output = users.filter((x)=>{
   return x.age<30;
 })
 
 console.log(output); 
```


**so now we need to return the first name or last name or both.

so over here what we can use ?

we can use **Chaining** 

map, reduce , filter are chaining function. so we can chain them.

so whatever output we are getting from the filter method. we can map on this. and get the desired output.

```js
const users = [
  
  {firstName:"anish",lastName:"kumar", age:24},
  {firstName:"b", lastName:"bb", age:25},
  {firstName:"c", lastName:"cc", age:35},
  {firstName:"d", lastName:"dd", age:24},
  {firstName:"e", lastName:"ee", age:40}
  
  ];

 const output = users.filter((x)=>{
   return x.age<30;
 }).map((x)=> x.firstName);
 
 console.log(output); 
```

Output:

``[ 'anish', 'b', 'd' ]``

that above question we can also do. without using the filter and map.
using reduce method.

```js


const users = [
  
  {firstName:"anish",lastName:"kumar", age:24},
  {firstName:"b", lastName:"bb", age:25},
  {firstName:"c", lastName:"cc", age:35},
  {firstName:"d", lastName:"dd", age:24},
  {firstName:"e", lastName:"ee", age:40}
  
  ];
  

 
 const output = users.reduce(function(acc,curr){
  if(curr.age<30){
    acc.push(curr.firstName);
  }
   return acc;
 },[])
 
 
 console.log(output); 
```

Output:

``[ 'anish', 'b', 'd' ]``