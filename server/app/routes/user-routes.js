
import { checkExistingUsername, checkExistingEmail } from '../middleware/verifyUser.js';
import { signup, signin } from '../services/user-services.js';

const userWrapper=(app)=>{

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers", "Authorization, Origin, Content-Type, Accept");
        next();
      });
      
      // User registration
      app.post("/api/v1/signup", checkExistingUsername, checkExistingEmail, signup);
      
      // User login
      app.post("/api/v1/signin", signin);

}


export default userWrapper;
