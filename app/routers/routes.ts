import Koa from 'koa'
import user from './user'

export default function(app:Koa){
    app.use(user.routes())
}