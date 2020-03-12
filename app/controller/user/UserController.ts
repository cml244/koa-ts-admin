import Koa from 'koa';
import UserService from '../../service/user/UserServices'
export default {    
    async list(ctx: Koa.Context) {
        let list =  await UserService.list();
        await ctx.render('admin/user/index',{
            list:list
        })
    },
    async add(ctx: Koa.Context) {
        let list =  await UserService.list();
        await ctx.render('admin/user/add',{
            list:list
        })
    },
    async edit(ctx: Koa.Context) {
        let list =  await UserService.list();
        await ctx.render('admin/user/edit',{
            list:list
        })
    }
}