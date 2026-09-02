import express from 'express';
import cors from 'cors';
import contentRoutes from './routes/content.routes';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api/content', contentRoutes);

// Health
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
