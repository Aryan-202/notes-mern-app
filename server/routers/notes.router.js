import express from 'express';
import { 
    getNotes, 
    getNote, 
    createNote, 
    updateNote, 
    deleteNote 
} from '../controllers/notes.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const notesRouter = express.Router();

// All routes require authentication
notesRouter.use(authenticateToken);

notesRouter.get('/', getNotes);
notesRouter.get('/:id', getNote);
notesRouter.post('/', createNote);
notesRouter.put('/:id', updateNote);
notesRouter.delete('/:id', deleteNote);

export default notesRouter;