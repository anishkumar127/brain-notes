// NOT SELF

const person = {
  user_name: "anish",
  number: 123,
  address: "sgnr",
};

// const hasKey = "user_name" in person;
const hasKey = person.hasOwnProperty("user_name");

console.log(hasKey ? "YES" : "NO");
