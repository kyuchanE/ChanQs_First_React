import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

type ErrorWithStatus = Error & {
  status?: number;
  statusCode?: number;
};

export const errorHandler = (
  err: ErrorWithStatus,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation failed',
      issues: err.issues,
    });
  }

  const status = err.status ?? err.statusCode ?? 500;

  if (status >= 500) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  res.status(status).json({
    message: err.message || 'Internal server error',
  });
};
