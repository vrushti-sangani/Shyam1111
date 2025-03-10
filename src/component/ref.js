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

function Ref() {
    return (
        <>
            <Header />
            <div>
                <section className="r-sec1">
                    <h1>REFRIGERATORs</h1>
                    <div className="r-cards">
                        <div className="ref-card">
                            <img src="/images/r1.png" alt="refrigerators" />
                            <div>
                                <h2 style={{ color: '#022460' }}>LG 240 L 2 Star Inverter Frost Free Double Door Refrigerator(GL-N292DDSY
                                    DAZZLE STEEL)</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This 240-liter refrigerator is designed for medium-sized families, offering ample storage
                                            space and stylish Dazzle Steel finish. It features an energy-efficient inverter
                                            compressor and frost-free cooling technology for uniform freshness. The 2-star energy
                                            rating ensures decent energy savings while maintaining performance.</p>
                                        <h3>Key Features</h3>
                                        <li>Multi Air Flow</li>
                                        <li>Moist N Fresh</li>
                                        <li>Toughened Glass Shelves</li>
                                        <li>Auto Smart Connect</li>
                                        <li>Smart Invertor Compressor</li>
                                        <h3>Price :</h3>
                                        <p>₹25,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                                        <a href="#"> <button className="cart" onClick={() => addToCart('LG 240 L 2 Star Inverter Frost Free Double Door Refrigerat[GL-N292DDSYDAZZLE STEEL]', 25000 , 'r1.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : GL-N292DDSY</p>
                                        <p>Total Capacity : 240 L</p>
                                        <p>Depth : 66.9 cm</p>
                                        <p>Width : 58.5 cm</p>
                                        <p>Height : 147.5 cm</p>
                                        <p>Colour : Dazzle Steel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <img src="/images/r2.png" alt="refrigerators" />
                            <div>
                                <h2 style={{ color: '#022460' }}>LG 240 litres 2 Star Convertible Frost Free Double Door Refrigerator,
                                    Shiny Steel GL-S292RPZY</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This refrigerator offers 240 liters of storage with a convertible feature for flexible
                                            usage and frost-free cooling. The Shiny Steel finish adds elegance, while the 2-star
                                            energy rating ensures moderate efficiency.</p>
                                        <h3>Key Features</h3>
                                        <li>Multi Air Flow</li>
                                        <li>Smart Invertor Compressor</li>
                                        <li>Toughened Glass Shelves</li>
                                        <li>Smart Connect</li>
                                        <h3>Price :</h3>
                                        <p>₹30,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                                        <a href="#"> <button className="cart" onClick={() => addToCart('LG 240 litres 2 Star Convertible Frost Free Double Door Refrigerator,Shiny Steel GL-S292RPZY', 30000 , 'r2.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : GL-S292RPZY</p>
                                        <p>Total Capacity : 240 L</p>
                                        <p>Outer Material : Stainless-Steel</p>
                                        <p>Colour : Shiny Steel</p>
                                        <p>Refrigerator Capacity : 185 L</p>
                                        <p>Freezer Capacity : 75 L</p>
                                        <p>Power Supply : 230 Volts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <img src="/images/r3.png" alt="refrigerators" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Haier 602 Litres Side-by-Side Refrigerator with Convertible Fridge,
                                    Black Steel HRS-682KS</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This spacious 602-liter refrigerator features a side-by-side design with a convertible
                                            fridge for added flexibility and stylish Black Steel finish. It ensures frost-free
                                            cooling and efficient storage for large households.</p>
                                        <h3>Key Features</h3>
                                        <li>Total Capacity : 602 Litres</li>
                                        <li>2-Door Convertible SBS</li>
                                        <li>Expert Inverter Technology</li>
                                        <li>Deo Fresh</li>
                                        <li>Jumbo Ice Maker</li>
                                        <h3>Price :</h3>
                                        <p>₹70,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <p><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                                        <a href="#"> <button className="cart" onClick={() => addToCart('Haier 602 Litres Side-by-Side Refrigerator with Convertible Fridge,Black Steel HRS-682KS', 70000 , 'r3.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : HRS-682KS</p>
                                        <p>Total Capacity : 602 L</p>
                                        <p>Colour : Black Steel</p>
                                        <p>Refrigerator Style : Side-by-Side Refrigerator</p>
                                        <p>Refrigerant : R600a</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <img src="/images/r4.png" alt="refrigerators" />
                            <div>
                                <h2 style={{ color: '#022460' }}>LG 185 Litres 3 Star Direct Cool Single Door Refrigerator, Shiny Steel,
                                    GL-B201APZD</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This 185-liter refrigerator is perfect for small families, featuring direct cool
                                            technology for efficient cooling. The 3-star energy rating ensures good energy savings,
                                            and the Shiny Steel finish adds a sleek look to your kitchen.</p>
                                        <h3>Key Features</h3>
                                        <li>Moist N Fresh</li>
                                        <li>Fast Ice Making</li>
                                        <li>Lock and Key</li>
                                        <li>Works without Stabilizer</li>
                                        <h3>Price :</h3>
                                        <p>₹20,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                                        <a href="#"> <button className="cart" onClick={() => addToCart('LG 185 Litres 3 Star Direct Cool Single Door Refrigerator, Shiny Steel GL-B201APZD', 20000 , 'r4.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : GL-B201APZD</p>
                                        <p>Total Capacity : 185 L</p>
                                        <p>Refrigerator Capacity : 167.5 L</p>
                                        <p>Freezer Capacity : 22.5 L</p>
                                        <p>Power Consumption : 164 Watt</p>
                                        <p>Weight : 34 kg</p>
                                        <p>Colour : Shiny Steel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <img src="/images/r5.png" alt="refrigerators" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Samsung 215 L 4 Star Direct Cool Refrigerator, Midnight Blossom Blue,
                                    RR23D2H34UZ/HL</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This 215-liter refrigerator combines a stunning Midnight Blossom Blue design with 4-star
                                            energy efficiency for significant energy savings. It features direct cool technology and
                                            a spacious layout, ideal for small to medium-sized families.</p>
                                        <h3>Key Features</h3>
                                        <li>Horizontal Curve Door</li>
                                        <li>Garo Handle</li>
                                        <li>vBase Stand</li>
                                        <h3>Price :</h3>
                                        <p>₹25,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /></p>
                                        <a href="#"> <button className="cart" onClick={() => addToCart('Samsung 215 L 4 Star Direct Cool Refrigerator, Midnight Blossom Blue, RR23D2H34UZ/HL', 25000 , 'r5.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : RR23D2H34UZ/HL</p>
                                        <p>Total Capacity : 215 L</p>
                                        <p>Refrigerant : R-600A</p>
                                        <p>Colour : Midnight Blossom Blue</p>
                                        <p>BEE STAR Rating : 4 Star</p>
                                        <p>Height : 144.5 cm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <img src="/images/r6.png" alt="refrigerators" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Godrej RD Edge Rio Plus 183 Litres, 2 Star Single Door Refrigerator,
                                    Steel Glow 205B THF ST GL</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This 183-liter refrigerator offers a compact design with direct cool technology, ideal
                                            for small families. The 2-star energy rating ensures moderate energy savings, while the
                                            Steel Glow finish adds a modern touch.</p>
                                        <h3>Key Features</h3>
                                        <li>Large Bottle Space</li>
                                        <li>Tallest in the Category</li>
                                        <li>Largest Vegetable Tray</li>
                                        <li>Tall Refrigerator base</li>
                                        <li>Turbo Cooling Technology</li>
                                        <li>Large Freezer</li>
                                        <li>Advanced Capillary Technology</li>
                                        <li>Upto 24 days Farm Freshness</li>
                                        <h3>Price :</h3>
                                        <p>₹15,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                                        <a href="#"> <button className="cart" onClick={() => addToCart('Godrej RD Edge Rio Plus 183 Litres, 2 Star Single Door Refrigerator,Steel Glow 205B THF ST GL', 15000 , 'r6.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : RD ERIOPLS 205B THF ST GL</p>
                                        <p>Total Capacity : 183 L</p>
                                        <p>Colour : Steel Glow</p>
                                        <p>Refrigerant : R600a</p>
                                        <p>Refrigerator Capacity : 180 L</p>
                                        <p>BEE STAR Rating : 2 Star</p>
                                        <p>Height : 126 cm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <img src="/images/r7.png" alt="refrigerators" />
                            <div>
                                <h2 style={{ color: '#022460' }}>BPL Prime Fresh 187 L 2 Star Direct Cool Single Door Refrigerator,
                                    Begonia Wine, BRD-F210EBPCWS</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This 187-liter refrigerator features a vibrant Begonia Wine finish with direct cool
                                            technology for efficient cooling. The 2-star energy rating offers moderate energy
                                            efficiency, making it suitable for small households.</p>
                                        <h3>Key Features</h3>
                                        <li>75 Mins Fast Freezing Technology</li>
                                        <li>14 L Veggie Cart</li>
                                        <li>360 Fresh</li>
                                        <li>Farm Fresh Tech</li>
                                        <li>10 L+ Water Bottle Storage</li>
                                        <li>Best in Class Height</li>
                                        <li>Power Consumption - 190 kWh/Year</li>
                                        <h3>Price :</h3>
                                        <p>₹15,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                                        <a href="#"> <button className="cart" onClick={() => addToCart('BPL Prime Fresh 187 L 2 Star Direct Cool Single Door Refrigerator,Begonia Wine, BRD-F210EBPCWS', 15000 , 'r7.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : BRD-F210EBPCWS</p>
                                        <p>Power Supply : 220 V</p>
                                        <p>Colour : Begonia Wine</p>
                                        <p>Refrigerant : R-600A</p>
                                        <p>Total Capacity : 187 L</p>
                                        <p>BEE STAR Rating : 2 Star</p>
                                        <p>Height : 124.5 cm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <img src="/images/r8.png" alt="refrigerators" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Samsung 183 litres 3 Star Single Door Refrigerator, Camellia Blue
                                    RR20C1823CU</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This 183-liter refrigerator combines a stylish Camellia Blue design with a 3-star energy
                                            rating for efficient performance. It features direct cool technology, making it ideal
                                            for small households.</p>
                                        <h3>Key Features</h3>
                                        <li>Digital Invertor Technology</li>
                                        <li>Base Stand Drawer</li>
                                        <li>3 Star Rating, 183 litres Capacity</li>
                                        <li>Direct Cool Single Door Refrigerator</li>
                                        <h3>Price :</h3>
                                        <p>₹20,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                                        <a href="#"> <button className="cart" onClick={() => addToCart('Samsung 183 litres 3 Star Single Door Refrigerator, Camellia Blue RR20C1823CU', 20000 , 'r8.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : RR20C1823CU</p>
                                        <p>Total Capacity : 183 L</p>
                                        <p>BEE STAR Rating : 3 Star</p>
                                        <p>Colour : Camellia Blue</p>
                                        <p>Width : 54.9 cm</p>
                                        <p>Height : 130 cm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <img src="/images/r9.png" alt="refrigerators" />
                            <div>
                                <h2 style={{ color: '#022460' }}>LG 201 litres 5 Star Single Door Refrigerator, Scarlet Euphoria GL
                                    D211HSEZ</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This 201-liter refrigerator offers superior energy efficiency with a 5-star rating and a
                                            stunning Scarlet Euphoria finish. It features direct cool technology and a smart
                                            inverter compressor for reliable performance and cost savings.</p>
                                        <h3>Key Features</h3>
                                        <li>5 Star Rating Direct Cool Refrigerator</li>
                                        <li>Base Stand Drawer</li>
                                        <li>Toughened Glass shelves</li>
                                        <li>Smart Invertor Compressor</li>
                                        <li>Stabilizer Free Operation</li>
                                        <li>Moist N Fresh</li>
                                        <h3>Price :</h3>
                                        <p>₹25,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></p>
                                        <a href="#"> <button className="cart" onClick={() => addToCart('LG 201 litres 5 Star Single Door Refrigerator, Scarlet Euphoria GL D211HSEZ', 25000 , 'r9.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : GL-D211HSEZ</p>
                                        <p>Total Capacity : 201 L</p>
                                        <p>Power Supply : AC 220 - 240 Volts, 50 Hz</p>
                                        <p>Colour : Scarlet Euphoria</p>
                                        <p>BEE STAR Rating : 5 Star</p>
                                        <p>Height : 132.2 cm</p>
                                        <p>Width : 56.5 cm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <img src="/images/r10.png" alt="refrigerators" />
                            <div>
                                <h2 style={{ color: '#022460' }}>Whirlpool 285 Litre 2 Star Convertible Frost Free Double Door
                                    Refrigerator, Omega Steel</h2>
                                <div className="ref-des">
                                    <div className="des-p1">
                                        <p>This 285-liter refrigerator features a convertible design for flexible storage and
                                            frost-free cooling technology. The 2-star energy rating ensures moderate efficiency,
                                            while the Omega Steel finish adds a sleek, modern touch.</p>
                                        <h3>Key Features</h3>
                                        <li>Frost Free Refrigerator</li>
                                        <li>Energy Rating : 2 Star</li>
                                        <li>Inverter Compressor</li>
                                        <li>Shelf type: Toughened glass shelves</li>
                                        <li>Special Features : Adaptive sIntelligence technology</li>
                                        <li>3D airflow technology,Zeolite</li>
                                        <h3>Price :</h3>
                                        <p>45,000</p>
                                    </div>
                                    <div className="des-p2">
                                        <p><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" /></p>
                                        <a href="#"> <button className="cart" onClick={() => addToCart('Whirlpool 285 Litre 2 Star Convertible Frost Free Double Door Refrigerator, Omega Steel', 45000 , 'r10.png')}>ADD TO CART</button></a>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Information</h3>
                                        <p>Model : IFPRO BM INV CNV 340 OMEGA STEEL (2S)-Z, PRO BM INV 340 ELT Plus</p>
                                        <p>Power Supply : 230 Volts, 50 Hz</p>
                                        <p>Power Consumption : 176 Watt</p>
                                        <p>Refrigerant : R600a</p>
                                        <p>Colour : Omega Steel</p>
                                        <p>BEE STAR Rating : 2 Star</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div><a href="ref.js" className="arrow">⬆️</a></div>
            </div>

            <Footer />
        </>
    )
}
export default Ref;