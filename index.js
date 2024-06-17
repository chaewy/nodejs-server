const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Mock endpoint to generate an access token
app.post('/auth/token', (req, res) => {
  // Implement your authentication logic here
  const { username, password } = req.body;

  if (username === 'demo_user' && password === 'demo_password') {
    // Generate a mock access token (replace with your actual token generation logic)
    const accessToken = 'mock_access_token';
    
    res.status(200).json({ access_token: accessToken });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});