const person = {
  user_name: "anish",
  number: 123,
  address: "sgnr",
};

for (let key in person) {
  console.log(key);
}

for (let key in person) {
  console.log(key, "=> ", person[key]);
}
