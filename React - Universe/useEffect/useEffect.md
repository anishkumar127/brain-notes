
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

