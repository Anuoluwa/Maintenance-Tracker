import express from 'express';
import verifyToken from '../middlewares/verifyToken';
import User from '../controllers/userController';
import { validateBody, schemas } from '../helpers/routeHelpersAuth';


const router = express.Router();

router.post('/requests', verifyToken, validateBody(schemas.authSchema), User.createRequests);
router.get('/requests', verifyToken, User.getRequests);
router.get('/requests/:id', verifyToken, User.getRequest);
router.put('/requests/:id', verifyToken, validateBody(schemas.authSchema), User.editRequest);

export default router;
