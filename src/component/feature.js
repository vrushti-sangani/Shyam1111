import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../component/style1.css";
import "../component/style.css";
import "../component/Media.css";

// import "../component/Media.css";

function Feature() {
    return (
        <>
        <Header />
            <div>
                <section className="f-sec1">
                    <h2>Sell Your Old Appliance</h2>
                    <div>
                        <ul>
                            <li>
                                <p>Trade-In Your Old Electronics: Got old appliances you no longer use? Trade them in for instant
                                    value! We accept refrigerators, air conditioners, washing machines, and more.</p>
                            </li>
                            <li>
                                <p>Eco-Friendly Recycling: By selling your old appliances to us, you contribute to sustainable
                                    recycling and reduce electronic waste.</p>
                            </li>
                            <li>
                                <p>Easy Pickup Service: Enjoy our doorstep pickup service for your convenience</p>
                            </li>
                            <li>
                                <p>Earn Credits or Cash: Get competitive prices for your old appliances, or opt for store credits to
                                    save on your next purchase.</p>
                            </li>
                        </ul>
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>click here and send old appliance photos for sell </p>
                    <button><a href="tel:+91931346260">Sell Appliance Now &gt;&gt;</a></button>
                </section>
                <section className="f-sec2">
                    <h2>Explore Features</h2>
                    <div className="feature-card">
                        <div className="fea-card"><i className="fa-solid fa-layer-group" />
                            <h4>Product Categories</h4>
                            <p>Organize your products into specific categories for easy navigation.</p>
                            <a className="link1" href="ref.js">Refrigerators</a><br />
                            <a className="link1" href="ac.js">Air Conditioners (ACs)</a><br />
                            <a className="link1" href="tv.js">Televisions (TVs)</a><br />
                            <a className="link1" href="wash.js">Washing Machines</a><br />
                            <a className="link1" href="flour.js">Flour Mills</a><br />
                        </div>
                        <div className="fea-card"><i className="fa-solid fa-face-smile" />
                            <h4>Reviews &amp; Rating</h4>
                            <p>Display user-generated content in the form of reviews and ratings for products.</p>
                            <a href="faq.js"><button className="f-btn">Reviews</button></a>
                        </div>
                        <div className="fea-card"><i className="fa-solid fa-arrow-trend-up" />
                            <h4>Latest Trend</h4>
                            <p>Keep your customers updated on new technology and product innovations.</p>
                            <a href="https://www.podium.com/article/appliance-industry-trends/" target="_blank"><button className="f-btn">Explore</button></a>
                        </div>
                        <div className="fea-card1"><i className="fa-solid fa-question" />
                            <h4>FAQs</h4>
                            <p>Address common customer concerns to streamline support and reduce return inquiries.</p>
                            <a href="faq.js"><button className="f-btn">FAQs</button></a>
                        </div>
                        <div className="fea-card1"><i className="fa-solid fa-code-compare" />
                            <h4>Product Comparison</h4>
                            <p>Allow users to compare products side-by-side to make an informed decision.</p>
                            <p>Comparison Criteria: Show side-by-side features, including technical specifications, prices, ratings, warranty details, and user reviews.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div><a href="feature.js" className="arrow">⬆️</a></div>
            <Footer />
        </>
    )
}
export default Feature;