import express from 'express';
import Request from '../controllers/requestController';

const router = express.Router();


router.get('/requests', Request.getAllRequests);

router.put('/:request_id/approve ', (req, res) => {
});

router.put('/:request_id/disapprove', Request.updateDisapprove);

router.put('/:request_id/resolve', Request.updateResolve);

export default router;
