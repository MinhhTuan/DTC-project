const {Sequelize} = require('sequelize')
const db = require('../util/database')

const Solution = db.define('solution', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	error_code: {
		type: Sequelize.STRING
	},
	solution: {
		type: Sequelize.STRING
	},
})

module.exports = Solution