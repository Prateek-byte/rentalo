require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes   = require('./routes/auth');
const itemRoutes   = require('./routes/items');
const workerRoutes = require('./routes/workers');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/workers', workerRoutes);

// Use provided MONGO_URI or fallback to local MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/rentalo';
if (!process.env.MONGO_URI) {
  console.warn('MONGO_URI not set. Falling back to default:', mongoUri);
}
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.error('Mongo connection error:', err));
