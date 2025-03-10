import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/home";
import Shop from "./component/shop";
import Product from "./component/product";
import Feature from "./component/feature";
import Contact from "./component/contact";
import Reg from "./component/register";
import Login from "./component/login";
import Faq from "./component/faq";
import Cart from "./component/cart";

// Protected Route Component
function ProtectedRoute({ children }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const username = localStorage.getItem("username");
    const emailid = localStorage.getItem("emailid");

    console.log("ProtectedRoute Check:", isAuthenticated, username, emailid);

    return isAuthenticated && username && emailid ? children : <Navigate to="/login" replace />;
}

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authStatus = localStorage.getItem("isAuthenticated");
        setIsAuthenticated(authStatus === "true");
    }, []);

    const login = () => {
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("username");
        localStorage.removeItem("emailid");
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home isAuthenticated={isAuthenticated} logout={logout} />} />
                <Route path="/login" element={<Login login={login} />} />
                <Route path="/register" element={<Reg />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />

            
                <Route path="/shop" element={<Shop />} />
                <Route path="/product" element={<Product />} />
                <Route path="/feature" element={<Feature />} />
                <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
