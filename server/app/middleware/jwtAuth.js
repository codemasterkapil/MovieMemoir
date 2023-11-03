import jwt from 'jsonwebtoken';
import configuration from '../config/config-jwt.js';
import database from '../models/index.js';
const User = database.user;

export const verifyToken = (req, res, next) => {
  const bearer = req.headers['authorization'];
  const token = bearer.split(" ")[1];

  if (!token) {
    return res.status(403).send({
      message: "Error when getting the token!"
    });
  }

  jwt.verify(token, configuration.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "User unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

