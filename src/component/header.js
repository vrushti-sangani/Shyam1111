import React, { useEffect, useState } from "react";
import "../component/style1.css";
import "../component/style.css";
import "../component/Media.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [emailid, setEmailid] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedEmailid = localStorage.getItem("emailid");
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
      setEmailid(storedEmailid);
    }

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest(".header-nav")) {
        setMenuOpen(false);
      }
      if (!event.target.closest(".profile-container")) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const categories = [
    { id: "1", name: "refrigerator" },
    { id: "2", name: "air conditioner" },
    { id: "3", name: "television" },
    { id: "4", name: "washing machine" },
    { id: "5", name: "flour mill" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("emailid");
    setIsLoggedIn(false);
    setUsername(null);
    setEmailid(null);
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="sticky">
        <div className="nav">
          <div className="head">
            {!isLoggedIn ? (
              <>
                <div className="register">
                  <NavLink to="/register">REGISTER</NavLink>
                </div>
                <div className="register">
                  <NavLink to="/login">LogIn</NavLink>
                </div>
              </>
            ) : (
              <>
                <div className="addicon">
                  <NavLink to="/cart">
                    <i className="fa-solid fa-cart-shopping" />
                  </NavLink>
                </div>

                <div
                  className="profile-container"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  <i className="fa-regular fa-circle-user addicon" />
                  <span className="username"> {username} </span>
                  {showProfileMenu && (
                    <div className="profile-dropdown dropdown-con">
                      <button
                        className="close-profile"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        ✖
                      </button>
                      <ul>
                        {emailid && <li>{emailid}</li>}
                        <br />
                        <li className="logout" onClick={handleLogout}>
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="header-nav">
          <div className="logo">
            <img src="/images/nlogo.png" alt="logo" width="200px" />
          </div>

          {/* Menu Links with Dynamic Toggle */}
          <div className={`link ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink>
            <NavLink to="/shop" onClick={() => setMenuOpen(false)}>SHOP</NavLink>
            <div className="dropdown">
              <NavLink to="/product" onClick={() => setMenuOpen(false)}>PRODUCT</NavLink>
              <div className="dropdown-content dropbtn">
                {categories.map((category) => (
                  <ul
                    key={category.id}
                    onClick={() => {
                      navigate(`/product?category=${category.id}`);
                      setMenuOpen(false);
                    }}
                    className="dropdown-item"
                  >
                    <li>{category.name}</li>
                  </ul>
                ))}
              </div>
            </div>
            <NavLink to="/feature" onClick={() => setMenuOpen(false)}>FEATURE</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</NavLink>
          </div>

          {/* Menu Toggle Button */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
