
if we get cors policy issue in development or while live hosting server.
so we can avoid using some process.

# Back End
1. if we are using local host. 

**server.js** this file in backend in node/express

- First way.

```js
import cors from "cors";

// app.use(cors()); some cases working 

  

const corsOrigin = {

   origin: "http://localhost:3000", //or whatever port your frontend is using

  credentials: true,

  optionSuccessStatus: 200,

};

app.use(cors(corsOrigin));
```

if we are doing in local host. and our front end running at local host. then we use 3000 direct port.



- second way.
```js
import cors from "cors";

const corsOrigin = {

  origin: `https://video-sharing-app-yt.vercel.app:${process.env.PORT}`, //or whatever port your frontend is using

  credentials: true,

  optionSuccessStatus: 200,

};

app.use(cors(corsOrigin));
```

this is our hosted front end url. but its work in some cases some cases not.

- 3rd way and better way.

```js
import cors from "cors";
  
const corsOrigin = {

  origin: true, //or whatever port your frontend is using

  credentials: true,

  optionSuccessStatus: 200,

};

app.use(cors(corsOrigin));
```

this is good way to true all origin allow. 


**above code was on backend in server.js file**

# Front end 


create in react js src file directory. a file name anything. but we will create name 
**axios.js**

inside file we will put our backend api route.

```js
import axios from "axios";

 const baseURL = "http://localhost:5000/api";

const axiosInstance = axios.create({

  baseURL: baseURL,

  timeout: 5000,

  headers: {

    Authorization: localStorage.getItem("access_token")

      ? "Bearer " + localStorage.getItem("access_token")

      : null,

    "Content-Type": "application/json",

    accept: "application/json",

  },

});

export default axiosInstance;
```


if our route running at local host . we are running our backend as a local host then we do this.

if our api is hosted then we do this below code.


```js
import axios from "axios";

const baseURL = " https://agreeable-bat-gown.cyclic.app/api";

const axiosInstance = axios.create({

  baseURL: baseURL,

  timeout: 5000,

  headers: {

    Authorization: localStorage.getItem("access_token")

      ? "Bearer " + localStorage.getItem("access_token")

      : null,

    "Content-Type": "application/json",

    accept: "application/json",

  },

});

export default axiosInstance;
```


and more more thing. how we use this in other react files as a api call?
and its generally avoid huge url.
we can short our url using this.

so using another file we can do like this.

like we created components like`` User.jsx``

```js
import axiosInstance from "../axios";
  const res = await axiosInstance.get(`/videos/${type}`);

```

we import axios and use instead of axios.get we use axiosInstance.get
and their we will use our route as a short route.

and one more thing
if we need to avoid token issue then we will use

``  withCredentials: true,``

```js
import axiosInstance from "../axios";
  const res = await axiosInstance.get(`/videos/${type}`, {
        withCredentials: true,
      });
```

