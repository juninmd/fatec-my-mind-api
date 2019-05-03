const mysql = require('./baseDao');

module.exports = {
  login: async ({ email, senha }) => {
    return (await mysql.executeString(`SELECT * FROM usuario WHERE email = '${email}' and senha = '${senha}'`)).content;
  },
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM usuario WHERE id = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM usuario`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO usuario SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE usuario SET ? WHERE id = ${body.id}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM usuario WHERE id = ${id}`)).content;
  }
};
