import connectDB from "./config/connectDB.js";
import bodyParser from "body-parser";

import generateToken from "./middleware/JWTAction.js";
import { verifyToken } from "./middleware/JWTAction.js";

import productRoutes from './routers/product.routers.js';
import userRoutes from './routers/user.routers.js';
// import orderRoutes from './routers/order.routers.js';
// import cartRoutes from './routers/cart.routers.js';

import express from "express";
import dotenv from "dotenv";

dotenv.config();

// verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjMiLCJlbWFpbCI6ImhvYW5nYW5oLm5pY2trZW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwibmFtZSI6IkFuaCBIb2FuZyIsImlhdCI6MTcwODM3NTQ3MywiZXhwIjoxNzA4NDYxODczfQ.Q-K9fEYMZuuEOslQiXxReyXTCSzai9ugP8cJ7NqEAiI");

const app = express();
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB()
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(port, host, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Connect to MongoDB failure!", error);
  });
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);



