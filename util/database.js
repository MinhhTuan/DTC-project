const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('dtc', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize
