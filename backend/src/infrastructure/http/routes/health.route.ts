import { Router } from 'express';

import { getHealth } from '../controllers/health.controller.js';

const healthRouter = Router();

healthRouter.get('/', getHealth);

export { healthRouter };
