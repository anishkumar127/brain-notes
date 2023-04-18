#### Caveats [](https://react.dev/reference/react/useRef#caveats "Link for Caveats")

-   You can mutate the `ref.current` property. Unlike state, it is mutable. However, if it holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object.
-   When you change the `ref.current` property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.
-   Do not write _or read_ `ref.current` during rendering, except for [initialization.](https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents) This makes your component’s behavior unpredictable.


In Strict Mode, React will **call your component function twice**
This is development-only behavior and does not affect production. Each ref object will be created twice, but one of the versions will be discarded. If your component function is pure (as it should be), this should not affect the behavior.


By using a ref, you ensure that:

-   You can **store information** between re-renders (unlike regular variables, which reset on every render).
-   Changing it **does not trigger a re-render** (unlike state variables, which trigger a re-render).
-   The **information is local** to each copy of your component (unlike the variables outside, which are shared).



# Ref & useForwardedRef
[Reference](https://react.dev/reference/react/useRef)

