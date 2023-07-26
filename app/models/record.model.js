module.exports = (sequelize, Sequelize) => {
  const Record = sequelize.define('record', {
    recordId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
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
    recordCategory: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    recordType: {
      type: Sequelize.STRING,
    },
    recordNotes: {
      type: Sequelize.STRING(2000),
    },
  });

  return Record;
};
