import express from 'express';

const app = express();

// Middleware
app.use(express.json());

// Routes
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

// Export the app instance
export default app;