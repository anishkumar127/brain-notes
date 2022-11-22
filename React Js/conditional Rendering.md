```js
import React from 'react'

function StudentDashboard(){

    return <h1>hello student</h1>

}

function TeacherDashboard (){

    return <h1>hello Teacher</h1>

}

 function Dashboard() {

    const loggedInUser  = "teacher";

    // 1st way

    // let component =  loggedInUser==="student"?<StudentDashboard/>:<TeacherDashboard/>

  

    // 2nd way

    // let component = <TeacherDashboard/>;

    // if(loggedInUser==="student"){

    //     component=<StudentDashboard/>

    // }

  

    // 4th way using object . and object like a switch case.

const component = {

    student:<StudentDashboard/>,

    teacher:<TeacherDashboard/>

}

  return (

    <div>

    {/* 1st and 2nd way */}

    {/* {component} */}

    {/* third way */}

    {/* {loggedInUser==="student"?<StudentDashboard/>:<TeacherDashboard/>} */}

    {/* 4th way */}

    {component[loggedInUser]}

  

    </div>

  )

}

export {Dashboard}
```


![](https://i.imgur.com/hRDoCQy.png)
