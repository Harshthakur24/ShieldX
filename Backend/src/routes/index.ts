import { Router } from 'express';
import * as projectController from '../controllers/project.controller';
import * as userController from '../controllers/user.controller';

const router = Router();

// Example route
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    version: '1.0.0',
  });
});

// User routes
router.post('/auth/signup', userController.signup);

// Project routes
router.post('/projects', projectController.createProject);

export default router;

