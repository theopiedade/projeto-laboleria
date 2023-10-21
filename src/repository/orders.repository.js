import db from "../database/database.connection.js"

export async function createOrder(clientId, cakeId, quantity, totalPrice) {

    return (
        db.query(`
        INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice")
        VALUES ($1,$2,$3, $4);
        `, [clientId, cakeId, quantity, totalPrice])
    )

}