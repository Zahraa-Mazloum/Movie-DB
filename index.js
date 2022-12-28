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

app.get('/movies/get', (req, res) => {
    const { title, year, rating } = req.query
    if (!rating) {
        rating = 4
    }
    if (!title || !year || year.length !== 4 || isNaN(year)) {
        res.json({ status: 403, error: true, message: 'you cannot create a movie without providing a title and a year' })
    } else {
        const addNewMovie = {
            title, year, rating
        }
    }
    movies.push(addNewMovie)
    res.json({ movies })
})

app.get('/movies/edit', (req, res) => {
    res.send('Update movie');
});
app.delete('/movies/delete/:id', (req, res) => {
    const id = req.params.id;
    if (!movies.includes(id)) {
    res.json({ status: 404, error: true, message: `the movie +${id} does not existcu`})
   }
   else {
    var index = movies.indexOf(id);
    movies.splice(index,1)
   }
   res.json({ movies })

})

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
app.get('/movies/read/by-date', (req, res) => {
    const sortedMovies = movies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

    res.send({ status: 200, data: sortedMovies, });
});

app.get('/movies/read/by-rating', (req, res) => {
    const ratingMovies = movies.sort((a, b) => b.rating - a.rating);
    res.send({ status: 200, data: ratingMovies });
});

app.get('/movies/read/by-title', (req, res) => {
    const moviesTitle = movies.sort((a, b) => a.title.localeCompare(b.title));
    res.send({ status: 200, data: moviesTitle, });
});

app.get('/movies/read/id/:id', (req, res) => {
    const movieId = req.params.id;
    const movie = movies.find(movie => movie.id === movieId);

    if (movie) {
        res.send({
            status: 200, data: movie
        });
    } else {
        res.status(404).send({
            status: 404, error: true, message: `The movie ${movieId} does not exist`,
        });
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