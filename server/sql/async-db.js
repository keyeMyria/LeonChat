import mysql from 'mysql'
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '9liang01108',
  database: 'chat'
})

let query = (sql, values) => new Promise((resolve, reject) => {
  pool.getConnection((err, connection) => {
    if (err) {
      reject(err)
    } else {
      connection.query(sql, values, (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
        connection.release()
      })
    }
  })
})

module.exports = {
  query
}