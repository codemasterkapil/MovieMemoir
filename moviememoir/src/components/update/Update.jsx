import { useState, useEffect } from 'react'
import './Update.css';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState('');
    const [movieId, setMovieId] = useState(useParams().id);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        genre: '',
        cast: [],
        rating: '',
        releaseDate: '',
    });

    useEffect(() => {
        const token = window.sessionStorage.getItem('token');
        if (token == null) {
            navigate("/login");
        }
    }, [])


    useEffect(() => {

        const setMovie = async () => {
            try {
                const token = window.sessionStorage.getItem('token');
                if (token == null) {
                    navigate('/login');
                }
                setToken(token);

                const response = await axios.get(`http://localhost:8080/api/auth/getmovie/${movieId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                console.log(response);

                if (response.data) {
                    const originalDate = response.data.releaseDate;
                    const formattedDate = new Date(originalDate).toISOString().split('T')[0];
                    setFormData({ ...response.data, releaseDate: formattedDate });
                }


            } catch (error) {
                setError('sorry you cannot view and update this movie !!')
                console.log(error, "error while calling get single movie api endpoint")
            }
        }
        setMovie();

    }, [])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'cast') {
            setFormData({
                ...formData,
                cast: value.split(',').map((item) => item.trim()),
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            console.log(formData);
            const response = await axios.post(`http://localhost:8080/api/auth/update/${movieId}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            navigate("/");

        } catch (error) {

            console.log(error, "error while calling update movies api endpoint")
        }
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Update Your Movie</h1>
                <div className="form-group">
                    <label>Movie Name* : </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Genre* :</label>
                    <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Cast* (comma-separated):</label>
                    <input
                        type="text"
                        name="cast"
                        value={formData.cast.join(',')}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Movie Rating* :</label>
                    <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Release Date*:</label>
                    <input
                        type="date"
                        name="releaseDate"
                        value={formData.releaseDate}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="create-submit-btn" type="submit">Submit</button>
                <p className='error-p'>{error}</p>
            </form>
        </div>
    );
}

export default Update
