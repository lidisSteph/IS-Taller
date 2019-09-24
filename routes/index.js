let express = require('express')
let router = express.Router()

// const Employee = require('../models').Employee


router.get('/', function (req, res, next) {
	res.render('index', { title: 'Sequelize ORM TALLER' })
})

module.exports = router
