import Joi from 'joi';

export function validateBodyLogin(schema) {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json({
        message: ['Fields must not be empty',
          'Invalid email or password!',
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
export const schemasLogin = {
  authSchema: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required(),
  }),
};

