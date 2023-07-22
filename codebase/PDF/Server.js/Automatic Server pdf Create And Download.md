

```js
const express = require('express');

const bodyParser = require('body-parser');

const PDFDocument = require('pdfkit');

const fs = require('fs');

  

const app = express();

  

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

  

app.post('/generate-pdf', (req, res) => {

    const doc = new PDFDocument();

    const filename = 'example.pdf';

    const stream = fs.createWriteStream(filename);

    doc.pipe(stream);

    doc.text(req.body.text);

    doc.end();

    stream.on('finish', () => {

        res.status(200).send('PDF saved successfully!');

    });

});

  

app.get('/download-pdf', (req, res) => {

    const filename = 'example.pdf';

    res.setHeader('Content-Type', 'application/pdf');

    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

    const stream = fs.createReadStream(filename);

    stream.pipe(res);

});

app.listen(3000, () => {

    console.log('Server started on port 3000');

});
```

# Packages

```npm
npm install express body-parser pdfkit fs
```
