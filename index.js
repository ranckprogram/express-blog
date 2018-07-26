var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var cookieParser = require('cookie-parser')

var multerObj = multer({dest: './static/upload'})
var consolidate = require('consolidate')

const common = require('./lib/common')

const app = express()
app.listen(3000)

app.use(bodyParser.urlencoded({extended: false}))
app.use(multerObj.any())
app.use(common.resPlus())
app.use(cookieParser())


// 3 模板
app.engine('html', consolidate.ejs)
app.set('views', 'template') // 目录
app.set('view engine', 'html')

// 4 路由


// 公共组件渲染
app.use(['/index', '/share/detail'], require('./router/web/components/aboutMe'))
app.use(['/index', '/share/detail'], require('./router/web/components/album'))


app.get('/', function (req, res) {
	res.redirect('/index')
})

app.use('/index', require('./router/web/index')())
app.use('/share', require('./router/web/share')())


// 5 静态
app.use(express.static('./static'))