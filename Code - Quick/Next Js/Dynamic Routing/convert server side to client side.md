# DayJsTimeFormatting - Components
```ts
import dayjs from "dayjs";

  

const DayJsTimeFormatting = () => {

  const now = dayjs(Date.now());

  var preDate = new Date(2018, 8, 18);

  const formattedDate = dayjs().format("YYYY-MM-DD");

  var preExistingDate = dayjs(preDate);

  console.log(preExistingDate.format());

  

  return (

    <div>

      {formattedDate}

      <h1>Methods</h1>

      <p>Date now - {now.format()}</p>

      <p>preExistingDate - {preExistingDate.format()}</p>

      <div>

        <h3>Date individual List</h3>

        <p>hours - {now.hour()} </p>

        <p>minutes - {now.minute()} </p>

        <p>seconds - {now.second()} </p>

        <p>milliseconds - {now.millisecond()} </p>

        <p>date - {now.date()}</p>

        <p>month - {now.month()} </p>

        <p>Day in month - {now.daysInMonth()} </p>

        <p>year - {now.year()} </p>

      </div>

    </div>

  );

};

export default DayJsTimeFormatting;
```

# Index.tsx

```ts
import dynamic from "next/dynamic";

export default function Home() {

  const DayJsTimeFormatting = dynamic<Record<string, unknown>>(

    () => import("../components/DayJs/DayJsTimeFormatting"),

    { ssr: false }

  );

  

  return (

    <>

      <DayJsTimeFormatting />

    </>

  );

}
```


