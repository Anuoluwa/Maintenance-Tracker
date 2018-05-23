import express from 'express';
import { validateBody, schemas } from '../helpers/routeHelpers';
import Request from '../controllers/requestController';
import login from '../middlewares/auth';
import verifyToken from '../middlewares/verifyToken';


const router = express.Router();
router.post('/requests', validateBody(schemas.authSchema), Request.setRequest);
router.get('/requests', verifyToken, Request.getRequests);
router.get('/requests/:id', verifyToken, Request.getRequest);
router.put('/requests/:id', verifyToken, validateBody(schemas.authSchema), Request.editRequest);
router.post('/users', login);
export default router;
