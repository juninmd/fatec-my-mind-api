const mysql = require('./baseDao');

module.exports = {
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM poemas WHERE id = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM poemas`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO poemas SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE poemas SET ? WHERE id = ${body.id}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM poemas WHERE id = ${id}`)).content;
  }
};
