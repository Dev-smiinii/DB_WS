const e = require('express')
const pool = require('../../pool')

exports.findAll = async () => {
    try{
        const sql = `SELECT * FROM boards`
        const [result] = await pool.query(sql)
        return result
    } catch (err) {
        throw new Error('repo err' + err.message)
    }
}

exports.findOne = async (id) => {
    try {
        const sql = `SELECT * FROM boards WHERE id=${id}`
        const [result] = await pool.query(sql)
        return result
    } catch (err) {
        throw new Error('repo err' + err.message)
    }
}

exports.incrementId = async (id) => {
        const index = `UPDATE boards SET hit = hit + 1 WHERE id=${id}`
        await pool.query(index)
}
