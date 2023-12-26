import "dotenv/config";


export default Object.freeze({

    app: {
        port: process.env.PORT || 5000
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres3388',
        database: process.env.DB_NAME || 'deciever',
        connectionString: process.env.DB_CONNECTION_STRING || '127.0.0.1:5432',
        ssl: process.env.DB_SSL || false
    },

});