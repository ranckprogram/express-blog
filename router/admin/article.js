const db = require('../../lib/db')

module.exports = {
	getCategoryList (req, res) {
		db.query(`select * from article_category_table`, function (err, list) {
			if (err) {
				console.error(err)
			} else {
				res.json({
					data: list
				})
			}
		})
	}
}