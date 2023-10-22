import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postOrder, getOrderByDate } from "../controllers/orders.controllers.js";
import { ordersSchema, ordersByDateSchema } from "../schemas/orders.schemas.js"


const ordersRouter = Router()

ordersRouter.post('/order', validateSchema(ordersSchema), postOrder)
ordersRouter.get('/order', validateSchema(ordersByDateSchema), getOrderByDate)

export default ordersRouter