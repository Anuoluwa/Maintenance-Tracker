import express from 'express';
import Auth from '../auth/authController';
import verifyToken from '../middlewares/verifyToken';
import { validateBody, schemas } from '../helpers/routeHelpersAuth';
<<<<<<< HEAD
import { validateBodyLogin, schema } from '../helpers/routeHelpersLogin';
=======
import { validateBodyLogin, schemasLogin } from '../helpers/routeHelpersAuthLogin';
>>>>>>> input-validation-157998049

const router = express.Router();

router.post('/signup', validateBody(schemas.authSchema), Auth.signUp);
<<<<<<< HEAD
router.post('/login', validateBodyLogin(schema.authSchema), Auth.login);
=======
router.post('/login', validateBodyLogin(schemasLogin.authSchema), Auth.login);
>>>>>>> input-validation-157998049

export default router;
