const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

const app = express();
const port = 8080;

// Connect to the SQLite database
const db = new sqlite3.Database('database.db');

// Create a users table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  )
`);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle registration requests
app.post('/register', async (req, res) => {
  const { newUsername, newPassword } = req.body;

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  db.run('INSERT INTO users (username, password) VALUES (?, ?)', newUsername, hashedPassword, (err) => {
    if (err) {
      return res.status(500).send('Error registering user');
    }
    res.send('Registration successful');
  });
});

// Handle login requests
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists
  const user = await getUser(username);

  if (!user) {
    return res.status(401).send('Invalid username or password');
  }

  // Compare the provided password with the stored hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Helper function to get a user by username
const getUser = (username) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE username = ?', username, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
