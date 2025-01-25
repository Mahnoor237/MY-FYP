import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
import './Login.css';

const URL = "http://localhost:5000/api/auth/login";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errorMessages, setErrorMessages] = useState([]);
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();
            if (response.ok) {
                storeTokenInLS(res_data.token);
                setUser({ email: "", password: "" });
                toast.success("Login successful");
                navigate("/home");
            } else {
                if (res_data.extraDetails && Array.isArray(res_data.extraDetails)) {
                    setErrorMessages(res_data.extraDetails);
                } else {
                    setErrorMessages([res_data.message]);
                }
                toast.error("Login failed");
            }
        } catch (error) {
            console.log(error);
            setErrorMessages(["An unexpected error occurred"]);
        }
    };

    return (
        <section className="login-section">
            <div className="login-container">
                <div className="login-form">
                    <h1 className="login-heading">Login</h1>
                    {errorMessages.length > 0 && (
                        <div className="error-messages">
                            {errorMessages.map((error, index) => (
                                <p key={index} className="error-message">{error}</p>
                            ))}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={handleInput}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInput}
                                placeholder="Enter your password"
                            />
                        </div>
                        <button type="submit" className="btn btn-submit">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
