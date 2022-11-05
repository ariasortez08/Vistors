import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';

import adminRouter from './routes/userRoutes.js';
dotenv.config({ path: '.env' });

const app = express();

app.use(express.json());

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ? SERVE PUBLIC FILES

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  app.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.use('/api/v1/users', adminRouter);

export default app;
