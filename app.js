const express = require('express');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 3000;

app.use(express.json());

// Serving static files
app.use('/images', express.static(path.join(__dirname, 'images')));

// Custom logger
app.use(logger);

// Routes
app.use('/books', bookRoutes);

// Error handler (HARUS terakhir)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
