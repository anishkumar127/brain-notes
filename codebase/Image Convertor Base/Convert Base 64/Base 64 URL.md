```ts
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

</head>

<body>

    <input type="file" id="fileInput">

    <script>

        const fileInput = document.getElementById("fileInput")

        fileInput.addEventListener("change", (e)=>{

            const file = fileInput.files[0]; // single file.

            const reader = new FileReader();

            reader.addEventListener("load",()=>{

                console.log(reader.result);

                console.log("progress"<reader.onprogress)

            })

            reader.readAsDataURL(file);

        })

    </script>

</body>

</html>
```