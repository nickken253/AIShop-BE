import connectDB from './config/connectDB.js';
import User from './models/user.model.js'; 
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;

connectDB()
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    app.listen(port, host, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Connect to MongoDB failure!', error);
  });

app.get('/test-database', async (req, res) => {
  try {
    const item = {
      name: 'Pho',
      email: 'h@gmail.com',
      password: '123',
    };
    const user = await new User(item).save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});
