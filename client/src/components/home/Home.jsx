import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import style from './home.module.css';

const Home = () => {
    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth();

    return (
        <div className={style.container}>
            <div className={style.hero}>
                <h1>Notes App</h1>
                <p>Organize your thoughts and ideas in one place</p>
                
                {isAuthenticated ? (
                    <div className={style.authSection}>
                        <p>Welcome back, {user?.email}!</p>
                        <button 
                            onClick={() => navigate('/notes')} 
                            className={style.primaryButton}
                        >
                            Go to Notes
                        </button>
                    </div>
                ) : (
                    <div className={style.authSection}>
                        <button 
                            onClick={() => navigate('/login')} 
                            className={style.primaryButton}
                        >
                            Login
                        </button>
                        <button 
                            onClick={() => navigate('/register')} 
                            className={style.secondaryButton}
                        >
                            Register
                        </button>
                    </div>
                )}
            </div>
            
            <div className={style.features}>
                <h2>Features</h2>
                <div className={style.featureGrid}>
                    <div className={style.feature}>
                        <h3>📝 Create Notes</h3>
                        <p>Write down your thoughts and ideas</p>
                    </div>
                    <div className={style.feature}>
                        <h3>🔒 Secure</h3>
                        <p>Your notes are private and secure</p>
                    </div>
                    <div className={style.feature}>
                        <h3>📱 Responsive</h3>
                        <p>Access your notes from any device</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;