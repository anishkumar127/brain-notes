let num = 153;

let temp = num;
let sum = 0;
while (num != 0) {
  rem = num % 10;
  sum += Math.pow(rem, 3);
  num = Math.trunc(num / 10);
}

if (temp == sum) {
  console.log("Yes");
} else {
  console.log("No");
}
