// Install: npm install express crypto-js body-parser
const express = require('express');
const bodyParser = require('body-parser');
const CryptoJS = require('crypto-js');
const app = express();
const port = 3001;

app.use(bodyParser.json());
debugger;
// Enable CORS for development (adjust for production)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins for dev
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
debugger;
const SERVER_SECRET_KEY = 'your-super-secret-key-that-should-be-long-and-random';

// 🆕 NEW: Add a GET route for the root path (/)
app.get('/', (req, res) => {
  res.status(200).send('MeetsVirtual API is running!');
});

debugger;
app.post('/api/contact', (req, res) => {
  const { encryptedData } = req.body;

  if (!encryptedData) {
    return res.status(400).json({ message: 'No encrypted data received.' });
  }

  try {
    debugger;
    const bytes  = CryptoJS.AES.decrypt(encryptedData, SERVER_SECRET_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
debugger;
    const formData = JSON.parse(decryptedData);
debugger;
    console.log(' Received ', formData);
debugger;
    res.status(200).json({
      message: 'Received '
    });

  } catch (error) {
    console.error('Decryption failed or invalid JSON:', error);
    res.status(500).json({ message: 'Failed' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});