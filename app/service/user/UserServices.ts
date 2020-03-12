import db from './../../models/db/mysql'

export default {    
  async list() {
    let sql:string = 'SELECT * FROM test.ssm_user;'
    return db.execSql(sql)
  },
  async add() {
    let sql:string = 'SELECT * FROM test.ssm_user;'
    return db.execSql(sql)
  },
  async edit() {
    let sql:string = 'SELECT * FROM test.ssm_user;'
    return db.execSql(sql)
  }
}