```ts
import React, { useEffect, useState } from "react";

  

export const PureFormHandling = () => {

  const [input, setInput] = useState({

    name: "",

    email: "",

    password: "",

    confirm_password: "",

  });

  const [error, setError] = useState(0);

  const [errorMsg, setErrorMsg] = useState({

    name: "",

    email: "",

    password: "",

    confirm_password: "",

    match: "",

    success: "",

  });

  

  const handleChange = (e: any) => {

    const { name, value } = e.target;

    setInput((item) => ({

      ...item,

      [name]: value,

    }));

  };

  const handleSubmit = (e: any) => {

    e.preventDefault();

    if (input.name.trim() === "") {

      setErrorMsg((err) => ({

        ...err,

        name: "name is required",

      }));

      setError(error + 1);

    } else if (input.email.trim() === "") {

      setErrorMsg((err) => ({

        ...err,

        email: "email is required",

      }));

      setError(error + 1);

    } else if (

      !input.email

        .trim()

        .match(

          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        )

    ) {

      setErrorMsg((err) => ({

        ...err,

        email: "email  is invalid",

      }));

      setError(error + 1);

    } else if (input.password.trim() === "" || input.password.length < 2) {

      setErrorMsg((err) => ({

        ...err,

        password: "password is required Or length >2",

      }));

      setError(error + 1);

    } else if (

      input.confirm_password.trim() === "" ||

      input.confirm_password.length < 2

    ) {

      setErrorMsg((err) => ({

        ...err,

        confirm_password: "confirm_password is required",

      }));

      setError(error + 1);

    } else if (input.password.trim() !== input.confirm_password.trim()) {

      setErrorMsg((err) => ({

        ...err,

        match: "password not match",

      }));

      setError(error + 1);

    } else if (error === 0) {

      console.log("input", input);

      setErrorMsg((err) => ({

        ...err,

        success: "Successfully submitted",

      }));

    }

    setTimeout(() => {

      setError(0);

      setErrorMsg({

        name: "",

        email: "",

        password: "",

        confirm_password: "",

        match: "",

        success: "",

      });

    }, 2000);

  };

  

  return (

    <div>

      <input

        type="text"

        id="name"

        name="name"

        placeholder="name"

        value={input.name}

        onChange={handleChange}

      />

      <p style={{ color: "red " }}>{errorMsg.name}</p>

      <input

        type="email"

        id="email"

        name="email"

        placeholder="email"

        value={input.email}

        onChange={handleChange}

      />

      <p style={{ color: "red " }}>{errorMsg.email}</p>

      <input

        type="password"

        id="password"

        name="password"

        placeholder="password"

        value={input.password}

        onChange={handleChange}

      />

      <p style={{ color: "red " }}>{errorMsg.password}</p>

      <input

        type="password"

        id="confirm_password"

        name="confirm_password"

        placeholder="confirm_password"

        value={input.confirm_password}

        onChange={handleChange}

      />

      <p style={{ color: "red " }}>{errorMsg.confirm_password}</p>

      <p style={{ color: "red " }}>{errorMsg.match}</p>

      <button type="submit" onClick={handleSubmit}>

        Submit

      </button>

      <p style={{ color: "red " }}>{errorMsg.success}</p>

    </div>

  );

};
```