const symbl = "+";
const a = 3;
const b = 3;
let ans = 0;
switch (symbl) {
  case "+":
    {
      ans = a + b;
    }
    break;
  case "-":
    {
      ans = a - b;
    }
    break;
  default:
    console.log("not provided this operation");
}

console.log(ans);
