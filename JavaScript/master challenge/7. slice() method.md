
![](https://i.imgur.com/5ENuX94.png)


```js
let fullName = "anish kumar";

  

let firstName;

let lastName;

  

// first name

  

firstName = fullName.slice(0,5); // starting index and ending index.

  

console.log(firstName);

  
  

// last name

  

lastName = fullName.slice(6);  // starting index and ending index.

  

console.log(lastName);
```

# Slice 
# indexOf


```js
  

let fullName = "anish kumar";

  

let firstName;

let lastName;

  

// first name

  

firstName = fullName.slice(0,fullName.indexOf(" ")); // starting index and ending index.

  

console.log(firstName);

  
  

// last name

  

lastName = fullName.slice(fullName.indexOf(" ")+1);  // starting index and ending index.

  

console.log(lastName);
```


**searching using indexOf method.
**its extracting the new string without modifying the original string.

