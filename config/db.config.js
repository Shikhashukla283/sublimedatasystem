const dotenv = require('dotenv')
const { Sequelize } = require('sequelize')
const fs = require('fs')

// Load environment-specific variables based on the current environment
const environment = process.env.NODE_ENV || 'development'
const envFile = `.env.${environment}`
dotenv.config({ path: envFile })
const Op = Sequelize.Op

/* defining database configuration */
let DBOption = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    define: {
        timestamps: true,
    },
    logging: false,
    sync: { force: true },
}

let sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, DBOption)

/* connection for DB */
sequelize
    .authenticate()
    .then(() => {
        console.log('MYSQL --> Connection to DB has been established successfully.')
    })
    .catch(err => {
        console.log('Unable to connect to the database:', err)
    })

module.exports = {
    sequelize,
}
