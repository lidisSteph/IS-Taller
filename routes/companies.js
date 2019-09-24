
var express = require('express')
var router = express.Router()
var multer  = require('multer')
var fs = require('fs')
var multer = require('multer')
var storage = multer.diskStorage({
	destination: './public/uploads',
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname)
	}
})
var upload = multer({storage: storage})

const Op = require('sequelize').Op
const Company = require('../models').Company
const CompanyContractType = require('../models').CompanyContractType
const CompanyType = require('../models').CompanyType
const ContractType = require('../models').ContractType
const Municipality = require('../models').Municipality
const Country = require('../models').Country
const Department = require('../models').Department




router.get('/list', async function(req, res, next) {
	console.log(req.query.page)

	try {
 
		const options = {
			attributes: ['id', 'name','logo','taxId','status'],
			page: req.query.page || 1,
			paginate: 5,
			order: [['name', 'ASC']],
			include: [CompanyType]

		}

		res.render('companiesList', {
			page: 'Registro Empresa',
			companies: docs,
			totalPages: pages,
			totalRegistry: total
		})
	} catch (error) {
		console.error(error)
	}
})


router.get('/signup', async function(req, res, next) {
	try {
		const municipalities = await Municipality.findAll({attributes: ['id', 'name']})
		res.render('companiesSignup', {
			page: 'Registro Empresa',
			companyTypes: companyTypes,
			contractTypes: contractTypes,
			municipalities: municipalities,
		
		})
	} catch (error) {
		console.error(error)
	}
})

router.post('/', upload.single('logo') , async function(req, res, next){
	let company = req.body
	let logo = req.file

	res.send({company: company, file: logo})
	try {
		let newCompany = await Company.create({
			name: company['name'],
			logo: logo.path.substring(6),
			taxId: company['tax-id'],
			MunicipalityId: company['municipality'],
			status: 'active'
		})

		let newContractTypes = []

		for (let contractType of company['contract-types']) {
			newContractTypes.push(await CompanyContractType.create({
				CompanyId: newCompany.id,
				ContractTypeId: contractType
			}))
		}
		res.status(200).send({company: newCompany, contractTypes: newContractTypes})
	} catch (error) {
		console.error(error)
	}
})

router.get('/modify/:id', async function(req, res) {
	try{
		let company = await Company.findByPk(req.params.id)
		if(!company){
			res.render('companiesModify', {
				page: 'Modificación empresa',
				companyTypes: '',
				contractTypes: '',
				municipalities: '',
				company: '',
				found: false
			})
			console.log('no existe')
		} else{
			const municipalities = await Municipality.findAll({attributes: ['id', 'name']})
			let companyContractTypes = await CompanyContractType.findAll({
				where: {
					CompanyId: company.id
				}
			})
			let types = []
			for (let type of companyContractTypes) {
				types.push(type.ContractTypeId)
			}
			res.render('companiesModify', {
				page: 'Modificación empresa',
				companyTypes: companyTypes,
				contractTypes: contractTypes,
				municipalities: municipalities,
				currencies: currencies,
				company: company,
				types: types,
				found: true
			})
		}
	} catch(error){
		console.error(error)
	}
})

router.put('/', upload.single('logo'), async function(req, res) {
	let company = req.body
	let logo = req.file

	try {
		let oldCompany = await Company.findByPk(parseInt(company.id))
		let oldLogo = oldCompany.logo
		await oldCompany.update({
			name: company['name'],
			logo: logo ? logo.path : company.logo,
			taxId: company['tax-id'],
			paymentCycle: company['payment-cycle'],
			CurrencyId: company['currency'],
			CompanyTypeId: company['company-type'],
			MunicipalityId: company['municipality']
		})

		if (logo) {
			fs.unlinkSync(oldLogo)
		}

		await CompanyContractType.destroy({where: {CompanyId: oldCompany.id}})

		let newContractTypes = []

		for (let contractType of company['contract-types']) {
			newContractTypes.push(await CompanyContractType.create({
				CompanyId: company.id,
				ContractTypeId: contractType
			}))
		}

		res.status(200).send(oldCompany)
        
	} catch (error) {
		console.error(error)
	}
    
})


router.put('/:id', async function(req, res) {

	try {

		let company = await Company.findByPk(parseInt(req.params.id))
		if (company.status === 'active') {
			await company.update({
				status: 'inactive'
			})
			res.status(200).json(company) 
            
		}else{
			await company.update({
				status: 'active'
			})
			res.status(200).json(company) 
		}
 
	} catch (error) {
		console.error(error)
	}
    
})

module.exports = router