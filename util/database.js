const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('dtc', 'root', '', {
    dialect: 'mysql',
    host: '0.tcp.ap.ngrok.io',
    port: 13520
})

module.exports = sequelize
