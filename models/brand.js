const {Sequelize} = require('sequelize')
const db = require('../util/database')

const Brand = db.define('brand', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	brand_name: Sequelize.STRING
})



module.exports = Brand