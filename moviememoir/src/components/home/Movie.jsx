import {useEffect,useState} from 'react'
import axios from 'axios';

const Movie = ({id,token}) => {
   
   const [movies,setMovies]=useState([]); 

   useEffect(()=>{
     const getMovies=async()=>{
        try{
            const response = await axios.get('http://localhost:8080/api/auth/getmovies', {
                headers: {
                  'Authorization': `Bearer ${token}`, 
                  'Content-Type': 'application/json',
                },
            });
            console.log(response);
            setMovies(response.data);
        }catch(error){
           console.log(error,"error while calling get movies api endpoint")
        }
     }
     getMovies();
   },[])

  return (
    <div>
        
    </div>
  )
}

export default Movie
