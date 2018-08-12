let db = require('../../../lib/db')

module.exports = function (req, res, next) {
	// 我的相册
	let sql = `select album_table.id, picture_table.path
		from album_table,album_picture_table,picture_table
		where album_picture_table.album_id = album_table.id and album_picture_table.pic_id = picture_table.id
		group by album_picture_table.album_id
		order by id desc
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