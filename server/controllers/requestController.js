// import express from 'express';
import jwt from 'jsonwebtoken';
// import app from '../app';
// import router from '../routes/route';
// import login from '../middlewares/auth';
// import verifyToken from '../middlewares/verifyToken';

/* eslint eqeqeq: ["error", "smart"] */
import requests from '../models/db';


export default class Request {
  static getRequests(req, res) {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if (err) {
        res.status(403).json({ message: ' Access forbidden' });
      } else if (!requests) {
        res.status(404).json({ message: 'No requests found' });
      } else res.status(200).json(requests);
    });
  }

  static getRequest(req, res) {
    const requestId = req.params.id;
    /* eslint-disable */
    const requestItem = requests.filter(request => request.id == requestId)[0];
    /* eslint-enable */
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if (err) {
        res.status(403).json({ message: 'Access forbidden' });
      } else if (!requests) {
        res.status(404).json({ message: 'No request found' });
      } else res.status(200).json(requestItem);
    });
  }

  static setRequest(req, res) {
    const request = {
      id: requests.length + 1,
      date: req.body.date,
      department: req.body.department,
      location: req.body.location,
      contact: req.body.contact,
      status: req.body.status,
    };
    requests.push(request);
    res.status(201).json(request);
  }

  static editRequest(req, res) {
    const requestId = req.params.id;
    /* eslint-disable */
    const request = requests.filter(r => r.id == requestId)[0];
    /* eslint-enable */
    if (!request) {
      requests.push({
        id: requests.length + 1,
        date: req.body.date,
        department: req.body.department,
        location: req.body.location,
        contact: req.body.contact,
        status: req.body.status,
      });
      res.status(201);
    } else {
      const index = requests.indexOf(request);
      const keys = Object.keys(req.body);
      keys.forEach((key) => {
        request[key] = req.body[key];
      });
      requests[index] = request;
      res.status(202).json(requests[index]); // sendStatus will return http code and its message
    }
  }
}
