
![](https://i.imgur.com/TkZfWcA.png)


# some working Tricks


![](https://i.imgur.com/CQLOA1y.png)



```js
import "./App.css";

function sum(a, b) {

  return a + b;

}

function App() {

  const x = sum(5, 5);

  const y = sum(2, 3);

  console.log(sum(2, 2));

  return (

    <div className="App">

      <header className="App-header">

        hello anish

        <h1>{x}</h1>

        <h1>{y}</h1>

        <h1>{sum(3, 3)}</h1>

      </header>

    </div>

  );

}

  

export default App;
```




# More function inside jsx use.

![](https://i.imgur.com/8a3Jepa.png)


```js
import "./App.css";

function sum(a, b) {

  return a + b;

}

function App() {

  const x = sum(2, 3);

  const y = sum(6, 12);

  return (

    <div className="App">

      <header className="App-header">

        hello Anish

        <h3>

          <PrintSum x={x} y={y} />

        </h3>

      </header>

    </div>

  );

}

  

function PrintSum(x, y) {

  return console.log(x, y);

}

export default App;
```



# print console. treat as a function

```js
import "./App.css";

function sum(a, b) {

  return a + b;

}

function App() {

  const x = sum(2, 3);

  const y = sum(6, 12);

  return (

    <div className="App">

      <header className="App-header">

        hello Anish

        {PrintSum(x, y)}

      </header>

    </div>

  );

}

  

function PrintSum(x, y) {

  return console.log(x, y);

}

export default App;
```

![](https://i.imgur.com/XgEPWyi.png)


# taking callback

```js
import "./App.css";

function sum(a, b) {

  return a + b;

}

function App() {

  return (

    <div className="App">

      <header className="App-header">

        hello Anish

        {PrintSum(sum)}

      </header>

    </div>

  );

}

  

function PrintSum(callback) {

  console.log(callback(5, 3));

}

export default App;
```


