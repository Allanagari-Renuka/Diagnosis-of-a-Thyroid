const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const tf = require('@tensorflow/tfjs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');


const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key_here';
const users = [];
const PORT = process.env.PORT || 5000;

const app = express();


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Model setup
let model = {
  predict: (input) => {
    const mockResult = Math.random();
    return tf.tensor1d([mockResult]);
  }
};
console.log('Using mock model implementation');

// API Endpoints
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    mlReady: !!model
  });
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
