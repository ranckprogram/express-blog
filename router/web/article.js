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
		/**
		 * 阅读量，避免重复阅读处理
		 * 如果刚才已经读，则不增加，否则增加
		 * */
		req.sessionOptions.path = req.originalUrl
		const id = req.params.id
		if (req.session.read) {
			next()
		} else {
			db.query(`update article_table set \`read\`= \`read\`+'1' where id=${id} `, function (err, data) {
				if (err) {
					res.sqlError(err)
				} else {
					req.session.read = true
					next()
				}
			})
		}
	})

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
			if (err) {
				res.sqlError(err)
			} else {
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
				ex: '这个我设置了path在逻辑上生效，但是浏览器上没看到',
				cookie: req.cookies
			}
			res.json(result)
			return
		}

		const id = req.params.id

		db.query(`update article_table set \`like\` = \`like\`+ '1' where id = ${id}`, function (err, like) {
			if (err) {
				res.sqlError(err)
			} else {
				res.cookie('like', 'like', {
					maxAge: 20 * 60 * 1000,  // 20分钟,
					path: req.originalUrl
				})
				result = {
					result: true,
					message: '操作成功'
				}
				res.json(result)
			}
		})
	})

	router.post('/search', function (req, res) {
		const keyWord = req.body.keyboard
		const sql = `select * from article_table where title LIKE '%${keyWord}%';`
		db.query(sql, function (err, list) {
			if (err) {
				res.sqlError(err)
			} else {
				res.render('web/list.ejs', {list})
			}
		})
	})

	return router
}