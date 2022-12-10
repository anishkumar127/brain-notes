
```js
import React, { useRef, useState } from 'react';

function App() {

  const [valueData, setValueData] = useState([]);

  const data = useRef();

  const handleClick = () => {

    localStorage.setItem('inputValue', data.current.value);

    const values = localStorage.getItem('inputValue');

    setValueData(values);

  };

  

  const handleClear = () => {

    // localStorage.clear('cleared', data.current.value); // its clear all data in local storage.

    localStorage.removeItem('inputValue');

    setValueData('');

  };

  return (

    <div>

      <input ref={data} />

      <button onClick={handleClick}> Add Data Local Storage</button>

      <button onClick={handleClear}> Clear Data Local Storage </button>

  

      <h1> {valueData} </h1>

      {/*  not working because not a function issue. */}

      {/* <h1> List </h1>

      {valueData.map((item) => {

        return (

          <div>

            <li> {item}</li>

          </div>

        );

      })} */}

    </div>

  );

}

  

export default App;
```


data added
![](https://i.imgur.com/CLadqpW.png)


data removed

![](https://i.imgur.com/x5nM7ta.png)




# pending to learn

1. how to map data into map method as a array
2. how to clear data in input box after click button.