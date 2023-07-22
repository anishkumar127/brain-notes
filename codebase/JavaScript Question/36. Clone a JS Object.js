const person = {
  user_name: "anish",
  number: 123,
  address: "sgnr",
};

// SHALLOW COPY . REFERENCE STORE
const student = person;

console.log(student);

console.log(student === person);

student.user_name = "hey";
console.log(student === person);

console.log(person);

// DEEP COPY , ONLY COPY STORE NOT REFERENCE
const studentDetails = { ...person };

console.log(studentDetails);
console.log(studentDetails === person);

// TRY WITH ARRAY REFERENCE WILL BE APPLIED ?

const arr = [1, 2, 3, 4];

const ShallowCopy = arr;

console.log("arr === arr2", arr === ShallowCopy);

ShallowCopy[1] = 55;
console.log(arr);

const DeepCopy = [...arr];

console.log("DeepCopy === arr", DeepCopy === arr);

DeepCopy[0] = 99;

console.log("DeepCopy => ", DeepCopy, " & Original ", arr);
