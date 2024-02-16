import mongoose from "mongoose";
import Bluebird from "bluebird";
import dotenv from "dotenv";

dotenv.config();
let connectDB = () => {
  mongoose.Promise = Bluebird;

  let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  // let URI = "mongodb://localhost:27017/awesome_chat"

  return mongoose.connect(URI);
};
export default connectDB;
