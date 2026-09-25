function sanitizeInput(input) {
  return input.trim().replace(/[<>]/g, '');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function createTodo(title, email) {
  if (!title || !validateEmail(email)) {
    throw new Error('Invalid todo or email');
  }

  return {
    id: Date.now(),
    title: sanitizeInput(title),
    email,
    completed: false
  };
}

function saveTodo(todo, todos = []) {
  todos.push(todo);
  return todos;
}

module.exports = {
  sanitizeInput,
  validateEmail,
  createTodo,
  saveTodo
};

function createPremiumSubscription(user, plan = 'premium') {
  if (!user || !user.email) {
    throw new Error('User is required');
  }

  return {
    userEmail: user.email,
    plan,
    active: true,
    startedAt: new Date().toISOString()
  };
}

module.exports.createPremiumSubscription = createPremiumSubscription;
