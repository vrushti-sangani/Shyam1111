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

function Tv() {
    return (
        <>
            <Header />
            <div>
                <section className="tv-sec1">
                    <h1>TELIVISIONs</h1>
                    <div className="t-cards">
                        <div className="tv-card">
                            <div className="des-img">
                                <img src="/images/tv1.png" alt="TVs" /><br />
                                <a href="#"> <button className="cart" onClick={() => addToCart('MI 32 HD Ready Smart LED TV, 4A Horizon, ELA4546IN', 15000 , 'tv1.png')}>ADD TO CART</button></a>
                            </div>
                            <div className="tv-des">
                                <h2>MI 32 HD Ready Smart LED TV, 4A Horizon, ELA4546IN</h2>
                                <div className="des">
                                    <div className="tv-des1">
                                        <h3>Key Features</h3>
                                        <li>80 cm (32 inch) HD Ready Display</li>
                                        <li>Android TV with 5000 plus Apps</li>
                                        <li>PatchWall Experience</li>
                                        <li>Bezel-less Design</li>
                                        <li>Mi Quick Wake Under 5 secs</li>
                                        <li>Captivating Horizon Display</li>
                                        <li>Vivid Picture Engine</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Price :</h3>
                                        <p>₹15,000</p>
                                    </div>
                                    <div className="tv-des2">
                                        <h3>Information</h3>
                                        <p>Model : 4A Horizon Edition</p>
                                        <p>Brand : Xiaomi</p>
                                        <p>Video Formats : H.265, MPEG2, MPEG4, VP8, VP9</p>
                                        <p>Screen Size (Diagonal) : 81.28 cm - 32 inch</p>
                                        <p>Screen Resolution : 1366 x 768</p>
                                        <p>No. of USB Ports : 3</p>
                                        <p>No of HDMI Ports : 3</p>
                                        <p>USB : Yes</p>
                                        <p>Connect to Home Theatre via : HDMI</p>
                                        <p>Connect to Router via : Ethernet (LAN), Wi-FI</p>
                                        <p>Power Consumption : 50 Watt</p>
                                        <p>Power Supply : 100 - 240 Volts, 50 - 60 Hz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card">
                            <div className="des-img">
                                <img src="/images/tv2.png" alt="TVs" /><br />
                                <a href="#"> <button className="cart" onClick={() => addToCart('ONEPLUS 108 cm (43 inch) Full HD Smart LED TV, 43Y1', 25000 , 'tv2.png')}>ADD TO CART</button></a>
                            </div>
                            <div className="tv-des">
                                <h2>ONEPLUS 108 cm (43 inch) Full HD Smart LED TV, 43Y1</h2>
                                <div className="des">
                                    <div className="tv-des1">
                                        <h3>Key Features</h3>
                                        <li>additional 1 year Warranty on panel provided by the manufacturer</li>
                                        <li>Supported Apps: YouTube, Netflix, Prime Video, Hotstar</li>
                                        <li>Operating System: Android TV (Google Assistant)</li>
                                        <li>Resolution: Full HD (1920 x 1080)</li>
                                        <li>Connectivity: 2 HDMI ports, 2 USB ports</li>
                                        <li>Sound: 20 Watts, Dolby Audio
                                            Refresh Rate: 60 Hz</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Price :</h3>
                                        <p>₹25,000</p>
                                    </div>
                                    <div className="tv-des2">
                                        <h3>Information</h3>
                                        <p>Model : 43Y1</p>
                                        <p>Brand : One Plus</p>
                                        <p>3D Technology : No</p>
                                        <p>Screen Size (Diagonal) : 109.22 cm - 43 inch</p>
                                        <p>Rated Speaker Output Power : 20 Watt</p>
                                        <p>No. of USB Ports : 2</p>
                                        <p>No of HDMI Ports : 2</p>
                                        <p>USB : Yes</p>
                                        <p>Connect to Home Theatre via : HDMI</p>
                                        <p>Connect to Router via : Wi-FI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card">
                            <div className="des-img">
                                <img src="/images/tv3.png" alt="TVs" /><br />
                                <a href="#"> <button className="cart" onClick={() => addToCart('Hisense 108 cm (43 inch) 2Yr Warranty 4K Ultra HD Smart Google LED TV 43A6H (Black) (2022 model) with Dolby Vision and ATMOS', 30000 , 'tv3.png')}>ADD TO CART</button></a>
                            </div>
                            <div className="tv-des">
                                <h2>Hisense 108 cm (43 inch) 2Yr Warranty 4K Ultra HD Smart Google LED TV 43A6H (Black) (2022 model)
                                    with Dolby Vision and ATMOS</h2>
                                <div className="des">
                                    <div className="tv-des1">
                                        <h3>Key Features</h3>
                                        <li>Supported Apps: Netflix, Prime Video, Disney+ Hotstar, YouTube</li>
                                        <li>Operating System: Google TV</li>
                                        <li>Resolution: Ultra HD (4K) (3840 x 2160)</li>
                                        <li>Connectivity: 3 HDMI ports, 2 USB ports</li>
                                        <li>Sound: 20 Watts, Dolby Atmos</li>
                                        <li>Refresh Rate: 60 Hz</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Price :</h3>
                                        <p>₹30,000</p>
                                    </div>
                                    <div className="tv-des2">
                                        <h3>Information</h3>
                                        <p>Model : 43A6H</p>
                                        <p>Brand : HISENSE</p>
                                        <p>HDR : Yes</p>
                                        <p>Display Type : Ultra HD (4K)</p>
                                        <p>Screen Resolution : 3840 x 2160</p>
                                        <p>Rated Speaker Output Power (RMS) : 20 Watts</p>
                                        <p>Connect to DVD Players via : HDMI</p>
                                        <p>Additional Connectivity : SPIDF</p>
                                        <p>No. of USB Ports : 2</p>
                                        <p>No of HDMI Ports : 3</p>
                                        <p>USB : Yes</p>
                                        <p>Connect to Home Theatre via : HDMI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card">
                            <div className="des-img">
                                <img src="/images/tv4.png" alt="TVs" /><br />
                                <a href="#"> <button className="cart" onClick={() => addToCart('Realme 80 cm (32 inch) HD Ready LED Smart TV', 15000 , 'tv4.png')}>ADD TO CART</button></a>
                            </div>
                            <div className="tv-des">
                                <h2>Realme 80 cm (32 inch) HD Ready LED Smart TV</h2>
                                <div className="des">
                                    <div className="tv-des1">
                                        <h3>Key Features</h3>
                                        <li>80 cm (32 inch)</li>
                                        <li>Screen type: LED</li>
                                        <li>Bezel-less Ultra Bright LED Display</li>
                                        <li>Chroma Boost Picture Engine</li>
                                        <li>24W Quad Stereo Speakers with Dolby Audio</li>
                                        <li>Chromecast Built-in</li>
                                        <li>Multiple Connectivity and Ports</li>
                                        <li>Certified Android TV</li>
                                        <li>One-touch Google Assistant</li>
                                        <li>Play Store 5000+ Apps</li>
                                        <li>Powerful 64-bit Quad Core Processor</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Price :</h3>
                                        <p>₹15,000</p>
                                    </div>
                                    <div className="tv-des2">
                                        <h3>Information</h3>
                                        <p>Model : realme 32</p>
                                        <p>Brand : Realme</p>
                                        <p>HDR : Yes</p>
                                        <p>TV Operating System : Android TV</p>
                                        <p>Screen Size (Diagonal) : 81.28 cm - 32 inch</p>
                                        <p>Screen Resolution : 1366 x 768 -HD</p>
                                        <p>Display Type : HD Ready</p>
                                        <p>Connect to DVD Players via : HDMI, Composite (av)</p>
                                        <p>No. of USB Ports : 2</p>
                                        <p>No of HDMI Ports : 3</p>
                                        <p>USB : Yes</p>
                                        <p>Connect to Router via : Ethernet (LAN)</p>
                                        <p>Power Consumption : 45 Watt</p>
                                        <p>Power Supply : 90 - 240 Volts, 50 Hz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card">
                            <div className="des-img">
                                <img src="/images/tv5.png" alt="TVs" /><br />
                                <a href="#"> <button className="cart" onClick={() => addToCart('LG 240 L 2 Star Inverter Frost Free Double Door Refrigerat[GL-N292DDSYDAZZLE STEEL]', 35000 , 'tv5.png')}>ADD TO CART</button></a>
                            </div>
                            <div className="tv-des">
                                <h2>Mi 109.22 cm (43 inch) Ultra HD (4K) LED Smart TV, 5X, ELA4692IN</h2>
                                <div className="des">
                                    <div className="tv-des1">
                                        <h3>Key Features</h3>
                                        <li>Android TV Operating System</li>
                                        <li>Ultra HD (4K) Display (3840 x 2160) Resolutiopn</li>
                                        <li>2 HDMI and 2 USB Ports</li>
                                        <li>40 Watts Speaker</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Price :</h3>
                                        <p>₹35,000</p>
                                    </div>
                                    <div className="tv-des2">
                                        <h3>Information</h3>
                                        <p>Model : ELA4692IN</p>
                                        <p>Brand : Xiaomi</p>
                                        <p>Screen Size (Diagonal) : 109.22 cm - 43 inch</p>
                                        <p>Display Type : Ultra HD (4K)</p>
                                        <p>No. of USB Ports : 2</p>
                                        <p>No of HDMI Ports : 2</p>
                                        <p>USB : Yes</p>
                                        <p>Connect to Home Theatre via : Digital Optical</p>
                                        <p>Connect to Router via : Ethernet (LAN)</p>
                                        <p>Connect to DVD Players via : HDMI</p>
                                        <p>Power Consumption : 143 Watt</p>
                                        <p>Power Supply : 100 - 240 Volts, 50 - 60 Hz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card">
                            <div className="des-img">
                                <img src="/images/tv6.png" alt="TVs" /><br />
                                <a href="#"> <button className="cart" onClick={() => addToCart('Sansui Prime Series 140cm (55 inch) 4K Ultra HD Certified Android LED TV JSW55ASUHD (Mystique Black) with Dolby Audio and DTS', 35000 , 'tv6.png')}>ADD TO CART</button></a>
                            </div>
                            <div className="tv-des">
                                <h2>Sansui Prime Series 140cm (55 inch) 4K Ultra HD Certified Android LED TV JSW55ASUHD (Mystique
                                    Black) with Dolby Audio and DTS</h2>
                                <div className="des">
                                    <div className="tv-des1">
                                        <h3>Key Features</h3>
                                        <li>Supported Apps: Netflix, Prime Video, LiveTV, Multi Media Player, E-Manual, YouTube,
                                            Google Play Movies &amp; TV, Google Play Store, Google Play Games</li>
                                        <li>Operating System: Android Pie 10.0, Built-In Chrome Cast ,Super Smart Voice Search
                                            Remote</li>
                                        <li>Resolution: UHD (3840 x 2160)</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Price :</h3>
                                        <p>₹35,000</p>
                                    </div>
                                    <div className="tv-des2">
                                        <h3>Information</h3>
                                        <p>Model : JSW55ASUHD</p>
                                        <p>Brand : Sansui</p>
                                        <p>Connect to DVD Players via : HDMI</p>
                                        <p>Additional Connectivity : RF In</p>
                                        <p>No. of USB Ports : 2</p>
                                        <p>No of HDMI Ports : 3</p>
                                        <p>USB : Yes</p>
                                        <p>Connect to Home Theatre via : Digital Optical</p>
                                        <p>Connect to Router via : Ethernet (LAN)</p>
                                        <p>Power Consumption : 150 Watt</p>
                                        <p>Power Supply : 100 - 240 Volts, 50 - 60 Hz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card">
                            <div className="des-img">
                                <img src="/images/tv7.png" alt="TVs" /><br />
                                <a href="#"> <button className="cart" onClick={() => addToCart('TCL 109 cm (43 inch) 2Yr Warranty Ultra HD (4K) QLED Smart TV, 43C635', 32000 , 'tv7.png')}>ADD TO CART</button></a>
                            </div>
                            <div className="tv-des">
                                <h2>TCL 109 cm (43 inch) 2Yr Warranty Ultra HD (4K) QLED Smart TV, 43C635</h2>
                                <div className="des">
                                    <div className="tv-des1">
                                        <h3>Key Features</h3>
                                        <li>Supported Apps: Netflix, You Tube, Hotstar, Zee5, Voot</li>
                                        <li>Operating System: Android TV</li>
                                        <li>Resolution: 3840 x 2160 - Ultra HD</li>
                                        <li>Connectivity: 2 HDMI ports, 1 USB ports</li>
                                        <li>Sound: 2 x 12 Watts, Dolby Atmos</li>
                                        <li>Refresh Rate: 60 Hz</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Price :</h3>
                                        <p>₹32,000</p>
                                    </div>
                                    <div className="tv-des2">
                                        <h3>Information</h3>
                                        <p>Model : 43C635</p>
                                        <p>Brand : TCL</p>
                                        <p>3D Technology : No</p>
                                        <p>Screen Size (Diagonal) : 109.22 cm - 43 inch</p>
                                        <p>Display Technology : QLED</p>
                                        <p> Display Type : Ultra HD (4K)</p>
                                        <p>No. of USB Ports : 1</p>
                                        <p>No of HDMI Ports : 2</p>
                                        <p>USB : Yes</p>
                                        <p>Connect to Home Theatre via : HDMI, Digital Optical</p>
                                        <p>Connect to Router via : Ethernet (LAN), Wi-FI</p>
                                        <p>Power Consumption : 120 Watt</p>
                                        <p>Power Supply : AC 110 - 240 Volts, 50/60 Hz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card">
                            <div className="des-img">
                                <img src="/images/tv8.png" alt="TVs" /><br />
                                <a href="#"> <button className="cart" onClick={() => addToCart('Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV with Dolby Audio & Alexa Compatibility KD-55X75K (Black)', 65000 , 'tv9.png')}>ADD TO CART</button></a>
                            </div>
                            <div className="tv-des">
                                <h2>Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV with Dolby Audio &amp; Alexa
                                    Compatibility KD-55X75K (Black)</h2>
                                <div className="des">
                                    <div className="tv-des1">
                                        <h3>Key Features</h3>
                                        <li>Resolution: 4K Ultra HD (3840 x 2160), Refresh Rate: 60 hertz</li>
                                        <li> Display: X1 4K Processor, 4K HDR, Live Colour, 4K X Reality Pro, Motion Flow XR200</li>
                                        <li>Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console, 2
                                            USB ports to connect hard drives and other USB devices</li>
                                        <li>Smart TV Features: Google TV, Watchlist, Voice Search, Google Play, Chromecast, Netflix,
                                            Amazon Prime Video, Additional Features: Apple Airplay, Apple Homekit , Alexa</li>
                                        <li>Sound : 20 Watts Output, Open Baffle Speaker, Dolby Audio, Clear Phase</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Price :</h3>
                                        <p>₹65,000</p>
                                    </div>
                                    <div className="tv-des2">
                                        <h3>Information</h3>
                                        <p>Model : KD-55X75K IN5</p>
                                        <p>Brand : Sony</p>
                                        <p>Screen Size (Diagonal) : 139.7 cm - 55 inch</p>
                                        <p>Screen Resolution : 3840 x 2160</p>
                                        <p>Rated Speaker Output Power : 20 Watt</p>
                                        <p>Display Type : Ultra HD (4K)</p>
                                        <p>No. of USB Ports : 2</p>
                                        <p>No of HDMI Ports : 3</p>
                                        <p>USB : Yes</p>
                                        <p>Standby Power Consumption : 0.5 Watt</p>
                                        <p>Power Supply : AC 220-240V, 50/60Hz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card">
                            <div className="des-img">
                                <img src="/images/tv9.png" alt="TVs" /><br />
                                <a href="#"> <button className="cart" onClick={() => addToCart('Samsung 109.22 cm (43 inch) UHD Smart LED TV 43CU8000', 35000 , 'tv9.png')}>ADD TO CART</button></a>
                            </div>
                            <div className="tv-des">
                                <h2>Samsung 109.22 cm (43 inch) UHD Smart LED TV 43CU8000</h2>
                                <div className="des">
                                    <div className="tv-des1">
                                        <h3>Key Features</h3>
                                        <li>Supported Apps: Netflix, YouTube, Amazon Prime, AppleTV</li>
                                        <li>Operating System: Tizen</li>
                                        <li>Connectivity: 3 HDMI Ports,2 USB Ports</li>
                                        <li>Sound: 20 Watts</li>
                                        <li>Refresh Rate : 50 Hz</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Price :</h3>
                                        <p>₹35,000</p>
                                    </div>
                                    <div className="tv-des2">
                                        <h3>Information</h3>
                                        <p>Model : UA43CU8000KLXL</p>
                                        <p>Brand : Samsung</p>
                                        <p>Display Type : Ultra HD (4K)</p>
                                        <p>Screen Size (Diagonal) : 109.22 cm - 43 inch</p>
                                        <p>Screen Resolution : 3840 x 2160 - Ultra HD</p>
                                        <p>No of HDMI Ports : 3</p>
                                        <p>USB : Yes</p>
                                        <p>Connect to Home Theatre via : Digital Optical</p>
                                        <p>Connect to Router via : Wi-FI</p>
                                        <p>Power Consumption : 125 Watt</p>
                                        <p>Power Supply : AC 220-240V 50-60Hz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card">
                            <div className="des-img">
                                <img src="/images/tv10.png" alt="TVs" /><br />
                                <a href="#"> <button className="cart" onClick={() => addToCart('LG 240 L 2 Star Inverter Frost Free Double Door Refrigerat[GL-N292DDSYDAZZLE STEEL]', 17000 , 'tv10.png')}>ADD TO CART</button></a>
                            </div>
                            <div className="tv-des">
                                <h2>LG 80.04 cm (32 inches) HD AI Smart LED TV, 32LQ645BPTA</h2>
                                <div className="des">
                                    <div className="tv-des1">
                                        <h3>Key Features</h3>
                                        <li>α5 Gen5 AI Processor</li>
                                        <li>HDMI Audio Return Channel: eARC (HDMI 2)</li>
                                        <li>Wi-Fi: Yes (Wi-Fi 5)</li>
                                        <li>HDMI Input: 3ea (supports eARC, ALLM as specified in HDMI 2.1)</li>
                                        <li>Audio Output: 16 Watts</li>
                                        <li>HDR10 / HLG</li>
                                        <li>Resolution: HD (1366 x 768) px</li>
                                        <h3>Warranty</h3>
                                        <p>Warranty: 1 Year manufacturer warranty</p>
                                        <h3>Price :</h3>
                                        <p>₹17,000</p>
                                    </div>
                                    <div className="tv-des2">
                                        <h3>Information</h3>
                                        <p>Model : 32LQ645BPTA</p>
                                        <p>Brand : LG</p>
                                        <p>Display Type : HD Ready</p>
                                        <p>TV Operating System : webOS</p>
                                        <p>Screen Size (Diagonal) : 80.04 cm - 32 inch</p>
                                        <p>Screen Resolution : 1366 x 768 -HD</p>
                                        <p>No. of USB Ports : 1</p>
                                        <p>No of HDMI Ports : 3</p>
                                        <p>USB : Yes</p>
                                        <p>Power Supply : AC 110~240V 50-60Hz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div><a href="tv.js" className="arrow">⬆️</a></div>
            </div>
            <Footer />
        </>
    )
}
export default Tv;