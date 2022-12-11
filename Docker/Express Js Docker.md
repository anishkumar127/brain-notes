
dockerfile create and insert data like this.

```dockerfile
FROM node:16

  

WORKDIR /app

  

COPY ./package.json ./

  

RUN npm install

  

COPY . .

  

EXPOSE 5000

  

CMD ["npm","run","dev"]
```

and also add .dockerignore file

```dockerignore
node_modules

.env

.git

.DS_Store

dist

.aws

.coverage
```

now create image of docker.

cmd
```cmd
docker build -t express-docker-image .
```

docker all images checks cmd

```cmd
docker image ls
```


now build container

docker run use for run container 

```cmd
docker run --rm -d -p 5000:5000 --name express-docker-container express-docker-image
```


and sync

```cmd
docker run --rm -d -p 5000:5000 -v $(pwd):/app --name express-docker-container express-docker-image
```

and some cases nodemon not working.
package.json and inside script 
``nodemon -L server.js``



# Environment Variable 

process.env PORT  , use external port.
we will use 

**-e PORT='3000'**

now we need to mapping this with host port

5000:3000 like that.

```cmd
docker run --rm -d -p 5000:3000 -v $(pwd):/app -e PORT='3000' --name express-docker-container express-docker-image
```


if we have lots of env variable. 
so we have lots of env variable inside .env file.

so we will use **--env-file ./.env** 

```cmd
docker run --rm -d -p 5000:3000 -v $(pwd):/app --env-file ./.env --name express-docker-container express-docker-image
```

