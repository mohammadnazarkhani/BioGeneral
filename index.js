const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const navRoutes = require('./routes/navRoutes');

// Use routes
app.use('/', navRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.use((err, req, res, newxt) => {
  console.error(err.stack);
  res.status(500).send('Ops! Something broke!');
});