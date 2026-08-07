export const mockTasks = [
    { id: 1, title: "itelect gt5", dueDate: "2026-08-05", completed: false },
    { id: 2, title: "liferiz activity 3", dueDate: "2026-07-31", completed: true },
    { id: 3, title: "ethikos presentation", dueDate: "2026-08-06", completed: false },
];

export const formatDate = (date) => `Due: ${date.toLocaleDateString()}`;

export const validateTask = ({title, dueDate} = {}) => {
    return Boolean(title && dueDate);
}

export const mergeTaskUpdate = (original, ...updates) => {
    return Object.assign({}, original, ...updates);
}

export class TaskValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "TaskValidationError";
    }
}

export const createTask = (taskData) => {
    if(!validateTask(taskData)) throw new TaskValidationError("Invalid task data");
    return { id: Date.now(), completed: false, ...taskData };
}