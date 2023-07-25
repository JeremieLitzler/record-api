module.exports = (sequelize, Sequelize) => {
  const Record = sequelize.define('record', {
    recordId: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    recordDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    recordValue: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    recordUnit: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    recordUnit: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    recordType: {
      type: Sequelize.STRING,
    },
    recordNotes: {
      type: Sequelize.STRING(4000),
    },
  });

  return Record;
};
