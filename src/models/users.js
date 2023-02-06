const dbPool = require('../config/database')

const getAllUsers = () =>{
      const query = "SELECT * FROM users"

      return dbPool.query(query);
}

const createNewUser = (req) => {
      const query = `INSERT INTO users (name,email,address) VALUES ('${req.name}','${req.email}','${req.address}')`

      return dbPool.query(query);
}

const updateUser = (req, id) =>{
      const query = `UPDATE users
                        SET name='${req.name}', email='${req.email}', address='${req.address}'
                        WHERE id='${id}'`;
      return dbPool.query(query);
}

const deleteUser = (id) => {
      const query = `DELETE FROM users WHERE id='${id}'`

      return dbPool.query(query);
}

module.exports = {
      getAllUsers,
      createNewUser,
      updateUser,
      deleteUser
}