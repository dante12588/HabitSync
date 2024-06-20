const sequelize = require('./config/database');
const Habit = require('./models/Habit');

sequelize.sync({ force: true })  // force: true usuwa i tworzy ponownie tabele za każdym razem
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(error => {
    console.error('Error creating database tables:', error);
  });