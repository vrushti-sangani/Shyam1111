import React from "react"
import "../component/style1.css";
import "../component/style.css";
import "../component/Media.css";
import {NavLink} from "react-router-dom";

function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="foot1">
                    <div className="d1">
                        <div className="img">
                            <img src="/images/nlogo.png" alt="logo" />
                        </div>
                        <div className="text">
                            <p style={{ fontSize: 17 }}>Discover the perfect appliances for your home at unbeatable prices.</p>
                        </div>
                        <div className="icon">
                            <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-square-facebook" /></a>
                            <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-square-instagram" /></a>
                            <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin" /></a>
                        </div>
                    </div>
                    <div className="d2">
                        <h2>Contact Info</h2>
                        <div><i className="fa-solid fa-location-dot" />Jasraj Nagar Street No.3, 150 Feet Ring Road, Umiya Chowk,
                            Rajkot, Gujarat 360004</div>
                        <div><i className="fa-solid fa-clock" />Monday-Saturday : 9am-9pm</div>
                        <div><i className="fa-solid fa-envelope" />shyam1978@electronics.com</div>
                        <div><i className="fa-duotone fa-solid fa-phone" />9909580111 // 9879481420</div>
                    </div>
                    <div className="d3">
                        <h2>Pages</h2>
                        <NavLink to="/shop" className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
                        <NavLink to="/shop" className={({ isActive }) => isActive ? "active-link" : ""}>Shop</NavLink>
                        <NavLink to="/product" className={({ isActive }) => isActive ? "active-link" : ""}>Products</NavLink>
                        <NavLink to="/feature" className={({ isActive }) => isActive ? "active-link" : ""}>Features</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
                    </div>
                    <div className="d4">
                        <h2>Services</h2>
                        <a href="#">Delivery</a>
                        <NavLink to="/feature" className={({ isActive }) => isActive ? "active-link" : ""}>Exchange</NavLink>
                        <a href="#">support</a>
                        <a href="#">Payment</a>
                        <NavLink to="/faq" className={({ isActive }) => isActive ? "active-link" : ""}>FAQs</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Location</NavLink>
                    </div>
                </div>
                <div className="foot2">
                    <p>Copyright ©Shyam Electronics. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;
