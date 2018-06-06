import express from 'express';
import verifyToken from '../middlewares/verifyToken';
import Request from '../controllers/requestController';

const router = express.Router();


router.get('/requests', Request.getAllRequests);

router.put('/requests/:id/approve', Request.editApprove);

router.put('/requests/:id/disapprove', Request.editDisapprove);

router.put('/requests/:id/resolve', Request.editResolve);

export default router;
