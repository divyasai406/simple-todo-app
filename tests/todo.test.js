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

test('createPremiumSubscription creates an active premium subscription', () => {
  const { createPremiumSubscription } = require('../src/todo');

  const subscription = createPremiumSubscription({
    email: 'user@example.com'
  });

  assert.strictEqual(subscription.plan, 'premium');
  assert.strictEqual(subscription.active, true);
});

test('createPremiumSubscription rejects missing user', () => {
  const { createPremiumSubscription } = require('../src/todo');

  assert.throws(() => createPremiumSubscription(null));
});
