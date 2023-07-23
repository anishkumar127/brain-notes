let num = 123;

let temp = 0;
let res = 0;
while (num != 0) {
  rem = num % 10;
  res = res * 10 + rem;
  num = Math.trunc(num / 10);
}

console.log(res);
