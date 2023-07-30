**In JavaScript, a `function () {}` or `() => {}` always creates a _different_ function,** similar to how the `{}` object literal always creates a new object. Normally, this wouldn’t be a problem, but it means that `ShippingForm` props will never be the same, and your [`memo`](https://react.dev/reference/react/memo) optimization won’t work. This is where `useCallback` comes in handy:


**By wrapping `handleSubmit` in `useCallback`, you ensure that it’s the _same_ function between the re-renders** (until dependencies change). You don’t _have to_ wrap a function in `useCallback` unless you do it for some specific reason


The difference is in _what_ they’re letting you cache:

-   **[`useMemo`](https://react.dev/reference/react/useMemo) caches the _result_ of calling your function.** In this example, it caches the result of calling `computeRequirements(product)` so that it doesn’t change unless `product` has changed. This lets you pass the `requirements` object down without unnecessarily re-rendering `ShippingForm`. When necessary, React will call the function you’ve passed during rendering to calculate the result.
-   **`useCallback` caches _the function itself._** Unlike `useMemo`, it does not call the function you provide. Instead, it caches the function you provided so that `handleSubmit` _itself_ doesn’t change unless `productId` or `referrer` has changed. This lets you pass the `handleSubmit` function down without unnecessarily re-rendering `ShippingForm`. Your code won’t run until the user submits the form.


