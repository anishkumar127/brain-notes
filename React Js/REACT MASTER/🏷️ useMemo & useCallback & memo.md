# Fibonacci Series

![](https://i.imgur.com/5f9Lek8.png)


**its take time because when do high calculation. its stuck the page and crash the application**

- its slow the application. because when we do anything
- or components re render
- its do the calculation again
- and its get application slow
- because this take time to re calculate the value.

# now do useMemo

```js
import { useMemo, useState } from "react";

function fib(n) {

  if (n === 1 || n === 2) return 1;

  return fib(n - 1) + fib(n - 2);

}

function Counter() {

  console.log("render Counter");

  const [number, setNumber] = useState(40);

  

  function handleClick(e) {

    e.stopPropagation();

    setNumber((number) => number + 1);

    setNumber((number) => number + 1);

    setNumber((number) => number + 1);

  }

  

  const fibMemorized = useMemo(() => fib(number), [number]);

  

  return (

    <>

      <h1 style={{ color: "white" }}>{number} | {fibMemorized}</h1>

      <button onClick={handleClick}>Add</button>

    </>

  );

}

  

export default Counter;
```

![](https://i.imgur.com/VKFjjw4.png)


- so now its working fine.
- if we do plus + 1 like we change number then it will take again that much time
- so its store the calculation which is using again and again but if we change value then it will take as much time as calculation required.

# now if we do fib function inside components function

![](https://i.imgur.com/Shmd1cx.png)


and useMemo will require the fib dependency and if we pass the function dependency then it will also cause the error because of every render fib function re call.

- over here we are not memorization the function
- we are memorizing the value.


# useCallback

- its use to memorize the function also.
```js
import { useCallback, useMemo, useState } from "react";

  

function Counter() {

  console.log("render Counter");

  const [number, setNumber] = useState(40);

  

  function handleClick(e) {

    e.stopPropagation();

    setNumber((number) => number + 1);

    setNumber((number) => number + 1);

    setNumber((number) => number + 1);

  }

  

  const fibFunctonMemorized = useCallback(function fib(n) {

    if (n === 1 || n === 2) return 1;

    return fib(n - 1) + fib(n - 2);

  }, [])

  

  const fibMemorized = useMemo(() => fibFunctonMemorized(number), [number, fibFunctonMemorized]);

  

  return (

    <>

      <h1 style={{ color: "white" }}>{number} | {fibMemorized}</h1>

      <button onClick={handleClick}>Add</button>

    </>

  );

}

  

export default Counter;
```


![](https://i.imgur.com/k9JXheN.png)

- so we memorized the function.
- and pass that memorrized function into useMemo and also set the dependency of that memorized function into useMemo
- so we memorized the function this case if re render the function and compoenents then it will return the memorized function which will not take time.

# Memorized Components using memo

![](https://i.imgur.com/8EUL9Y1.png)


- issue is render PlayButton again again render whatever we are doing inside our componets.
- so we need to memorized this components also.

```js
import "./PlayButton.css";

import { memo, useState } from "react";

  

const PlayButton = memo(function PlayButton({ message, children, onPlay, onPause }) {

  console.log("render PlayButton");

  

  const [playing, setPlaying] = useState(false);

  function handleClick(e) {

    e.stopPropagation();

  

    if (playing) onPause();

    else onPlay();

  

    setPlaying(!playing);

  }

  

  return (

    <button onClick={handleClick}>

      {children} : {playing ? "⏸️" : "⏯️"}

    </button>

  );

})

  

export default PlayButton;
```


![](https://i.imgur.com/Sur8LxE.png)



- but its still not memorized because of props and function. its create the copy again and again 
- see the below image.
![](https://i.imgur.com/68bMutq.png)


- here we can see playbutton taking function and props and its creating the copy.
- because of this components not memorizing.
-
- lets solve this issue also

![](https://i.imgur.com/dCyhpL6.png)


- but we can't call the hooks like this.
- because of hooks always call at top level.

![](https://i.imgur.com/1yttv2f.png)


- their also issue because of video.title we are getting from map
- and we can't put this things inside map because hooks work on top level.
- at this time we are avoid and remove title and check memorized function
- and memorized compoents working or not.

- next
- ![](https://i.imgur.com/o4Mgo6x.png)
![](https://i.imgur.com/xRzRAmb.png)


![](https://i.imgur.com/LGhBDaV.png)


- now we memorized the function and components both
- so playButton not rendering again and again.



# next video render issue again and again

![](https://i.imgur.com/WuxlIz0.png)


- so we memorized Video components
![](https://i.imgur.com/uIH2HT1.png)


- but still not memorized so we memorized the editVideo function

![](https://i.imgur.com/QGHbsD4.png)

- after this still not memorized.

- next
![](https://i.imgur.com/FUQ3zwf.png)

because of
![](https://i.imgur.com/7D9HxAi.png)

- memorzied the play button also. 
![](https://i.imgur.com/9ocgInW.png)


![](https://i.imgur.com/mcQjwo0.png)


```js
import Video from "./Video";

import PlayButton from "./PlayButton";

import useVideoContext from "../hooks/VideoContext";

import axios from "axios";

import { useCallback, useEffect, useMemo } from "react";

import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({ editVideo }) {

  const videos = useVideoContext();

  const dispatch = useVideoDispatch();

  

  const url = "https://my.api.mockaroo.com/video.json?key=d63fc1d0";

  

  useEffect(() => {

    async function getVideos() {

      const res = await axios.get(url);

      dispatch({ type: "LOAD", payload: res.data })

    }

    getVideos();

  }, [dispatch])

  

  const Play = useCallback(() => console.log('Playing..'), [])

  const Pause = useCallback(() => console.log('Pause..'), [])

  const memoButton = useMemo(() => {

    <PlayButton

      onPlay={Play}

      onPause={Pause}

    >

      {/* {video.title} */}

      Play

    </PlayButton>

  }, [Play, Pause])

  return (

    <>

      {videos.map((video) => (

        <Video

          key={video.id}

          title={video.title}

          views={video.views}

          time={video.time}

          channel={video.channel}

          verified={video.verified}

          id={video.id}

          editVideo={editVideo}

        >

          {memoButton}

        </Video>

      ))}

    </>

  )

}

  

export default VideoList
```

