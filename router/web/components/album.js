let db = require('../../../lib/db')

module.exports = function (req, res, next) {
	// 我的相册
	let sql = `select * 
		from album_table,album_picture_table 
		where album_picture_table.album_id = album_table.id
		group by album_picture_table.album_id
		limit 6`

	db.query(sql, function (err, albums) {
		if (err) {
			res.sqlError(err)
		} else {
			res.locals.albums = albums
			next()
		}
	})
}