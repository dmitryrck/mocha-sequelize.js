module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task', {
    title: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
};
