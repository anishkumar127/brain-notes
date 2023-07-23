const numbers = 5;

// normal loop
let fact = 1;
for (let i = 1; i <= numbers; i++) {
  fact = fact * i;
}
console.log(fact);

// recursion

function factorial(fact) {
  if (fact <= 0) {
    return 1;
  }

  return (fact = fact * factorial(fact - 1));
}
const res = factorial(numbers);
console.log(res);
