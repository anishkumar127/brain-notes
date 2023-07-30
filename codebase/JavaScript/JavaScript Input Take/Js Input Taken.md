
```js
function evenOdd(number) {
    //write your code here
	// console.log(Math.abs(number))
	const num = Math.abs(number);
	if(num%2===0){
		console.log(0);
		return 0;
	}else{
		console.log(1);
		return 1;
	}
}

/* Do not change the code below  */

const rl = require("readline");
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line) {
  const number = parseInt(line);
  evenOdd(number);
  reader.close();
});

```