const commonTool = require('../../../lib/common')
let db = require('../../../lib/db')

module.exports = function (req, res, next) {
	db.query(`select * from about_table limit 1`, function (err, about) {
		if (err) {
			res.sqlError(err)
		} else {
			commonTool.getPicById(about[0].avatar_id).then(response => {
				let perfect = about[0]
				perfect.src = response.path
				res.locals.about = perfect
				next()
			})
		}
	})
}