module.exports = {
	// 这里我想写一个统一处理sql出错的中间件返回, 挂在后，直接拓展res的方法
	sqlError() {
		return function (req, res, next){
			res.sqlError = function (err) {
				console.error(err)
				res.send('数据库挂了').statusCode(500).end()
			}
			next()
		}
	}
}
