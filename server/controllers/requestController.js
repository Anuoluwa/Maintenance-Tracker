
import requests from '../models/db';

export default class Request {
  static getRequest(request, response) {
    if (!requests) {
      response.status(404).json({ message: 'No requests found' });
    } else response.json(requests);
  }
}
