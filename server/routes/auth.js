import express from 'express';
import Auth from '../auth/authController';
import verifyToken from '../middlewares/verifyToken';
import { validateBody, schemas } from '../helpers/routeHelpersAuth';
import { validateBodyLogin, schemasLogin } from '../helpers/routeHelpersAuthLogin';

const router = express.Router();

router.post('/signup', validateBody(schemas.authSchema), Auth.signUp);
router.post('/login', validateBodyLogin(schemasLogin.authSchema), Auth.login);

export default router;
