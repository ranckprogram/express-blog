const express = require('express')
const db = require('../../lib/db')
const commonTool = require('../../lib/common')

module.exports = function () {
	const router = express.Router()

	router.get('/', function (req, res) {

		db.query(`select * from about_table`, function (err, result) {
			if (err) {
				res.sqlError(err)
			} else {
				let perfect = result[0]
				commonTool.getPicById(result[0].avatar_id).then(response => {
					perfect.src = response.path
				}).then(function () {
					return commonTool.getPicById(result[0].follow_id)
				}).then(follow => {
					perfect.follow = follow.path
					res.render('web/about.ejs', {
						about: perfect
					})
				})
			}
		})
	})

	return router
}