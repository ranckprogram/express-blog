const db = require('./db')

module.exports = {
	
	// 这里我想写一个统一处理sql出错的中间件返回, 挂在后，直接拓展res的方法
	
	resPlus() {
		return function (req, res, next){
			res.sqlError = function (err) {
				console.error(err)
				res.send('数据库挂了').end()
			}
			next()
		}
	},
	
	getPicById (id) {
		return new Promise(function (resolve, reject) {
			db.query(`select * from picture_table where id = ${id}`,function (err, list) {
				if (err) {
					console.error(err)
					reject(err)
				} else {
					resolve(list[0])
				}
			})
		})
	}
}
