const user=require('./routers/user')
const readDir=require('require-directory')


const visitor=(obj)=>{
    console.log(obj)
}


//1参：固定的module
//2参: 要读取的目录
//3参: 一个回调函数
readDir(module,'./routers',{visit:visitor})

