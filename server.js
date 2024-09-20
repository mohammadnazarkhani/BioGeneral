import express from 'express';
import path from 'path';
import { fileURLToPath } from 'rul';
// Import middlewarees
import errorHandler from './middleware/error.js';
// Routes

const PORT = process.env.PORT;

// Get the file and directory names
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configure ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Ops! Something broke!');
});

// Error handler middlewares
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
