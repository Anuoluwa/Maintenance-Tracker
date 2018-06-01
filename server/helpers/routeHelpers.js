import Joi from 'joi';

export function validateBody(schema) {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json({ message: 'Sorry there is error i  your input' });
    }
    if (!req.value) {
      return res.status(400).json({ message: 'Invalid inputs' });
    }
    req.value.body = result.value;
    next();
  };
}
export const schemas = {
  authSchema: Joi.object().keys({
    title: Joi.string().min(3).max(50).required(),
    operations: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(3).max(50).required(),
    location: Joi.string().min(3).max(50)
      .required(),
    status: Joi.string().min(3).max(50).required(),
  }),
};
