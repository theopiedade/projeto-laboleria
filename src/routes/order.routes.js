import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postOrder } from "../controllers/orders.controllers.js";
import { ordersSchema } from "../schemas/orders.schemas.js"


const ordersRouter = Router()

ordersRouter.post('/order', validateSchema(ordersSchema), postOrder)

export default ordersRouter