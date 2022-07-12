const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Brand = require('../models/brand');
const Model = require('../models/model');
const Solution = require('../models/solution');
const aws = require('aws-sdk');
const fs = require('fs');

aws.config.setPromisesDependency();
aws.config.update({
	accessKeyId: 'AKIA2GTIOK5PLJZSYNQM',
	secretAccessKey: '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',
	region: 'us-east-1',
});
const s3 = new aws.S3();

exports.getBrands = (req, res, next) => {
	const years = [
		'2010',
		'2011',
		'2012',
		'2013',
		'2014',
		'2015',
		'2016',
		'2017',
		'2018',
		'2018',
		'2019',
		'2020',
		'2021',
	];
	Brand.findAll()
		.then((brands) =>
			res.render('index', {
				brands: brands,
				years: years,
			})
		)
		.catch((err) => console.log(err));
};

exports.getModels = (req, res, next) => {
	Model.findAll({
		where: {
			brandId: req.params.brandId,
		},
	})
		.then((models) => res.json(models))
		.catch((err) => console.log(err));
};

exports.getErrorCodes = (req, res, next) => {
	Solution.findAll({
		where: {
			modelId: req.params.modelId,
		},
	})
		.then((error_codes) => res.json(error_codes))
		.catch((err) => console.log(err));
};

exports.getResult = (req, res, next) => {
	Solution.findOne({
		where: {
			id: req.query.error_code
		},
	})
		.then((solution) => res.json(solution))
		.catch((err) => console.log(err));
};

exports.sponsor = (req, res, next) => {
	let modelId = req.body.modelId;
	let year = req.body.year1;
	let error_code = req.body.error_code

	const params = {
		ACL: 'public-read',
		Bucket: 'thinh-test-public',
		Body: fs.createReadStream(req.file.path),
		Key: `errors/${req.file.originalname}`,
		ContentDisposition:"inline",
    ContentType:"application/pdf"
	};

	s3.upload(params, (err, data) => {
		if (err) {
			console.log(
				'Error occured while trying to upload to S3 bucket',
				err
			);
		}

		if (data) {
			fs.unlinkSync(req.file.path); // Empty temp folder
			const locationUrl = data.Location;
			const solution = new Solution({
				error_code: error_code,
				solution: locationUrl,
				modelId: modelId
			});
			solution
				.save()
				.then((result) => res.redirect('/'))
				.catch((err) => {
					console.log('Error occured while trying to save to DB');
				});
		}
	});
}
