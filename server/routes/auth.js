import express from 'express';
import Auth from '../auth/authController';
import { validateBody, schemas } from '../helpers/routeHelpersAuth';

const router = express.Router();

router.post('/signup', Auth.signUp);
router.post('/login', Auth.login);

export default router;
