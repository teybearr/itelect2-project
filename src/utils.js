/*
formatDate(date) -- template literal + date.toLocaleDateString(). formatDate(new
Date("2026-07-22")) → "Due: 7/22/2026"

validateTask(task) -- destructure { title, dueDate } with a default {}. Returns true only
if both exist. validateTask() → false

mergeTaskUpdate(original, ...updates) -- rest operator; later updates override
original. mergeTaskUpdate({title:"Old"}, {title:"New"}) → {title:"New", ...}
*/
    

export const formatDate = (date) => `Due: ${date.toLocaleDateString()}`;

export const validateTask = ({title, dueDate} = {}) => {
    return Boolean(title && dueDate);
}

export const mergeTaskUpdate = (original, ...updates) => {
    return Object.assign({}, original, ...updates);
}

/*
    create TaskValidationError extends Error in src/utils.js, with this.name = "TaskValidationError".
    Add createTask(taskData) to src/utils.js: calls validateTask(taskData) (from GT3). If invalid,
    throw new TaskValidationError("Invalid task data"). If valid, return { id: Date.now(),
    completed: false, ...taskData }.
*/

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