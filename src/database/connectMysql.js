const { Sequelize } = require('sequelize')
const { env } = require('../config/env')

const sequelize = new Sequelize('phone_store_2', 'root', '', {
    logging: false,
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql'
})

module.exports = sequelize
