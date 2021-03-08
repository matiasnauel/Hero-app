import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext);
    const lastpath = localStorage.getItem("lastPath") || "/";
    const handleLogin = () => {
        
        dispatch({
            type: types.login,
            payload: {
                name: "Matias"
            }
        })
        history.replace(lastpath);
    }
    return (
        <div className="container mt-5" >
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleLogin} >
                Login
            </button>
        </div>
    )
}
