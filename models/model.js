const {Sequelize} = require('sequelize')
const db = require('../util/database')

const Model = db.define('model', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	model_name: {
		type: Sequelize.STRING
	},
	year: {
		type: Sequelize.STRING
	},
})

module.exports = Model