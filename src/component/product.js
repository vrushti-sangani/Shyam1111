import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../component/style1.css";
import "../component/style.css";
import "../component/Media.css";




function Product() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const category = new URLSearchParams(location.search).get("category") || "1";


    const addToCart = (name, price, image) => {
        const isLoggedIn = localStorage.getItem("username");
    
        if (!isLoggedIn) {
            alert("You need to log in to add items to your cart.");
            navigate("/login");
            return;
        }
    
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const existingItem = cartItems.find((item) => item.name === name);
    
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ name, price, quantity: 1, image });
        }
    
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        alert(`${name} has been added to your cart.`);
    };


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`/productapi.php?category=${category}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                console.log("Fetched Data:", data);
                if (Array.isArray(data)) {
                    setProducts(data);
                } else if (data.status === "success" && Array.isArray(data.products)) {
                    setProducts(data.products);
                } else {
                    throw new Error("Unexpected data format");
                }
            } catch (error) {
                console.error("Error fetching product info:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [category]);

    return (
        <>
            <Header />
            <div>
                <section>
                    <div className="collection">
                        <h1>Our Collection</h1>
                    </div>
                </section>


                <section id="products-container" className="r-sec1">

                    {loading ? (
                        <p>Loading products...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        products.map((product, index) => (
                            <div className="r-cards" key={index}>
                                <div className="ref-card">
                                    <div className="ref-img">
                                        <img src={product.image} alt={product.name} />
                                        <button className="cart" onClick={() => addToCart(product.name, product.price, product.image)}>ADD TO CART</button>
                                    </div>

                                    <div>
                                        <h2 style={{ color: '#022460' }}>{product.name}</h2>
                                        <div className="ref-des">
                                            <div className="des-p1">
                                                <h3>Key Features</h3>
                                                <ul>
                                                    {Array.isArray(product.key_feature)
                                                        ? product.key_feature.map((feature, i) => <li key={i}>{feature}</li>)
                                                        : product.key_feature.split('.').map((feature, i) => <li key={i}>{feature.trim()}</li>)}
                                                </ul>
                                                <h3>Price :</h3>
                                                <p>{product.price}</p>
                                            </div>
                                            <div className="des-p2">

                                                <h3>Warranty</h3>
                                                <p>{product.warrenty}</p>
                                                <h3>Information</h3>
                                                <ul>
                                                    {Array.isArray(product.info)
                                                        ? product.info.map((item, i) => <li key={i}>{item}</li>)
                                                        : product.info.split(',').map((item, i) => <li key={i}>{item.trim()}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    )}

                </section>
            </div>
            <Footer />
        </>
    )
}
export default Product;









