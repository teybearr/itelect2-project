import express from "express";
import db from '../models/index.cjs';
import verifyToken from "../middleware/verifyToken.js";
import requireRole from "../middleware/requireRole.js";

const { Task, User } = db;
//const { Op } = Sequelize;
const router = express.Router();

router.get('/tasks', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({ include: { model: User, attributes: { exclude: ['password'] } } });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.get('/tasks/:id', async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id, { include: { model: User, attributes: { exclude: ['password'] } } });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post('/tasks', verifyToken, async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

router.put('/tasks/:id', verifyToken, async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    const updatedTask = await task.update(req.body);
    res.status(200).json(updatedTask);
  } catch (err) {
    next(err);
  }
});

router.delete('/tasks/:id', verifyToken, requireRole("admin"), async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    await task.destroy();
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    next(err);
  }
});

export default router;