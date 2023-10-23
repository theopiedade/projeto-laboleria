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
        JSON_BUILD_OBJECT('id', cakes.id, 'name', cakes.name, 'price', TO_CHAR(cakes.price, 'FM99.00'), 'description', 
        cakes.description, 'image', cakes.image) AS "cakes",
        orders.id AS "orderId", TO_CHAR(orders."createdAt", 'YYYY-MM-DD HH24:MI') AS "createdAt", orders.quantity AS "quantity", 
        TO_CHAR(orders."totalPrice", 'FM99.00') AS "totalPrice" 
        FROM orders
        JOIN clients ON clients.id = orders."clientId"
        JOIN cakes ON cakes.id = orders."cakeId"
        WHERE DATE(orders."createdAt") = $1;
        `, [date])
    )

}

export async function ordersById(id) {

    return (
        db.query(`
        SELECT JSON_BUILD_OBJECT('id', clients.id, 'name', clients.name, 'address', clients.address) AS "clients",
        JSON_BUILD_OBJECT('id', cakes.id, 'name', cakes.name, 'price', TO_CHAR(cakes.price, 'FM99.00'), 'description', cakes.description, 'image', cakes.image) AS "cakes",
        orders.id AS "orderId", TO_CHAR(orders."createdAt", 'YYYY-MM-DD HH24:MI') AS "createdAt", orders.quantity AS "quantity", 
        TO_CHAR(orders."totalPrice", 'FM9990.00') AS "totalPrice" 
        FROM orders
        JOIN clients ON clients.id = orders."clientId"
        JOIN cakes ON cakes.id = orders."cakeId"
        WHERE orders.id = $1;
        `, [id])
    )

}

export async function ordersByClientId(id) {

    return (
        db.query(`
        SELECT orders.id AS "orderId", orders.quantity AS "quantity", TO_CHAR(orders."createdAt", 'YYYY-MM-DD HH24:MI') AS "createdAt", 
        TO_CHAR(orders."totalPrice", 'FM99.00') AS "totalPrice", cakes.name AS cakes
        FROM orders
        JOIN cakes ON cakes.id = orders."cakeId"
        WHERE orders."clientId" = $1;
        `, [id])
    )

}
