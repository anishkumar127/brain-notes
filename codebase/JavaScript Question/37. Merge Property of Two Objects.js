const Person = {
  user_name: "",
  number: 123,
  address: "sgnr",
  clg: "xyz",
};

const Student = {
  user_name: "anish",
  number: 123,
  address: "sgnr",
};

const Details = { ...Person, ...Student };
console.log(Details);
