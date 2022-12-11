

```docker
FROM node:16

  

WORKDIR /app

  

COPY ./package.json ./

  

RUN npm install

  

COPY . .

  

EXPOSE 5173

  

CMD ["npm","run","dev"]
```

![](https://i.imgur.com/ypFv5UC.png)



.dockerignore

```docker
node_modules

.git
```



now run command to build image.


```
 docker build -t test-react-docker .
```

. why ? because we are inside the directory if we our docker else where we will use that path over here.

img docker building start

![](https://i.imgur.com/O8qgkdK.png)


finally done.

![](https://i.imgur.com/QNM47K8.png)



# Docker image list see.

cmd - `` docker image ls``

![](https://i.imgur.com/pcmXGea.png)



# image container run.

docker run --name 
if not do name automatic docker create name of container.

we do name 
docker run --name react-docker-container --rm

--rm why ? its remove previous build. for avoid confilict.

docker run --name react-docker-container --rm image_name

there will be image name

in our case our image name is. **test-react-docker** so we will use that.

docker run --name react-docker-container --rm test-react-docker

now our application start
exmp img

![](https://i.imgur.com/KT2bGx3.png)


# Running process check inside docker
if we want to check running process
we will use command

``docker ps``


![](https://i.imgur.com/Gs5oBtD.png)


up means start time.

and for stop we will use cmd

``docker stop e44d31d3ed04``

there we can use Container ID or we can use image name.


if we start interactive mode we will not able to user our terminal so we will use detatach mode.

![](https://i.imgur.com/sPU8307.png)




# Detache mode


docker run --name react-docker-container -d --rm test-react-docker

we will use -d

and now we not able to use local host.
because docker has his own netowrk.
wo we have to give the port to the docker of or host port..

wo we will do port maping.
we do port maping like this 3000:3000
left side is port our host port and right side port is container port.

in our case we are using vite. so vite port is 5173
so we do mapping 

5173:5173

for that we will use **-p 3000:3000** as a example.

now full cmd as a example.

```cmd
docker run --rm --name react-docker-container -d -p 5173: 5173 test-react-docker
```

it will give us container id
``768564893d7d12eb6626af6b218ed71530f31fd7e316bf5543f2ac9752ab67ac``


here vite create issue with port mapping
so we will edit some changes

reference https://javascript.plainenglish.io/step-by-step-guide-to-dockerize-react-app-created-using-vite-90772423f7fb


now we setup vite config file
vite.config.js

```js
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

  

export default defineConfig({

  plugins: [react()],

  server: {

    watch: {

      usePolling: true,

    },

    host: true, // needed for the Docker Container port mapping to work

    strictPort: true,

    port: 3000, // you can replace this port with any port

  }

})
```


![](https://i.imgur.com/IwI9a0O.png)



# mount host folder

if we change host then refelct to container. we do sync.
we will use **-v**
and complete and current path.

we are using linux so we will use. **$(pwd):/app**

complete cmd

```cmd
docker run --rm --name react-docker-container -d -p 3000:3000 -v $(pwd):/app test-react-docker
```

one more case directory name should not contain uppercase name of directory or space between names

still having issue. we will rebuild docker image. 
using this cmd
```
 docker build -t test-react-docker .
```
which we used first time.

now docker is working. 🎉



# interact mode open

docker exec -it container_ID bash




# Hot reload not working this case.

for that we will add one more environment variable  **-e CHOKIDAR_USEPOLING=true**


```cmd
docker run --rm --name react-docker-container -e CHOKIDAR_USEPOLLING=true -d -p 3000:3000 -v $(pwd):/app test-react-docker
```