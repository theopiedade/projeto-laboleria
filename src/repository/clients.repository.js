import db from "../database/database.connection.js"

export async function createClient(name, address, phone) {

    return (
        db.query(`
        INSERT INTO clients (name, address, phone)
        VALUES ($1,$2,$3);
        `, [name, address, phone])
    )

}


export async function checkClientById(id) {

    return (
        db.query(`
        SELECT * FROM clients WHERE id = ($1);`, [id])
    )

}