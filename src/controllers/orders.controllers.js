import { checkCakeById } from "../repository/cakes.repository.js";
import { checkClientById } from "../repository/clients.repository.js";
import { createOrder } from "../repository/orders.repository.js"


export async function postOrder(req, res) {
    const { clientId, cakeId, quantity, totalPrice } = req.body

    const checkClientId = await checkClientById(clientId)
    if (checkClientId.rowCount == 0) return res.status(409).send("ID de usuário não encontrado")

    const checkCakeId = await checkCakeById(cakeId)
    if (checkCakeId.rowCount == 0) return res.status(409).send("ID do bolo não encontrado")

    try {

        await createOrder(clientId, cakeId, quantity, totalPrice)

        return res.sendStatus(201)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}