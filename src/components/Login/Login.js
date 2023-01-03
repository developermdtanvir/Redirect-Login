import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth/auth";

export default function Login() {
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const auth = useAuth();

    const redirectPath = location.state?.path || '/';

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, { replace: true })
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