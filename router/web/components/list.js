// 文章列表
let db = require('../../../lib/db')
const async = require('async')

module.exports = function (req, res, next) {
	let page = req.query.page || 1
	let begin = (page - 1) * 10
	async.parallel({
		list: function (callback) {
			db.query(`select * from article_table limit ${begin}, 10`, function (err, list) {
				if (err) {
					res.sqlError(err)
				} else {
					callback(null, list)
				}
			})
		},
		total: function (callback) {
			db.query(`select count(*) from article_table`, function (err, pageCount) {
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