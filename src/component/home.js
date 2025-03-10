import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import "../component/style1.css";
import "../component/style.css";
import "../component/Media.css";
import { NavLink } from "react-router-dom";


function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slide = [
        "images/freeze1.webp",
        "images/ac1.webp",
        "images/tv1.webp",
        "images/washingmc1.jpg",
        "images/mill1.webp",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevSlide) => (prevSlide + 1) % slide.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval
    }, []);

return (
    <>
        <Header />
        <section className="h-sec1">
            <div className="div1">
                <div className="text">
                    <p> Upgrade Your Home <br /> with the Latest <br /><span style={{ color: "#ee2852" }}>Appliances!</span> </p>
                </div>
                <div className="text1">
                    <p>Shop the top brands in <span className="t1-p">Refrigerators, ACs, Television, Washing Machines, Flour Mill</span> <br />– all under one roof!</p>
                </div>
                <button type="button" className="h-btn"><NavLink to="/shop" >Explore...</NavLink></button>
            </div>
            <div className="se1-img">
                <div className="slideshow-container">

                    {slide.map((slide, index) => (
                        <div key={index}
                            className={`slide ${index === currentIndex ? "active" : ""}`}
                        >
                            <img src={slide} />
                        </div>
                    ))}
                    {/* <div className="slide active">
                        <img className="s-1" src="/images/freeze1.webp" alt="Refrigerators" />
                    </div>
                    <div className="slide">
                        <img className="s-2" src="/images/ac1.webp" alt="ACs" />
                    </div>
                    <div className="slide">
                        <img className="s-3" src="/images/tv1.webp" alt="Television" />
                    </div>
                    <div className="slide">
                        <img className="s-4" src="/images/washing mc1.jpg" alt="Washing Machines" />
                    </div>
                    <div className="slide">
                        <img className="s-5" src="/images/mill1.webp" alt="Flour Mill" />
                    </div> */}
                </div>
            </div>
        </section>


        <section className="h-sec2">
            <div className="s2-icons">
                <i className="fa-solid fa-truck"></i>
                <div>
                    <h3>DELIVERY</h3>
                    <p>shipping all order</p>
                </div>
            </div>
            <div className="s2-icons">
                <i className="fa-solid fa-sack-dollar"></i>
                <div>
                    <h3>RETURN</h3>
                    <p>return policy in 7d</p>
                </div>
            </div>
            <div className="s2-icons">
                <i className="fa-solid fa-headset"></i>
                <div>
                    <h3>SUPPORT</h3>
                    <p>24/7 support</p>
                </div>
            </div>
            <div className="s2-icons">
                <i className="fa-solid fa-credit-card"></i>
                <div>
                    <h3>PAYMENT</h3>
                    <p>100% secure</p>
                    <p>100% secure</p>
                </div>
            </div>
        </section>


        <section className="h-sec3">
            <h1>OUR PRODUCTS</h1>
            <div className="h-product">
                <div className="card c1">
                    <img src="/images/freezeicon.png" alt="freeze" />
                    <h2>Refrigerators</h2>
                    <p>Discover the perfect balance of style and efficiency with our latest range of refrigerators. Equipped
                        with advanced cooling technology, energy-saving features.</p>
                </div>
                <div className="card c2">
                    <img src="/images/acicon.png" alt="ac" />
                    <h2>Air Conditioner(AC)</h2>
                    <p>Beat the heat with our high-performance air conditioners. Featuring quick cooling, smart controls,
                        our ACs offer unmatched comfort while being gentle on the environment.</p>
                </div>
                <div className="card c3">
                    <img src="/images/tvicon.png" alt="tv" />
                    <h2>Television</h2>
                    <p>Enjoy a theater-like experience at home with our ultra-HD smart TVs. With vivid picture quality,
                        immersive sound, and seamless streaming capabilities, our TVs redefine home entertainment.</p>
                </div>
                <div className="card c4">
                    <img src="/images/washingmcicon.png" alt="washing Machines" />
                    <h2>Washing Machines</h2>
                    <p>Say goodbye to laundry day woes with our efficient washing machines. Designed to save time and water,
                        these machines feature smart wash modes and durable builds.</p>
                </div>
                <div className="card c5">
                    <img src="/images/millicon.png" alt="mills" />
                    <h2>flour Mill</h2>
                    <p>Enjoy the taste of freshly milled grains with our modern flour mills. Compact, efficient, and easy to
                        use, these machines ensure perfect grinding– from wheat and rice to spices.</p>
                </div>
            </div>
        </section>


        <section className="h-sec4">
            <div className="s4-d1">
                Revolutionize Your <br />Home with<br /><span style={{ color: " #ee2852" }}> Advanced Technology!</span>
            </div>
            <div className="s4-d2">Welcome to your one-stop destination for the latest in electronics! Discover a wide range of
                cutting-edge products designed to elevate your lifestyle, including energy-efficient refrigerators, powerful
                washing machines, immersive smart TVs, advanced air conditioners, and compact flour mills. Our collection
                features the newest innovations from trusted brands, offering unmatched quality, performance, and style.
                Whether you're upgrading your home or finding the perfect appliance for your needs, we ensure great prices,
                seamless shopping, and fast delivery right to your doorstep. Explore now and experience the perfect blend of
                technology and convenience!</div>
        </section>

        <div><a href="home.js" className="arrow">⬆️</a></div>

        <Footer />
    </>
)
    

}

export default Home;