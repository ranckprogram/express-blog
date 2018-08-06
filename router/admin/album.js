const Album = require('../../model/Album')

module.exports = {
	getList (req, res) {
		let params = {
			limit: req.query.limit,
			page: req.query.page,
			keywords: req.query.keywords
		}
		let album = new Album('album_table')
		album.getList(params).then(data => {
			res.json(data)
		})
	},
	getDetailById (req, res) {
		const id = req.params.id
		let album = new Album('album_table')
		album.getDetail(id).then(data => {
			res.json(data)
		})
	}
}