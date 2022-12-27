const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
    res.send('Ok');
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

app.get('/hello/:id', (req, res) => {
    const id = req.params.id;
    res.json({ status: 200, message: `Hello, ${id}` });
});

app.get('/search', (req, res) => {
    const search = req.query.s
        ;
    if (search) {
        res.json({ status: 200, message: 'ok', data: search });
    } else {
        res.status(500).json({ status: 500, error: true, message: 'you have to provide a search' });
    }
});

app.listen(port, (error) => {
    if (!error) {
        console.log('Ok');
    }
    else {
        console.log('Something went wrong');
    }
});