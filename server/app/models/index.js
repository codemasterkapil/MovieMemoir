
import { Sequelize } from "sequelize";
import createMovieModel from './movie.js'; 
import createUserModel from './user.js'; 
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DB_CONNECTION_STRING;

const sequelize = new Sequelize(connectionString)

export const connection=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;
database.movie = createMovieModel(sequelize);
database.user = createUserModel(sequelize);

export default database;