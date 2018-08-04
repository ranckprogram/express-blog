const express = require('express')

module.exports = function () {
	const router = express.Router()
	
	router.get('/album/list', require('./album').getList)
	
	return router
}