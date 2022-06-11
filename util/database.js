const {Sequelize} = require('sequelize')
const dbConfig = require('../config/db.config')
const sequelize = new Sequelize('dtc', 'root', '', {
    dialect: dbConfig.dialect,
    host: '0.tcp.ap.ngrok.io',
    port: 10568
})

module.exports = sequelize
