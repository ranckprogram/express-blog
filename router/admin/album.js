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
	},
	createAlbum (req, res) {
		let name = req.body.name
		let describe = req.body.describe
		let srcList = req.body.fileIdList
		let album = new Album('album_table')
		album.createAlbum(name, describe, srcList).then(data => {
			// 成功要不要 提取公共中间件？
			let result = {
				data: {
					message: '添加成功'
				}
			}
			res.json(result)
		})
	}
}