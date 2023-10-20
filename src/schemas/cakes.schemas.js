import Joi from "joi"

export const cakesSchema = Joi.object({
    name: Joi.string().alphanum().min(2).required(),
    price: Joi.number().greater(0).required(),
    image: Joi.string().uri().required(),
    description: Joi.string()
})