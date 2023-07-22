const names = "hey how are you";

function capitalize(names) {
  let arr = names.split(" ");
  let ans = arr.map((item, index) => {
    return item.charAt(0).toUpperCase() + item.substring(1, item.length);
  });
  return ans;
}

console.log(capitalize(names));
