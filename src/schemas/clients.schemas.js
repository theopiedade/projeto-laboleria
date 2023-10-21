import Joi from "joi"

export const clientsSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().regex(/^[0-9]+$/).min(10).max(11).required()
})