
```js
<!DOCTYPE html>

<html lang="en">

  <head>

    <title>Home</title>

    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width" />

    <style>

      #myInput {

        padding: 20px;

        border: 1px solid rgba(0, 0, 0, 0.4);

      }

      #myBtn {

        padding: 20px 40px;

        background-color: rgb(0, 119, 224);

        color: white;

      }

    </style>

  </head>

  <body>

    <main>

      <input type="text" id="myInput" placeholder="Enter Your Name" />

      <button id="myBtn">Click me</button>

    </main>

    <script>

      const input = document.getElementById('myInput');

      const btn = document.getElementById('myBtn');

  

      const btnClick = () => {

        // alert(input.value);

        sessionStorage.setItem('TEST_KEY', input.value);

      };

  

      btn.addEventListener('click', btnClick);

    </script>

  </body>

</html>
```


when click on btn click me. then store the input.value input value inside the session storage of the browser.

exp img:- 

![](https://i.imgur.com/NCWZgIM.png)



now get item from session storage.


```js
    <script>

      const input = document.getElementById('myInput');

      const btn = document.getElementById('myBtn');

  

      const btnClick = () => {

        // alert(input.value);

        sessionStorage.setItem('TEST_KEY', input.value);

      };

  

      btn.addEventListener('click', btnClick);

  

      alert(sessionStorage.getItem('TEST_KEY'));

    </script>
```

img:-
![](https://i.imgur.com/TU9Yp1q.png)
so we can access the value which we are stored into the session storage. 

the scope of this data only that tab which tab we set the data into session storage.
if we close and open another tab. then we will not able to see that data again. we will lost that data. we will get null.

so we can pass a check if we have data then alert otherwise not alert.


```js
    <script>

      const input = document.getElementById('myInput');

      const btn = document.getElementById('myBtn');

  

      const btnClick = () => {

        // alert(input.value);

        sessionStorage.setItem('TEST_KEY', input.value);

      };

  

      btn.addEventListener('click', btnClick);

      if (sessionStorage.getItem('TEST_KEY')) {

        alert(sessionStorage.getItem('TEST_KEY'));

      }

    </script>
```



# removeItem into session Storage

```js
<!DOCTYPE html>

<html lang="en">

  <head>

    <title>Home</title>

    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width" />

    <style>

      #myInput {

        padding: 20px;

        border: 1px solid rgba(0, 0, 0, 0.4);

      }

      #myBtn,

      #delete {

        padding: 20px 40px;

        background-color: rgb(0, 119, 224);

        color: white;

      }

      #delete {

        background-color: crimson;

      }

    </style>

  </head>

  <body>

    <main>

      <input type="text" id="myInput" placeholder="Enter Your Name" />

      <button id="myBtn">Click me</button>

      <button id="delete">Delete</button>

    </main>

    <script>

      const input = document.getElementById('myInput');

      const btn = document.getElementById('myBtn');

      const deleteBtn = document.getElementById('delete');

  

      const btnClick = () => {

        // alert(input.value);

        sessionStorage.setItem('TEST_KEY', input.value);

      };

  

      btn.addEventListener('click', btnClick);

  

      deleteBtn.addEventListener('click', () => {

        sessionStorage.removeItem('TEST_KEY');

      });

  

      if (sessionStorage.getItem('TEST_KEY')) {

        alert(sessionStorage.getItem('TEST_KEY'));

      }

    </script>

  </body>

</html>
```

removeItem(paskey) it will remove the key from the sessionstorage.


img:-

![](https://i.imgur.com/XrVC6E2.png)


removed after click delete

![](https://i.imgur.com/dzG0Qve.png)



# LocalStorage

its same like session storage.
function all are same.
but working little bit different
local storage not lost data into the browser or tab if its close . it will delete or lost if we clear .

```js
<!DOCTYPE html>

<html lang="en">

  <head>

    <title>Home</title>

    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width" />

    <style>

      #myInput {

        padding: 20px;

        border: 1px solid rgba(0, 0, 0, 0.4);

      }

      #myBtn,

      #delete {

        padding: 20px 40px;

        background-color: rgb(0, 119, 224);

        color: white;

      }

      #delete {

        background-color: crimson;

      }

    </style>

  </head>

  <body>

    <main>

      <input type="text" id="myInput" placeholder="Enter Your Name" />

      <button id="myBtn">Click me</button>

      <button id="delete">Delete</button>

    </main>

    <script>

      const input = document.getElementById('myInput');

      const btn = document.getElementById('myBtn');

      const deleteBtn = document.getElementById('delete');

  

      const btnClick = () => {

        // alert(input.value);

        localStorage.setItem('TEST_KEY', input.value);

      };

  

      btn.addEventListener('click', btnClick);

  

      deleteBtn.addEventListener('click', () => {

        localStorage.removeItem('TEST_KEY');

      });

  

      if (localStorage.getItem('TEST_KEY')) {

        alert(localStorage.getItem('TEST_KEY'));

      }

    </script>

  </body>

</html>
```

