const user=require('./routers/user')
const app=require('../koa')
const readDir=require('require-directory')
const Router = require('koa-router')


const visitor=(obj)=>{

    if(obj instanceof Router){

        app.use(obj.routes())
    }

    console.log(obj)
}


//1参：固定的module
//2参: 要读取的目录
//3参: 一个回调函数
readDir(module,'./routers',{visit:visitor})

