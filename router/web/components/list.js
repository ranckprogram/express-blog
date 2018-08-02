// 文章列表
let db = require('../../../lib/db')
const async = require('async')

module.exports = function (req, res, next) {

	const category = req.query.category
	const label = req.query.label
	let page = req.query.page || 1
	let begin = (page - 1) * 10

	let sqlList = `select * from article_table limit ${begin}, 10`
	let sqlTotal = `select count(*) from article_table `
	if (category) {
		sqlList = `select * from article_table where category = ${category} limit ${begin}, 10`
		sqlTotal = `select count(*) from article_table where category = ${category}`
	}

	if (label) {
		sqlList = `select * from article_table where labels LIKE '%${label}%' limit ${begin}, 10`
		sqlTotal = `select count(*) from article_table where labels LIKE '%${label}%'`
	}
	async.parallel({
		list: function (callback) {
			db.query(sqlList, function (err, list) {
				if (err) {
					res.sqlError(err)
				} else {
					callback(null, list)
				}
			})
		},
		total: function (callback) {
			db.query(sqlTotal, function (err, pageCount) {
				if (err) {
					res.sqlError(err)
				} else {
					callback(null, pageCount)
				}
			})
		}
	}, function (err, results) {
		if (err) {
			console.error(err)
		} else {
			res.locals.listPage = {
				page: page,
				total: results.total[0]['count(*)']
			}
			res.locals.list = results.list
			next()
		}
	})

}