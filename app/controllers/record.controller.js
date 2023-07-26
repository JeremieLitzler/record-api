const validatorDate = require('../helpers/validators.date');
const validatorStr = require('../helpers/validators.string');
const validatorBool = require('../helpers/validators.boolean');
const validatorNum = require('../helpers/validators.number');
const validatorErrors = require('../helpers/validators.error.messages');

const db = require('../models');
const RecordDal = db.records;
const Op = db.Sequelize.Op;

/**
 * Check integrity of object
 *
 * @param {Object} requestBody The JSON entity sent by the client
 * @returns Array of errors if any
 */
const checkObject = (requestBody) => {
  const errors = [];
  //Check
  if (!validatorDate.isValidDate(requestBody.recordDate)) {
    errors.push(
      `recordDate ${validatorErrors.ERROR_MESSAGES.IncorrectDateValue}.`,
    );
  }
  if (!validatorNum.isNumeric(requestBody.recordValue)) {
    errors.push(`recordValue ${validatorErrors.ERROR_MESSAGES.CannotBeEmpty}.`);
  }
  if (validatorStr.isNullNanUndefinedOrEmpty(requestBody.recordUnit)) {
    errors.push(`recordUnit ${validatorErrors.ERROR_MESSAGES.CannotBeEmpty}.`);
  }
  if (validatorStr.isNullNanUndefinedOrEmpty(requestBody.recordCategory)) {
    errors.push(
      `recordCategory ${validatorErrors.ERROR_MESSAGES.CannotBeEmpty}.`,
    );
  }
  if (validatorStr.isNullNanUndefinedOrEmpty(requestBody.recordType)) {
    errors.push(`recordType ${validatorErrors.ERROR_MESSAGES.CannotBeEmpty}.`);
  }
  return errors;
};

const buildObject = (requestBody) => {
  const theRecord = {
    recordDate: Date.parse(requestBody.recordDate),
    recordValue: requestBody.recordValue.replace(',', '.'),
    recordUnit: requestBody.recordUnit,
    recordCategory: requestBody.recordCategory,
    recordType: requestBody.recordType,
    recordNotes: requestBody.recordNotes,
  };
  return theRecord;
};

// Create and Save a new Record
exports.create = (req, res) => {
  // Validate request
  var validationResult = checkObject(req.body);
  if (validationResult.length > 0) {
    res.status(400).send({
      message: validationResult,
    });
    return;
  }

  // Save Record in the database
  RecordDal.create(buildObject(req.body))
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Record.',
      });
    });
};

// Retrieve all Records for a given category from the database.
exports.findAll = (req, res) => {
  const categoryQ = req.query.category;
  var condition = categoryQ
    ? { recordCategory: { [Op.like]: `%${categoryQ}%` } }
    : null;

  RecordDal.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Records.',
      });
    });
};

// Find a single Record with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  RecordDal.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Record with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Record with id=' + id,
      });
    });
};

// Update a Record by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  var validationResult = checkObject(req.body);
  if (validationResult.length > 0) {
    res.status(400).send({
      message: validationResult,
    });
    return;
  }

  RecordDal.update(buildObject(req.body), {
    where: { recordId: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: {
            success: true,
            message: 'Record was updated successfully.',
          },
        });
      } else {
        res.send({
          message: {
            success: false,
            message: `Cannot update Record with id=${id}. Maybe Record was not found or req.body is empty!`,
          },
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Record with id=' + id,
      });
    });
};

// Delete a Record with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  RecordDal.destroy({
    where: { recordId: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Record was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Record with id=${id}. Maybe Record was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Record with id=' + id,
      });
    });
};

// Delete all Records from the database.
exports.deleteAll = (req, res) => {
  RecordDal.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Records were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Records.',
      });
    });
};
