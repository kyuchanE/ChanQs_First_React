import http from 'node:http';

import { app } from './app.js';
import { env } from './config/env.js';

const server = http.createServer(app);

const onError = (error: NodeJS.ErrnoException) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = `port ${env.PORT}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.listen(env.PORT, () => {
  console.log(`Server ready at http://localhost:${env.PORT}/api`);
});

server.on('error', onError);

const gracefulShutdown = () => {
  console.log('Shutting down gracefully...');
  server.close(() => process.exit(0));
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
