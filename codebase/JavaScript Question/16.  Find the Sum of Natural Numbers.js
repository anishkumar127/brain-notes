const numbers = 5;

let sum = 0;

for (let i = 1; i <= numbers; i++) {
  sum += i;
}
console.log(sum);

//  array running sum

let ans = 0;
const arr = [1, 2, 3, 4, 5];

for (let value of arr) {
  ans += value;
}

console.log(ans);
