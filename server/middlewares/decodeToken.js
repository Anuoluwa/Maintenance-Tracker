import jwt from 'jsonwebtoken';

function decodetoken(req, res) {
  jwt.verify(req.token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    res.status(200).send(decoded);
  });
}
