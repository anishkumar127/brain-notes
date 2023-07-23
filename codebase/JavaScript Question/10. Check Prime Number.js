const number = 5;

// simple
let isPrime = true;
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

const ans = isPrime ? "Prime" : "Not prime";
console.log(ans);

// another
