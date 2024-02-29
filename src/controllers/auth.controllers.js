import User from "../models/user.model.js";
import generateToken from "../middleware/JWTAction.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ "profile.email": email, password: password });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const token = generateToken(user);
    res.json({ user, token }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
};

export const register = async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
};

export const refreshToken = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ "profile.email": email, password });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error refreshing token" });
  }
};
