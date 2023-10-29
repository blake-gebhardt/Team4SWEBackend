import { Router } from 'express';
import * as UserController from './user.controller';
// import { authenticate } from 'middleware/authentication';

const router = Router();

router.get('/detail/:id', UserController.getUserDetailById);
router.get('/:id', UserController.getUserById);
router.get('/', UserController.getUsers); // route is not protected by authentication middleware

// route is protected by authentication middleware
// router.get('/detail', authenticate, UserController.getUserDetailById); 
// ... other user-related routes

export default router;