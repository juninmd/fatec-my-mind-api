const poemasDao = require('../dao/poemasDao');

module.exports = (app) => {
  app.get('/poemas', async (req, res) => {
    const response = await poemasDao.getAll();
    return res.send(response).status(200);
  });

  app.get('/poemas/:id', async (req, res) => {
    const response = await poemasDao.getById(req.params.id);
    return res.send(response).status(200);
  });

  app.post('/poemas/', async (req, res) => {
    const response = await poemasDao.post(req.body);
    return res.send(response).status(201);
  });

  app.put('/poemas/:id', async (req, res) => {
    const response = await poemasDao.put(req.body, req.params.id);
    return res.send(response).status(200);
  });

  app.delete('/poemas/:id', async (req, res) => {
    await poemasDao.deleteById(req.params.id);
    return res.send({}).status(204);
  });
};
