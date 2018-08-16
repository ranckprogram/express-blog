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
		console.log(req.body)
		const nName = req.body.name
		const nSummary = req.body.summary
		const nContent = req.body.content
		const nFollow = req.body.follow
		
		let name = req.body
		db.query(`UPDATE about_table SET \`name\` = '${nName}' , \`summary\` = '${nSummary}', \`content\` = '${nContent}' `, function (err, data) {
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