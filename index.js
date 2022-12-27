const express = require('express');
const app = express();
const port = 8081;

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]

app.get('/movies/add', (req, res) => {
    res.send('Create movie');
});

app.get('/movies/get',(req,res)=>{
    res.json({ status: 200, data:movies });
})

app.get('/movies/edit', (req, res) => {
    res.send('Update movie');
});
app.get('/movies/delete', (req, res) => {
    res.send('Delete movie');
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