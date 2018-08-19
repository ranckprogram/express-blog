let db = require('../../../lib/db')

module.exports = function (req, res, next) {
	
	// 这种写法，如果该分类下没有文章，则分类也不会显示
	let sql =
		`select article_category_table.name,article_table.category,count(*)
		from article_table,article_category_table
		where article_table.category = article_category_table.type
		group by article_category_table.type`
	// let sql = `select name from article_category_table `

	db.query(sql, function (err, category) {
		if (err) {
			res.sqlError(err)
		} else {
			res.locals.category = category
			next()
		}
	})
}