const str = "aabcccdee";

const map = new Map();
for (let i = 0; i < str.length; i++) {
  const s = str.charAt(i);
  map.set(s, 0);
}
for (let key of str) {
  let count = map.get(key);
  map.set(key, count + 1);
}

console.log(map);
