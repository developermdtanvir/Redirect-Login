import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth/auth";

export default function Login() {
    const [user, setUser] = useState('');
    const navigate = useNavigate()
    const auth = useAuth()
    const handleLogin = () => {
        auth.login(user);
        navigate('/')
    }
    return (
        <div>
            <label for="htmlFor">
                Username:{''}
                <input type="text" onChange={(e) => setUser(e.target.value)} name="" />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}