import express from 'express';
import Request from '../controllers/requestController';
import login from '../middlewares/auth';
import verifyToken from '../middlewares/verifyToken';


const router = express.Router();
router.post('/requests', Request.setRequest);
router.get('/requests', verifyToken, Request.getRequests);
router.get('/requests/:id', verifyToken, Request.getRequest);
router.put('/requests/:id', Request.editRequest);
router.post('/users', login);
export default router;
