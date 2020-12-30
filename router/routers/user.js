const KoaRouter = require('koa-router')
const router = new KoaRouter()


//login
router.get('/login', async ctx => {

    ctx.body = `login api`
})

//register

router.get('/register', async ctx => {
    //把register.html页面渲染出来
    await ctx.render('register',
        { name: '注册页面' })
    //ctx.body=`register api`
})
router.post('/register', async ctx => {
    ctx.body = ctx.request.body
})

module.exports = router