import express from 'express';
import Auth from '../auth/authController';
import verifyToken from '../middlewares/verifyToken';
import { validateBody, schemas } from '../helpers/routeHelpersAuth';

const router = express.Router();

router.post('/signup', validateBody(schemas.authSchema), Auth.signUp);
router.post('/login', verifyToken, Auth.login);

export default router;
