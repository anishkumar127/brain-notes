**REDUX**
A Complex State Management Tool,
with a single store as CDS
**REDUCERS**
Manages the State and Returns the
newly updated state.
**ACTIONS**
Actions have 2 properties type: which
is a unique identifier and payload
which has data
**DISPATCH**
Dispatch is used to send actions to
update the data



![](https://i.imgur.com/HoXoTPf.png)




previous state get

To show the previous value after incrementing in React and Redux, you can use the Redux `prevState` utility function. Here is an example of how you can use it in your Redux reducer:

```
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        prevCount: prevState(state).count
      };
    default:
      return state;
  }
}

```

In the example above, `prevState` is used to get the previous value of `count` from the state, and then it is assigned to the `prevCount` property of the new state. This allows you to access the previous value of `count` in your React components.


