
## What useMemo does

In short, **useMemo** calls a function when dependencies change, and memoizes (remembers) the **result of the function** between renders.

This is in contrast with **useCallback** which remembers an **existing value** (typically a function's definition), between renders.

You want to use useMemo to save yourself from rerunning an expensive calculation to generate a new value, and you want to use useCallback to store an existing value.

## When to use useMemo

This part is where it's easy to get frustrated. There are a lot of blog posts out there describing useMemo, and then presenting examples of when **not** to use it.

Unfortunately, it needs repeating: don't use useMemo until you notice parts of your app are frustratingly slow. "Premature optimisation is the root of all evil", and throwing useMemo everywhere is premature optimisation.

Here are a couple of cases when you **should** consider using useMemo:

-   You're noticing a component's render is frustratingly slow, and you're passing a calculation to an unknowable number of children, such as when rendering children using `Array.map()`
-   Your app often becomes unresponsive because you're fetching a large amount of data, and having to transform it into a usable format

The key is to focus on the problem.

"My app is slow, and calculation-heavy" is a problem that useMemo helps to solve. Run your app through React DevTools Profiler, as well as [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) or [WebPageTest](https://webpagetest.org/) to understand its performance metrics, wrap your calculation in useMemo, then measure again.

"I just learned useMemo, and want to use it everywhere" is focusing on the solution, and will lead you to premature optimisation, and a potentially slower app.



## Why not use useMemo everywhere then?

In short, it's not a free performance optimisation.

There's an additional cost (memory usage, for one) incurred when setting up `useMemo`, that can very quickly outweigh the performance benefit of remembering every single function's possible value.

When we use useMemo, we're taking up more memory in order to free up CPU time. If your app is hammering the CPU with a lot of calculations, that's when you might consider taking up some memory and use useMemo instead.


#note

## What about stable references?

If you want to keep a stable reference to an object/array **that doesn't require recalculation**, consider using useRef.

On the other hand if you need to recalculate the value when dependencies change, useMemo is the hook for you.

## Potential mistakes when using useMemo

Using useMemo isn't free of pitfalls as well - one of the big ones is that the cache isn't guaranteed to keep all of its values between renders. Taken from the docs:

> You may rely on useMemo as a performance optimization, not as a semantic guarantee

Translation: the cache isn't stable!


