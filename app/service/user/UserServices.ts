import db from './../../models/db/mysql'
export default class UserService {
  list() {
    let sql:string = 'SELECT * FROM test.ssm_user;'
    return db.execSql(sql)
  }
}