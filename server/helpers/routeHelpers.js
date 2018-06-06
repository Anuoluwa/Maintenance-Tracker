import Joi from 'joi';

export function validateBody(schema) {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json({
        message: ['Fields must not be empty',
          'Fields be must at least 7 characters long',
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
    title: Joi.string().min(6).max(40).required(),
    operations: Joi.string().min(8).max(30).required(),
    description: Joi.string().min(8).max(100).required(),
    location: Joi.string().min(3).max(30).required(),
    status: Joi.string().min(6).max(20).required(),
  }),
};

