// let zero = 0;
// let negativeNumber = -2;
// let positiveNumber = 6;

// brute approach

const randomNumber = 2;

if (randomNumber > 0) {
  console.log("number is positive");
} else if (randomNumber < 0) {
  console.log("Number is negative");
} else {
  console.log("number is zero");
}

// second way

function numberCheck(randomNumber) {
  if (randomNumber > 0) {
    console.log("number is positive");
  } else if (randomNumber < 0) {
    console.log("Number is negative");
  } else {
    console.log("number is zero");
  }
}

numberCheck(randomNumber);
