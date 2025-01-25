import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
import './Register.css';

const Register = () => {
    const [user, setUser] = useState({
        username: "",
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
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const res_data = await response.json();
            if (response.ok) {
                storeTokenInLS(res_data.token);
                setUser({ username: "", email: "", password: "" });
                toast.success("Registration successful");
                navigate("/home");
            } else {
                if (res_data.extraDetails && Array.isArray(res_data.extraDetails)) {
                    setErrorMessages(res_data.extraDetails);
                } else {
                    setErrorMessages([res_data.message]);
                }
                toast.error("Registration failed");
            }
        } catch (error) {
            console.log(error);
            setErrorMessages(["An unexpected error occurred"]);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="registration-container">
                        <div className="registration-content">
                            <h1 className="registration-heading">Registration Form</h1>
                            {errorMessages.length > 0 && (
                                <div className="error-messages">
                                    {errorMessages.map((error, index) => (
                                        <p key={index} className="error-message">{error}</p>
                                    ))}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="registration-form">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Enter username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <button type="submit" className="btn-submit">Register Now</button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default Register;
