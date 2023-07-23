const numbers = 10;
let i = 2;
let isPrime = true;

let ans = setInterval(() => {
  if (numbers % i === 0) {
    isPrime = false;
    return;
  }

  i++;
}, 5000);
const res = isPrime ? "Prime" : "Not prime";
console.log(res);
