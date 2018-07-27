// 首页
const express = require('express')

module.exports = function () {
	var router = express.Router()

	router.get('/', function (req, res) {
		res.render('web/index.ejs', {})
	})

	return router
}