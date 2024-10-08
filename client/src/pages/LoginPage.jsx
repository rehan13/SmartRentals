import { Link, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(''); 
    const { setUser } = useContext(UserContext);

    async function handleLoginSubmit(ev) {
        ev.preventDefault();

        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert("Login successful");
            setRedirect(true);
        } catch (e) {
            if (e.response && e.response.status === 404) {
                setError('User not found');
            } else if (e.response && e.response.status === 401) {
                setError('Incorrect password');
            } else {
                setError('Login failed');
            }
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    }

    if (redirect) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-xl mx-auto" onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="primary">Login</button>
                    {error && <div className="text-red-500 text-center mt-2">{error}</div>}
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register Now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
