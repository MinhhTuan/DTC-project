const {Sequelize} = require('sequelize')
const dbConfig = require('../config/db.config')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
    port: dbConfig.port
})

module.exports = sequelize
