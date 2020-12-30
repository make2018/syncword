const KoaRouter =require('koa-router')
const router=new KoaRouter()


//login
router.get('/test',async ctx=>{

    ctx.body=`test api`
})



module.exports=router