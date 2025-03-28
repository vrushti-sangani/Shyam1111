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

function Wash(){
    return(
        <>
        <Header />
            <div>
                <section className="wm-sec1">
                    <h1>WASHING MACHINEs</h1>
                    <div className="wm-cards">
                        <div className="wm-card">
                            <img src="/images/wm1.png" alt="washing machines" />
                            <div>
                                <h2 style={{ color: '#022460' }}>LG 7 Kg 5 Star Semi-Automatic Top Loading Washing Machine (P7020NGAZ,
                                    Dark Gray, Wind Jet Dry)</h2>
                                <div className="wm-des">
                                    <div className="des-p1">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('LG 7 Kg 5 Star Semi-Automatic Top Loading Washing Machine (P7020NGAZ,Dark Gray, Wind Jet Dry)', 15000 , 'wm1.png')}>ADD TO CART</button></a>
                                        <h3>Key Features</h3>
                                        <li>Gentle, Normal, Strong Wash Programs</li>
                                        <li>5.5 Kg Spin Tub Capacity</li>
                                        <li>Wind Jet Dry</li>
                                        <li>Rat Away Technology</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                    </div>
                                    <div className="des-p2">
                                        <h3>Information</h3>
                                        <p>Washing Machine Type : Semi-Automatic</p>
                                        <p>Capacity : 7 kg</p>
                                        <p>Model : P7020NGAZ</p>
                                        <p>Brand : LG</p>
                                        <p>Colour : Dark Gray</p>
                                        <p>No. of Wash Programs : 3</p>
                                        <p>Rust Proof : Yes</p>
                                        <h3>Price :</h3>
                                        <p>₹15,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wm-card">
                            <img src="/images/wm2.png" alt="washing machines" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Whirlpool Ace Grand 7.5 Kg Semi Automatic Washing Machine (Supersoak Technology, Coral Red, 5 Years Warranty)</h2>
                                <div className="wm-des">
                                    <div className="des-p1">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Whirlpool Ace Grand 7.5 Kg Semi Automatic Washing Machine (Supersoak Technology, Coral Red, 5 Years Warranty)', 12000 , 'wm2.png')}>ADD TO CART</button></a>
                                        <h3>Key Features</h3>
                                        <li>In Built Scrubber</li>
                                        <li>Ace Wash Station</li>
                                        <li>Supersoak Technology</li>
                                        <li>Easy Mobility</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                    </div>
                                    <div className="des-p2">
                                        <h3>Information</h3>
                                        <p>Washing Machine Type : Semi-Automatic</p>
                                        <p>Capacity : 7.5 kg</p>
                                        <p>Model : ACE 7.5 GRAND (CORAL RED)</p>
                                        <p>Brand : Whirlpool</p>
                                        <p>Dryer Capacity : 5.5 Kg</p>
                                        <p>Control Type : Button + Dial</p>
                                        <p>Colour : Coral Red</p>
                                        <p>No. of Wash Programs : 3</p>
                                        <p>Rust Proof : Yes</p>
                                        <h3>Price :</h3>
                                        <p>₹12,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wm-card">
                            <img src="/images/wm3.png" alt="washing machines" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Samsung 8 Kg 5 Star Inverter with Hygiene Steam Fully-Automatic Front Loading Washing Machine (WW80T4040CE1TL, White, In-built Heater)</h2>
                                <div className="wm-des">
                                    <div className="des-p1">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Samsung 8 Kg 5 Star Inverter with Hygiene Steam Fully-Automatic Front Loading Washing Machine (WW80T4040CE1TL, White, In-built Heater)', 35000 , 'wm3.png')}>ADD TO CART</button></a>
                                        <h3>Key Features</h3>
                                        <li>Diamond Drum, Hygiene Steam</li>
                                        <li>Digital Inverter Technology</li>
                                        <li>StayClean Drawer</li>
                                        <li>Drum Clean removes 99.9% of odor-causing bacteria</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                    </div>
                                    <div className="des-p2">
                                        <h3>Information</h3>
                                        <p>Washing Machine Type : Fully-Automatic</p>
                                        <p>Capacity : 8 kg</p>
                                        <p>Model : WW80T4040CE/TL</p>
                                        <p>Brand : Samsung</p>
                                        <p>Control Type : Button, Knob</p>
                                        <p>Colour : White</p>
                                        <p>No. of Wash Programs : 11</p>
                                        <h3>Price :</h3>
                                        <p>₹35,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wm-card">
                            <img src="/images/wm4.png" alt="washing machines" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Kelvinator 7.0 Kg Top Load Semi-Automatic Washing Machine, KWS-C700BK, Black</h2>
                                <div className="wm-des">
                                    <div className="des-p1">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Kelvinator 7.0 Kg Top Load Semi-Automatic Washing Machine, KWS-C700BK, Black', 35000 , 'wm4.png')}>ADD TO CART</button></a>
                                        <h3>Key Features</h3>
                                        <li>Total Capacity: 7.0 Kg</li>
                                        <li>5 Star Energy Consumption</li>
                                        <li>1320 RPM Max Spin Speed</li>
                                        <li>350 Watt Power Consumption</li>
                                        <li>35 Min Quick Wash Time</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                    </div>
                                    <div className="des-p2">
                                        <h3>Information</h3>
                                        <p>Washing Machine Type : Semi-Automatic</p>
                                        <p>Dryer Capacity : 4.5 kg</p>
                                        <p>Model : KWS-C700BK</p>
                                        <p>Brand : Kelvinator</p>
                                        <p>Control Type : Knob</p>
                                        <p>Colour : Black</p>
                                        <p>No. of Wash Programs : 2</p>
                                        <p>Rust Proof : Yes</p>
                                        <h3>Price :</h3>
                                        <p>₹35,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wm-card">
                            <img src="/images/wm5.png" alt="washing machines" />
                            <div>
                                <h2 style={{ color: '#022460' }}>LG 13 Kg Front Loading Fully Automatic Washing Machine, FHP1413Z7M</h2>
                                <div className="wm-des">
                                    <div className="des-p1">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('LG 13 Kg Front Loading Fully Automatic Washing Machine, FHP1413Z7M', 60000 , 'wm5.png')}>ADD TO CART</button></a>
                                        <h3>Key Features</h3>
                                        <li>6 Motion Direct Drive</li>
                                        <li>Turbowash</li>
                                        <li>Steam+</li>
                                        <li>LG ThinQ with WiFi</li>
                                        <li>AI Direct Drive</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                    </div>
                                    <div className="des-p2">
                                        <h3>Information</h3>
                                        <p>Washing Machine Type : Fully-Automatic</p>
                                        <p>Capacity : 13 kg</p>
                                        <p>Model : FHP1413Z7M</p>
                                        <p>Brand : LG</p>
                                        <p>Wash Method : Tumble</p>
                                        <p>Loading Type : Front</p>
                                        <p>Colour : Middle Black</p>
                                        <p>No. of Wash Programs : 14</p>
                                        <p>Rust Proof : Yes</p>
                                        <h3>Price :</h3>
                                        <p>₹60,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wm-card">
                            <img src="/images/wm6.png" alt="washing machines" />
                            <div>
                                <h2 style={{ color: '#022460' }}>LG 13 Kg Front Loading Fully Automatic Washing Machine, FHP1413Z7M</h2>
                                <div className="wm-des">
                                    <div className="des-p1">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('LG 13 Kg Front Loading Fully Automatic Washing Machine, FHP1413Z7M', 60000 , 'wm6.png')}>ADD TO CART</button></a>
                                        <h3>Key Features</h3>
                                        <li>53 L Softcare Drum</li>
                                        <li>India Specific Anti Stain Program</li>
                                        <li>AI Active Water Plus with 256 Sensing Levels</li>
                                        <li>Speed Perfect, Start time delay</li>
                                        <li>Anti-Bacteria Program with Steam Cycle</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                    </div>
                                    <div className="des-p2">
                                        <h3>Information</h3>
                                        <p>Washing Machine Type : Fully-Automatic</p>
                                        <p>Capacity : 8 kg</p>
                                        <p>Series : Series 6</p>
                                        <p>Brand : Bosch</p>
                                        <p>Colour : Silver</p>
                                        <p>No. of Wash Programs : 15</p>
                                        <h3>Price :</h3>
                                        <p>₹60,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wm-card">
                            <img src="/images/wm7.png" alt="washing machines" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Godrej 6.5 Kg Top Load Fully Automatic Washing Machine, WTEON ADR 65 5.0 PFDTN, Graphite Grey</h2>
                                <div className="wm-des">
                                    <div className="des-p1">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Godrej 6.5 Kg Top Load Fully Automatic Washing Machine, WTEON ADR 65 5.0 PFDTN, Graphite Grey', 20000 , 'wm7.png')}>ADD TO CART</button></a>
                                        <h3>Key Features</h3>
                                        <li>Zero Pressure Technology</li>
                                        <li>5 Star Energy Rating</li>
                                        <li>Toughened Glass Lid</li>
                                        <li>Advanced Digital Display</li>
                                        <li>In-Built Soak Technology</li>
                                        <li>Auto Resume Feature</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                    </div>
                                    <div className="des-p2">
                                        <h3>Information</h3>
                                        <p>Washing Machine Type : Fully-Automatic</p>
                                        <p>Control Type : Button</p>
                                        <p>Model : WTEON ADR 65 5.0 PFDTN</p>
                                        <p>Brand : Godrej</p>
                                        <p>Indicators : Detergent Indicator</p>
                                        <p>Colour : Graphite Grey</p>
                                        <p>No. of Wash Programs : 11</p>
                                        <p>Rust Proof : Yes</p>
                                        <h3>Price :</h3>
                                        <p>₹20,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wm-card">
                            <img src="/images/wm8.png" alt="washing machines" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Lloyd 8 Kg Top Loading Semi Automatic Washing Machine, Elante GLWMS80AVGEL</h2>
                                <div className="wm-des">
                                    <div className="des-p1">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('Lloyd 8 Kg Top Loading Semi Automatic Washing Machine, Elante GLWMS80AVGEL', 15000 , 'wm8.png')}>ADD TO CART</button></a>
                                        <h3>Key Features</h3>
                                        <li>5 Star Rating Washing Machine</li>
                                        <li>Top Loading Semi Automatic</li>
                                        <li>2 Way Magic Filter, Capacity: 8 Kg</li>
                                        <li>Max. Spin Speed: 1300 RPM</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                    </div>
                                    <div className="des-p2">
                                        <h3>Information</h3>
                                        <p>Washing Machine Type : Semi-Automatic</p>
                                        <p>Model : GLWMS80AVGEL</p>
                                        <p>Brand : LLOYD</p>
                                        <p>Control Type : Dial</p>
                                        <p>Wash Method : Pulsator</p>
                                        <p>Loading Type : Top</p>
                                        <p>Power Supply : AC 230 Volts, 50 Hz</p>
                                        <p>Colour : Dark Grey and Orange</p>
                                        <p>No. of Wash Programs : 3</p>
                                        <p>Rust Proof : Yes</p>
                                        <h3>Price :</h3>
                                        <p>₹15,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wm-card">
                            <img src="/images/wm9.png" alt="washing machines" />
                            <div>
                                <h2 style={{ color: '#022460' }}>IFB 6.5 Kg Top Load Fully Automatic Washing Machine, Aqua TL-RES, Light Grey</h2>
                                <div className="wm-des">
                                    <div className="des-p1">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('IFB 6.5 Kg Top Load Fully Automatic Washing Machine, Aqua TL-RES, Light Grey', 20000 , 'wm9.png')}>ADD TO CART</button></a>
                                        <h3>Key Features</h3>
                                        <li>Total Capacity: 6.5 Kg</li>
                                        <li>3D Wash Dynamic Wash System</li>
                                        <li>Bi-Axial Movement</li>
                                        <li>Triadic Pulsator</li>
                                        <li>Auto Imbalance System</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                    </div>
                                    <div className="des-p2">
                                        <h3>Information</h3>
                                        <p>Washing Machine Type : Fully-Automatic</p>
                                        <p>Series : Aqua</p>
                                        <p>Capacity : 6.5 kg</p>
                                        <p>Model : TL-RES</p>
                                        <p>Brand : IFB</p>
                                        <p>Control Type : Button</p>
                                        <p>Loading Type : Top</p>
                                        <p>Water Consumption : 18 L</p>
                                        <p>Colour : Light Grey</p>
                                        <p>No. of Wash Programs : 5</p>
                                        <p>Power Supply : 220 - 240 Volt</p>
                                        <h3>Price :</h3>
                                        <p>₹20,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wm-card">
                            <img src="/images/wm10.png" alt="washing machines" />
                            <div>
                                <h2 style={{ color: '#022460' }}>BPL 7 kg Fully Automatic Top Loading Washing Machine, with inbuilt heater, BWT-H70EFSFD, Cool Grey</h2>
                                <div className="wm-des">
                                    <div className="des-p1">
                                        <a href="#"> <button className="cart1" onClick={() => addToCart('BPL 7 kg Fully Automatic Top Loading Washing Machine, with inbuilt heater, BWT-H70EFSFD, Cool Grey', 20000 , 'wm10.png')}>ADD TO CART</button></a>
                                        <h3>Key Features</h3>
                                        <li>Filter - Magic Filter</li>
                                        <li>Stain Cleanse</li>
                                        <li>Express 12</li>
                                        <li>In built Heater</li>
                                        <li>Fuzzy Logic</li>
                                        <li>IPX4</li>
                                        <li>I Clean</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                    </div>
                                    <div className="des-p2">
                                        <h3>Information</h3>
                                        <p>Washing Machine Type : Fully-Automatic</p>
                                        <p>Capacity : 7 kg</p>
                                        <p>Model : BWT-H70EFSFD</p>
                                        <p>Brand : BPL</p>
                                        <p>Control Type : Touch</p>
                                        <p>Wash Method : Normal</p>
                                        <p>Power Supply : 270 V</p>
                                        <p>Colour : Cool Grey</p>
                                        <p>No. of Wash Programs : 10</p>
                                        <p>Rust Proof : Yes</p>
                                        <h3>Price :</h3>
                                        <p>₹20,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div><a href="wash.js" className="arrow">⬆️</a></div>
            </div>
        <Footer />
        </>
    )
}
export default Wash;