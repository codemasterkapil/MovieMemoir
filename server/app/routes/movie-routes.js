
import { verifyToken } from '../middleware/jwtAuth.js';

import { createMovie, findMovie, updateMovie, deleteMovie, getSingleMovie } from '../services/movie-services.js';

const movieWrapper = (app) => {

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, Content-Type, Accept");
    next();
  });

  // Add a movie
  app.post("/api/auth/addmovie", verifyToken, createMovie);

  // Find all movies of the particular userId
  app.get("/api/auth/getmovies", verifyToken, findMovie);

  // Find single movie of the particular MovieId
  app.get("/api/auth/getmovie/:id", verifyToken, getSingleMovie);

  // Update a movie by movie id for a specific userId
  app.post("/api/auth/update/:id", verifyToken, updateMovie);

  // Delete a movie by movie id
  app.get("/api/auth/delete/:id", verifyToken, deleteMovie);


}

export default movieWrapper;



