const mysql = require('./baseDao');

module.exports = {
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM usuarios WHERE id = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM usuarios`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO usuarios SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE usuarios SET ? WHERE id = ${body.id}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM usuarios WHERE id = ${id}`)).content;
  }
};
