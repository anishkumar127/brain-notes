**Note:-** First need to comment or delete React. strict mode. because its reload components 2 times and it will create issue. from this value override again and again same. so we will not be able to store next data.

now code.
```js
import React, { useEffect, useState } from 'react';

function App() {

  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {

    const data = window.localStorage.getItem('TEST_DATA');

    if (data !== null) {

      setShowBanner(JSON.parse(data));

    }

  }, []);

  useEffect(() => {

    window.localStorage.setItem('TEST_DATA', JSON.stringify(showBanner));

  }, [showBanner]);

  return (

    <div>

      {showBanner && (

        <div>

          <h1>Show me or Hide me</h1>

        </div>

      )}

      <button onClick={() => setShowBanner(true)}> Show </button>

      <button onClick={() => setShowBanner(false)}> Hide </button>

    </div>

  );

}

  

export default App;
```

on click hide data. and its value set to false and it will disappear.
on click on show data. it will set value as a true and it will again render value. a value means a h1 tag.

pics as a example.

Initial value true.

![](https://i.imgur.com/gRBEUzB.png)



click on hide.

![](https://i.imgur.com/INEgglh.png)






# Example 

```
localStorage.setItem('myCat', 'Tom');
```


The syntax for reading the `localStorage` item is as follows:

```
const cat = localStorage.getItem('myCat');
```


The syntax for removing the `localStorage` item is as follows:

```
localStorage.removeItem('myCat');
```


The syntax for removing all the `localStorage` items is as follows:

```
localStorage.clear();
```

