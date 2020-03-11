import Koa from 'koa';
import UserService from '../../service/user/UserServices'
const service = new UserService()
export default {    
    async list(ctx: Koa.Context) {
        let list =  await service.list();
        await ctx.render('index',{
            list:list
        })
    }
}