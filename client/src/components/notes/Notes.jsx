import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import style from './notes.module.css';
import config from '../../../dotenv';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ heading: '', description: '' });
    const [editingNote, setEditingNote] = useState(null);
    const [error, setError] = useState('');

    const { user, getAuthHeaders, logout } = useAuth();
    const VITE_API_BASE_URL = config.VITE_API_BASE_URL;

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await fetch(`${VITE_API_BASE_URL}/api/notes`, {
                headers: getAuthHeaders()
            });
            const data = await response.json();
            
            if (data.success) {
                setNotes(data.notes);
            }
        } catch (error) {
            console.error('Error fetching notes:', error);
            setError('Failed to fetch notes');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.heading || !formData.description) {
            setError('Please fill all fields');
            return;
        }

        try {
            const url = editingNote 
                ? `${VITE_API_BASE_URL}/api/notes/${editingNote._id}`
                : `${VITE_API_BASE_URL}/api/notes`;
            
            const method = editingNote ? 'PUT' : 'POST';
            
            const response = await fetch(url, {
                method,
                headers: getAuthHeaders(),
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setFormData({ heading: '', description: '' });
                setShowForm(false);
                setEditingNote(null);
                fetchNotes();
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error saving note:', error);
            setError('Failed to save note');
        }
    };

    const handleEdit = (note) => {
        setEditingNote(note);
        setFormData({ heading: note.heading, description: note.description });
        setShowForm(true);
    };

    const handleDelete = async (noteId) => {
        if (!window.confirm('Are you sure you want to delete this note?')) {
            return;
        }

        try {
            const response = await fetch(`${VITE_API_BASE_URL}/api/notes/${noteId}`, {
                method: 'DELETE',
                headers: getAuthHeaders()
            });

            const data = await response.json();

            if (data.success) {
                fetchNotes();
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error deleting note:', error);
            setError('Failed to delete note');
        }
    };

    const cancelEdit = () => {
        setShowForm(false);
        setEditingNote(null);
        setFormData({ heading: '', description: '' });
    };

    if (loading) {
        return <div className={style.loading}>Loading...</div>;
    }

    return (
        <div className={style.container}>
            <header className={style.header}>
                <h1>My Notes</h1>
                <div className={style.userInfo}>
                    <span>Welcome, {user?.email}</span>
                    <button onClick={logout} className={style.logoutButton}>Logout</button>
                </div>
            </header>

            {error && <div className={style.error}>{error}</div>}

            <div className={style.actions}>
                <button 
                    onClick={() => setShowForm(true)} 
                    className={style.addButton}
                >
                    Add New Note
                </button>
            </div>

            {showForm && (
                <div className={style.formOverlay}>
                    <div className={style.formContainer}>
                        <h3>{editingNote ? 'Edit Note' : 'Create New Note'}</h3>
                        <form onSubmit={handleSubmit}>
                            <div className={style.formGroup}>
                                <label>Title</label>
                                <input
                                    type="text"
                                    value={formData.heading}
                                    onChange={(e) => setFormData({...formData, heading: e.target.value})}
                                    placeholder="Enter note title"
                                    required
                                />
                            </div>
                            <div className={style.formGroup}>
                                <label>Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    placeholder="Enter note description"
                                    rows="5"
                                    required
                                />
                            </div>
                            <div className={style.formActions}>
                                <button type="submit" className={style.saveButton}>
                                    {editingNote ? 'Update Note' : 'Create Note'}
                                </button>
                                <button type="button" onClick={cancelEdit} className={style.cancelButton}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className={style.notesGrid}>
                {notes.length === 0 ? (
                    <div className={style.emptyState}>
                        <p>No notes yet. Create your first note!</p>
                    </div>
                ) : (
                    notes.map(note => (
                        <div key={note._id} className={style.noteCard}>
                            <h3>{note.heading}</h3>
                            <p>{note.description}</p>
                            <div className={style.noteActions}>
                                <button 
                                    onClick={() => handleEdit(note)}
                                    className={style.editButton}
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => handleDelete(note._id)}
                                    className={style.deleteButton}
                                >
                                    Delete
                                </button>
                            </div>
                            <div className={style.noteMeta}>
                                <span>Created: {new Date(note.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Notes;