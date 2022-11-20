
  
```javascript
const cart = {
    userId: 1234,
    items:[
        {
            productId:333,
            productPrice:100,
        },
        {
            productId:334,
            productPrice:200,
        }
    ],
    totalPrice:300,
}

```
  

## Shallow Copy
> const newCart = {...cart};

> console.log(newCart);

  > node index.js
  
```output
{
  userId: 1234,
  items: [
    { productId: 333, productPrice: 100 },
    { productId: 334, productPrice: 200 }
  ],
  totalPrice: 300
}
```

- it will create shallow copy of Object

- it will not copy nested object only copy reference of them.


## Deep Copy


- for deep copy we need to convert object to json string  and then into again object.
- then nested object also work

 > const newCart = JSON.parse(JSON.stringify(cart));
 
 
it has limitation if object not contains json format data like function it will not work.

- for that we have to use library 

