import { Router } from 'express';

const router = Router();

// Example route
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    version: '1.0.0',
  });
});

export default router;

