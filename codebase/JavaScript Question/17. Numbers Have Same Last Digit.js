const one = 5;
const two = 55;
const three = 635;

const checkEndsWith = 5;
// first way

const res1 = one % 10;
const res2 = two % 10;
const res3 = three % 10;

if (res1 == res2 && res1 == res3) {
  console.log("Yes");
} else {
  console.log("NO");
}

// second way
const arr = [5, 55, 635];

let isTrue = true;
for (let i = 0; i < arr.length; i++) {
  if (!arr[i].toString().endsWith(checkEndsWith.toString())) {
    isTrue = false;
    break;
  }
}

console.log(isTrue ? "Yes" : "No");
