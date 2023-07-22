let firstItem = 2;
let secondItem = 4;

// swap

// using 3rd variable

let temp = firstItem;
firstItem = secondItem;
secondItem = temp;

console.log(`firstItem ${firstItem} secondItem ${secondItem}`);

// using XOR

firstItem ^= secondItem;
secondItem ^= firstItem;
firstItem ^= secondItem;

console.log(`XOR firstItem ${firstItem} XOR secondItem ${secondItem}`);
