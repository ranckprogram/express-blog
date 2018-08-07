/**
 * 提供一个参数，表名
 * @params tableName
 * 链式调用
 */

let db = require('../lib/db')
let async = require('async')

class Album {
	constructor (tableName) {
		this.tableName = tableName
	}
	
	/**
	 * 功能：获取列表，带分页
	 * @params {page} 当前页码
	 * @params {limit} 分页大小
	 * @params {keywords} 关键字
	 * @params {callback} 结果回调
	 * */
	
	getList (options) {
		// limit默认为10。如果只有两个参数的话，第二个参数为callback
		let defaults = {
			page: 1,
			limit: 10,
			keywords: ''
		}
		let params = Object.assign(defaults, options)
		
		let likeKeywords = ['name', 'describe']
		let likeStatement = []
		likeKeywords.forEach(item => {
			likeStatement.push(`\`${item}\` Like '%${params.keywords}%'`)
		})
		// 这里的模糊查询的关键字，如果要通用也必须设置成参数 temp
		let sql = `select * from ${this.tableName} where ${likeStatement.join(' or ')} limit ${(params.page - 1) * (params.limit)}, ${params.limit}`
		let count = `select count(id) from ${this.tableName} where ${likeStatement.join(' or ')}`
		return new Promise(function (resolve, reject) {
			async.parallel({
				data: function (callback) {
					db.query(sql, function (err, data) {
						if (err) {
							console.error(err)
						} else {
							callback(null, data)
						}
					})
				},
				meta: function (callback) {
					db.query(count, function (err, countList) {
						if (err) {
							console.error(err)
						} else {
							callback(null, countList[0])
						}
					})
				}
			}, (err, result) => {
				if (err) {
					console.error(err)
				} else {
					result.meta.total = result.meta['count(id)']
					result.meta.page = parseInt(params.page)
					result.meta.limit = parseInt(params.limit)
					delete result.meta['count(id)']
					resolve(result)
				}
			})
		})
	}
	
	getDetail (id) {
		let sql = `select * from ${this.tableName} where id = ${id}`
		let imgSql = `select album_picture_table.id,album_picture_table.src from album_picture_table where album_picture_table.album_id= ${id}`
		return new Promise(function (resolve, reject) {
			async.parallel({
				detail: function (callback) {
					db.query(sql, function (err, data) {
						if (err) {
							console.error(err)
						} else {
							callback(null, data)
						}
					})
				},
				srcList: function (callback) {
					db.query(imgSql, function (err, data) {
						if (err) {
							console.error(err)
						} else {
							callback(null, data)
						}
					})
				}
			}, function (err, result) {
				if (err) {
					console.error(err)
				} else {
					console.log(result)
					result.detail[0].srcList = result.srcList
					let data = {
						data: result.detail[0]
					}
					resolve(data)
				}
			})
		})
		
	}
	
}

module.exports = Album