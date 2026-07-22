// app.js - Main application entry point

import { formatDate, validateTask, mergeTaskUpdate, createTask, TaskValidationError } from './utils.js';
import { fetchSampleUsers } from './api.js';

// console.log('Server starting...');

console.log(formatDate(new Date("2026-07-22")));
console.log(validateTask());
console.log(mergeTaskUpdate({title:"Old"}, {title:"New"}));

async function fsu() {
    const users = await fetchSampleUsers();
    console.log('Result:', users);
}
fsu();

try {
    const validTaskData = { title: 'submit itelect gt4', dueDate: '2026-07-22', };

    const newTask = createTask(validTaskData);
    console.log('Task created:', newTask);
} catch (error) {
    console.error('Unexpected error:', error.message);
}

try {
    const invalidTaskData = { title: 'missing Due Date', };

    const invalidTask = createTask(invalidTaskData);
    console.log('Task created:', invalidTask);
} catch (error) {
    console.error('Unexpected error:', error.message);
}