import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { cakesSchema } from "../schemas/cakes.schemas.js";

const cakesRouter = Router()

cakesRouter.post('/cakes', validateSchema(cakesSchema), cakesPost)
