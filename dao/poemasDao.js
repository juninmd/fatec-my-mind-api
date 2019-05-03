const mysql = require('./baseDao');

module.exports = {
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM poema WHERE id = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM poema`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO poema SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE poema SET ? WHERE id = ${body.id}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM poema WHERE id = ${id}`)).content;
  }
};
