import db from "../database/database.connection.js"

export async function createOrder(clientId, cakeId, quantity, totalPrice) {

    return (
        db.query(`
        INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice")
        VALUES ($1,$2,$3, $4);
        `, [clientId, cakeId, quantity, totalPrice])
    )

}

export async function ordersByDate(date) {

    return (
        db.query(`
        SELECT JSON_BUILD_OBJECT('id', clients.id, 'name', clients.name, 'address', clients.address) AS "clients",
        JSON_BUILD_OBJECT('id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image) AS "cakes",
        orders.id AS "orderId", TO_CHAR(orders."createdAt", 'YYYY-MM-DD HH24:MI') AS "createdAt", orders.quantity AS "quantity", orders."totalPrice" AS "totalPrice" 
        FROM orders
        JOIN clients ON clients.id = orders."clientId"
        JOIN cakes ON cakes.id = orders."cakeId"
        WHERE DATE(orders."createdAt") = $1;
        `, [date])
    )

}

;