const express = require('express');
const app = express();
var port = 3000

// var bodyParser = require('body-parser')
// const HangXeModel = require('./models/hangxe')

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log('Server started.')
})