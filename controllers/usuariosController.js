const usuariosDao = require('../dao/usuariosDao');

module.exports = (app) => {
  app.post('/login', async (req, res, next) => {
    try {
      const [response] = await usuariosDao.login(req.body);
      delete response.senha;
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.get('/usuarios', async (req, res, next) => {
    try {
      const response = await usuariosDao.getAll();
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.get('/usuarios/:id', async (req, res, next) => {
    try {
      const response = await usuariosDao.getById(req.params.id);
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.post('/usuarios/', async (req, res, next) => {
    try {
      const response = await usuariosDao.post(req.body);
      return res.send(response).status(201);
    } catch (error) {
      next(error);
    }
  });

  app.put('/usuarios/:id', async (req, res, next) => {
    try {
      const response = await usuariosDao.put(req.body, req.params.id);
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.delete('/usuarios/:id', async (req, res, next) => {
    try {
      await usuariosDao.deleteById(req.params.id);
      return res.send({}).status(204);
    } catch (error) {
      next(error);
    }
  });
};
