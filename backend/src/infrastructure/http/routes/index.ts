import { Router } from 'express';

import { healthRouter } from './health.route.js';
import { productRouter } from './product.route.js';

const router = Router();

router.use('/health', healthRouter);
router.use('/products', productRouter);

export { router };
