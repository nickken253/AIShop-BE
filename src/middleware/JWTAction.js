import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

dotenv.config();

export const generateToken = (user) => {
  let payload = {
    _id: user._id,
    email: user.profile.email,
    name: user.profile.fistname + " " + user.profile.lastname,
    iat: Date.now(),
  };
  let token = null;
  try {
    token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    return token;
  } catch (error) {
    console.error(error);
  }
};


export const authenticateToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token is required.' });
  }
  const tokenParts = token.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Invalid token format. Please provide a Bearer token.' });
  }
  token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid token'});
  }
};



