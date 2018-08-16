const express = require('express')

module.exports = function () {
	const router = express.Router()
	
	router.post('/upload', require('./common').index)
	
	router.get('/album/list', require('./album').getList)
	router.get('/album/:id', require('./album').getDetailById)
	router.post('/album', require('./album').createAlbum)
	router.put('/album/:id', require('./album').updateAlbum)
	
	router.get('/about', require('./about').getInfo)
	router.put('/about', require('./about').updateInfo)
	
	
	return router
}