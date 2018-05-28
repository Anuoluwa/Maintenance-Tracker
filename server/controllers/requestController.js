import { Pool, Client } from 'pg';

const conString = 'postgres://fmlaewzf:5bho1VnanYoL9IEUHogtc9SQUhwuJ5Ns@stampy.db.elephantsql.com:5432/fmlaewzf';

const client = new Client({
  conString,
});
export default class Request {
  static getAllRequests(req, res) {
    client.query('SELECT * FROM requests', (error, result) => {
      if (error) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(200).send(result.rows);
    });
  }
  static updateApprove(req, res) {

  }
  static updateDisapprove(req, res) {

  }
  static updateResolve(req, res) {

  }
}
