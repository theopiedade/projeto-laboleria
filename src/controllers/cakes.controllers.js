import { checkCakesName, createCake } from "../repository/cakes.repository"


export async function postCakes(req, res) {

    const { name, price, image, description } = req.body

    if ((await checkCakesName(name)).rowCount > 0) return res.status(409).send("não pode ser um nome de um bolo já existente")

    try {

        await createCake(name, price, image, description)

        return res.sendStatus(201)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}