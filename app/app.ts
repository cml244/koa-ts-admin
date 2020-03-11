import Koa from 'koa';
import Router from 'koa-router';
import views from 'koa-views';
import bodyparser from 'koa-bodyparser';
import path from 'path';
import config from './config/config'
import routes from './routers/routes'


const app = new Koa();
const router = new Router();
// 中间件
app.use(bodyparser())
    .use(require('koa-static')(__dirname + '/../public'))//静态文件
    .use(views(path.join(__dirname, '/views'), {//模板文件
        options: { settings: { views: path.join(__dirname, 'views') } },
        map: { 'html': 'ejs' }
    }))
    .use(router.routes())//路由
    .use(router.allowedMethods())

routes(app);//引入应用的路由文件
router.get('/', async (ctx: any) => {
    await ctx.render('index', {
        title: 'haha1'
    });
});


app.listen(config.port);

console.log('Server running on port 3000');