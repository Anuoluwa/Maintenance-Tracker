import express from 'express';
import verifyToken from '../middlewares/verifyToken';

const db = require('../db/index');


export default class Request {
  static getAllRequests(req, res) {
    db.query('SELECT * FROM requests', (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200).json(response.rows);
    });
  }
  static editApprove(req, res) {
    const sql = {
      text: 'UPDATE requests SET status=$1 WHERE request_id=$2  RETURNING *',
      values: ['Approved', req.params.id],
    };
    db.query(sql, (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200).json(response.rows);
    });
  }

  static editDisapprove(req, res) {
    const sql = {
      text: 'UPDATE requests SET status=$1 WHERE request_id=$2  RETURNING *',
      values: ['Disapproved', req.params.id],
    };
    db.query(sql, (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200).json(response.rows);
    });
  }
  static editResolve(req, res) {
    const sql = {
      text: 'UPDATE requests SET status=$1 WHERE request_id=$2 RETURNING *',
      values: ['Resolved', req.params.id],
    };
    db.query(sql, (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200).json(response.rows);
    });
  }
}
