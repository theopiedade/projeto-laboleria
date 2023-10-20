import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postCakes } from "../controllers/cakes.controllers.js";
import { cakesSchema } from "../schemas/cakes.schemas.js"


const cakesRouter = Router()

cakesRouter.post('/cakes', validateSchema(cakesSchema), postCakes)

export default cakesRouter