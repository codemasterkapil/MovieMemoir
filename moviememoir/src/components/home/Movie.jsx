import { useEffect, useState } from 'react'
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import {Link} from 'react-router-dom'

const Movie = ({ id, token }) => {

  const [movies, setMovies] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/auth/getmovies', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        setMovies(response.data);
      } catch (error) {
        console.log(error, "error while calling get movies api endpoint")
      }
    }
    getMovies();
  }, [token, flag])

  const deleteMovie = async (movieId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/auth/delete/${movieId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      setFlag(!flag);
    } catch (error) {
      console.log(error, "error while calling delete movies api endpoint")
    }
  }


  return (

    <table className='movie-table'>
      <thead>
        <tr>
          <th>Movie Name</th>
          <th>Genre</th>
          <th>Rating</th>
          <th>Cast</th>
          <th>Release Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.name}</td>
            <td>{movie.genre}</td>
            <td>{movie.rating}</td>
            <td>
              <ul className="cast-list">
                {movie.cast != null && movie.cast.map((star, index) => (
                  <li key={index}>{star}</li>
                ))}
              </ul>
            </td>
            <td>{formatDate(movie.releaseDate)}</td>
            <td>
            <Link to={`/update/${movie.id}`}> <button className='iconsb'><BiEdit /></button></Link>
            </td>
            <td>
              <button className='iconsb' onClick={() => deleteMovie(movie.id)}><AiFillDelete /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export default Movie  
