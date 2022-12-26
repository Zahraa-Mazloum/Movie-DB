const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
    res.send('Ok');
});

app.listen(port, (error) => {
    if (!error) {
        console.log('Ok');
    }
    else {
        console.log('Something went wrong');
    }
});

app.get('/test', (req, res) => {
    res.json({ status: 200, message: 'ok' });
});
app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    res.json({ status: 200, message: `${hours}:${minutes}` });

});
