const KoaRouter =require('koa-router')
const router=new KoaRouter()


//login
router.get('/login',async ctx=>{

    ctx.body=`login api`
})

//register

router.post('/register',async ctx=>{
    ctx.body=`register api`
})

module.exports=router