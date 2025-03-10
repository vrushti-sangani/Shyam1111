import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../component/style1.css";
import "../component/style.css";
import "../component/media.css";

const addToCart =(name, price, image) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name, price, quantity: 1, image });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${name} has been added to your cart.`);
};

function Flour() {
    return (
        <>
        <Header />
            <div>
                <section className="fm-sec1">
                    <h1>FLOUR MILLs</h1>
                    <div className="fm-cards">
                        <div className="fm-card">
                            <img src="/images/fm-1.png" alt="flour mills" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Mycrofine Desire Plus SS Flour Mill, Bubbles</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This compact and efficient flour mill is designed for home use, featuring a stainless
                                            steel body and a stylish Bubbles design. It offers fine grinding performance with low
                                            power consumption, making it ideal for daily needs.</p>
                                        <h3>Key Features</h3>
                                        <li>Double Action Auto Cleaning System</li>
                                        <li>Child Safety Door Switch</li>
                                        <li>Stainless Steel Jail To Grind Thick</li>
                                        <li>Stainless Steel Hopper And Platform</li>
                                        <h3>Price :</h3>
                                        <p>₹25,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Mycrofine Desire Plus SS Flour Mill, Bubbles', 25000 , 'fm-1.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : Desire Plus SS</p>
                                        <p>Hopper Capacity : 6.5 kg</p>
                                        <p>Brand : MYCROFINE</p>
                                        <p>Number of Sieves : 6</p>
                                        <p>Colour : Black</p>
                                        <p>Body Material : Stainless Steel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fm-card">
                            <img src="/images/fm-2.png" alt="flour mills" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Milcent Neptune Plus VC 210 6.5KG Flour Mill</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This advanced flour mill features a 6.5 kg grinding capacity, making it ideal for large
                                            households. It offers efficient grinding with a modern design and low power consumption,
                                            ensuring long-lasting performance.</p>
                                        <h3>Key Features</h3>
                                        <li>Inbuilt Vacuum Clean</li>
                                        <li>ISI Certified 1 hp Electric Motor</li>
                                        <li>Stainless Steel 6 Rotor and Cutter</li>
                                        <li>Child safety switch</li>
                                        <li>Stainless Steel Jali Set</li>
                                        <li>Auto Start, Auto Stop, Auto Clean, Auto overload cutoff</li>
                                        <h3>Price :</h3>
                                        <p>₹20,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Milcent Neptune Plus VC 210 6.5KG Flour Mill', 20000 , 'fm-2.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Hopper Capacity : 4.5 kg</p>
                                        <p>Brand : MILCENT</p>
                                        <p>Motor Power : 750 Watt</p>
                                        <p>Motor Speed : 2880 RPM</p>
                                        <p>Motor Type : 1 hp 2880 rpm - Single Phase</p>
                                        <p>Colour : Wonder Ball</p>
                                        <p>Body Material : Wood</p>
                                        <p>Power Consumption : 0.9 Unit per Hour</p>
                                        <p>Power Requirement : 750 Watt, 230 V</p>
                                        <p>Number of Sieves : 7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fm-card">
                            <img src="/images/fm-3.png" alt="flour mills" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Natraj Viva Designer Flour Mill</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This new designer Aata Chakki from the house of Natraj Aatamaker is a fully automatic
                                            domestic flourmill that is cost-effective, functional, and caters to various aesthetic
                                            requirements.</p>
                                        <h3>Key Features</h3>
                                        <li>Automatic operation</li>
                                        <li>Energy-efficient motor</li>
                                        <li>7 types of sieves for versatile grinding</li>
                                        <li>Grinds 7 to 10 Kg/Hr </li>
                                        <h3>Price :</h3>
                                        <p>₹16,500</p>
                                    </div>
                                    <div className="des-p2">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Natraj Viva Designer Flour Mill', 16500 , 'fm-3.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Hopper Capacity: 5 kg</p>
                                        <p>Brand: Natraj</p>
                                        <p>Motor Power: 1 HP</p>
                                        <p>Motor Speed: 2800 RPM</p>
                                        <p>Motor Type: Single Phase</p>
                                        <p>Colour: Designer Finish</p>
                                        <p>Body Material: Wood Finish</p>
                                        <p>Power Consumption: 0.8 Unit per Hour</p>
                                        <p>Power Requirement: 230 V, 50 Hz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fm-card">
                            <img src="/images/fm-4.png" alt="flour mills" />
                            <div>
                                <h2 style={{ color: '#022460' }}> Navdeep Smart Plus Flour Mill</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>Grinds Everythings right From Wheat, Besan, Rice, Bajari, Maize, Jowar, Coffee, Rava, Udad, Dhaniya, Haldi, Daliya, Mehandi to Moong, Kali Mirch, Salt, Aavla, etc.</p>
                                        <h3>Key Features</h3>
                                        <li>Compact and portable design</li>
                                        <li>Child lock safety feature</li>
                                        <li>Easy maintenance</li>
                                        <li>Manufacturer : NAVDEEP PRODUCTS</li>
                                        <h3>Price :</h3>
                                        <p>₹15,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Navdeep Smart Plus Flour Mill', 15000 , 'fm-4.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Hopper Capacity: 4.5 kg</p>
                                        <p>Brand: Navdeep</p>
                                        <p>Motor Power: 1 HP</p>
                                        <p>Motor Speed: 2800 RPM</p>
                                        <p>Motor Type: Single Phase</p>
                                        <p>Colour: Brown</p>
                                        <p>Body Material: Wooden Finish</p>
                                        <p>Power Consumption: 0.9 Unit per Hour</p>
                                        <p>Power Requirement: 230 V</p>
                                        <p>Number of Sieves: 6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fm-card">
                            <img src="/images/fm4.png" alt="flour mills" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Shreeji Fine Atta Chakki Ghar Ghanti Domestic Flour Mill Machine For Home Use </h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>The Shreeji Fine Atta Chakki Ghar Ghanti is a fully automatic domestic flour mill with a 1 HP motor, grinding up to 8-10 kg/hour. Its compact wooden design, child safety lock, and energy-efficient performance make it ideal for home use.</p>
                                        <h3>Key Features</h3>
                                        <li>Fully automatic operation</li>
                                        <li>Child safety lock</li>
                                        <li>Energy-efficient motor</li>
                                        <li>Compact and stylish design for home use</li>
                                        <li>Noise-free and vibration-free performance</li>
                                        <h3>Price :</h3>
                                        <p>₹16,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Shreeji Fine Atta Chakki Ghar Ghanti Domestic Flour Mill Machine For Home Use', 16000 , 'fm4.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Hopper Capacity: 4-5 kg</p>
                                        <p>Brand: Shreeji Fine</p>
                                        <p>Motor Power: 1 HP</p>
                                        <p>Motor Speed: 2880 RPM</p>
                                        <p>Motor Type: Single Phase</p>
                                        <p>Colour: Basil Leaves</p>
                                        <p>Body Material: Wooden Finish</p>
                                        <p>Power Consumption: 0.75-1 Unit per Hour</p>
                                        <p>Power Requirement: 230 V</p>
                                        <p>Number of Sieves: 6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fm-card">
                            <img src="/images/fm-6.png" alt="flour mills" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Milan Fully Automatic Domestic Flour Mill Machine</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>The Milan Fully Automatic Domestic Flour Mill offers a high grinding capacity of 8-10 kg/hour with a 1 HP motor and low voltage operation. Its sleek flower design and user-friendly features make it an ideal choice for home use.</p>
                                        <h3>Key Features</h3>
                                        <li>Fully automatic and easy to use</li>
                                        <li> Low voltage operation (175V)</li>
                                        <li>Child safety lock</li>
                                        <li>Efficient and noise-free performance</li>
                                        <li>Compact and stylish design for home use</li>
                                        <h3>Price :</h3>
                                        <p>₹17,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Milan Fully Automatic Domestic Flour Mill Machine', 17000 , 'fm-6.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Hopper Capacity: 4.5 kg</p>
                                        <p>Brand: Milan</p>
                                        <p>Motor Power: 1 HP</p>
                                        <p>Motor Speed: 2880 RPM</p>
                                        <p>Motor Type: Single Phase</p>
                                        <p>Colour:  Flower Design</p>
                                        <p>Body Material: Plywood with Durable Finish
                                        </p>
                                        <p>Power Consumption: 0.75 Unit per Hour</p>
                                        <p>Power Requirement: 175 V</p>
                                        <p>Number of Sieves: 6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fm-card">
                            <img src="/images/fm-7.png" alt="flour mills" />
                            <div>
                                <h2 style={{ color: '#022460' }}>MICROACTIVE Stainless Steel 2 in 1 Fully Automatic Domestic Flour Mill</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>The MICROACTIVE Stainless Steel 2 in 1 Flour Mill is a fully automatic, high-capacity machine designed for both grains and masalas. With a stainless steel body, it offers efficiency and durability for home use.</p>
                                        <h3>Key Features</h3>
                                        <li>2-in-1 function for both grains and masalas</li>
                                        <li>Fully automatic operation</li>
                                        <li>Low noise and vibration-free</li>
                                        <li>Child safety lock for added protection</li>
                                        <li>Compact design for home use</li>
                                        <li>Standard accessories included</li>
                                        <h3>Price :</h3>
                                        <p>₹19,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('MICROACTIVE Stainless Steel 2 in 1 Fully Automatic Domestic Flour Mill', 19000 , 'fm-7.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Hopper Capacity: 4.5 kg</p>
                                        <p>Brand: MICROACTIVE</p>
                                        <p>Motor Power: 1 HP</p>
                                        <p>Motor Speed: 2880 RPM</p>
                                        <p>Motor Type: Single Phase</p>
                                        <p>Colour: Stainless Steel</p>
                                        <p>Body Material: Stainless Steel</p>
                                        <p>Power Consumption: 0.8 Unit per Hour</p>
                                        <p>Power Requirement: 230 V</p>
                                        <p>Number of Sieves: 6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <div><a href="flour.js" className="arrow">⬆️</a></div>
            </div>
        <Footer />

        </>
    )
}
export default Flour;