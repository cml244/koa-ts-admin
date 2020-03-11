import Router from 'koa-router'
import UserController from '../controller/user/UserController'

var router:Router = new Router();
router.get('/user',UserController.list as any)
export default router;