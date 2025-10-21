import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './login.module.css';
import { useAuth } from '../../../context/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const [error, setError] = useState('');

    const { login, loading } = useAuth();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError('');
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError('Please fill all fields');
            return;
        }

        const result = await login(formData.email, formData.password);

        if (!result.success) {
            setError(result.message);
        }
    };

    return (
        <div className={style.container}>
            <div className={style.formContainer}>
                <h2>Welcome Back</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className={style.error}>{error}</div>}
                    
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
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                
                <p className={style.registerLink}>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;