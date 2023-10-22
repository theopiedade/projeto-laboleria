import Joi from "joi"

export const ordersSchema = Joi.object({
    clientId: Joi.number().required(),
    cakeId: Joi.number().required(),
    quantity: Joi.number().integer().min(1).max(4).required(),
    totalPrice: Joi.number().greater(0).required()
})

export const ordersByDateSchema = Joi.object({
    date: Joi.date().iso().required()
})