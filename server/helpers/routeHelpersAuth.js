import Joi from 'joi';

export function validateBody(schema) {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (!result) {
      return res.status(400).json({ message: 'Invalid Inputs' });
    }
    if (!req.value) {
      return res.status(400).json({ message: 'Invalid Inputs' });
    }
    req.value.body = result.value;
    next();
  };
}
export const schemas = {
  authSchema: Joi.object().keys({
    username: Joi.string().alphanum().min(4).max(30),
    email: Joi.string().email(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),

  }),
};

