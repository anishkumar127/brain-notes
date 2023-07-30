
```js
const readline = require('readline');
 const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
 });
 

 rl.on('line', function(line){
  lucky_sevens(JSON.parse(line))
  })"

  "function lucky_sevens(array){
 // write your code here
 // use console.log to print your output
 }
```