const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        userName: Joi.string()
            .min(6)
            .max(20)
            .required(),
        password: Joi.string()
            .min(6)
            .max(20)
            .required(),
        firstName: Joi.string()
            .min(3)
            .max(20)
            .required(),
        lastName: Joi.string()
            .min(3)
            .max(20)
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

const ticketValidation = (data) => {
    const schema = Joi.object({
        ticketId: Joi.number()
            .required(),
        number: Joi.string()
            .required(),
        lastUpdatedTime: Joi.string()
            .required(),
        owner: Joi.object({
            userId: Joi.string()
                .required(),
            firstName: Joi.string()
                .required(),
            lastName: Joi.string()
                .required(),
            avatar: Joi.string(),
            specialities: [Joi.array().items(Joi.string())]
        }),
        reportedTime: Joi.string()
            .required(),
        status: Joi.string()
            .required(),
        description: Joi.string()
            .required()
            .min(3)
            .max(200),
        asset: Joi.object({
            assetId: Joi.number()
                .required(),
            name: Joi.string()
                .required()
                .min(3)
                .max(200),
            geoCode: Joi.string()
                .required(),
            kmFrom: Joi.number()
                .required(),
            kmTo: Joi.number()
                .required(),
        }),
    });

    return schema.validate(data);
};

module.exports = {registerValidation, loginValidation, ticketValidation};