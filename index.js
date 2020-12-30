
// const Koa = require('koa')
// const app = new Koa()
const app=require('./koa')
const conf=require('./config')


//注：配置ejs模板引擎时，配置的代码一定要放在router配置代码之前
const views=require('koa-views')

app.use(views('./views',{
    map:{
        html:'ejs'
    }
}))

const router=require('./router')

app.use(ctx=>{
    ctx.body='hello koa9988'
})


app.listen(conf.server.PORT,()=>{
    console.log(`Server run at http://localhost:${conf.server.PORT}`)
})