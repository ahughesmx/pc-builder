import express from 'express';
import cors from 'cors';
import adminRoutes from './routes/admin.js';
import componentsRoutes from './routes/components.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/admin', adminRoutes);
app.use('/api/components', componentsRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});