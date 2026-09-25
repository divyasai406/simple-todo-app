const test = require('node:test');
const assert = require('node:assert');

const {
  sanitizeInput,
  validateEmail,
  createTodo,
  saveTodo
} = require('../src/todo');

test('sanitizeInput removes angle brackets', () => {
  assert.strictEqual(sanitizeInput('<todo>'), 'todo');
});

test('validateEmail accepts a valid email', () => {
  assert.strictEqual(validateEmail('user@example.com'), true);
});

test('createTodo creates an incomplete todo', () => {
  const todo = createTodo('Learn testing', 'user@example.com');

  assert.strictEqual(todo.completed, false);
  assert.strictEqual(todo.title, 'Learn testing');
});

test('saveTodo adds a todo', () => {
  const todos = [];
  const todo = createTodo('Learn Git', 'user@example.com');

  saveTodo(todo, todos);

  assert.strictEqual(todos.length, 1);
});

test('searchTodos finds todos by title', () => {
  const { searchTodos } = require('../src/todo');

  const todos = [
    { id: 1, title: 'Learn JavaScript', completed: false },
    { id: 2, title: 'Buy groceries', completed: false },
    { id: 3, title: 'Learn TypeScript', completed: false }
  ];

  const results = searchTodos(todos, 'learn');

  assert.strictEqual(results.length, 2);
  assert.strictEqual(results[0].title, 'Learn JavaScript');
});

test('searchTodos is case insensitive', () => {
  const { searchTodos } = require('../src/todo');

  const todos = [
    { id: 1, title: 'Learn GitHub', completed: false }
  ];

  const results = searchTodos(todos, 'GITHUB');

  assert.strictEqual(results.length, 1);
});
