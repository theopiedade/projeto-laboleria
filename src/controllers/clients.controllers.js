import { createClient } from "../repository/clients.repository.js"


export async function postClient(req, res) {
    const { name, address, phone } = req.body

    try {

        await createClient(name, address, phone)

        return res.sendStatus(201)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}

