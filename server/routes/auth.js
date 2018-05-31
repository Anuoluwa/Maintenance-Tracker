import express from 'express';
import Auth from '../auth/authController';
import { validateBody, schemas } from '../helpers/routeHelpersAuth';

const router = express.Router();

router.post('/signup', validateBody(schemas.authSchema), Auth.signUp);
router.post('/login', validateBody(schemas.authSchema), Auth.login);

export default router;
