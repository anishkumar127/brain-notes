- its use to lifting the useRef like we lifting the useState


![](https://i.imgur.com/VeN0ppH.png)


- wrapping same like useMemo
-
![](https://i.imgur.com/t8DhmrX.png)


```js
  const inputRef = useRef(null);
```

![](https://i.imgur.com/wB6Ng6E.png)


- ref is fixed. keyword

![](https://i.imgur.com/1QkABae.png)

![](https://i.imgur.com/w9lJhun.png)



- onclick focus to input.
![](https://i.imgur.com/lRKtRoI.png)



# useImperativeHandle

`useImperativeHandle` is a React Hook that lets you customize the handle exposed as a ref.

- Its used to we want to give only some part of reference.
- we don't want to give all the reference.
- so we will not pass the same ref.
- we will pass the ref which is made from imperativeHandle.

![](https://i.imgur.com/vfVttop.png)


![](https://i.imgur.com/2ul90h0.png)


![](https://i.imgur.com/QeHbuNq.png)


- its like proxy 
- we can't access anything without this function and their value.

