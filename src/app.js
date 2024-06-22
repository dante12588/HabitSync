const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

const sequelize = require('./config/database');  // Importujemy konfigurację bazy danych

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

// Importowanie tras
const habitRoutes = require('./routes/habits');
app.use('/api/habits', habitRoutes);
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Synchronizacja modeli z bazą danych
sequelize.sync({ force: true })  // force: true usuwa i tworzy ponownie tabele za każdym razem
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(error => {
    console.error('Error creating database tables:', error);
  });


//Test połączenia z bazą danych
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
