const fs = require('fs')
const path = require('path')
const db = require('../../lib/db')
module.exports = {
	index (req, res) {
		// 这里考虑使用队列处理，哈哈哈temp
		req.files.forEach(file => {
			var title = file.originalname
			var titleNameArr = title.split('.')
			var extName = titleNameArr[1]
			var fullPath = `${file.path}.${extName}`
			fs.rename(file.path, fullPath, function (err) {
				if (err) {
					console.error(err)
				} else {
					// 存数据库
					let sql = `insert into picture_table (id,filename,path) values ('', '${titleNameArr[0]}', '${fullPath}')`
					console.log(sql)
					db.query(sql, function (err, file) {
						if (err) {
							console.error(err)
						} else {
							let result = {
								data: {
									fullPath,
									name: titleNameArr[0],
									id: file.insertId
								}
							}
							res.json(result)
						}
					})
				}
			})
			
		})
	}
}