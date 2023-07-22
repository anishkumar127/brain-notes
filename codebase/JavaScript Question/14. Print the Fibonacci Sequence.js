let fibo = 6;

//  normal direct answer
function FiboSequence(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return FiboSequence(n - 1) + FiboSequence(n - 2);
}

const ans = FiboSequence(fibo);
console.log("ans", ans);

// loop sequence answer.

for (let i = 0; i <= 6; i++) {
  console.log(FiboSequence(i));
}
