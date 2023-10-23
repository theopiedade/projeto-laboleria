import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postOrder, getOrderByDate, getOrderById, getOrderByClientId } from "../controllers/orders.controllers.js";
import { ordersSchema, ordersByDateSchema } from "../schemas/orders.schemas.js"


const ordersRouter = Router()

ordersRouter.post('/order', validateSchema(ordersSchema), postOrder)
ordersRouter.get('/order', validateSchema(ordersByDateSchema), getOrderByDate)
ordersRouter.get('/orders/:id', getOrderById)
ordersRouter.get('/orders/:id/orders', getOrderByClientId)

export default ordersRouter