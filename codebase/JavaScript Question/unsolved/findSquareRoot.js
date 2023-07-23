// First way
const value = 8;

console.log(Math.floor(Math.sqrt(value)));

// Second way

let store = 0;
let x = 1;
for (let i = 1; i <= value; i++) {
  if (x * i === value) {
    store = i;
  }
}

console.log(store);
