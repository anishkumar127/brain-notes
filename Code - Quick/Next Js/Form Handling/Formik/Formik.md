
```ts
import React from "react";

import { useFormik } from "formik";

import { signUpSchema } from "@/schemas";

  

const initialValues = {

  name: "",

  email: "",

  password: "",

  confirm_password: "",

};

export const FormHandling = () => {

  const {

    values,

    errors,

    handleBlur,

    handleChange,

    handleSubmit,

    handleReset,

    touched,

  } = useFormik({

    initialValues: initialValues,

    validationSchema: signUpSchema,

    onSubmit: (values, action) => {

      console.log(values);

      action.resetForm();

    },

  });

  console.log(errors);

  return (

    <div>

      <form onSubmit={handleSubmit}>

        <div className="">

          <label htmlFor="name">Name</label>

          <input

            type="name"

            autoComplete="off"

            name="name"

            id="name"

            placeholder="Name"

            value={values.name}

            onChange={handleChange}

            onBlur={handleBlur}

          />

          {errors.name && touched.name ? <p>{errors.name}</p> : null}

        </div>

  

        <div>

          <label htmlFor="email"></label>

          <input

            type="email"

            name="email"

            id="email"

            autoComplete="off"

            placeholder="Email"

            value={values.email}

            onChange={handleChange}

            onBlur={handleBlur}

          />

          {errors.email && touched.email ? <p>{errors.email}</p> : null}

        </div>

  

        <div>

          <label htmlFor="password">Password</label>

          <input

            type="password"

            autoComplete="off"

            name="password"

            id="password"

            placeholder="Password"

            value={values.password}

            onChange={handleChange}

            onBlur={handleBlur}

          />

          {errors.password && touched.password ? (

            <p>{errors.password}</p>

          ) : null}

        </div>

        <div>

          <label htmlFor="confirm_password">Confirm Password</label>

  

          <input

            type="password"

            id="confirm_password"

            autoComplete="off"

            name="confirm_password"

            placeholder="Confirm Password"

            value={values.confirm_password}

            onChange={handleChange}

            onBlur={handleBlur}

          />

          {errors.confirm_password && touched.confirm_password ? (

            <p>{errors.confirm_password}</p>

          ) : null}

        </div>

        <div>

          <a href="#">Want to register using Gmail?</a>

          <button type="submit">Registration</button>

        </div>

      </form>

    </div>

  );

};
```


# signUpSchema - YUP Schema Validation

```ts
import * as Yup from "yup";

  

// Create Schema

  

export const signUpSchema = Yup.object({

  name: Yup.string().min(2).max(25).required("Please enter your name"),

  email: Yup.string().email().required("Please enter your email"),

  password: Yup.string().min(6).required("Please Enter your Password"),

  confirm_password: Yup.string()

    .required()

    .oneOf([Yup.ref("password"), null], "Password must match"),

});
```



