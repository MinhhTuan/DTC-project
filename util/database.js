const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('dtc', 'root', '', {
    dialect: 'mysql',
    host: '0.tcp.ap.ngrok.io',
    port: 12201
})

module.exports = sequelize
