var express = require("express");
var router = express.Router();
var Brand = require("./../models/brand");
var Model = require("./../models/model");
var Solution = require("./../models/solution");

/* GET home page. */
router.get("/", function (req, res, next) {
  Brand.getAll(function (err, rows) {
    if (err) {
      res.json({
        code: -1,
        data: err,
        msg: ""
      });
    } else {
      res.json({
        code: 1,
        data: rows,
        msg: ""
      });
    }
    
    Model.getAll(function (err, rows) {
      if (err) {
        res.json({
          code: -1,
          data: err,
          msg: ""
        });
      } else {
        res.json({
          code: 1,
          data: rows,
          msg: ""
        });
      }
    });
  });

  Model.getAll(function (err, rows) {
    if (err) {
      res.json({
        code: -1,
        data: err,
        msg: ""
      });
    } else {
      res.json({
        code: 1,
        data: rows,
        msg: ""
      });
    }
  });

  Solution.getAll(function (err, rows) {
    if (err) {
      res.json({
        code: -1,
        data: err,
        msg: ""
      });
    } else {
      res.json({
        code: 1,
        data: rows,
        msg: ""
      });
    }
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
