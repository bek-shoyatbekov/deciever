import pgPool from "./pg-pool.js";


/**
 * Executes a PostgreSQL query using a connection pool.
 *
 * @param {string} query - The SQL query to execute.
 * @param {Object} [params=null] - The parameters to substitute in the query.
 * @return {Promise} A Promise that resolves to the query result.
 */

const pg = async (query, params = null) => {
    try {

        const client = await pgPool.connect()

        const result = await client.query(query, params !== null ? params : null);

        client.release();

        return result;

    } catch (err) {
        console.error("Error while executing sql query: ", err);
        return
    }

};


export default pg;
