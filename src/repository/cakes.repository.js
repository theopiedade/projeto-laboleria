import db from "../database/database.connection.js"

export async function createCake(name, price, image, description) {

    return (
        db.query(`
        INSERT INTO cakes (name, price, image, description)
        VALUES ($1,$2,$3, $4);
        `, [name, price, image, description])
    )

}

export async function checkCakesName(name) {

    return (
        db.query(`
        SELECT * FROM cakes WHERE name = ($1);`, [name])
    )

}

export async function checkCakeById(id) {

    return (
        db.query(`
        SELECT * FROM cakes WHERE id = ($1);`, [id])
    )

}

