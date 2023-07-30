
```ts
import React, { useRef } from 'react';

import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

  

function Editor() {

  const quillRef = useRef();

  

  const insertImage = base64data => {

    const range = quillRef.current.getEditor().getSelection(true);

    quillRef.current.getEditor().insertEmbed(range.index, 'image', base64data, 'user');

  }

  

  const handleInsertImage = () => {

    // const imageUrl = prompt('Enter the URL of the image');

    const imageUrl = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";

    if (imageUrl) {

      fetch(imageUrl)

        .then(response => response.blob())

        .then(blob => {

          const reader = new FileReader();

          reader.readAsDataURL(blob);

          reader.onloadend = () => {

            const base64data = reader.result.split(',')[1];

            insertImage(base64data);

          }

        });

    }

  }

  

  return (

    <ReactQuill

      ref={quillRef}

      modules={{

        toolbar: {

          container: [

            [{ 'header': [1, 2, 3, false] }],

            ['bold', 'italic', 'underline'],

            ['image']

          ],

          handlers: {

            'image': handleInsertImage

          }

        }

      }}

    />

  );

}

  

export default Editor
```