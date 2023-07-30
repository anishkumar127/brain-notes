
```ts


let obj = {
  1:"one",
  2:"two",
  3:"three"
}


const index = 2; // index which is need to delete.

let obj2 = {...obj}; // copy

delete obj2[index]; // delete 

console.log(obj2);

// get as a array
let entries = Object.entries(obj2);
console.log(entries);

// Sort the array based on the keys
entries.sort((a, b) => a[0] - b[0]);

// Convert the sorted array back into an object
let sortedObj = Object.fromEntries(entries);

console.log(sortedObj);

 
// let arr = [1,2,3,4];
// let index = 2;

// for(let i =index; i<arr.length; i++){
//   arr[i] = arr[i+1];
// }

// arr.pop();
// console.log(arr);
```