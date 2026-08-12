import express from "express";
import { mockTasks, validateTask, mergeTaskUpdate } from "../src/utils.js";
import { fetchSampleUsers } from "../src/api.js";

const router = express.Router();

let cachedUsers = [];
    (async () => {
        cachedUsers = await fetchSampleUsers();
    }
)();

router.get("/tasks", (req, res) => { res.json(mockTasks); });

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

let nextId = 4;

router.post("/tasks", (req, res) => {
    if (!validateTask(req.body)) {
        return res.status(400).json({ error: "Invalid Task Data"});
    }
    const newTask = { id: nextId++, ...req.body, completed: false };
    mockTasks.push(newTask);
    res.status(201).json(newTask);
});

router.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = mockTasks.findIndex((t) => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });        
    }
    mockTasks[index] = mergeTaskUpdate(mockTasks[index], req.body);
    res.status(200).json(mockTasks[index]);
});

router.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = mockTasks.findIndex((t) => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }
    const [removed] = mockTasks.splice(index, 1);
    res.status(200).json({ message: "Deleted", task: removed});
});

export default router;