import Joi from 'joi';

export function validateBodyLogin(schema) {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    if (!req.value) {
      return res.status(400).json({ message: 'Invalid inputs' });
      // req.value = {};
    }
    req.value.body = result.value;
    next();
  };
}
export const schema = {
  authSchema: Joi.object().keys({
    email: Joi.string().min(4).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),

  }),
};
