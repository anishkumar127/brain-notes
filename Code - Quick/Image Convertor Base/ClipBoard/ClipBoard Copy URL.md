
```ts
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Base64 Converter</title>
</head>
<body>
    <input type="file" id="fileInput">
    <img id="imageOutput" alt="base64 to Image">
    <br>
    <button id="copyButton">Copy to Clipboard</button>
    <p id="copyMessage"></p>

    <script>
        const fileInput = document.getElementById("fileInput");
        const imageOutput = document.getElementById("imageOutput");
        const copyButton = document.getElementById("copyButton");
        const copyMessage = document.getElementById("copyMessage");

        fileInput.addEventListener("change", (e)=>{
            const file = fileInput.files[0]; // single file.
            const reader = new FileReader();
            reader.addEventListener("load",()=>{
                imageOutput.src = reader.result; // set the image source to the base64 data
            });
            reader.readAsDataURL(file);
        });

        copyButton.addEventListener("click", () => {
            const textarea = document.createElement("textarea");
            textarea.value = imageOutput.src;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            copyMessage.innerText = "Copied to clipboard!";
        });
    </script>
    
</body>
</html>

```