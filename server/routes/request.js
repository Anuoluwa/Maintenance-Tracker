import express from 'express';
import lookupRequest from '../middlewares/lookupRequest';

const requestRouter = express.Router();


requestRouter.get('/requests', (req, res) => {

});

requestRouter.get('/requests/request_id', lookupRequest, (req, res) => {

});

requestRouter.put('/requests/request_id/approve ', lookupRequest, (req, res) => {
  res.json(req.requests);
});

requestRouter.put('/requests/request_id/disapprove', lookupRequest, (req, res) => {
  res.json(req.requests);
});

requestRouter.put('/requests/request_id/resolve', lookupRequest, (req, res) => {
  res.json(req.requests);
});

export default requestRouter;
