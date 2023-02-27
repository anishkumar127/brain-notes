# Thinking

![](https://i.imgur.com/TKWzymy.png)


*there is a issue like req a and req b are coming and they are using same thread single thread. and there can use data of each other ? is there security issue ?*



# next understanding

![](https://i.imgur.com/TcU7ViW.png)


- Event loop not handle file system(fs).
- Event loop handle light weight part. which execute fast.
- FS handle by the worker pool and worker pool handle by the Node.js
- worker pool for heavy lighting means heavy work. 
- So worker pool not part of event loop. and JS.
- because Js is single thread.
- and worker pool can do work multi thread and by os also.
- and only one connection between event loop and worker pool. and that's is when worker pool task complete. it will inform to event loop that's task that's given to him is completed. now event loop can run the callback.


![](https://i.imgur.com/5HKylqw.png)


# Event Loop
![](https://i.imgur.com/IssOtXp.png)

![](https://i.imgur.com/IKkOZXS.png)


![](https://i.imgur.com/68xFI2b.png)
![](https://i.imgur.com/rZycaVs.png)

![](https://i.imgur.com/8qDKuYl.png)
![](https://i.imgur.com/nYLOhEk.png)


# Security

![](https://i.imgur.com/alAbBEI.png)



>its running at single thread. but its can access each other value. because of we do in function.
- function have own scope. 
- every function have own res and req. 
- so we create multiple function and object. so its not able to access the each other data. even Js is single thread.

