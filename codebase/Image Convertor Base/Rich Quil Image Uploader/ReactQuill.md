```ts
import React, { useState } from "react";

import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

  

const modules = {

  toolbar: [

    ["image"],

  ],

};

  

const formats = [

  "image",

];

  

function Editor() {

  const [value, setValue] = useState("");

  

  const handleChange = (content, delta, source, editor) => {

    console.log(source)

    // console.log(editor.getHTML());

    // console.log(JSON.stringify(editor.getContents()));

    setValue(editor.getHTML());

  };

  return (

      <ReactQuill

        style={{ height: "600px" }}

        theme="snow"

        modules={modules}

        formats={formats}

        value={value}

        onChange={handleChange}

      />

  );

}

  

export default Editor;
```


# Working

```ts
import React, { useState } from "react";

import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

  

const modules = {

  toolbar: [

    ["image"],

  ],

};

  

const formats = [

  "image",

];

  

function Editor() {

  const [value, setValue] = useState("");

  

  const handleChange = (content, delta, source, editor:any) => {

    console.log(editor.getHTML());

    // console.log(JSON.stringify(editor.getContents()));

    setValue(editor.getHTML());

  };

  return (

      <ReactQuill

        style={{ height: "600px" }}

        theme="snow"

        modules={modules}

        formats={formats}

        value={value}

        onChange={handleChange}

      />

  );

}

  

export default Editor;
```


