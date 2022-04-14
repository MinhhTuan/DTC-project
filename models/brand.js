const mysql = require('mysql');
mysql.connect('mysql://localhost/my_database');

const Schema = mysql.Schema;

const HangXeSchema = new Schema({
  hang_xe_id: String,
  ten_hang_xe: String,
}, {
    collection: 'hangxe'
});

const HangXeModel = mysql.model('hangxe', HangXeSchema)

module.exports = HangXeModel