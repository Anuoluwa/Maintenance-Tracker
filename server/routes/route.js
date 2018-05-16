import express from 'express';
import Request from '../controllers/requestController';


const router = express.Router();
router.get('/requests', Request.getRequest);

export default router;
