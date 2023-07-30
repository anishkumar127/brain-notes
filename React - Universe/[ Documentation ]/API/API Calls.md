``
```ts
import { useEffect, useState } from 'react'

import './App.css'

  

function App() {

  const [user, setUser] = useState<any>(null)

  let arr;

  const fetchData = () => {

    const api = "https://jsonplaceholder.typicode.com/users";

    const data = fetch(api);

    data.then((res) => res.json()).then((response) => {

      console.log(response)

      arr = response

      setUser(response)

      console.log(user, arr)

    });

  }

  useEffect(() => {

    console.log(user);

    fetchData();

  }, [])

  

  const handleSubmit = (e: any) => {

    e.preventDefault();

    console.log(user);

    fetchData();

  }

  return (

    <div>

      {

        user?.map((item: any, i: any) => <h3 key={i}>{item.name}</h3>)

      }

      <button onClick={handleSubmit}>Click</button>

    </div>

  )

}

  

export default App
```