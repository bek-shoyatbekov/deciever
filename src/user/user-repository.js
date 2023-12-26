import pg from "../database/pg.js";
import AppError from "../utils/app-error/app-error.js";



class UserRepository {

    constructor() {
        this.pg = pg;
    }

    async findByUsername(username) {
        try {
            const { rows } = await this.pg(
                'SELECT * FROM users WHERE username=$1;',
                [username]
            );
            return rows[0];
        } catch (err) {
            throw new AppError(err?.details[0]?.message, 500)
        }
    }

    async create(data) {
        try {
            const { rows } = await this.pg(
                'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;',
                [data.username, data.password]
            );
            return rows[0];
        } catch (err) {
            throw new AppError(err?.details[0]?.message, 500)
        }
    }

    async findById(id) {
        try {
            const { rows } = await this.pg(
                'SELECT * FROM users WHERE id=$1;',
                [id]
            );
            return rows[0];
        } catch (err) {
            throw new AppError(err?.details[0]?.message, 500)
        }
    }

    async delete(id) {
        try {
            const { rowCount } = await this.pg(
                'DELETE FROM users WHERE id=$1;',
                [id]
            );
            return rowCount;
        } catch (err) {
            throw new AppError(err?.details[0]?.message, 500)
        }
    }
}

module.exports = new UserRepository();