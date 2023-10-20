import { Router } from "express"
import cakesRouter from "./cakes.routes"

const router = Router()

router.use(cakesRouter)

