let db = require('../data/database')

const BrandModel = {
  getAll:function(callback){
		return db.query("Select * FROM brand",callback);
	},
}

module.exports = BrandModel