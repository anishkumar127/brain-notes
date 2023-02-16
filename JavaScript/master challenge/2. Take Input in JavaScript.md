

![](https://i.imgur.com/hjI1cwc.png)



# window Prompt 
```js
  

let username = window.prompt("what's your name ?");

  

console.log(username);
```


![](https://i.imgur.com/D2ZwYpu.png)




# difficult way.

```js
  
  

document.getElementById("myButton").onclick = function () {

  username = document.getElementById("myText").value;

  

  console.log(username);

};
```

```html
 <label> Enter your username: </label><br />

    <input type="text" id="myText" /><br />

    <button type="button" id="myButton">submit</button>

    <script src="index.js"></script>
```



![](https://i.imgur.com/tKyrarW.png)




```js
document.getElementById("myButton").onclick = function () {

  username = document.getElementById("myText").value;

  

  console.log(username);

  

  document.getElementById("myLabel").innerHTML = "Hello "+username;

};
```



