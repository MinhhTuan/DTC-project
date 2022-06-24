const { redirect } = require('express/lib/response')
const Brand = require('../models/brand')
const Model = require('../models/model')
const Solution = require('../models/solution')

exports.getBrands = (req, res, next) => {
    const years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2018', '2019', '2020', '2021']
    Brand.findAll().then(
        (brands) => res.render('index', {
            'brands': brands,
            'years': years
        })
    ).catch(err => console.log(err))
}

exports.getModels = (req, res, next) => {
    Model.findAll({
        where: {
            brandId: req.params.brandId
        }
    }).then(
        (models) => res.json(models)
    ).catch(err => console.log(err))
}

exports.getResult = (req, res, next) => {
    Solution.findOne({
        where: {
            error_code: req.query.error_code,
            modelId: req.query.model_id
        }
    }).then(
        (solution) => res.json(solution)
    ).catch(err => console.log(err))
}