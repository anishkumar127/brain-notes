
```js
  

let username = "anish kumar";

  

console.log(username.length); // 11

  

console.log(username.charAt(0)) // a

  

console.log(username.indexOf("i")) // 2 give first index.

  

console.log(username.lastIndexOf("a")); // 9
```


# trim()
```js
  

// remove leading and trealing space

  
  
  

let user = "  hey  ";

  

console.log(user.trim());  // removed space.
```


```js
let user = "  hey  ";

  

console.log(user.trimEnd());  // removed space end

console.log(user.trimStart()); // start
```



# uppr and lower case

```js
  

console.log(username.toLocaleLowerCase());

  

console.log(username.toUpperCase());
```




# replaceAll method

#phone_no.

```js
let phone_no = "123-456-789";

  

phone_no = phone_no.replaceAll("-", "/");

  
  
  

console.log(phone_no);
```

```js
let phone_no = "123-456-789";

  

phone_no = phone_no.replaceAll("-", "");

  

console.log(phone_no);
```

**output : - 123456789