import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

dotenv.config();

const generateToken = (user) => {
  let payload = {
    email: user.profile.email,
    role: user.role,
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

export const verifyToken = (token) => {
  let key = process.env.JWT_SECRET;
  let decoded = null;
  try {
    decoded = jwt.verify(token, key);
    return decoded;
  } catch (error) {
    console.error(error);
    throw new Error('Invalid token');
  }
};

export default generateToken;

