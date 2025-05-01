import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import pastPaperRoutes from './routes/pastPaperRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import mime from 'mime'; 
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize app
const app = express();

// Load environment variables
dotenv.config();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

// Test route
app.get('/', (req, res) => {
  res.send('Server running!');
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/pastPapers', pastPaperRoutes);

// Serve static files from the 'uploads' directory
app.use(express.urlencoded({ extended: true }));

// Serve PDF files and force inline rendering in the browser
// Serve PDFs with forced inline view
app.get('/uploads/books/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, 'uploads', 'books', fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(404).send('PDF not found');
    }

    const mimeType = mime.getType(filePath);

    res.setHeader('Content-Type', mimeType || 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${fileName}"`);
    res.send(data);
  });
});

// MongoDB connection
const api = process.env.MONGO;
console.log("Api", api);

mongoose
  .connect(api, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'))
  .catch((err) => {
    console.error('DB connection error:', err.message);
  });

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
