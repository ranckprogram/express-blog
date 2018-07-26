// share 相册
const express = require('express')
const _ = require('lodash')
const async = require('async')
let db = require('../../lib/db')


module.exports = function () {
	var router = express.Router()
	router.get('/', function (req, res) {
		let sql =
			`select album_table.id,album_table.name,album_table.describe,src 
			from album_table,album_picture_table
			where album_table.id = album_picture_table.album_id
			group by album_picture_table.album_id
			limit 8`
		db.query(sql, function (err, albums) {
			if (err) {
				res.sqlError(err)
			} else {
				res.render('web/share.ejs', {albums})
			}
		})
	})

	// 相册详情页
	router.get('/detail/:id', function (req, res) {
		const id = req.params.id
		/**
		 * 这个地方我目前有两个思路
		 * 1、 组合查询出同一相册的数据，然后合并
		 * 2、 两次查询，组装;;(涉及到回调嵌套)
		 * */
		let sql = `select album_table.id,album_table.name,album_table.time,album_table.describe,album_table.like,album_picture_table.src
		from album_table,album_picture_table
		where album_table.id = ${id} && album_picture_table.album_id = ${id}`
		// let sql = `select name,\`like\` from album_table where id = ${id}`
		// let sql = `select src from album_picture_table where album_id = ${id}`
		db.query(sql, function (err, album) {
			if (err) {
				res.sqlError(err)
			} else {
				var result = {}
				result.srcList = []
				if (album.length) {
					result = album[0]
					result.srcList = []
					album.forEach(item => {
						result.srcList.push(item.src)
					})
				}
				res.render('web/shareDetail.ejs', {album: result})
			}
		})
	})

	router.get('/like/:id', function (req, res) {
		// 更新喜欢的次数，先查询，后修改

		/**
		 * 避免重复喜欢操作
		 * 1、读取是否已经喜欢操作（cookie）
		 * 2、如果没有，则成功后设置喜欢cookie
		 */
		let result = {
			result: true,
			message: '操作成功',
			like: 0  // 这里的like目测还需要重新select一下才拿得到
		}

		if (req.cookies.like) {
			result = {
				result: false,
				message: '已经设置过like',
				like: 0
			}
			res.json(result)
			return
		}

		const id = req.params.id

		// temp 这里应该还有第二种写法，将要执行的sql写成数组，然后 async 同步遍历

		async.waterfall([
			function (callback) {
				db.query(`select \`like\` from album_table where id = ${id}`, function (err, like) {
					if (err) {
						res.sqlError(err)
					} else {
						callback(null, like[0].like)
					}
				})
			},
			function (likeCount, callback) {
				likeCount++
				db.query(`update album_table set \`like\` = ${likeCount} where id = ${id}`, function (err, like) {
					if (err) {
						res.sqlError(err)
					} else {
						callback(null, like);
					}
				})
			}
		], function (err, data) {
			if (err) {
				res.sqlError(err)
			} else {
				res.cookie('like', true, {
					path: req.originalUrl,
					maxAge: 20*60*1000  // 20分钟
				})
				res.json(result)
			}
		})
	})

	return router
}