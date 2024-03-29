const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const domainRoutes = require('./routes/domainRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/dnsmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use(express.json())

app.use('/api/domains', domainRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
