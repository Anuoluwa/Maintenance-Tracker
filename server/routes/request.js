import express from 'express';
import Request from '../controllers/requestController';

const db = require('../db/index');

const router = express.Router();


router.get('/requests', (req, res) => {
  console.log('ok');
  db.query('SELECT * FROM requests WHERE id = $1', [1], (err, response) => {
    if (err) {
      throw err;
    }
    console.log('request:', response.rows[0]);
  });
});

// router.put('/:request_id/approve ', (req, res) => {
// });

// router.put('/:request_id/disapprove', Request.updateDisapprove);

// router.put('/:request_id/resolve', Request.updateResolve);

export default router;
