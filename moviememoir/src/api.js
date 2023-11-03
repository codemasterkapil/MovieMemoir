import axios from 'axios';

export const registerUser = async(data)=>{
   try{
       const response=await axios.post('http://localhost:8080/api/v1/signup', data);
       console.log(response);
   }catch(error){
       console.log(error,"error while calling register api endpoint");
   }
} 
  
  