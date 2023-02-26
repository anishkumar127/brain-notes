
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


