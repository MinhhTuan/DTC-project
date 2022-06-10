const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('dtc', 'root', '', {
    dialect: 'mysql',
    host: '0.tcp.ap.ngrok.io',
    port: 16696
})

module.exports = sequelize
