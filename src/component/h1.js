import React, { useEffect, useState } from "react";
import "../component/style.css";
import "../component/media.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating login state
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);


    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    const categories = [
        { id: "1", name: "refrigerator" },
        { id: "2", name: "air conditioner" },
        { id: "3", name: "television" },
        { id: "4", name: "washing machine" },
        { id: "5", name: "flour mill" }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim() !== "" && category !== "") {
            navigate(`/product?category=${category}&search=${search}`);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("username");
        setIsLoggedIn(false);
        setUsername(null);
        navigate("/login");
    };


    return (
        <header className="sticky">
        <div className="nav">
            <div className="head">
                {isLoggedIn ? (
                    <>
                        <div className="addicon">
                            <NavLink to="/cart">
                                <i className="fa-solid fa-cart-shopping" />
                            </NavLink>
                        </div>

                        {/* Profile Icon with Username */}
                        <div
                            className="profile-container"

                            onClick={()=>{
                                setShowProfileMenu(true)
                            }}
                            // onMouseEnter={() => setShowProfileMenu(true)}
                            // onMouseLeave={() => setShowProfileMenu(false)}
                        >
                            <i className="fa-regular fa-circle-user profile-icon" />
                           {/* Show User Name */}
                            {showProfileMenu && (
                                <div className="profile-dropdown">
                                <span className="username"> {username} </span>
                                    <ul>
                                        <li><NavLink to="/account">My Account</NavLink></li>
                                        <li onClick={handleLogout}>Logout</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="register">
                            <NavLink to="/register">REGISTER</NavLink>
                        </div>
                        <div className="register">
                            <NavLink to="/login">LogIn</NavLink>
                        </div>
                    </>
                )}
            </div>
        </div>
    </header>
);
}

export default Header;