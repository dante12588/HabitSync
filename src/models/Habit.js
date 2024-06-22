const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Habit = sequelize.define('Habit', {
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  description: {
      type: DataTypes.TEXT,
  },
  frequency: {
      type: DataTypes.STRING, // np. 'daily', 'weekly'
      allowNull: false
  },
  start_time: {
      type: DataTypes.DATE
  },
  end_time: {
      type: DataTypes.DATE,
  },
  userId: {
      type: DataTypes.INTEGER,
      references: {
          model: User,
          key: 'id'
      },
      allowNull: false
  }
});

module.exports = Habit;