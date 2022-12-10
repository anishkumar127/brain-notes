
1. cntrl+shift+p dev container config.
2. select node & JavaScript
3. and then select node version
4. and then select docker

**Package** npm i express mongoose jsonwebtoken dotenv cookie-parser bcryptjs 
and npm i nodemon -D

**package.json** file edit and add inside script -> **"script":"nodemon index.js"**



# Create Server

```js
require('dotenv').config();

const express = require('express');

const app = express();

  
  

// home route

app.get("/",(req,res)=>{

    res.send("hello is it running see it now");

})

  
  

module.exports = app
```

# index file while creating server

```js
const app = require('./app');

const {PORT} = process.env || 8000;

  

app.listen(PORT,()=>{

    console.log(`Server is running  at port : ${PORT}`);

})
```



# Setup devcontainer.json File

we have to setup this because every time we start codespaces we want to automatic install everything we ready we don't need to install every time. so we will create a **dev container** file.
inside we put our 
1. node js version 
2. forward port number
3. vs code customization extension id 
4. npm install or yarn install post create command which automatic install our packages in package.json file.

example:-
```js
// For format details, see https://aka.ms/devcontainer.json. For config options, see the

// README at: https://github.com/devcontainers/templates/tree/main/src/javascript-node

{

    "name": "Node.js",

    "image": "mcr.microsoft.com/devcontainers/javascript-node:16-bullseye",

    "features": {

        "ghcr.io/devcontainers/features/node:1": {}

    },

  

    // Features to add to the dev container. More info: https://containers.dev/features.

    // "features": {},

  

    // Use 'forwardPorts' to make a list of ports inside the container available locally.

    "forwardPorts": [5000],

  

    // Use 'postCreateCommand' to run commands after the container is created.

    "postCreateCommand": "npm install",

  

    // Configure tool-specific properties.

    "customizations": {

        "vscode": {

            "extensions": [

                "dbaeumer.vscode-eslint",

                "WakaTime.vscode-wakatime",

                "streetsidesoftware.code-spell-checker",

                "xabikos.JavaScriptSnippets",

                "esbenp.prettier-vscode",

                "christian-kohler.path-intellisense",
                "rangav.vscode-thunder-client"

  

            ]

        }

    },

  

    // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.

    // "remoteUser": "root"

}
```


