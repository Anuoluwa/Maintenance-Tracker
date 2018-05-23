import Joi from 'joi';

export function validateBody(schema) {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json(result.error);
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
    date: Joi.string().required(),
    department: Joi.string().min(3).max(30).required(),
    location: Joi.string().alphanum().min(3).max(30)
      .required(),
    contact: Joi.number().min(11).max(11).required(),
    status: Joi.string().min(7).max(15).required(),
  }),
};
