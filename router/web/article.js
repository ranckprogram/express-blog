const express = require('express')
let db = require('../../lib/db')
const async = require('async')


module.exports = function () {
	const router = express.Router()

	router.get('/', function (req, res) {
		res.render('web/list.ejs', {})
	})

	/**
	 * 先拿到文章详情，然后用里面的labels为条件去拿另一张表的labels
	 **/

	router.get('/detail/:id', function (req, res, next) {
		const id = req.params.id
		db.query(`select * from article_table where id = ${id}`, function (err, details) {
			if (err) {
				res.sqlError(err)
			} else {
				res.detail = details[0]
				next()
			}
		})
	})

	router.get('/detail/:id', function (req, res, next) {
		let detail = res.detail
		let labelList = detail.labels.split(',')
		labelList = labelList.map(item => {
			return `type = ${item}`
		})
		let where = labelList.join(` or `)
		db.query(`select * from label_table where ${where}`, function (err, labels) {
			if (err) {
				res.sqlError(err)
			} else {
				detail.labels = labels
				// res.render('web/articleDetail.ejs', {
				// 	detail: detail
				// })
				res.detail = detail
				next()
			}
		})
	})
	router.get('/detail/:id', function (req, res) {
		// 上一篇，下一篇
		const id = req.params.id
		let prevSql = `select id,title from article_table where id < ${id} order by  id desc limit 1`
		let nextSql = `select id,title from article_table where id > ${id} limit 1`

		async.parallel({
			prev: callback => {
				db.query(prevSql, function (err, prev) {
					if (err) {
						res.sqlError(err)
					} else {
						callback(null, prev)
					}
				})
			},
			next: callback => {
				db.query(nextSql, function (err, next) {
					if (err) {
						res.sqlError(err)
					} else {
						callback(null, next)
					}
				})
			}
		}, function (err, results) {
			if(err ) {
				res.sqlError(err)
			} else{
				res.render('web/articleDetail.ejs', {
					detail: res.detail,
					prev: results.prev[0] || {},
					next: results.next[0] || {}
				})
			}
		})


	})

	router.get('/like/:id', function (req, res) {
		let result = {}
		if (req.cookies.like) {
			result = {
				result: false,
				message: '已经设置过like',
				like: 0
			}
			res.json(result)
			return
		}

		const id = req.params.id

		db.query(`update article_table set \`like\` = \`like\`+ '1' where id = ${id}`, function (err, like) {
			if (err) {
				res.sqlError(err)
			} else {
				res.cookie('like', true, {
					path: req.originalUrl,
					maxAge: 20 * 60 * 1000  // 20分钟
				})
				result = {
					result: true,
					message: '操作成功'
				}
				res.json('ok')
			}
		})
	})

	return router
}