// 首页
const express = require('express')
const db = require('../../lib/db')

module.exports = function () {
	var router = express.Router()

	router.get('/', function (req, res) {
		res.render('web/index.ejs', {})
	})

	return router
}