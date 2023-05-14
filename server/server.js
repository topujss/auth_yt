import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import { connectDB } from './config/connect';

// init express
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(201).json('get request');
});

// api routes
app.use('/api/v1', userRoute);

// valdate connection to db then listen for connections
connectDB()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server running: http://localhost:${PORT}`.bgMagenta);
      });
    } catch (error) {
      console.log(`Can't connect to server`);
    }
  })
  .catch((error) => {
    console.log(`Can't connect to db`);
  });
