const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to handle CORS
app.use(cors());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a schema
const contactSchema = new mongoose.Schema({
  name: String,
  message: String
});

// Create a model
const Contact = mongoose.model('Contact', contactSchema);

// Route to render the index.ejs file
app.get('/', (req, res) => {
  res.render('contact');
});

// Route to handle form submission
app.post('/contact', async (req, res) => {
  const { name, message } = req.body;
  console.log(`Name: ${name}, Message: ${message}`);

  const newContact = new Contact({
    name: name,
    message: message
  });

  try {
    await newContact.save();
    console.log('Contact saved successfully');
    res.send('Form submitted successfully');
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).send('Error submitting form');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
