```js
import React, { useEffect, useState } from "react";

  

export default function DataDisplayer(props) {

const [data, setData] = useState(null);

const [fetchedId, setFetchedId] = useState(null);

  

useEffect(() => {

const fetchData = async () => {

setTimeout(async () => {

const response = await fetch(

`https://swapi.dev/api/people/${props.id}/`

);

const newData = await response.json();

  

setFetchedId(props.id);

setData(newData);

}, Math.round(Math.random() * 12000));

};

  

fetchData();

}, [props.id]);

  

if (data) {

return (

<div>

<p style={{ color: fetchedId === props.id ? "green" : "red" }}>

Displaying Data for: {fetchedId}

</p>

<p>{data.name}</p>

</div>

);

} else {

return null;

}

}
```


You can see the intended behaviour by clicking the "Fetch data!" button once: a simple component that displays data in response to a single click.

Things get a bit more complicated if you rapidly click the "Fetch data!" button several times. The app will make several requests which finish randomly out of order. The last request to complete will be the result displayed.



## Fixing the useEffect race condition

There are a couple of approaches we can take here, both taking advantage of useEffect’s clean-up function:

-   If we're okay with making several requests, but only rendering the last result, we can use a boolean flag.
    
-   Alternatively, if we don't have to support users on Internet Explorer, we can use [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).



### useEffect Clean-up Function with Boolean Flag

First, the gist of our fix in code:

```js
useEffect(() => {

  let active = true;

  const fetchData = async () => {

    setTimeout(async () => {

      const response = await fetch(`https://swapi.dev/api/people/${props.id}/`);

      const newData = await response.json();

      if (active) {

        setFetchedId(props.id);

        setData(newData);

      }

    }, Math.round(Math.random() * 12000));

  };

  fetchData();

  return () => {

    active = false;

  };

}, [props.id]);
```


>> Additionally, if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect

In the example above:

-   changing `props.id` will cause a re-render,
-   every re-render will trigger the clean-up function to run, setting `active` to `false`,
-   with `active` set to `false`, the now-stale requests won't be able to update our state

You'll still have a race-condition in the sense that multiple requests will be in-flight, but only the results from the last one will be used.


# Solution 1.


```js
import React, { useCallback, useEffect, useState } from "react";

  

export default function DataDisplayer(props) {

const [data, setData] = useState(null);

const [fetchedId, setFetchedId] = useState(null);

// start helpers for visualising race conditions

const [numReqs, setNumReqs] = useState(0);

const increase = useCallback(() => setNumReqs((c) => c + 1), []);

const decrease = useCallback(() => setNumReqs((c) => c - 1), []);

// end helpers for visualising race conditions

useEffect(() => {

let active = true;

  

const fetchData = async () => {

increase();

setTimeout(async () => {

const response = await fetch(

`https://swapi.dev/api/people/${props.id}/`

);

const newData = await response.json();

decrease();

if (active) {

setFetchedId(props.id);

setData(newData);

}

}, Math.round(Math.random() * 12000));

};

  

fetchData();

return () => {

active = false;

};

}, [props.id, increase, decrease]);

  

return (

<div>

<p>Number of requests in flight: {numReqs} (may take up to 12 seconds)</p>

<hr />

{data ? (

<>

<p style={{ color: fetchedId === props.id ? "green" : "red" }}>

Displaying Data for: {fetchedId}

</p>

<p>Result: {data.name}</p>

</>

) : null}

</div>

);

}
```

![](https://i.imgur.com/bMdq7ri.png)

![](https://i.imgur.com/exbnHuT.png)
