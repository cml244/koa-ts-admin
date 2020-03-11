import mysql, { QueryOptions } from 'mysql'
import config from '../../config/config'

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});

export default {
  execSql: function (sql: string, values?: QueryOptions) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          console.log(err)
          resolve(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              var dataString = JSON.stringify(rows);
              var data = JSON.parse(dataString);
              resolve(data)
            }
            connection.release()
          })
        }
      })
    })

  }
}