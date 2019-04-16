import mongoose from 'mongoose'
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('./router').default
const cors = require('koa2-cors')

const app = new Koa()
app.use(cors({
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
  maxAge: 100,
  credentials: true,
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous']
}))

app.use(bodyParser()) // 解析request的body
app.use(router)

const uri = 'mongodb+srv://evan:Jdmm1210_@eva-lcmyw.azure.mongodb.net/test?retryWrites=true'
const db = mongoose.connect(uri, { useNewUrlParser: true })

// 账户的数据库模型
var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
})
var User = mongoose.model('User', UserSchema)

// 新增数据
var user = {
  username: 'ydj',
  password: '123123',
  email: ''
}
var newUser = new User(user)
newUser.save()

async function a () {
  const data = await User.findOne({ username: 'ydj' })
  console.log('data', data)
}
a()

app.listen(1210)
console.log('app started at port 1210...')
