import Router from 'koa-router'
import UserController from '../controller/user/UserController'

var router:Router = new Router({prefix:'/admin/user'});

router.get('/',UserController.list as any)
router.get('/add',UserController.add as any)
router.get('/edit',UserController.edit as any)
export default router;