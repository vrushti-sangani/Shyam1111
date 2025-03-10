import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../component/style1.css";
import "../component/style.css";
import "../component/Media.css";

function Faq() {
    return (
        <>
        <Header />
            <div>
                <section className="faq-s1">
                    <h1>REVIEWS &amp; RATINGS</h1>
                    <p>Display user-generated content in the form of reviews and ratings for products.</p>
                    <div className="faq-img">
                        <img src="/images/review1.png" alt="review" />
                        <img src="/images/review2.png" className="img2" alt="review" />
                        <img src="/images/review3.png" alt="review" />
                        <img src="/images/review4.png" className="img2" alt="review" />
                    </div>
                </section>
        

                <section className="faq-s2">
                    <div>
                        <h1>FAQs</h1>
                        <details>
                            <summary className="bgcolor">What types of electronics do you sell?</summary>
                            <p>We offer a wide range of electronics, including refrigerators, air conditioners, washing machines, TVs, and flour mills.</p>
                        </details><br />
                        <details>
                            <summary className="bgcolor"> Do you provide warranty on your products?</summary>
                            <p>Yes, all our products come with a manufacturer’s warranty. Warranty duration varies by product and brand.</p>
                        </details><br />
                        <details>
                            <summary className="bgcolor"> Do you provide installation services?</summary>
                            <p>Yes, we offer free or paid installation services depending on the product. Our support team will assist you.</p>
                        </details><br />
                        <details>
                            <summary className="bgcolor">  Is there a delivery charge?</summary>
                            <p>Delivery is not free for products. This is based on the distance.</p>
                        </details><br />
                        <details>
                            <summary className="bgcolor"> Can I sell my old appliances?</summary>
                            <p>Yes, we accept old appliances like refrigerators, ACs, and washing machines. Get instant value or store credit.</p>
                        </details><br />
                        <details>
                            <summary className="bgcolor">Do I need to provide a bill for my old appliance?</summary>
                            <p>A bill is not mandatory, but it may help in getting a better exchange value.</p>
                        </details><br />
             
                    </div>
                    <div className="msg1">
                        <h2>Need Help? Let's Chat!</h2>
                        <label>Message : </label>
                        <textarea name="msg1" id="msg1" rows={4} cols={40} placeholder="drop message..." defaultValue={""} />
                        <input type="button" className="button" defaultValue="submit" />
                    </div>
                </section>
            </div>
            <div><a href="faq.js" className="arrow">⬆️</a></div>

            <Footer />
        </>
    )
}
export default Faq;