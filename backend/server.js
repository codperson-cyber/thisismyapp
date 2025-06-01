const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();
const app = express();

app.use(express.json());

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Sample API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
