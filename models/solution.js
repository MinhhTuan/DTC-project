let db = require('../data/database')

const SolutionModel = {
  getAll:function(callback){
		return db.query("Select * FROM solution", callback);
	},
}

module.exports = SolutionModel