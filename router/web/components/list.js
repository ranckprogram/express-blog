// 文章列表
let db = require('../../../lib/db')


module.exports = function (req, res, next) {
	db.query(`select * from article_table`, function (err, list) {
		if (err) {
			res.sqlError(err)
		} else {
			res.locals.list = list
			next()
		}
	})
}