// 首页
const express = require('express')
const mysql = require('mysql')

let db = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'blog'
});

module.exports = function () {
	var router = express.Router()
	router.get('/index', function (req, res) {
		db.query(`select * from article_table`, function (err, list) {
			if (err) {
				res.sqlError(err)
				// console.error(err)
				// res.send('数据库挂了').statusCode(500).end()
			} else {
				console.log(list)
				res.render('web/index.ejs', {list: list})
			}
		})
	})


	return router
}