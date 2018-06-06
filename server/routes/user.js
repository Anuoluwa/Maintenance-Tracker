import express from 'express';
import verifyToken from '../middlewares/verifyToken';
import User from '../controllers/userController';
import { validateBody, schemas } from '../helpers/routeHelpersAuth';


const router = express.Router();

router.post('/requests', User.createRequests);
router.get('/requests', User.getRequests);
router.get('/requests/:id', User.getRequest);
router.put('/requests/:id', User.editRequest);

export default router;
