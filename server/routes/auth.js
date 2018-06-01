import express from 'express';
import Auth from '../auth/authController';
import { validateBody, schemas } from '../helpers/routeHelpersAuth';
import { validateBodyLogin, schema } from '../helpers/routeHelpersLogin';

const router = express.Router();

router.post('/signup', validateBody(schemas.authSchema), Auth.signUp);
router.post('/login', validateBodyLogin(schema.authSchema), Auth.login);

export default router;
