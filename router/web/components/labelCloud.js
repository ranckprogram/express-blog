// 标签云
let db = require('../../../lib/db')

module.exports = function (req, res, next) {
	db.query(`select * from label_table`, function (err, cloudList) {
		if (err) {
			res.sqlError(err)
		} else {
			res.locals.cloudList = cloudList
			next()
		}
	})
}