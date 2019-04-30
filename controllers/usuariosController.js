const usuariosDao = require('../dao/usuariosDao');

module.exports = (app) => {
  app.get('/usuarios', async (req, res) => {
    const response = await usuariosDao.getAll();
    return res.send(response).status(200);
  });

  app.get('/usuarios/:id', async (req, res) => {
    const response = await usuariosDao.getById(req.params.id);
    return res.send(response).status(200);
  });

  app.post('/usuarios/', async (req, res) => {
    const response = await usuariosDao.post(req.body);
    return res.send(response).status(201);
  });

  app.put('/usuarios/:id', async (req, res) => {
    const response = await usuariosDao.put(req.body, req.params.id);
    return res.send(response).status(200);
  });

  app.delete('/usuarios/:id', async (req, res) => {
    await usuariosDao.deleteById(req.params.id);
    return res.send({}).status(204);
  });
};
