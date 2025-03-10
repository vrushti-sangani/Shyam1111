import React, { useState } from "react";
import Header from "./header";
import "../component/logreg.css";
import { NavLink, useNavigate } from "react-router-dom";

function Reg() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        gender: "",
        age: "",
    });
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});  // Reset errors before validation
        
        try {
            const response = await fetch("/registerapi.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (data.status === "success") {
                navigate('/login');
            } else if (data.message === "Email already registered!") {
                setError({ email: "This email is already in use. Please use a different one." });
            } else {
                setError(data.message || "Registration failed" );
            }
        } catch (err) {
            setError(err.message );
        }
    };

    return (
        <>
            <Header />
            <div className="regbody">
                <h1>Registration Form</h1>
                <form className="registration" id="register" onSubmit={handleSubmit}>
                    <div className="naemail">
                        <div>
                            <label htmlFor="name">Name: </label><br />
                            <input type="text" name="name" id="name" placeholder="Enter your name" 
                                value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label><br />
                            <input type="email" name="email" id="email" placeholder="Enter your email id" 
                                value={formData.email} onChange={handleChange} />
                            {error.email && <p className="error">{error.email}</p>}
                        </div>
                    </div><br />

                    <div className="naemail">
                        <div>
                            <label htmlFor="password">Password: </label><br />
                            <input type="password" name="password" id="password" placeholder="Enter password" 
                                value={formData.password} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="confirmpassword">Confirm Password: </label><br />
                            <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm password" 
                                value={formData.confirmpassword} onChange={handleChange} />
                        </div>
                    </div><br />

                    <label>Gender: </label>
                    <input type="radio" name="gender" value="male"  
                        checked={formData.gender === "male"} onChange={handleChange} /> Male  
                    <input type="radio" name="gender" value="female" 
                        checked={formData.gender === "female"} onChange={handleChange} /> Female<br /><br />

                    <label htmlFor="age">Age: </label>
                    <input type="number" name="age" id="age" placeholder="Enter age" 
                        value={formData.age} onChange={handleChange} /><br /><br />

                    <button type="submit" className="btnreg" id="mybtn">Register</button><br />
                    
                    {error.general && <p className="error">{error.general}</p>}

                    <p>Already registered? <NavLink to="/login" >Login</NavLink></p>
                </form>
            </div>
        </>
    );
}

export default Reg;
