const db = require('../../../lib/db')

module.exports = function (req, res, next) {
	db.query(`select * from article_table order by \`read\` desc limit 10`, function (err, rankList) {
		if (err) {
			res.sqlError(err)
		} else {
			res.locals.rankList = rankList
			next()
		}
	})
}