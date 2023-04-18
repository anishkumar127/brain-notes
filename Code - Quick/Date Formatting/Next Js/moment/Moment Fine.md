```ts
import moment from "moment";

const TimeFormat = () => {

  return (

    <div>

      <p> Basic - {moment().format()}</p>

      <div>Day - {moment().format("dddd")}</div>

  

      <p>

        format {"=>"} {moment().format("MMMM Do YYYY, h:mm:ss a")}

      </p>

      <p>Start of Days ago - {moment().startOf("day").fromNow()}</p>

      <p>end of Days ago - {moment().endOf("day").fromNow()}</p>

      <p>minutes - {moment().startOf("hour").fromNow()}</p>

      <p>Today - {moment().calendar()}</p>

      <p>in Details - {moment().format("LLLL")}</p>

    </div>

  );

};

  

export default TimeFormat;
```

# Index
```ts
import dynamic from "next/dynamic";

export default function Home() {

  const TimeFormat = dynamic(

    () => import("../components/momentTime/TimeFormat"),

    { ssr: false }

  );

  return (

    <>

      <TimeFormat />

    </>

  );

}
```