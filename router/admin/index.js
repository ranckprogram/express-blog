const express = require('express')

module.exports = function () {
	const router = express.Router()
	
	router.get('/album/list', require('./album').getList)
	router.get('/album/:id', require('./album').getDetailById)
	
	return router
}