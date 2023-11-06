import database from '../models/index.js';
const Movie = database.movie;

// Add new movie
export const createMovie = async (req, res) => {
  try {
    console.log("Request : ", req.body);
    validateRequest(req);

    const movie = {
      name: req.body.name,
      rating: req.body.rating,
      cast: req.body.cast,
      genre:req.body.genre,
      releaseDate: req.body.releaseDate,
      userId:req.userId,
    };

    const data = await Movie.create(movie);
    ;
    res.send(data);

  } catch (err) {
    res.status(500).send({
      message: err.message + "Error when adding a movie!"
    });
  }
};

// Find all movies based on some specific user id
export const findMovie = async (req, res) => {
  try {
    const data = await Movie.findAll({ where: { userId: req.userId } });
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message + "Error when getting all movies!"
    });
  }
};

// Find the movie based on its movie id
export const getSingleMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const userId = req.userId; 

    const data = await Movie.findOne({
      where: { id: movieId, userId: userId },
    });

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: "Movie not found!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error when getting a single movie: " + err.message,
    });
  }
};


// Update movie by movie id
export const updateMovie = async (req, res) => {

    const movieId = req.params.id;
  try {

    console.log("Request : ", req.body);
    validateRequest(req);
   
    const num = await Movie.update(req.body, {
      where: { id: movieId ,userId:req.userId}
    });

    if (num == 1) {
      res.send({
        message: "Movie successfully updated."
      });
    } else {
      res.send({
        message: "Update process failed."
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating a movie with movie id : " + movieId
    });
  }
};

// Delete movie by movie id
export const deleteMovie = async (req, res) => {

    const movieId = req.params.id;

  try {
    
    const num = await Movie.destroy({
      where: { id: movieId ,userId:req.userId}
    });

    if (num == 1) {
      res.send({
        message: "movie successfully deleted."
      });
    } else {
      res.send({
        message: "Delete process failed!"
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete a movie with movie id : " + movieId
    });
  }
};

function validateRequest(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Request is empty!"
    });
    return;
  }
}
