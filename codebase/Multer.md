
```ts
let express = require("express");

let bodyParser = require('body-parser');

const path = require('path')

const cors =require('cors');

const multer = require('multer');

let docxToPdf = require('docx-pdf');

const fs = require('fs');

const app = express();

const { exec } = require('child_process');

  
  

app.use(express.static('docx'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();

  });

  

let storage = multer.diskStorage({

    destination: function(req, file, cb) {

        cb(null, "uploads/docx");

    },

    filename: function(req, file, cb) {

        cb(null, Date.now() + path.extname(file.originalname));

    }

});

  

let upload = multer({storage: storage});

  

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html");

});

let result;

app.get("/check",(req,res)=>{

console.log(result);

res.send(result);

})

app.post("/convert", upload.single('getFile'), (req, res) => {

    if(!req.file){

        console.log("UPLOAD FILE")

        // return;

    }

    let outputFilePath = "pdf/output.pdf";

    let filePath = path.join(__dirname, req.file.path);

    docxToPdf(filePath, outputFilePath, (err, result) => {

        if (err) {

            console.log(err);

        } else {

            res.download(outputFilePath, () => {

            });

            // res.set('Content-Type', 'application/pdf');

            // res.sendFile(path.join(__dirname, outputFilePath));

        }

    });

});

  

exec('chmod -R 777 uploads/', (err, stdout, stderr) => {

    if (err) {

      console.error(`exec error: ${err}`);

      return;

    }

    console.log(`stdout: ${stdout}`);

    console.error(`stderr: ${stderr}`);

  });

  

  exec('chmod -R 777 pdf/', (err, stdout, stderr) => {

    if (err) {

      console.error(`exec error: ${err}`);

      return;

    }

    console.log(`stdout: ${stdout}`);

    console.error(`stderr: ${stderr}`);

  });

app.listen(5000, () => {

    console.log('Server started on port 3000');

});
```


# Next

```ts
let express = require("express");

let bodyParser = require('body-parser');

const path = require('path')

const cors =require('cors');

const multer = require('multer');

let docxToPdf = require('docx-pdf');

const fs = require('fs');

const app = express();

  

app.use(express.static('docx'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();

  });

  

let storage = multer.diskStorage({

    destination: function(req, file, cb) {

        cb(null, "uploads/docx");

    },

    filename: function(req, file, cb) {

        cb(null, Date.now() + path.extname(file.originalname));

    }

});

  

let upload = multer({storage: storage});

  

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html");

});

let result;

app.get("/check",(req,res)=>{

console.log(result);

res.send(result);

})

app.post("/convert", upload.single('getFile'), (req, res) => {

    if(!req.file){

        console.log("UPLOAD FILE")

        // return;

    }

    let outputFilePath = "pdf/output.pdf";

    let filePath = path.join(__dirname, req.file.path);

    docxToPdf(filePath, outputFilePath, (err, result) => {

        if (err) {

            console.log(err);

        } else {

            res.download(outputFilePath, () => {

            });

            // res.set('Content-Type', 'application/pdf');

            // res.sendFile(path.join(__dirname, outputFilePath));

        }

    });

});

  

app.listen(5000, () => {

    console.log('Server started on port 3000');

});
```