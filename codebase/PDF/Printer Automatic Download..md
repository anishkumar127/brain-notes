
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

    <script>

        window.print();

        window.onbeforeprint = function () {

            const blob = new Blob([document.body.innerHTML], { type: 'application/pdf' });

            const url = URL.createObjectURL(blob);

            const anchor = document.createElement('a');

            anchor.href = url;

            anchor.download = 'example.pdf';

            anchor.click();

            URL.revokeObjectURL(url);

        };

        window.close();

  

    </script>

</body>

  

</html>
```