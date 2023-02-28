
# blocking

![](https://i.imgur.com/8yOPKks.png)


**so this writeFileSync is synchronous function and it will block when string is too much large. and it will not let run and get another request.** 

# next non-blocking

**writeFile is async function and it will also take third parameter.**

![](https://i.imgur.com/jUobuGK.png)


*we can also do error handling in this.*
**and in that we pass code what we want to do after this text complete.**

**so we are working as a Event Trigger, node.js work like this**

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

    return req.on("end", () => {

      const parsedBody = Buffer.concat(body).toString();

      const message = parsedBody.split("=")[1];

      fs.writeFile("myMsg.text", message, (err) => {

        res.statusCode = 302;

        res.setHeader("Location", "/");

        return res.end();

      });

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
