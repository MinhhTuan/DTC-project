const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const db = require('./util/database')

const indexRouter = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

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


