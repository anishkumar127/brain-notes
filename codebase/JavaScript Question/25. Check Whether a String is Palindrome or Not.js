const nameString = "naman";

let s = 0;
let e = nameString.length - 1;
let isPalindrome = true;
while (s < e) {
  if (nameString.charAt(s) !== nameString.charAt(e)) {
    isPalindrome = false;
    break;
  }

  s++;
  e--;
}

console.log(isPalindrome ? "Yes" : "No");
