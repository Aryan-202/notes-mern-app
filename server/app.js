import express from 'express';
import cors from 'cors';
import authRouter from './routers/auth.router.js';
import notesRouter from './routers/notes.router.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

// Health check routes
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'server is running'
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'server is healthy'
    });
});

export default app;