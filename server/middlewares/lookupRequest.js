
import { Client } from 'pg';

const pg = require('pg');

const client = new Client('postgres://aptserver:anuoluwa@localhost/maintrackerdb');

function lookupRequest(req, res, next) {
  // We access the ID param on the request object
  const requestId = req.params.id;
  // Build an SQL query to select the resource object by ID
  const sql = 'SELECT * FROM requests_tbl WHERE id = ?';
  client.query(sql, [requestId], (err, results) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({ errors: 'Could not retrieve request' });
    }
    // No results returned mean the object is not found
    if (results.rows.length === 0) {
      // We are able to set the HTTP status code on the res object
      res.statusCode = 404;
      return res.json({ errors: 'Request not found' });
    }
    // Its data is now made available in our handler function
    // req.requests = results.rows[0];
    next();
  });
}
