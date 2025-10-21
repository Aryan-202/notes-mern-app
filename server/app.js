import express from 'express';
import authRouter from './routers/authRouter.js';

const app = express();


app.use(express.json());


app.use('/auth',authRouter)



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