const { QueryTypes } = require('sequelize');
const db = require("../../database/connection")

exports.addUsers = async (req, res) => {
    try {
        const { email, password, name, status} = req.body
        const query = `INSERT INTO users (email,password,name,status) VALUES ('${email}','${password}','${name}','${status}')`
        await db.sequelize.query(query)

        res.send({
            status: "SUCCESS",
            message: "Add user finished"
        })
    } catch (error) {
        res.send({
            status: "failed",
            message: "Server Error"
        })
    }
}

exports.getUsers = async (req, res) => {
    try {
        const query = "SELECT * FROM users"
        const data = await db.sequelize.query(query, { type: QueryTypes.SELECT })

        res.send({
            status: "SUCCESS",
            data,
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: "FAILED",
            message: "Server error"
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params
        const data = await db.sequelize.query(`SELECT * FROM users WHERE id = ${id}`, { type: QueryTypes.SELECT})

        res.send({
            status: "success",
            data
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: "failed",
            message: "Server Error"
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, password, status} = req.body
        const query = `UPDATE users SET email = '${email}', password = '${password}', name = '${name}', status = '${status}' WHERE id = ${id}`;

        await db.sequelize.query(query)

        res.send({
            status: "SUCCESS",
            message: `Update user id: ${id} finished`,
            data: req.body
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: "failed",
            message: "Server Error"
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await db.sequelize.query(`DELETE FROM users WHERE id=${id}`)
        res.send({
            status: "SUCCESS",
            message: `delete user id: ${id} finished`
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: "FAILED",
            message: "server error"
        })
    }
}