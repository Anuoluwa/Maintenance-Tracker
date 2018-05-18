import express from 'express';
import app from '../app';
/* eslint eqeqeq: ["error", "smart"] */
import requests from '../models/db';

export default class Request {
  static getRequests(req, res) {
    if (!requests) {
      res.status(404).json({ message: 'No requests found' });
    } else res.json(requests);
  }

  static getRequest(req, res) {
    const requestId = req.params.id;
    /* eslint-disable */
    const requestItem = requests.filter(request => request.id == requestId)[0];
    /* eslint-enable */
    if (!requests) {
      res.status(404).json({ message: 'No request found' });
    }
    res.status(200).json(requestItem);
  }

  static createRequest(req, res) {
    const request = {
      id: requests.length + 1,
      date: req.body.date,
      department: req.body.department,
      location: req.body.location,
      contact: req.body.contact,
      status: req.body.status,
    };
    requests.push(request);
    return res.status(200).json(requests);
  }
}
