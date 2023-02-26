
![](https://i.imgur.com/xnkIHc6.png)



![](https://i.imgur.com/pDQlXcC.png)


![](https://i.imgur.com/HQTk0oC.png)




# how web works

![](https://i.imgur.com/GhYeXoG.png)


# fs file handling in node js.

```js
const fs = require("fs");
fs.writeFileSync("text.txt", "hey anish");
```




# REPL VS FILES

![](https://i.imgur.com/Vb5vlGk.png)


![](https://i.imgur.com/2zdWHiH.png)


![](https://i.imgur.com/Z8eULEM.png)

![](https://i.imgur.com/dHS7wkR.png)










# Life Cycle & Event Loop

![](https://i.imgur.com/cBzGP4k.png)




Event loop example is. server . when we start server it will run as a loop.
and we don't want to turn off the server on. and running server.

so that's the meaning of the event loop. which is run the task until task work not complete.


# process.exit() 
*its exit the process.*
```js
const http = require("http");

  

const server = http.createServer((req, res) => {

  console.log(req);

  process.exit();

});

  

server.listen(3000);
```

![](https://i.imgur.com/l9cnlSC.png)


# Event Driven

![](https://i.imgur.com/lC3kg7Y.png)





send request and send response.



![](https://i.imgur.com/rifsgNU.png)


![](https://i.imgur.com/dLhm4sn.png)


![](https://i.imgur.com/lJ8GSgg.png)


# Event Queue

![](https://i.imgur.com/BzNmCYt.png)



# Node 

![](https://i.imgur.com/DzCdJ1W.png)



for heavy task. not recommended node.js because if task is heavy. like image. etc.
then thread busy into process 1. and then event loop slow. and will face issue delay.

so. node js recommended only for I/o input output task. not for intensive task.




# req.method , req.headers , req.url

![](https://i.imgur.com/lcfa0Bd.png)




