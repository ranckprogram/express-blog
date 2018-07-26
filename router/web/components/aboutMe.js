
let db = require('../../../lib/db')

module.exports = function (req, res, next) {
	db.query(`select * from about_table limit 1`, function (err, about) {
		if (err) {
			res.sqlError(err)
		} else {
			res.locals.about = about[0]
			next()
		}
	})
}