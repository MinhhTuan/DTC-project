let db = require('../data/database')

const ModelModel = {
  getAll:function(callback){
		return db.query("Select * FROM model", callback);
	},
}

module.exports = ModelModel