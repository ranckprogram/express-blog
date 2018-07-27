const express = require('express')
let db = require('../../lib/db')

module.exports = function () {
	const router = express.Router()

	router.get('/', function (req, res) {
		db.query(`select * from article_table limit 10`, function (err, list) {
			if (err) {
				res.sqlError(err)
			} else {
				res.render('web/list.ejs', {list}) // 这里的list也许回合首页冲突，但是暂时不会有事儿
			}
		})
	})

	router.get('/detail/:id', function (req, res) {
		const id = req.params.id
		db.query(`select * from article_table where id = ${id}`, function (err, details) {
			if (err) {
				res.sqlError(err)
			} else {
				console.log(details)
				res.render('web/articleDetail.ejs', {detail: details[0]})
			}
		})
	})

	return router
}