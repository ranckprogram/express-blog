const express = require('express')
const db = require('../../lib/db')

module.exports = function () {
	const router = express.Router()

	router.get('/', function (req, res) {

		db.query(`select * from about_table`, function (err, result) {
			if (err) {
				res.sqlError(err)
			} else {
				res.render('web/about.ejs', {
					about: result[0]
				})
			}
		})
	})

	return router
}