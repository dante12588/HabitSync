const { User } = require('../models/index');  // Importujemy model

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};