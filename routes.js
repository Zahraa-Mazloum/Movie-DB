const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ status: 200, message: 'ok' });
    res.send("Welocme!");
});

app.get('/movies/add', (req, res) => {
    const { title, year, rating } = req.query;
  
    // Validate the provided parameters
    if (!title || !year || year.toString().length !== 4 || isNaN(year)) {
      res.status(403).json({status: 403, error: true, message: 'You cannot create a movie without providing a title and a year'});
      return;
    }
    // Create a new movie
    const movie = new Movie({ title, year, rating });
  
    // Save the new movie to the database
    movielist.save((err, movie) => {
      if (err) {
        res.status(500).json({status: 500, error: true, message: err});
      } else {
        // Return the list of movies
        Movie.find((err, movies) => {
          if (err) {
            res.status(500).json({status: 500, error: true, message: err});
          } else {
            res.json({status: 200, data: movies});
          }
        });
      }
    });
  });
  

router.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    res.json({ status: 200, message: `${hours}:${minutes}` });

});

router.get('/hello/:id', (req, res) => {
    const id = req.params.id;
    res.json({ status: 200, message: `Hello, ${id}` });
});

router.get('/search', (req, res) => {
    const search = req.query.s
        ;
    if (search) {
        res.json({ status: 200, message: 'ok', data: search });
    } else {
        res.status(500).json({ status: 500, error: true, message: 'you have to provide a search' });
    }
});
router.get('/movies/read/by-date', async (req, res) => {
    const sortedMovies = movies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

    res.send({ status: 200, data: sortedMovies, });
});

router.get('/movies/read/by-rating', async (req, res) => {
    const ratingMovies = movies.sort((a, b) => b.rating - a.rating);
    res.send({ status: 200, data: ratingMovies });
});

router.get('/movies/read/by-title', async (req, res) => {
    const moviesTitle = movies.sort((a, b) => a.title.localeCompare(b.title));
    res.send({ status: 200, data: moviesTitle, });
});

//read by id
app.get('/movies/read/id/:id', (req, res) => {
    const movieId = req.params.id;
  
    // Find the movie with the specified ID
    movielist.findById(movieId, (err, movie) => {
      if (err) {
        // Return a 500 error if there was a problem querying the database
        res.status(500).json({status: 500, error: true, message: err});
      } else if (movielist) {
        // Return the movie if it was found
        res.json({status: 200, data: movie});
      } else {
        // Return a 404 error if the movie was not found
        res.status(404).json({status: 404, error: true, message: `The movie ${movieId} does not exist`});
      }
    });
  });
  

  
  
  
  
module.exports = router;