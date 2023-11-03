import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Movie = sequelize.define("movie", {
    name: {
      type: DataTypes.STRING
    },
    rating: {
     type: DataTypes.FLOAT,
    },
    cast: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    genre: {
      type: DataTypes.STRING
    },
    releaseDate: {
      type: DataTypes.DATE
    },
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Movie;
};
