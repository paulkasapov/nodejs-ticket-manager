const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        userName: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
        firstName: Joi.string()
            .min(3)
            .required(),
        lastName: Joi.string()
            .min(3)
            .required(),
        avatar: Joi.string(),
        specialities: [Joi.array().items(Joi.string())]
    });
    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        userName: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

module.exports = {registerValidation, loginValidation};