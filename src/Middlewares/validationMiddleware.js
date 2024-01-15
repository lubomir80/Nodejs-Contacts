const Joi = require('joi');



const addPostValidation = (req, res, next) => {
   const schema = Joi.object({
      name: Joi.string()
         .min(3)
         .max(30)
         .required(),
      email: Joi.string()
         .email()
         .min(10)
         .max(30)
         .required(),
      phone: Joi.string()
         .min(11)
         .max(30)
         .required(),
   })

   const validationResult = schema.validate(req.body);
   if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details })
   }
   next()
}

const addPutValidation = (req, res, next) => {
   const schema = Joi.object({
      name: Joi.string()
         .min(3)
         .max(30)
         .optional(),
      email: Joi.string()
         .email()
         .min(10)
         .max(30)
         .optional(),
      phone: Joi.string()
         .min(11)
         .max(30)
         .optional(),
   })

   const validationResult = schema.validate(req.body);
   if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details })
   }
   next();
}

module.exports = {
   addPostValidation,
   addPutValidation,
}