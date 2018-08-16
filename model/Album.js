/**
 * 提供一个参数，表名
 * @params tableName
 * 链式调用
 */

let db = require('../lib/db')
let async = require('async')
let moment = require('moment')
moment.locale('zh-cn')

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
		let sql = `select * from ${this.tableName}
		where ${likeStatement.join(' or ')}
		order by id desc
		limit ${(params.page - 1) * (params.limit)}, ${params.limit}`
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
	
	
	/**
	 * 通过ID获取相册详情
	 * */
	
	getDetail (id) {
		let sql = `select * from ${this.tableName} where id = ${id}`
		
		/**
		 * 查询语句
		 * 功能：查询相册ID 为 参数id的相册中所包含的所有图片（id，path）
		 * 关系分析：
		 * 1、所需的（id，path）在picture_table 表中
		 * 2、album_picture_table.album_id = id
		 * 3、album_picture_table.pic_id = picture_table.id
		 * 4、同时满足，交集关系
		 * */
		let imgSql = `select picture_table.id,picture_table.path from picture_table,album_picture_table where album_picture_table.album_id = ${id} and picture_table.id = album_picture_table.pic_id`
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
	
	/**
	 * 创建相册
	 * */
	
	createAlbum (name, describe, srcArr) {
		var time = moment().format('YYYY-MM-DD')
		let sql = `insert into ${this.tableName} (id, \`name\`, \`describe\`, \`time\`) VALUES ('', '${name}', '${describe}', '${time}');`
		
		return new Promise(function (resolve, reject) {
			db.query(sql, function (err, albumData) {
				if (err) {
					console.error(err)
				} else {
					let albumId = albumData.insertId
					let picLinkSqlHead = `INSERT INTO album_picture_table (id, album_id, pic_id) VALUES`
					let bodySqlArr = []
					srcArr.split(',').forEach(picId => {
						bodySqlArr.push(` ('',${albumId},${picId}) `)
					})
					let bodySql = bodySqlArr.join(',')
					let perfectSql = picLinkSqlHead + bodySql
					db.query(perfectSql, function (err, picData) {
						if (err) {
							console.error(err)
						} else {
							resolve(picData)
						}
					})
				}
			})
		})
	}
	
	/**
	 * 修改相册
	 * */
	
	updateAlbum (id, params) {
		const name = params.name
		const describe = params.describe
		const fileIdList = params.fileIdList
		let sqlAlbum = `UPDATE album_table SET \`name\` = '${name}', \`describe\` = '${describe}' where id = ${id}`
		return new Promise(function (resolve, reject) {
			db.query(sqlAlbum, function (err, data) {
				if (err) {
					console.error(err)
				} else {
					if (fileIdList.length) {
						let insertSql = `insert into album_picture_table (id, album_id, pic_id ) values `
						let fileSql = []
						let fileIdArr = fileIdList.split(',')
						fileIdArr.forEach(fileId => {
							fileSql.push(`('', ${id}, ${fileId})`)
						})
						let pSql = insertSql + fileSql.join(',')
						db.query(pSql, function (err, insertDate) {
							if (err) {
								console.error(err)
							} else {
								resolve(data)
							}
						})
					} else {
						resolve(data)
					}
				}
			})
		})
	}
}

module.exports = Album