
we will run database server.
we want to default user create.
wo we need to pass some -e variable.

in cmd to come new line we will use "\" cmd
backslash

so now cmd

```cmd
docker run --rm --name mongo-container \ 
-e MONGO_INITDB_ROOT_USERNAME: 'root' \
-e MONGO_INITDB_ROOT_PASSWORD: 'secret' \
mongo
```

if it have our local host it will get from local host otherwise it will download latest version from docker hub.

version also can use custom version **mongo:4.2** something like that.

we will run -d mode

```cmd
docker run -d --rm --name mongo-container \
-e MONGO_INITDB_ROOT_USERNAME: 'root' \
-e MONGO_INITDB_ROOT_PASSWORD: 'secret' \
mongo
```


if some cases above code not working then we do this.

```cmd
docker run --name mongo-container -d mongo
```

