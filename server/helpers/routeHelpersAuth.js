import Joi from 'joi';

export function validateBody(schema) {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json({
        message: ['Fields must not be empty',
          'Username must not contain special characters',
          'Username and password must at least 6 characters long',
          'Email must be in valid',
        ],
        Message: result.error,
      });
    }
    if (!req.value) {
      req.value = {};
    }
    req.value.body = result.value;
    next();
  };
}
export const schemas = {
  authSchema: Joi.object().keys({
    username: Joi.string().alphanum().min(6).max(30)
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required(),
  }),
};

