import Note from '../models/notes.model.js';

// Get all notes for user
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.userId }).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            notes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get single note
export const getNote = async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, user: req.user.userId });
        
        if (!note) {
            return res.status(404).json({
                success: false,
                message: 'Note not found'
            });
        }

        res.status(200).json({
            success: true,
            note
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Create new note
export const createNote = async (req, res) => {
    const { heading, description } = req.body;

    if (!heading || !description) {
        return res.status(400).json({
            success: false,
            message: 'Heading and description are required'
        });
    }

    try {
        const note = new Note({
            heading,
            description,
            user: req.user.userId
        });

        await note.save();

        res.status(201).json({
            success: true,
            message: 'Note created successfully',
            note
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update note
export const updateNote = async (req, res) => {
    const { heading, description } = req.body;

    if (!heading || !description) {
        return res.status(400).json({
            success: false,
            message: 'Heading and description are required'
        });
    }

    try {
        const note = await Note.findOneAndUpdate(
            { _id: req.params.id, user: req.user.userId },
            { heading, description },
            { new: true, runValidators: true }
        );

        if (!note) {
            return res.status(404).json({
                success: false,
                message: 'Note not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Note updated successfully',
            note
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete note
export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user.userId });

        if (!note) {
            return res.status(404).json({
                success: false,
                message: 'Note not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Note deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};