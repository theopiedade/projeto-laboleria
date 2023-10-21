import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postClient } from "../controllers/clients.controllers.js";
import { clientsSchema } from "../schemas/clients.schemas.js"


const clientsRouter = Router()

clientsRouter.post('/clients', validateSchema(clientsSchema), postClient)

export default clientsRouter