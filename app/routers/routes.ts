import Koa from 'koa'
import user from './user'
import Router from 'koa-router'

var router:Router = new Router();

router.get('/admin', async (ctx: any) => {
    await ctx.render('admin/index');
});

router.get('/', async (ctx: any) => {
    await ctx.render('index');
});

router.get('*', async (ctx: any) => {
    await ctx.render('404');
});

export default function(app:Koa){
    app.use(user.routes())
    app.use(router.routes())
}