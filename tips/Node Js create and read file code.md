
```js
const fs = require("fs");

const path = require("path");

  

const filePath = path.join(process.cwd(), "text.txt");

fs.writeFileSync(filePath, "hey this is text file.");

const fileContent = fs.readFileSync(filePath).toString();

console.log(fileContent);
```