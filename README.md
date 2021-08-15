# Vergeblog
http://vergeblog.herokuapp.com/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
![vergelbarit-disney](https://user-images.githubusercontent.com/14260407/129474169-9d63d61f-69c7-43ac-8736-a10b7c746aeb.png)


``
const AWS = require('aws-sdk');
const express = require('express'); //"^4.13.4"
const bluebird = require('bluebird');

const multiparty = require('multiparty');
const fs = require('fs');
const app = express();


const timestamp = Date.now().toString();
const fileName = `bucketFolder/${timestamp}-backtest.json`;
const key = 'bucketFolder/1542634327064-backtest.json';
          

AWS.config.update({
    secretAccessKey: 'qzKrOqw1MN+6OAJ63MnZVY+Com5GKb0c+mnF9mVA',
    accessKeyId: 'AKIAIR37WVEDQZOICXKA',
    region: 'us-east-1'
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);
// create S3 instance
const s3 = new AWS.S3();
// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name) => {
    const params = {
      Body: buffer,
      Bucket: 'raynverge',
      ContentType: "application/json",
      Key: name
    };
    return s3.upload(params).promise();
};
  

// Define POST route
app.post('/test-upload', (request, response) => {
    const form = new multiparty.Form();
      form.parse(request, async (error, fields, files) => {
        if (error) throw new Error(error);
        try {
          const path = files.file[0].path;
          const buffer = fs.readFileSync(path);
          downloadImage(key).then((d) => {
            return response.status(200).send(d);
          });
          // let file = require('fs').createWriteStream(`${timestamp}-backtest.json`);
          // s3.getObject(params).createReadStream(params).pipe(file);
          // uploadFile(buffer, fileName).then((d) => {
          //   s3.getObject(params).createReadStream(params).pipe(file);
          // })
          // return response.status(200).send(data);
        } catch (error) {
          return response.status(400).send(error);
        }
      });
  });

  function downloadImage (key, s3Bucket, filePath) {
  return new Promise((resolve, reject) => {
    const destPath = fileName;
    const params = { Bucket: 'raynverge', Key: key }
    const s3Stream = s3.getObject(params).createReadStream();
    const fileStream = fs.createWriteStream(destPath);
    s3Stream.on('error', reject);
    fileStream.on('error', reject);
    fileStream.on('close', () => { resolve(destPath);});
    s3Stream.pipe(fileStream);
  });
}


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
``
