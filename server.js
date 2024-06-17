require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

app.use(bodyParser.json());

// Endpoint to generate an access token
app.post('/auth/token', (req, res) => {
  const { username, password } = req.body;

  if (username === 'demo_user' && password === 'demo_password') {
    // Load the AUTH_SECRET_KEY from env or use a default value (if needed)
    const secretKey = process.env.AUTH_SECRET_KEY || 'default_secret_key';

    // Generate JWT token using the secret key
    const accessToken = jwt.sign({ username: username }, secretKey, { expiresIn: '1h' });
    
    res.status(200).json({ access_token: accessToken });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});