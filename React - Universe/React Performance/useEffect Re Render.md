
![](https://i.imgur.com/mIHD3nx.png)



- its re-rendering every time before when dependency is car only.
- even if `Mileage` is same number.
- so avoid this re render issue we will set the `car.mileage` this will specify that only when `Mileage` change then re render if same value then it will not re render.

- There also second option like we case use `useMemo` hook



