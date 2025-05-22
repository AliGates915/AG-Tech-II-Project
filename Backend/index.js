import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import pastPaperRoutes from './routes/pastPaperRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';


const app = express();


dotenv.config();


app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://ag-tech-ii-project.vercel.app', // ✅ No trailing slash
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
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
