
# 1.

![](https://i.imgur.com/rGphSAr.png)


- over here setting the state to same value like 0. in this case useEffect not re rendering.


#  Next

![](https://i.imgur.com/QqVrguB.png)


- now State is a Object.

![](https://i.imgur.com/1vNs0OH.png)


**So old case like setting 0. this case is premitive value.**
*and if we check doing the is oldState===newState then it will give the true. because data is not chaning in this case useEffect not re rendering. because state not changing.*


**in Object case if we do oldState===newState then it will give the false.**
![](https://i.imgur.com/xVgdRvi.png)


**example.**

```ts
const a = {};
const b = {};

a===b // false.
```

- it will never be same.

**Next**

![](https://i.imgur.com/4dJYD9v.png)

- it will not call useEffect. because this case name and person will be same.
- only name and person will change then useEffect will call otherwise will not.

**Note**

```ts
[] === [] // false
```

- in this case also non premitive type so this case also will be false.

**Alternative way to  instead person.name etc.**


#### useMemo();

![](https://i.imgur.com/Fe39HGb.png)

- alternative way is using the useMemo() hook.

![](https://i.imgur.com/yxzSdg5.png)

# Next

# Not Sync 

![](https://i.imgur.com/0jkxVSF.png)


- whenever state change useeefect set counter in setnumber
- and time visible like 51 - 53 - 56 ettc.

# resolve

*we need cleanup function*

![](https://i.imgur.com/6Xvb1Np.png)

# Network calls

![](https://i.imgur.com/91U8RP6.png)

- move one components to another or one route to another route. api calls not stop and set data. even different route moved still set data & fetch calls
# avoid issue

![](https://i.imgur.com/OmFdWs5.png)

- cleanup function needed
-  but api still calling but data set stopped
## avoid api calls 

![](https://i.imgur.com/FZpkFZy.png)
![](https://i.imgur.com/ZMigF9X.png)


### with axios

![](https://i.imgur.com/R3UwX3U.png)
![](https://i.imgur.com/vqOPAZ6.png)
![](https://i.imgur.com/obeAVcf.png)

- so axios also give the object and that's object is cancel.token. and that's we can get from source().

- this help to abort the api calls , unnecessary too many api calls between changing the route.

