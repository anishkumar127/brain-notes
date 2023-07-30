```js
function doesItContain(line, substring) {
  // write code here
  // return the output , do not use console.log here
	if(line.match(substring)){
		// console.log("true")
		return "true";
	}else{
		// console.log("false");
		return "false";
	}
}


/*do not change the code below*/

const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  const [line1, ch, hc] = line.split(",");

  console.log(doesItContain(line1, ch));
});



```

Implement the function `doesItContain`, which takes 2 strings as argument, return true or false whether the first string contains second string or not(Use JS In built functions

### Input Format

Function will take 2 args, 1) string in which to check 2) the string which is to be checked is it in 1st string

### Output Format

Function will return boolean whether it contains given substring or not

### Example 1

**Input**

```
Hi World world,world
```

**Output**

```
true
```

**Explanation**

Here 'world' is present in the first string

### Example 2

**Input**

```
hi hi hi,hello
```

**Output**

```
false
```

**Explanation**

'hello' is not present in the first string.

### Constraints

1 <= length of strings <= 10^5