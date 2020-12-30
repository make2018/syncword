
// const Koa = require('koa')
// const app = new Koa()
const app=require('./koa')
const conf=require('./config')

const router=require('./router')

app.use(ctx=>{
    ctx.body='hello koa9988'
})


app.listen(conf.server.PORT,()=>{
    console.log(`Server run at http://localhost:${conf.server.PORT}`)
})