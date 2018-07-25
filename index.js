var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var multerObj = multer({dest: './static/upload'})
var consolidate = require('consolidate')

const common = require('./lib/common')

const app = express()
app.listen(3000)

app.use(bodyParser.urlencoded())
app.use(multerObj.any())
app.use(common.sqlError())

// console.log(app)

// 3 模板
app.engine('html', consolidate.ejs)
app.set('views', 'template') // 目录
app.set('view engine', 'html')

// 4 路由
app.use('/user', (req, res) => {
	res.send('1133')
})
app.use('/web', require('./router/web/index')())


// 5 静态
app.use(express.static('./static'))