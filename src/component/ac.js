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

function Ac() {
    return (
        <>
            <Header />
            <div>
            <section className="a-sec1">
                <h1>AIR CONDITIONERs</h1>
                <div className="a-cards">
                    <div className="ac-card">
                        <div className="ac-p1">
                            <img src="/images/A1.png" alt="AC" />
                            <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                            <a href="#"> <button className="cart" onClick={()=>addToCart('Godrej 1.5 Ton 3 Star 5-in-1 Convertible Inverter Split AC, 18TTC3-W (i-Sense Feature, Hidden display in IDU, Acoustic Jacket on Compressor, Hydrophilic Blue Fins, 2023 launch)', 40000 , 'A1.png')}>ADD TO CART</button></a>
                        </div>
                        <div className="ac-p2">
                            <h2>Godrej 1.5 Ton 3 Star 5-in-1 Convertible Inverter Split AC, 18TTC3-W (i-Sense Feature, Hidden
                                display in IDU, Acoustic Jacket on Compressor, Hydrophilic Blue Fins, 2023 launch)</h2>
                            <div className="p2-des">
                                <div>
                                    <h3>Key Features</h3>
                                    <li>5 in 1 Convertible Technology</li>
                                    <li>i-Sense Feature</li>
                                    <li>Anti Freeze Thermostat</li>
                                    <li>Anti-Microbal Self Cleaning</li>
                                    <li>Anti-Corrosive Coating on Condenser</li>
                                    <h3>Warranty</h3>
                                    <p>Warranty: 1 Year manufacturer warranty</p>
                                    <h3>Price :</h3>
                                    <p>₹40,000</p>
                                </div>
                                <div>
                                    <h3>Information</h3>
                                    <p>Model : 18TTC3-W</p>
                                    <p>Air Conditioner Type : Split</p>
                                    <p>Brand : Godrej</p>
                                    <p>ISEER Value : 3.95</p>
                                    <p>Approx. Room Size : 151 to 200 sq.ft.</p>
                                    <p>Condenser Coil : Copper</p>
                                    <p>Tonnage : 1.5 Ton</p>
                                    <p>Auto Air Swing : Yes</p>
                                    <p>Auto Clean Function : Yes</p>
                                    <p>Cooling Capacity : 5000 Watt</p>
                                    <p>Power Consumption : 1650 Watt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ac-card">
                        <div className="ac-p1">
                            <img src="/images/A2.png" alt="AC" />
                            <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                            <a href="#"> <button className="cart" onClick={() =>addToCart('Lloyd 1.5 Ton 3 star split AC GLS18C3XWBEP (PM 2.5 Filter, 4 way swing, Cools at 48 degree C, 100 percent copper, Turbo Cool, Blue Fin Evaporator)', 50000 , 'A2.png')}>ADD TO CART</button></a>
                        </div>
                        <div className="ac-p2">
                            <h2>Lloyd 1.5 Ton 3 star split AC GLS18C3XWBEP (PM 2.5 Filter, 4 way swing, Cools at 48 degree C, 100 percent copper, Turbo Cool, Blue Fin Evaporator)</h2>
                            <div className="p2-des">
                                <div>
                                    <h3>Key Features</h3>
                                    <li>PM 2.5 Filter</li>
                                    <li>4 Way Swing</li>
                                    <li>Cools at 48 degree C</li>
                                    <li>100% Copper</li>
                                    <li>Turbo Cool</li>
                                    <li>Blue Fin Evaporator</li>
                                    <h3>Warranty</h3>
                                    <p>Warranty: 1 Year manufacturer warranty</p>
                                    <h3>Price :</h3>
                                    <p>₹50,000</p>
                                </div>
                                <div>
                                    <h3>Information</h3>
                                    <p>Model : LS18C3XWBEP</p>
                                    <p>Air Conditioner Type : Split</p>
                                    <p>Brand : LLOYD</p>
                                    <p>ISEER Value : 3.84</p>
                                    <p>Approx. Room Size : 111 to 150 sq.ft.</p>
                                    <p>Condenser Coil : Copper</p>
                                    <p>Tonnage : 1.5 Ton</p>
                                    <p>Auto Restart : Yes</p>
                                    <p>Auto Clean Function : Yes</p>
                                    <p>Filter Types : PM 2.5 Filter, Clean Air Filter, Dust Filter</p>
                                    <p>Speed Settings : Low, Medium, High, Turbo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ac-card">
                        <div className="ac-p1">
                            <img src="/images/A3.png" alt="AC" />
                            <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                            <a href="#"> <button className="cart" onClick={() =>addToCart('Haier 1.6 Ton 5 Star 7 in 1 Convertible Inverter Split AC, HSU19K-PYFR5BN (Voice Control & Wi-Fi, Triple Inverter+, 100% Grooved Copper, Frost Self Clean, Supersonic Cooling in 10 Secs, 2024 launch)', 50000 , 'A3.png')}>ADD TO CART</button></a>
                        </div>
                        <div className="ac-p2">
                            <h2>Haier 1.6 Ton 5 Star 7 in 1 Convertible Inverter Split AC, HSU19K-PYFR5BN (Voice Control &amp; Wi-Fi, Triple Inverter+, 100% Grooved Copper, Frost Self Clean, Supersonic Cooling in 10 Secs, 2024 launch)</h2>
                            <div className="p2-des">
                                <div>
                                    <h3>Key Features</h3>
                                    <li>Voice Control and Wi-Fi</li>
                                    <li>HEXA Inverter</li>
                                    <li>Frost Self Clean</li>
                                    <li>Intelli Convertible 7-in-1</li>
                                    <li>Supersonic Cooling in 10 Secs</li>
                                    <h3>Warranty</h3>
                                    <p>Warranty: 1 Year manufacturer warranty</p>
                                    <h3>Price :</h3>
                                    <p>₹50,000</p>
                                </div>
                                <div>
                                    <h3>Information</h3>
                                    <p>Model : HSU19K-PYFR5BN-INV</p>
                                    <p>Air Conditioner Type : Split</p>
                                    <p>Brand : Haier</p>
                                    <p>ISEER Value : 5.05</p>
                                    <p>Approx. Room Size : 151 to 200 sq.ft.</p>
                                    <p>Condenser Coil : Copper</p>
                                    <p>Tonnage : 1.6 Ton</p>
                                    <p>Auto Air Swing : Yes</p>
                                    <p>Auto Clean Function : Yes</p>
                                    <p>Colour : Rose Gold Strip</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ac-card">
                        <div className="ac-p1">
                            <img src="/images/A4.png" alt="AC" />
                            <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></p>
                            <a href="#"> <button className="cart" onClick={() => addToCart('OGeneral 1.5 Ton 5 Star Inverter Split AC, ASGG18CGTB (Coanda Airflow, PM 2.5 Filter,5 Speed Fan Control, Blue Fin Condenser, 100 Percent Copper)', 60000 , 'A4.png')}>ADD TO CART</button></a>
                        </div>
                        <div className="ac-p2">
                            <h2>O'General 1.5 Ton 5 Star Inverter Split AC, ASGG18CGTB (Coanda Airflow, PM 2.5 Filter,5 Speed Fan Control, Blue Fin Condenser, 100 Percent Copper)</h2>
                            <div className="p2-des">
                                <div>
                                    <h3>Key Features</h3>
                                    <li>Advance Hyper Tropical Rotary <br />Technology</li>
                                    <li>Conda Airflow,PM 2.5 Filter</li>
                                    <li>5 Speed Fan control</li>
                                    <li>Wi-Fi and Wired Remote Controller<br />(Both Optional)</li>
                                    <li>Silicon Coated PCB</li>
                                    <li>Blue Fin Condenser</li>
                                    <h3>Warranty</h3>
                                    <p>Warranty: 1 Year manufacturer warranty</p>
                                    <h3>Price :</h3>
                                    <p>₹60,000</p>
                                </div>
                                <div>
                                    <h3>Information</h3>
                                    <p>Model : 18CGTB</p>
                                    <p>Air Conditioner Type : Split</p>
                                    <p>Brand : General</p>
                                    <p>ISEER Value : 5.15</p>
                                    <p>Approx. Room Size : 111 to 150 sq.ft.</p>
                                    <p>Air Direction : Double Swing Air Flow</p>
                                    <p>Tonnage : 1.5 Ton</p>
                                    <p>Auto Air Swing : Yes</p>
                                    <p>Air Purifier : Yes</p>
                                    <p>Cooling Capacity : 5280</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ac-card">
                        <div className="ac-p1">
                            <img src="/images/A5.png" alt="AC" />
                            <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                            <a href="#"> <button className="cart" onClick={() => addToCart('Daikin 1 Ton 3 Star ATKL35U Inverter Split AC (3D Airflow, 100 percent Copper, Hepta Sense, Triple Display, White, 2023)', 40000 , 'A5.png')}>ADD TO CART</button></a>
                        </div>
                        <div className="ac-p2">
                            <h2>Daikin 1 Ton 3 Star ATKL35U Inverter Split AC (3D Airflow, 100 percent Copper, Hepta Sense, Triple Display, White, 2023)</h2>
                            <div className="p2-des">
                                <div>
                                    <h3>Key Features</h3>
                                    <li>Stabilizer Free Operation- Yes</li>
                                    <li>Dew Clean Technology</li>
                                    <li>Triple Display</li>
                                    <li>3D Airflow</li>
                                    <li>Automatic Error Code Display</li>
                                    <li>Titanium Apatite Deodorizing Air <br />Purifying Filter (TAD)</li>
                                    <h3>Warranty</h3>
                                    <p>Warranty: 1 Year manufacturer warranty</p>
                                    <h3>Price :</h3>
                                    <p>₹40,000</p>
                                </div>
                                <div>
                                    <h3>Information</h3>
                                    <p>Model : ATKL35U</p>
                                    <p>Air Conditioner Type : Split</p>
                                    <p>Brand : Daikin</p>
                                    <p>ISEER Value : 4</p>
                                    <p>Approx. Room Size : Upto 110 sq.ft.</p>
                                    <p>Condenser Coil : Copper</p>
                                    <p>Tonnage : 1 Ton</p>
                                    <p>Auto Air Swing : Yes</p>
                                    <p>Auto Clean Function : Yes</p>
                                    <p>Noise level : 42/40/37/34/30/27 dB</p>
                                    <p>Air Direction : 4-way</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ac-card">
                        <div className="ac-p1">
                            <img src="/images/A6.png" alt="AC" />
                            <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                            <a href="#"> <button className="cart" onClick={() => addToCart('Voltas 2 Ton 3 star 4-in-1 Convertible Inverter split AC, 243V Vectra Elegant (100 Percent copper, Dual temperature display, Dual protection filter, self diagnosis)', 50000 , 'A6.png')}>ADD TO CART</button></a>
                        </div>
                        <div className="ac-p2">
                            <h2>Voltas 2 Ton 3 star 4-in-1 Convertible Inverter split AC, 243V Vectra Elegant (100 Percent copper, Dual temperature display, Dual protection filter, self diagnosis)</h2>
                            <div className="p2-des">
                                <div>
                                    <h3>Key Features</h3>
                                    <li>High Ambient Cooling</li>
                                    <li>Intelligent Sleep Mode</li>
                                    <li>Stabilizer Free Operations</li>
                                    <li>100 per cent Copper</li>
                                    <li>Dual Protection Filter</li>
                                    <h3>Warranty</h3>
                                    <p>Warranty: 1 Year manufacturer warranty</p>
                                    <h3>Price :</h3>
                                    <p>₹50,000</p>
                                </div>
                                <div>
                                    <h3>Information</h3>
                                    <p>Model : 243V Vectra Elegant</p>
                                    <p>Air Conditioner Type : Split</p>
                                    <p>Brand : Voltas</p>
                                    <p>ISEER Value : 3.81</p>
                                    <p>Approx. Room Size : 151 to 200 sq.ft.</p>
                                    <p>Condenser Coil : Copper</p>
                                    <p>Tonnage : 2 Ton</p>
                                    <p>Auto Air Swing : Yes</p>
                                    <p>Auto Clean Function : Yes</p>
                                    <p>Air Direction : Horizontal</p>
                                    <p>Noise level : 45 dB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ac-card">
                        <div className="ac-p1">
                            <img src="/images/A7.png" alt="AC" />
                            <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                            <a href="#"> <button className="cart" onClick={() => addToCart('Hitachi 1 Ton 3 Star Inverter Split AC, RAS.G312PCAISF (100 Percent Copper, Ice Clean, Ambience Light, Silent Airhexa Sensor, 2023 Launch)', 35000 , 'A7.png')}>ADD TO CART</button></a>
                        </div>
                        <div className="ac-p2">
                            <h2>Hitachi 1 Ton 3 Star Inverter Split AC, RAS.G312PCAISF (100 Percent Copper, Ice Clean, Ambience Light, Silent Airhexa Sensor, 2023 Launch)</h2>
                            <div className="p2-des">
                                <div>
                                    <h3>Key Features</h3>
                                    <li>Ice Clean</li>
                                    <li>Ambience Light</li>
                                    <li>Silent Airhexa Sensor</li>
                                    <li>100 Percent Copper Tubes</li>
                                    <li>3 Star Energy Rating</li>
                                    <li>Tropical Design</li>
                                    <h3>Warranty</h3>
                                    <p>Warranty: 1 Year manufacturer warranty</p>
                                    <h3>Price :</h3>
                                    <p>₹35,000</p>
                                </div>
                                <div>
                                    <h3>Information</h3>
                                    <p>Model : RAS.G312PCAISF</p>
                                    <p>Air Conditioner Type : Split</p>
                                    <p>Brand : Hitachi</p>
                                    <p>ISEER Value : 4</p>
                                    <p>Approx. Room Size : Upto 110 sq.ft.</p>
                                    <p>Condenser Coil : Copper</p>
                                    <p>Tonnage : 1 Ton</p>
                                    <p>Auto Air Swing : Yes</p>
                                    <p>Air Direction : Bottom to Top side</p>
                                    <p>Auto Clean Function : Yes</p>
                                    <p>Noise level : 32 dB</p>
                                    <p>Power Consumption : 1095 Watt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ac-card">
                        <div className="ac-p1">
                            <img src="/images/A8.png" alt="AC" />
                            <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></p>
                            <a href="#"> <button className="cart" onClick={() => addToCart('Bluestar 1.5 Ton 5 Star 5 in 1 Convertible Inverter Split AC, IC518NNUR, 4 Way Swing, AI Pro, Anti Corrosive Blue Fins Protection, 2024 Launch', 50000 , 'A8.png')}>ADD TO CART</button></a>
                        </div>
                        <div className="ac-p2">
                            <h2>Bluestar 1.5 Ton 5 Star 5 in 1 Convertible Inverter Split AC, IC518NNUR, 4 Way Swing, AI Pro, Anti Corrosive Blue Fins Protection, 2024 Launch</h2>
                            <div className="p2-des">
                                <div>
                                    <h3>Key Features</h3>
                                    <li>5-in-1 Convertible</li>
                                    <li>DigiQ Penta Sensors</li>
                                    <li>PM2.5 Anti-Microbial Filter with Activated Carbon</li>
                                    <li>Turbo Cool</li>
                                    <li>Smart Ready</li>
                                    <li>Anti-Corrosive Blue Fins for Protection</li>
                                    <h3>Warranty</h3>
                                    <p>Warranty: 1 Year manufacturer warranty</p>
                                    <h3>Price :</h3>
                                    <p>₹50,000</p>
                                </div>
                                <div>
                                    <h3>Information</h3>
                                    <p>Model : IC518NNUR</p>
                                    <p>Air Conditioner Type : Split</p>
                                    <p>Brand : BLUESTAR</p>
                                    <p>ISEER Value : 5.05</p>
                                    <p>Approx. Room Size : 111 to 150 sq.ft.</p>
                                    <p>Tonnage : 1.5 Ton</p>
                                    <p>Auto Air Swing : Yes</p>
                                    <p>Air Direction : 4D Swing</p>
                                    <p>Auto Restart : Yes</p>
                                    <p>Cooling Capacity : 17435 (6523- 18732 )</p>
                                    <p>Power Consumption : 1300 Watt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ac-card">
                        <div className="ac-p1">
                            <img src="/images/A9.png" alt="AC" />
                            <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                            <a href="#"> <button className="cart" onClick={() => addToCart('LG 1.5 Ton 3 Star 5 in 1 Convertible Hot and Cold Inverter Split AC, TS-H19VNXE (4 way Swing, Viraat Mode, 100 percent copper, 2024 Launch)', 55000 , 'A9.png')}>ADD TO CART</button></a>
                        </div>
                        <div className="ac-p2">
                            <h2>LG 1.5 Ton 3 Star 5 in 1 Convertible Hot and Cold Inverter Split AC, TS-H19VNXE (4 way Swing, Viraat Mode, 100 percent copper, 2024 Launch)</h2>
                            <div className="p2-des">
                                <div>
                                    <h3>Key Features</h3>
                                    <li>Super Convertible 5-in-1 cooling</li>
                                    <li>VIRAAT Mode</li>
                                    <li>ADC Sensor</li>
                                    <li>Stabiliser Free Operation</li>
                                    <li>Smart Diagnosis System</li>
                                    <li>Cooling Capacity - 900 ~ 5800</li>
                                    <h3>Warranty</h3>
                                    <p>Warranty: 1 Year manufacturer warranty</p>
                                    <h3>Price :</h3>
                                    <p>₹55,000</p>
                                </div>
                                <div>
                                    <h3>Information</h3>
                                    <p>Model : TSUH19VNXE.ANLG</p>
                                    <p>Air Conditioner Type : Split</p>
                                    <p>Brand : LG</p>
                                    <p>ISEER Value : 4</p>
                                    <p>Approx. Room Size : 151 to 200 sq.ft.</p>
                                    <p>Condenser Coil : Copper</p>
                                    <p>Tonnage : 1.5 Ton</p>
                                    <p>Auto Air Swing : Yes</p>
                                    <p>Auto Clean Function : Yes</p>
                                    <p>Air Direction : 4 Way</p>
                                    <p>Power Consumption : 1005.66 Watt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ac-card">
                        <div className="ac-p1">
                            <img src="/images/A10.png" alt="AC" />
                            <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                            <a href="#"> <button className="cart" onClick={() => addToCart('Panasonic 1 Ton 3 Star 7-in-1 Convertible Inverter Split AC EU12AKY3F (100% Copper, PM 0.1 and Ag clean plus Filter for filtration, 2024 launch)', 40000 , 'A10.png')}>ADD TO CART</button></a>
                        </div>
                        <div className="ac-p2">
                            <h2>Panasonic 1 Ton 3 Star 7-in-1 Convertible Inverter Split AC EU12AKY3F (100% Copper, PM 0.1 and Ag clean plus Filter for filtration, 2024 launch)</h2>
                            <div className="p2-des">
                                <div>
                                    <h3>Key Features</h3>
                                    <li>ECO Mode</li>
                                    <li>Crystal Clean</li>
                                    <li>SuperDyma</li>
                                    <li>Shield Blu Plus</li>
                                    <h3>Warranty</h3>
                                    <p>Warranty: 1 Year manufacturer warranty</p>
                                    <h3>Price :</h3>
                                    <p>₹40,000</p>
                                </div>
                                <div>
                                    <h3>Information</h3>
                                    <p>Model : CS/CU-EU12AKY3F</p>
                                    <p>Air Conditioner Type : Split</p>
                                    <p>Brand : Panasonic</p>
                                    <p>ISEER Value : 3.9</p>
                                    <p>Approx. Room Size : Upto 110 sq.ft.</p>
                                    <p>Condenser Coil : Copper</p>
                                    <p>Tonnage : 1 Ton</p>
                                    <p>Auto Restart : Yes</p>
                                    <p>Auto Clean Function : Yes</p>
                                    <p>Air Direction : Up &amp; Down (2-Way)</p>
                                    <p>Cooling Capacity : 3450 Watt</p>
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div><a href="ac.js" className="arrow">⬆️</a></div>
            </div>
            
            
            <Footer />
        </>
    )
}
export default Ac;