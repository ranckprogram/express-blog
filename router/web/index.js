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

	router.get('/', function (req, res, next) {
		db.query(`select * from article_table`, function (err, list) {
			if (err) {
				res.sqlError(err)
			} else {
				res.list = list
				next()
			}
		})
	})
	// router.get('/', function (req, res, next) {
	// 	// 关于我
	// 	db.query(`select * from about_table limit 1`, function (err, about) {
	// 		if (err) {
	// 			res.sqlError(err)
	// 		} else {
	// 			res.about = about
	// 			next()
	// 		}
	// 	})
	// })
	// router.get('/', function (req, res, next) {
	// 	// 我的相册
	// 	let sql = `select *
	// 	from album_table,album_picture_table
	// 	where album_picture_table.album_id = album_table.id
	// 	group by album_picture_table.album_id
	// 	limit 6`
	//
	// 	db.query(sql, function (err, album) {
	// 		if (err) {
	// 			res.sqlError(err)
	// 		} else {
	// 			console.log(album)
	// 			res.album = album
	// 			next()
	// 		}
	// 	})
	// })
	router.get('/', function (req, res) {
		let sql =
			`select article_category_table.name,article_table.category,count(*) 
		from article_table,article_category_table 
		where article_table.category = article_category_table.type 
		group by article_category_table.type`

		db.query(sql, function (err, category) {
			if (err) {
				res.sqlError(err)
			} else {
				res.render('web/index.ejs', {
					category: category,
					list: res.list
				})
			}
		})
	})


	return router
}