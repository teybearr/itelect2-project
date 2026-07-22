// app.js - Main application entry point

import { formatDate, validateTask, mergeTaskUpdate, createTask, TaskValidationError } from './utils.js';
import { fetchSampleUsers } from './api.js';

// console.log('Server starting...');

// console.log(formatDate(new Date("2026-07-22")));
// console.log(validateTask());
// console.log(mergeTaskUpdate({title:"Old"}, {title:"New"}));

async function fsu() {
  const users = await fetchSampleUsers();
  console.log('Result:', users);
}
fsu();