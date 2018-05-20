import express from 'express';
import Request from '../controllers/requestController';


const router = express.Router();
router.post('/requests', Request.setRequest);
router.get('/requests', Request.getRequests);
router.get('/requests/:id', Request.getRequest);
router.put('/requests/:id', Request.editRequest);
export default router;
