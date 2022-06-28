const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const db = require('./util/database')
const multer = require('multer');
// const csrf = require('csurf')
require('dotenv').config();

const indexRouter = require('./routes/index');

const app = express();
// const csrfProtection = csrf();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use(
	multer({
		dest: 'temp/',
		fileFilter: function (req, file, callback) {
			var ext = path.extname(file.originalname);
			if (
				ext !== '.png' &&
				ext !== '.jpg' &&
				ext !== '.gif' &&
				ext !== '.jpeg' &&
        ext !== '.pdf'
			) {
				return callback(new Error('Only images are allowed'));
			}
			callback(null, true);
		},
	}).single('file')
);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
// app.use(csrfProtection);

const Brand = require('./models/brand');
const Model = require('./models/model');
const Solution = require('./models/solution');

Brand.hasMany(Model)
Model.belongsTo(Brand, {
  constraints: true,
  onDelete: 'CASCADE'
})

Model.hasMany(Solution)
Solution.belongsTo(Model, {
  constraints: true,
  onDelete: 'CASCADE'
})

db.sync().then(app.listen(3000))


