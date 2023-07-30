```ts
import dayjs from "dayjs";

// IMPORT ARRAY

import toArray from "dayjs/plugin/toArray";

dayjs.extend(toArray);

  

// From NOW

  

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

  

// weekdays

import weekday from "dayjs/plugin/weekday";

dayjs.extend(weekday);

  

const DayJsTimeFormatting = () => {

  const now = dayjs();

  var preDate = new Date(2018, 8, 18);

  const formattedDate = dayjs().format("YYYY-MM-DD");

  var preExistingDate = dayjs(preDate);

  const fixedDate = dayjs("2023-01-01");

  

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

      <div>

        <p>Convert to array - {now.toArray()}</p>

        <h1>

          Day Difference in month/days/year - {fixedDate.diff(now, "month")}

        </h1>

      </div>

      <div>

        <h1>days ago - {fixedDate.fromNow()}</h1>

        <h1>days ago - {dayjs("2023-04-11").fromNow()}</h1>

        <h1>diff days ago - {dayjs("2023-04-11").from("2023-05-11")}</h1>

      </div>

      <div>

        <h1>weekday - {fixedDate.weekday(2).format("DD")}</h1>

        <h1>weekday - {dayjs("2023-04-05").weekday()}</h1>

        <h2>{now.weekday(2).format("ddd DD MMM")}</h2>

        <h2>{now.weekday(-7).format("ddd DD MMM")}</h2>

      </div>

    </div>

  );

};

export default DayJsTimeFormatting;
```

