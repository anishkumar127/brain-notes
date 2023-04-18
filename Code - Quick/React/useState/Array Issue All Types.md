
[Array Documentation ](https://react.dev/learn/updating-arrays-in-state#adding-to-an-array)

## Recap[](https://react.dev/learn/updating-arrays-in-state#recap "Link for Recap")

-   You can put arrays into state, but you can’t change them.
-   Instead of mutating an array, create a _new_ version of it, and update the state to it.
-   You can use the `[...arr, newItem]` array spread syntax to create arrays with new items.
-   You can use `filter()` and `map()` to create new arrays with filtered or transformed items.
-   You can use Immer to keep your code concise.



It is useful to remember which operations on arrays mutate them, and which don’t. For example, `push`, `pop`, `reverse`, and `sort` will mutate the original array, but `slice`, `filter`, and `map` will create a new one.