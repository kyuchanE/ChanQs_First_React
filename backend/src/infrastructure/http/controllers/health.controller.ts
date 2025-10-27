import type { Request, Response } from 'express';

import { checkHealth } from '../../../application/use-cases/check-health.js';

export const getHealth = (_req: Request, res: Response) => {
  const result = checkHealth();
  res.json(result);
};
