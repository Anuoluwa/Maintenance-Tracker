import express from 'express';
import Request from '../controllers/requestController';

const router = express.Router();
router.get('/requests', Request.getRequests);
router.get('/requests/:id', Request.getRequest);
router.post('/requests', Request.createRequest);
export default router;
