
to check docker installed or not

docker -v

reference also can try for more information https://medium.com/geekculture/getting-started-with-docker-in-your-react-js-application-the-basics-6e5300cf749d

-   **Docker:**

> Docker, in simple words is a way to package software, so it is able to run on any hardware.

Docker deploys _(packages)_ your web application into containers. These containers take your code, dependencies, and everything that it needs, then allows it to run on any environment.

-   **Images:** A docker image contains everything you need to run your application. It is a template that holds a set of instructions needed to create a working container.
-   **Container:** This is a running process/instance of an image. A docker container ‘contains’ everything your application needs to run and can run your application in any environment — as discussed above.
-   **Dockerfile:** A dockerfile is a blueprint/set of instructions that defines how your image is built. It is a series of steps that you have defined, and that must happen before your image is successfully built.
-   **Docker hub:** Think of Github. Docker hub is a registry that allows you to host your images and gives you access to a wide number of other docker images that you can pull and work with.
-   **Dockerignore:** The _.dockerignore_ file acts like the _.gitignore_ file. It contains any file in your local application that you do not want in your docker image.


## Getting Started

The first thing we are going to do in our React application is create a file in our root directory called _Dockerfile_. We defined it as a series of steps, a set of instructions, a blueprint — that defines how your image is built. We also said that an _image_ holds every instruction you need to create a working container and that a _container_ is a running instance of an image that allows your application to run on any environment. Now that we are all caught up, let us write some step-by-step instructions in our dockerfile, telling it how we want our image to be built.

FROM node:latest

The keyword here is **FROM**, our first step/instruction here says that we want to work with the latest node image.

WORKDIR /app

**WORKDIR** here says that we want to add the source code of our application to the image. This line of instruction creates a directory called _app_ in our image, and adds our source code to that directory.

COPY package.json ./

In our application, we have installed some dependencies. **COPY** here copies the content of our _packge.json_ file.

RUN npm install

**RUN** npm install goes ahead to install all the dependencies we might have installed locally, in our image.

COPY . .

What this does is it copies all the files in your local directory to the _/app_ directory created in our image.

CMD ["npm", "start"]

This final command starts up the application after every single step has been navigated successfully.

Your _dockerfile_ should now look like this:

FROM node:latestWORKDIR /appCOPY package.json ./RUN npm installCOPY . .CMD ["npm", "start"]

## Using .dockerignore

Before running our application to see if our setup works, there is one thing we have to do. Now the _.dockerignore_ file is home to everything that you do not want in your docker image. In our application, the one thing we do not need in our image is the _node_module_ folder. Why? Well in our _dockerfile_, we are running _npm install_ in order to get access to all the dependencies in our application. This in itself will create a _node_modules_ folder.

When we copy all the files from local to image, we copy the _node_modules_ folder too. To curb this, in your root directory, create a _.dockerignore_ file. It is rather simple what we are to do here, we are including the files that have no business being in our docker image:

node_modulesDockerfile.git

## Building our image

Now to get our container up and running, we have to first run the build command. This command goes over every step we have defined in our dockerfile as you will see when you run it:

docker build -t nameofyourapp:latest .

When this runs, in your terminal you will see as it goes over every step that we defined in our dockerfile.

![](https://miro.medium.com/max/875/1*75svS3GaD_y2lUfymC4DyA.png)

## Running our container

To run our docker container, in your terminal write the command:

docker run --name nameofyourchoice -d -p 3000:3000 nameofyourapp:latest

-   **-d:** This runs your container in detached mode. Simply put, when you leave a terminal session, it keeps your container running still.
-   **-p:** This is used to publish the port you would like your application to run on. If you run your container without publishing a port, whatever is running in your container will only be accessible in your container.

After your container runs successfully, you will see an id like this:

6d1670d1e2ff97997fa1a071aff4e558cfd4ff33a4d7efb5001565832887af24

Your id will be different as it is specific to your application.

To further confirm that our application is running as expected, you can run this command to see the images that are currently running:

docker images

It will show you something like this:

REPOSITORY      TAG       IMAGE ID       CREATED          SIZE    
react          latest    64027c617dab   15 minutes ago   1.37GB

For further confirmation, let us run our published port in our browser and see if anything comes up. So in your browser — if you still have your React app running from earlier on _localhost:3000_, go to your terminal and stop the process, then open up _localhost:3000_ again without running _npm start_. What you should see is a simple page that says “Hello World”, as seen below: