let random = Math.random() * 10 + 1;
random = Math.floor(random);
const Guess = prompt("Guess Number");

if (Guess === random) {
  console.log("You won!");
} else {
  console.log("You loose , number was ", random, "you guess ", Guess);
}
