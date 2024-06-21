const Habit = require('../models/Habit');  // Importujemy model

exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.findAll();
    res.json(habits);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.createHabit = async (req, res) => {
  try {
    const habit = await Habit.create(req.body);
    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};