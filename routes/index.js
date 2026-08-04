import express from "express";
import { mockTasks } from "../src/utils.js";
import { fetchSampleUsers } from "../src/api.js";

const router = express.Router();

let cachedUsers = [];
    (async () => {
        cachedUsers = await fetchSampleUsers();
    })();

router.get("/tasks", (req, res) => {
    res.json(mockTasks);
});

router.get("/tasks/:id", (req, res) => {
    const task = mockTasks.find(t => t.id === Number(req.params.id));

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
});

router.get("/users", (req, res) => {
    res.json(cachedUsers);
});

export default router;