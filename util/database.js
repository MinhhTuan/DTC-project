const {Sequelize} = require('sequelize')
const dbConfig = require('../config/db.config')
const sequelize = new Sequelize('dtc', 'root', '', {
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
    port: dbConfig.port
})

module.exports = sequelize
