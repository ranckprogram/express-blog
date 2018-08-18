const db = require('../../lib/db')

module.exports = {
	getInfo (req, res) {
		db.query(`select * from about_table`, function (err, data) {
			if (err) {
				console.error(err)
			} else {
				let result = {
					data: data[0]
				}
				res.json(result)
			}
		})
	},
	updateInfo (req, res) {
		
		// 这里与其资格字符串一个字符串的处理，不如用对象或者数组处理，这样还可以顺便控制sql语句的长短
		
		let data = {
			name: req.body.name,
			summary: req.body.summary,
			content: req.body.content,
			follow_id: req.body.follow_id,
			avatar_id: req.body.avatar_id
		}
		
		let baseSql = `UPDATE about_table SET `
		let feildArr = []
		for (var attr in data) {
			if (data[attr]) {
				feildArr.push(`\`${attr}\` = '${data[attr]}'`)
			}
		}
		
		baseSql += feildArr.join(',')
		
		db.query(baseSql, function (err, data) {
			if (err) {
				console.error(err)
			} else {
				let result = {
					data: data[0]
				}
				res.json(result)
			}
		})
	}
}