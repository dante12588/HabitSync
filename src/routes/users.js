const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');  // Importujemy kontrolery

router.post('/', createUser);

module.exports = router;