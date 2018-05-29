import express from 'express';

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
  static updateApprove(req, res) {

  }
  static updateDisapprove(req, res) {

  }
  static updateResolve(req, res) {

  }
}
