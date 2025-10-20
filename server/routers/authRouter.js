import express from 'express';

const authRouter = express.Router();

authRouter.post('/register',register);
authRouter.post('/login',login);


export default authRouter