module.exports = (app) => {
  const records = require('../controllers/record.controller.js');

  var router = require('express').Router();

  // Create a new Record
  router.post('/', records.create);

  // Retrieve all Records
  router.get('/', records.findAll);

  // Retrieve a single Record with id
  router.get('/:id', records.findOne);

  // Update a Record with id
  router.put('/:id', records.update);

  // Delete a Record with id
  router.delete('/:id', records.delete);

  // Delete all Records
  router.delete('/', records.deleteAll);

  app.use('/api/records', router);
};
