import { createContext, useContext, useState } from "react";
import config from "../../dotenv";


const AuthContext = createContext();

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be in AuthProvider')

    }
    return context
}

export const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const VITE_API_BASE_URL = config.VITE_API_BASE_URL


    const login = async (email, password)=>{
        setLoading(true);
        try {
            const response = await fetch(`${VITE_API_BASE_URL}/auth/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })

            const data = await response.json()

            if(response.ok){
                setUser({email: data.user.email})
                if(data.token){
                    localStorage.setItem('token', data.token);
                }
                return {
                    success: true,
                    data
                }
            }else{
                return {
                    success: false,
                    message: data.message ||'login failed'
                }
            }

        } catch (error) {
            console.error(error.message);
            return{
                success: false,
                message: error.message
            }
        }finally{
            setLoading(false)
        }
    }
    return (
        <AuthContext.Provider value={{login, user, loading}}>
            {children}
        </AuthContext.Provider>
    )
}