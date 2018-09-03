const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err) {
            console.log(err);   
            throw err;
       })
       .on('response', function (response) {
           console.log('Response Status Code: ', response.statusCode);
           console.log('Response Headers: ', response.headers['content-type']);
           console.log('Downloading image...');
       })
       .on('end', function(end) {
           console.log('Downloading complete.')
       })
       .pipe(fs.createWriteStream('./future.jpg'));