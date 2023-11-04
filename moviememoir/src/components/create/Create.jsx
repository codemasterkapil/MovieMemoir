import { useState } from 'react'
import './Create.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Create = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        genre: '',
        cast: [],
        rating: '',
        releaseDate: '',
    });

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
        const token = window.sessionStorage.getItem('token');
        e.preventDefault();
        try {
            console.log(formData);
            const response = await axios.post('http://localhost:8080/api/auth/addmovie', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            navigate("/");
            console.log(response);
        } catch (error) {
            console.log(error, "error while calling create movies api endpoint")
        }
    };
    return (
        <div className="form-container">
            <h1>Add a Movie</h1>
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    );
}

export default Create
