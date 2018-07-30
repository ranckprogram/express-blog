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


// 公共组件渲染  => 渲染逻辑【什么页面存在什么组件，什么组件存在于那些页面 => 用配置】

app.use(['/index', '/article'], require('./router/web/components/list'))
app.use(['/index', '/article', '/share/detail'], require('./router/web/components/category'))
app.use(['/index', '/share/detail', '/article', '/about'], require('./router/web/components/aboutMe'))
app.use(['/index', '/share/detail','/about'], require('./router/web/components/album'))
app.use(['/article'], require('./router/web/components/labelCloud'))


app.get('/', function (req, res) {
	res.redirect('/index')
})

app.use('/index', require('./router/web/index')())
app.use('/share', require('./router/web/share')())
app.use('/article', require('./router/web/article')())
app.use('/about', require('./router/web/about')())


// 5 静态
app.use(express.static('./static'))