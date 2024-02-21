import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

dotenv.config();

const generateToken = (user) => {
  let payload = {
    _id: user._id,
    email: user.profile.email,
    name: user.profile.fistname + " " + user.profile.lastname,
    iat: Date.now(),
  };
  let key = process.env.JWT_SECRET;
  let expriesIn = process.env.JWT_EXPIRES_IN;
  let token = null;
  try {
    token = jwt.sign(payload, key, {
      expiresIn: expriesIn,
    });
    return token;
  } catch (error) {
    console.error(error);
  }
};


export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token is required.' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default generateToken;

