const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

const Schema = mongoose.Schema;

const HangXeSchema = new Schema({
  hang_xe_id: String,
  ten_hang_xe: String,
}, {
    collection: 'hangxe'
});

const HangXeModel = mongoose.model('hangxe', HangXeSchema)

module.exports = HangXeModel