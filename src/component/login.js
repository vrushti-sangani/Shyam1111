import React, { useState } from "react";
import "../component/logreg.css";
import { useNavigate } from "react-router-dom";

function Login({ login }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("/loginapi.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.status === "success") {
            
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("username", data.username);
                localStorage.setItem("emailid", data.emailid);

                login(); 
                navigate("/"); 

            } else {
                throw new Error(data.message || "Login failed");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <form className="login" id="login" method="post" onSubmit={handleSubmit}>
                <div className="main">
                    <h1>Login Form</h1>
                    <div className="info">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" required />
                        <br /><br />
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" required />
                    </div>
                    <div className="btns">
                        <button className="btn" type="submit">Submit</button>
                        <button className="btn" type="button" onClick={() => navigate("/register")}>Register</button>
                    </div>
                    {error && <p className="error">{error}</p>}
                </div>
            </form>
        </>
    );
}

export default Login;
