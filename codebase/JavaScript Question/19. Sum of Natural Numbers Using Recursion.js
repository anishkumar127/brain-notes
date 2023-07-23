const numbers = 5;

function sumNatural(n) {
  if (n < 0) return 0;
  return n + sumNatural(n - 1);
}

console.log(sumNatural(numbers));
