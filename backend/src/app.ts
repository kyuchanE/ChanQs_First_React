import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { env } from './config/env.js';
import { errorHandler } from './infrastructure/http/middleware/error-handler.js';
import { notFoundHandler } from './infrastructure/http/middleware/not-found.js';
import { router as apiRouter } from './infrastructure/http/routes/index.js';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(env.NODE_ENV === 'development' ? 'dev' : 'combined'));

// Register versioned API routes
app.use('/api', apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export { app };
