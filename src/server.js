const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../files')));

// Basic route - serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../files/ascend-valet-website.html'));
});

// Customers route
app.get('/api/customers', (req, res) => {
  // Placeholder for customer logic
  res.json({ message: 'Customers endpoint' });
});

// Services route
app.get('/api/services', (req, res) => {
  // Placeholder for services logic
  res.json({ message: 'Services endpoint' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
