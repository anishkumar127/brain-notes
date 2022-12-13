
https://stackoverflow.com/questions/64815012/why-does-react-router-not-works-at-vercel/65644138#65644138


Add a `vercel.json` file at the root of your project, and use "rewrites" to rewrite all incoming paths to refer to your index path.

For example:

```json
{
  "rewrites":  [
    {"source": "/(.*)", "destination": "/"}
  ]
}
```

https://vercel.com/docs/project-configuration#project/rewrites

