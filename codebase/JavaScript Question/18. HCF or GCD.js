let one = 60;
let two = 72;

//  HCF
let ans = 0;
for (let i = 1; i <= Math.min(one, two); i++) {
  //   console.log("hey", i % one, i % two);
  if (one % i == 0 && two % i == 0) {
    ans = i;
  }
}
console.log(ans);

// GCD
let res = 0;
for (let i = 1; i <= Math.min(one, two); i++) {
  if (one % i == 0 || two % i == 0) {
    res = i;
  }
}

console.log(res);
