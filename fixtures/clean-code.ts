function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface User {
  name: string;
  email: string;
}

function createUser(name: string, email: string): User {
  if (!name || !validateEmail(email)) {
    throw new Error('Invalid user data');
  }

  return {
    name: sanitizeInput(name),
    email
  };
}

function saveUser(user: User, users: User[] = []): User[] {
  users.push(user);
  return users;
}

export {
  sanitizeInput,
  validateEmail,
  createUser,
  saveUser
};
