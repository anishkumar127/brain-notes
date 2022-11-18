- Can Deploy only low level api like **CURD OPERATION**

> To use Make File as a name of **vercel.json**

- File should be on root directory same level of **package.json**

**Command -> **`` touch vercel.json``


_inside **vercel.json_**

```js
{

    "version": 2,

    "builds": [

      {

        "src": "./index.js",

        "use": "@vercel/node"

      }

    ],

    "routes": [

      {

        "src": "/(.*)",

        "dest": "/"

      }

    ]

  }
```


- Can also set envionmental variable 