import database from '../models/index.js';
import configuration from '../config/config-jwt.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const User = database.user;

export const signup = async (req, res) => {
  try {
    console.log("Request : ", req.body);
    validateRequest(req);

    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    res.send({ message: "User successfully registered" });
  } catch (exception) {
    res.status(500).send({ message: exception.message });
  }
};

export const signin = async (req, res) => {
  try {
    validateRequest(req);

    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid password!"
      });
    }

    // Set token expiration to 24 hours (86400 seconds)
    const token = jwt.sign({ id: user.id }, configuration.secret, {
      expiresIn: 86400
    });

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken: token
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

function validateRequest(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Request can't be empty!"
    });
    return;
  }
}
