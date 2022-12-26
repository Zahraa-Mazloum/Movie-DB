const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, (error) => {
    if (!error) {
        console.log('Ok');
    }
    else {
        console.log('Something went wrong');
    }});