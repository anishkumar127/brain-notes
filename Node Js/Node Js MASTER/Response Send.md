
![](https://i.imgur.com/I36L3uD.png)


```js
const http = require("http");

  

const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");

  res.write("<head><title>This is title</title></head>");

  res.write("<body><h1>hey anish! Have a Good day</h1></body>");

  res.write("</html>");

  res.end();

});

  

server.listen(3000);
```




# Routing


![](https://i.imgur.com/PLwJrDZ.png)


![](https://i.imgur.com/rY0ospJ.png)



```js
const http = require("http");

  

const server = http.createServer((req, res) => {

  const url = req.url;

  if (url === "/") {

    res.write("<html>");

    res.write("<head><title>This is title</title></head>");

    res.write(

      "<body><form method='POST' action='/message'><input type='text' name='myMessage'/><button type='submit'>Submit</button></form></body>"

    );

    res.write("</html>");

    return res.end();

  }

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");

  res.write("<head><title>This is title</title></head>");

  res.write("<body><h1>hey anish! Have a Good day</h1></body>");

  res.write("</html>");

  res.end();

});

  

server.listen(3000);
```

# Redirecting.


```js
const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {

  const url = req.url;

  const method = req.method;

  console.log(method);

  if (url === "/") {

    res.write("<html>");

    res.write("<head><title>This is title</title></head>");

    res.write(

      "<body><form method='POST' action='/message'><input type='text' name='myMessage'/><button type='submit'>Submit</button></form></body>"

    );

    res.write("</html>");

    return res.end();

  }

  

  if (url === "/message" && method === "POST") {

    fs.writeFileSync("myMsg.text", "my Testing Data");

    res.statusCode = 302;

    res.setHeader("Location", "/");

    return res.end();

  }

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");

  res.write("<head><title>This is title</title></head>");

  res.write("<body><h1>hey anish! Have a Good day</h1></body>");

  res.write("</html>");

  res.end();

});

  

server.listen(3000);
```


# Stream & Buffer

**incoming data send -> stream**
**stream is collections of data**

transfer data in chunks
![](https://i.imgur.com/f1PkeL4.png)



**buffer is a container**
![](https://i.imgur.com/0wXDpFJ.png)


# next 
```js
const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {

  const url = req.url;

  const method = req.method;

  if (url === "/") {

    res.write("<html>");

    res.write("<head><title>This is title</title></head>");

    res.write(

      "<body><form method='POST' action='/message'><input type='text' name='myMessage'/><button type='submit'>Submit</button></form></body>"

    );

    res.write("</html>");

    return res.end();

  }

  

  if (url === "/message" && method === "POST") {

    const body = []; // const because not want to reassign.

    req.on("data", (chunk) => {

      console.log(chunk);

      body.push(chunk);

    });

    req.on("end", () => {

      const parsedBody = Buffer.concat(body).toString();

      console.log(parsedBody);

    });

    fs.writeFileSync("myMsg.text", "my Testing Data");

    res.statusCode = 302;

    res.setHeader("Location", "/");

    return res.end();

  }

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");

  res.write("<head><title>This is title</title></head>");

  res.write("<body><h1>hey anish! Have a Good day</h1></body>");

  res.write("</html>");

  res.end();

});

  

server.listen(3000);
```

![](https://i.imgur.com/UTLhdvx.png)


```js
const message = parsedBody.split("=")[1];
```

**this will split myMessage=anish its split to array. and we need anish so we do index 1.**

**this all is asynchronous task**
**they will happen in future**

```js
const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {

  const url = req.url;

  const method = req.method;

  if (url === "/") {

    res.write("<html>");

    res.write("<head><title>This is title</title></head>");

    res.write(

      "<body><form method='POST' action='/message'><input type='text' name='myMessage'/><button type='submit'>Submit</button></form></body>"

    );

    res.write("</html>");

    return res.end();

  }

  

  if (url === "/message" && method === "POST") {

    const body = []; // const because not want to reassign.

    req.on("data", (chunk) => {

      console.log(chunk);

      body.push(chunk);

    });

    req.on("end", () => {

      const parsedBody = Buffer.concat(body).toString();

      const message = parsedBody.split("=")[1];

      fs.writeFileSync("myMsg.text", message);

    });

    res.statusCode = 302;

    res.setHeader("Location", "/");

    return res.end();

  }

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");

  res.write("<head><title>This is title</title></head>");

  res.write("<body><h1>hey anish! Have a Good day</h1></body>");

  res.write("</html>");

  res.end();

});

  

server.listen(3000);
```


# Event Driven Code Pattern

```js
const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {

  const url = req.url;

  const method = req.method;

  if (url === "/") {

    res.write("<html>");

    res.write("<head><title>This is title</title></head>");

    res.write(

      "<body><form method='POST' action='/message'><input type='text' name='myMessage'/><button type='submit'>Submit</button></form></body>"

    );

    res.write("</html>");

    return res.end();

  }

  

  if (url === "/message" && method === "POST") {

    const body = []; // const because not want to reassign.

    req.on("data", (chunk) => {

      console.log(chunk);

      body.push(chunk);

    });

    req.on("end", () => {

      const parsedBody = Buffer.concat(body).toString();

      const message = parsedBody.split("=")[1];

      fs.writeFileSync("myMsg.text", message);

      res.statusCode = 302;

      res.setHeader("Location", "/");

      return res.end();

    });

  }

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");

  res.write("<head><title>This is title</title></head>");

  res.write("<body><h1>hey anish! Have a Good day</h1></body>");

  res.write("</html>");

  res.end();

});

  

server.listen(3000);
```

## in this Case no 302 page

![](https://i.imgur.com/cRtT3AB.png)
![](https://i.imgur.com/MtQFMgp.png)




**and there will be error**
![](https://i.imgur.com/A3PzmHS.png)

**because of we already set the header and we again trying to set the headers.**
**that's mean we already send the header and we again try to set the header**


**there is issue**

![](https://i.imgur.com/LS8COny.png)


**because above if statement block will run in future and then after below code run and that's will throw the error.**

