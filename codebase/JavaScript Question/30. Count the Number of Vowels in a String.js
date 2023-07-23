// a, e, i, o, and u

const words = "hey how are you anish";

let count = 0;

for (let i = 0; i < words.length; i++) {
  if (
    words.charAt(i) === "a" ||
    words.charAt(i) === "e" ||
    words.charAt(i) === "i" ||
    words.charAt(i) === "o" ||
    words.charAt(i) === "u"
  ) {
    count++;
  }
}
console.log(count);
