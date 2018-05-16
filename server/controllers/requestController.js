
import requests from '../models/db';

export default class Request {
  static getRequests(request, response) {
    if (!requests) {
      response.status(404).json({ message: 'No requests found' });
    } else response.json(requests);
  }
}
