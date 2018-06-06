import Joi from 'joi';

export function validateBody(schema) {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json({
        message: ['Fields must not be empty',
          'Fields must not contain special characters; alphabets only',
          'Each field must at least 7 characters long',
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
    title: Joi.string().regex(/^[a-zA-Z]{7,30}$/).required(),
    operations: Joi.string().regex(/^[a-zA-Z]{7,30}$/).required(),
    description: Joi.string().regex(/^[a-zA-Z]{7,30}$/).required(),
    location: Joi.string().regex(/^[a-zA-Z]{7,30}$/).required(),
    status: Joi.string().regex(/^[a-zA-Z]{7,30}$/).required(),
    password: Joi.string().regex(/^[a-zA-Z]{7,30}$/).required(),
  }),
};

