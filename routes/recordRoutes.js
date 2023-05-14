const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

const db = path.join(__dirname, '../db/records.json');

/**
 * Get a record.
 *
 * @param {Object} req The request
 * @param {Object} res The JSON response
 * @param {*} next
 * @link api/v1/record/:id
 */
const getRecord = async (req, res, next) => {
  try {
    const data = fs.readFileSync(db);
    const records = JSON.parse(data);
    const record = records.find((element) => element.id === req.params.id);
    if (!record) {
      const err = new Error(`record ${req.params.id} was not found`);
      err.status = 404;
      throw err;
    }
    res.json(record);
  } catch (e) {
    next(e);
  }
};

/**
 * Create a record.
 *
 * @param {Object} req The request
 * @param {Object} res The JSON response
 * @param {*} next
 * @link api/v1/record
 */
const createRecord = async (req, res, next) => {
  try {
    const data = fs.readFileSync(db);
    const records = JSON.parse(data);
    const newRecord = {
      id: req.body.id,
      date: req.body.date,
      year: req.body.year,
      month: req.body.month,
      day: req.body.day,
      week: req.body.week,
      value: req.body.value,
      unit: req.body.unit,
      category: req.body.category,
      type: req.body.type,
      comments: req.body.comments,
    };
    records.push(newRecord);
    fs.writeFileSync(db, JSON.stringify(records));
    res.status(201).json(newRecord);
  } catch (e) {
    next(e);
  }
};

/**
 * Update a record.
 *
 * @param {Object} req The request
 * @param {Object} res The JSON response
 * @param {*} next
 * @link api/v1/record/:id
 */
const updateRecord = async (req, res, next) => {
  try {
    const data = fs.readFileSync(db);
    const records = JSON.parse(data);
    const record = records.find((element) => element.id === req.params.id);
    if (!record) {
      const err = new Error(`record ${req.params.id} was not found`);
      err.status = 404;
      throw err;
    }
    const updatedRecord = {
      id: req.body.id ? req.body.id : record.id,
      date: req.body.date ? req.body.date : record.date,
      year: req.body.year ? req.body.year : record.year,
      month: req.body.month ? req.body.month : record.month,
      day: req.body.day ? req.body.day : record.day,
      week: req.body.week ? req.body.week : record.week,
      value: req.body.value ? req.body.value : record.value,
      unit: req.body.unit ? req.body.unit : record.unit,
      category: req.body.category ? req.body.category : record.category,
      type: req.body.type ? req.body.type : record.type,
      comments: req.body.comments ? req.body.comments : record.comments,
    };
    const updatedRecords = records.map((recordItem) => {
      if (recordItem.id === Number(req.params.id)) {
        return updatedRecord;
      } else {
        return recordItem;
      }
    });
    fs.writeFileSync(db, JSON.stringify(updatedRecords));
    res.status(200).json(updatedRecord);
  } catch (e) {
    next(e);
  }
};

router.route('/api/v1/record/:id').get(getRecord);
router.route('/api/v1/record/:id').get(getRecord).put(updateRecord);
router.route('/api/v1/record').post(createRecord);

module.exports = router;
