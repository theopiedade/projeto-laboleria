import { checkCakeById } from "../repository/cakes.repository.js";
import { checkClientById } from "../repository/clients.repository.js";
import { createOrder, ordersByDate, ordersById, ordersByClientId } from "../repository/orders.repository.js"


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

export async function getOrderByDate(req, res) {
    const { date } = req.body


    try {

        const orders = await ordersByDate(date)

        if (orders.rowCount <= 0) return res.status(404).send([])

        return res.status(200).send(orders.rows)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}

export async function getOrderById(req, res) {
    const { id } = req.params

    try {

        const orders = await ordersById(id)

        if (orders.rowCount <= 0) return res.status(404).send("ID não encontrado: "+id)

        return res.status(200).send(orders.rows)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}

export async function getOrderByClientId(req, res) {
    const { id } = req.params

    try {

        const orders = await ordersByClientId(id)

        if (orders.rowCount <= 0) return res.status(404).send("ID não encontrado: "+id)

        return res.status(200).send(orders.rows)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}

