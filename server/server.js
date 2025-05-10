const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const tf = require('@tensorflow/tfjs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');

// Configuration
const JWT_SECRET = 'your_jwt_secret_key_here'; // In production, use environment variable
const users = []; // User database (in production, use a real database)

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.static('uploads')); 

// Configure file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Mock model implementation
let model = {
  predict: (input) => {
    // Mock prediction - returns random value between 0 and 1
    const mockResult = Math.random();
    return tf.tensor1d([mockResult]);
  }
};
console.log('Using mock model implementation');

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'Authentication required' });
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = user;
    next();
  });
};

// Image upload endpoint
app.post('/api/upload', authenticateToken, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Mock image processing - in real app this would extract values from the image
  const mockValues = {
    age: Math.floor(Math.random() * 50) + 20,
    sex: Math.random() > 0.5 ? 'male' : 'female',
    tsh: (Math.random() * 4).toFixed(2),
    t3: (Math.random() * 2).toFixed(2),
    tt4: (Math.random() * 12).toFixed(2),
    t4u: (Math.random() * 2).toFixed(2),
    fti: (Math.random() * 300).toFixed(2)
  };

  res.json({
    ...mockValues,
    filePath: req.file.filename
  });
});

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    mlReady: !!model
  });
});

// User registration endpoint
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    console.log('Signup request received:', { email, name });

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if user already exists
    if (users.some(user => user.email === email)) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password: hashedPassword,
      name: name || email.split('@')[0],
      avatar: '/default-avatar.png',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    console.log('User registered successfully:', { id: newUser.id, email: newUser.email });
    console.log('Current users:', users.length);

    // Generate JWT token
    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '24h' });

    res.status(201).json({ 
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        avatar: newUser.avatar
      }
    });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// User login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt:', email);

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user
    const user = users.find(user => user.email === email);
    if (!user) {
      console.log('User not found:', email);
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Password mismatch for user:', email);
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    console.log('User logged in successfully:', email);

    // Generate JWT token (longer expiration)
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '24h' });

    res.json({ 
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Get current user profile
app.get('/api/user/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({
    id: user.id,
    email: user.email,
    name: user.name,
    avatar: user.avatar
  });
});

// Update user profile
app.put('/api/user/profile', authenticateToken, (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.user.userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const { name, avatar } = req.body;
  
  if (name) users[userIndex].name = name;
  if (avatar) users[userIndex].avatar = avatar;
  
  res.json({
    id: users[userIndex].id,
    email: users[userIndex].email,
    name: users[userIndex].name,
    avatar: users[userIndex].avatar
  });
});

// Thyroid diagnosis endpoint
app.post('/api/diagnose', authenticateToken, (req, res) => {
  if (!model) {
    return res.status(503).json({ error: 'Model not loaded' });
  }

  try {
    const { age, sex, tsh, t3, tt4, t4u, fti } = req.body;
    
    // Validate input
    if (!age || !sex || !tsh || !t3 || !tt4 || !t4u || !fti) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Prepare input tensor
    const input = tf.tensor2d([
      [parseFloat(age), 
       sex === 'male' ? 1 : 0,
       parseFloat(tsh),
       parseFloat(t3),
       parseFloat(tt4),
       parseFloat(t4u),
       parseFloat(fti)]
    ]);

    // Make prediction
    const prediction = model.predict(input);
    const result = prediction.dataSync()[0];
    
    // Return diagnosis
    res.json({
      prediction: result,
      diagnosis: result > 0.5 ? 'Positive' : 'Negative',
      confidence: Math.round(result * 100)
    });

  } catch (err) {
    console.error('Prediction error:', err);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

