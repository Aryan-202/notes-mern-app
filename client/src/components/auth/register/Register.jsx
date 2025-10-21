import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import style from './register.module.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { register, loading } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError('');
        if (success) setSuccess('');
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            setError('Please fill all fields');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        const result = await register(formData.name, formData.email, formData.password);

        if (result.success) {
            setSuccess('Registration successful! Please login.');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } else {
            setError(result.message);
        }
    };

    return (
        <div className={style.container}>
            <div className={style.formContainer}>
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className={style.error}>{error}</div>}
                    {success && <div className={style.success}>{success}</div>}
                    
                    <div className={style.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <button type="submit" disabled={loading} className={style.submitButton}>
                        {loading ? 'Creating Account...' : 'Register'}
                    </button>
                </form>
                
                <p className={style.loginLink}>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;