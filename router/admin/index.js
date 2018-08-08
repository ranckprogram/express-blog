const express = require('express')

module.exports = function () {
	const router = express.Router()
	
	router.post('/upload', require('./common').index)
	
	router.get('/album/list', require('./album').getList)
	router.get('/album/:id', require('./album').getDetailById)
	
	return router
}