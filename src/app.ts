/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/nof-found';
import router from './app/router';
import User from './app/modules/user/user.model';
import { USER_ROLE } from './app/constant';
import config from './config';

const app: Application = express();
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(
//   cors({
//     origin: [
//       'https://dashboard.engrobasen.dk',
//       'https://engrobasen.dk',
//       "http://localhost:5173",
//       "http://localhost:5174",
//       "*"
//     ],
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//   }),
// );
const allowedOrigins = (config.CLIENT_CORS_ORIGIN || "").split(",").map(o => o.trim());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow non-browser clients
      if (allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy violation'));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Routes Middleware
app.use('/api/v1', router);

// Default Route
app.get('/', (req: Request, res: Response, next: NextFunction) => {

  res.json({
    message: 'Welcome To Server'
  });
});

app.get('/test', async (req: Request, res: Response, next: NextFunction) => {

  const removeAdmin = await User.findOneAndDelete({ role: USER_ROLE.admin })
  res.json({
    removeAdmin
  });
})


// Not Found Middleware
app.use(notFound);
// Global Error Handler Middleware
app.use(globalErrorHandler);

export default app;
