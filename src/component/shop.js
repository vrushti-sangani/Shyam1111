import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../component/style1.css";
import "../component/style.css";
import "../component/Media.css";
import {useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div>
        <section className="s-sec1">
          <p>SHOP</p>
          <div className="shop-c">
            <div className="s-c1">
              <img src="/images/freezeicon.png" alt="icon" />
              <h5 style={{ marginTop: 5 }}>Refrigerator</h5>
            </div>
            <div className="s-c1">
              <img src="/images/acicon.png" alt="icon" />
              <h5 style={{ marginTop: 20 }}>ACs</h5>
            </div>
            <div className="s-c1">
              <img src="/images/tvicon.png" alt="icon" />
              <h5 style={{ marginTop: 25 }}>TVs</h5>
            </div>
            <div className="s-c1">
              <img src="/images/washingmcicon.png" alt="icon" />
              <h5 style={{ marginTop: 12 }}>Washing Machine</h5>
            </div>
            <div className="s-c1">
              <img src="/images/millicon.png" alt="icon" />
              <h5 style={{ marginTop: 15 }}>Flour Mill</h5>
            </div>
          </div>
        </section>
        {/* section2 */}

        <section className="s-sec2">
          <div className="left-s2">
            <h3
              style={{
                textDecoration: "none",
                fontSize: 30,
                fontStyle: "italic",
              }}
            >
              All companys names in Refrigerator, ACs, TVs, Washing Machines,
              Flour Mills
            </h3>
            <hr />
            <br />
            <div className="freeze">
              <h3>REFRIGRATOR</h3>
              <p>Haier</p>
              <p>Whirlpool</p>
              <p>LG</p>
              <p>Godrej</p>
              <p>Samsung</p>
              <p>Bosch</p>
              <p>Hitachi</p>
              <p>Panasonic</p>
              <p>Croma</p>
              <p>Voltas</p>
              <p>Lloyd</p>
              <p>Liebherr</p>
              <p>Onida</p>
              <p>Hisense</p>
              <p>Sansui</p>
              <p>Videocon</p>
              <p>AmazonBasics</p>
              <p>Westinghouse</p>
              <p>Siemens</p>
            </div>
            <div className="acs">
              <h3>ACs</h3>
              <p>Voltas</p>
              <p>BlueStar</p>
              <p>Dalkin</p>
              <p>LG</p>
              <p>Hitachi</p>
              <p>Toshiba</p>
              <p>Mitsubishi</p>
              <p>Lloyd</p>
              <p>Godrej eon</p>
              <p>Samsung</p>
              <p>Carrier</p>
              <p>Whirlpool</p>
              <p>Panasonic</p>
              <p>Onida</p>
              <p>Haier</p>
              <p>BPL</p>
              <p>Sharp</p>
              <p>Electrolux</p>
              <p>IFB</p>
              <p>O General</p>
              <p>Croma</p>
              <p>Hisense</p>
            </div>
            <div className="tvs">
              <h3>TVs</h3>
              <p>Sony</p>
              <p>LG</p>
              <p>Panasonic</p>
              <p>Samsung</p>
              <p>One puls</p>
              <p>Haier</p>
              <p>MI</p>
              <p>TCL</p>
              <p>Sansui</p>
              <p>BPL</p>
              <p>Vizio</p>
              <p>Summercool</p>
              <p>Haver Electric</p>
              <p>Super Plastronics</p>
              <p>Radiant</p>
              <p>Genus Electrotech</p>
              <p>Dixon Technologies</p>
              <p>Luxor</p>
              <p>Polaroid</p>
              <p>Onida</p>
              <p>Videocon</p>
              <p>Westinghouse</p>
              <p>Intex</p>
              <p>Mitashi</p>
              <p>Kodak</p>
              <p>TCL</p>
              <p>Thomson</p>
              <p>JVC</p>
              <p>Akai</p>
              <p>Sharp</p>
            </div>
            <div className="wash">
              <h3>WASHING MACHINE</h3>
              <p>LG</p>
              <p>Samsung</p>
              <p>Whirlpool</p>
              <p>Haier</p>
              <p>Bosch</p>
              <p>IFB</p>
              <p>Godrej</p>
              <p>Panasonic</p>
              <p>Lloyd</p>
              <p>Electrolux</p>
              <p>Daenyx</p>
              <p>Candes</p>
              <p>Sharp</p>
              <p>Siemens</p>
              <p>Toshiba</p>
              <p>Videocon</p>
              <p>Westinghouse</p>
              <p>Sansui</p>
              <p>BPL</p>
              <p>Croma</p>
            </div>
            <div className="mill">
              <h3>FLOUR MILLs</h3>
              <p>Pillsbury</p>
              <p>Korfez FlourMill</p>
              <p>Ardent Mill</p>
              <p>ADM Mill</p>
              <p>Grain Craft</p>
              <p>Oman FlourMill</p>
              <p>Dharti FlourMill</p>
              <p>Ajanta FlourMill</p>
              <p>Galaxy FlourMill</p>
              <p>Nilkanth</p>
              <p>Sunrise FlourMill</p>
              <p>Golden Grain FlourMill</p>
              <p>Royal Harvest FlourMill</p>
              <p>Pioneer FlourMill</p>
              <p>Everest FlourMill</p>
              <p>Nova FlourMill</p>
              <p>Zenith FlourMill</p>
              <p>PureWheat FlourMill</p>
              <p>Harvest King FlourMill</p>
              <p>Alpine FlourMill</p>
            </div>
          </div>
          <div className="right-s2">
            <div>
              <h3>REFRIGRATORs</h3>
              <div>
                <div className="f-img">
                  <img src="/images/f1.jpg" alt="freeze" width="200px" />
                  <img
                    className="f1img"
                    src="/images/f2.jpg"
                    alt="freeze"
                    width="230px"
                  />
                  <img
                    className="f1img"
                    src="/images/f3.webp"
                    alt="freeze"
                    width="230px"
                  />
                  <img
                    className="f1img"
                    src="/images/f4.jpg"
                    alt="freeze"
                    width="230px"
                  />
                </div>
                <div className="part2">
                  <p>
                    <span className="p2-span">Keep It Fresh, Every Day!</span>
                    <br />
                    <br />
                    Discover the perfect balance of style and efficiency with
                    our latest range of refrigerators. Equipped with advanced
                    cooling technology, energy-saving features, and spacious
                    designs, they are perfect for every household. Choose from
                    single-door, double-door, or side-by-side models to match
                    your needs.
                  </p>
                  <ul>
                    <li>
                      Designed to reduce power consumption and lower your
                      electricity bills.
                    </li>
                    <li>
                      Stylish finishes that seamlessly blend with your kitchen
                      decor.
                    </li>
                    <li>
                      Digital displays, temperature control settings, and
                      frost-free operation for enhanced convenience.
                    </li>
                    <li>
                      Built to last with robust materials and trusted brand
                      quality.
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`/product?category=1`)}>
                  Shop Refrigerators Now
                </button>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <div>
              <h3 style={{ marginTop: 70 }}>AIR CONDITIONERs</h3>
              <div>
                <div className="f-img">
                  <img src="/images/a1.jpg" alt="ac" width="200px" />
                  <img
                    className="f1img"
                    src="/images/a2.jpg"
                    alt="ac"
                    width="230px"
                  />
                  <img
                    className="f1img"
                    src="/images/a3.jpg"
                    alt="ac"
                    width="230px"
                  />
                  <img
                    className="f1img"
                    src="/images/a4.webp"
                    alt="ac"
                    width="230px"
                  />
                </div>
                <div className="part2">
                  <p>
                    <span className="p2-span">
                      Stay Cool, No Matter the Season!
                    </span>
                    <br />
                    <br />
                    Beat the heat with our high-performance air conditioners.
                    Featuring quick cooling, smart controls, and eco-friendly
                    refrigerants, our ACs offer unmatched comfort while being
                    gentle on the environment. Available in split, window, and
                    portable options.
                  </p>
                  <ul>
                    <li>
                      Experience instant relief with high-capacity cooling
                      designed for every season.
                    </li>
                    <li>
                      Operate your AC conveniently with Wi-Fi connectivity, app
                      integration, or voice commands.
                    </li>
                    <li>
                      Enjoy a peaceful environment with low-noise air
                      conditioners.
                    </li>
                    <li>
                      Reduce your carbon footprint with environmentally safe
                      cooling solutions.
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(`/product?category=2`)}>
                  Explore Air Conditioners
                </button>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <div>
              <h3 style={{ marginTop: 70 }}>TELIVISIONs</h3>
              <div>
                <div className="f-img">
                  <img src="/images/t1.jpg" alt="freeze" width="230px" />
                  <img
                    className="f1img"
                    src="/images/t2.webp"
                    alt="freeze"
                    width="200px"
                    height="200px"
                  />
                  <img
                    className="f1img"
                    src="/images/t3.webp"
                    alt="freeze"
                    width="200px"
                    height="180px"
                  />
                  <img
                    className="f1img"
                    src="/images/t4.webp"
                    alt="freeze"
                    width="200px"
                    height="200px"
                  />
                </div>
                <div className="part2">
                  <p>
                    <span className="p2-span">
                      Bring Entertainment to Life!
                    </span>
                    <br />
                    <br />
                    Enjoy a theater-like experience at home with our ultra-HD
                    smart TVs. With vivid picture quality, immersive sound, and
                    seamless streaming capabilities, our TVs redefine home
                    entertainment. Available in a variety of sizes to suit every
                    space.
                  </p>
                  <ul>
                    <li>
                      Enjoy breathtaking visuals with 4K resolution and HDR
                      technology for lifelike picture quality.
                    </li>
                    <li>
                      Connect your devices with ease using multiple HDMI, USB,
                      and Bluetooth options.
                    </li>
                    <li>
                      Add elegance to your living space with sleek, modern TV
                      frames.
                    </li>
                    <li>
                      Navigate effortlessly with intuitive menus and remote
                      control apps.
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(`/product?category=3`)}>
                  Browse Our TV Collection
                </button>
                
              </div>
            </div>
            <br />
            <br />
            <hr />
            <div>
              <h3 style={{ marginTop: 70 }}>WASHING MACHINEs</h3>
              <div>
                <div className="f-img">
                  <img src="/images/w1.webp" alt="freeze" width="200px" />
                  <img
                    className="f1img"
                    src="/images/w2.jpg"
                    alt="freeze"
                    width="230px"
                  />
                  <img
                    className="f1img"
                    src="/images/w3.webp"
                    alt="freeze"
                    width="230px"
                  />
                  <img
                    className="f1img"
                    src="/images/w4.png"
                    alt="freeze"
                    width="230px"
                  />
                </div>
                <div className="part2">
                  <p>
                    <span className="p2-span">
                      Effortless Laundry at Your Fingertips!
                    </span>
                    <br />
                    <br />
                    Say goodbye to laundry day woes with our efficient washing
                    machines. Designed to save time and water, these machines
                    feature smart wash modes and durable builds. Choose from
                    front-load, top-load, or semi-automatic options..
                  </p>
                  <ul>
                    <li>
                      Perfect for small families or large households with
                      varying drum sizes.
                    </li>
                    <li>
                      Save on electricity bills with eco-friendly designs and
                      energy ratings.
                    </li>
                    <li>
                      Advanced features reduce water usage while maintaining
                      effective cleaning.
                    </li>
                    <li>
                      Powerful motors and quick wash modes ensure faster laundry
                      cycles.
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`/product?category=4`)}>
                  Check Washing Machines
                </button>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <div>
              <h3 style={{ marginTop: 70 }}>FLOUR MILLs</h3>
              <div>
                <div className="f-img">
                  <img src="/images/fm1.png" alt="freeze" width="230px" />
                  <img
                    className="f1img"
                    src="/images/fm2.png"
                    alt="freeze"
                    width="200px"
                  />
                  <img
                    className="f1img"
                    src="/images/fm3.png"
                    alt="freeze"
                    width="200px"
                  />
                  <img
                    className="f1img"
                    src="/images/fm4.png"
                    alt="freeze"
                    width="200px"
                  />
                </div>
                <div className="part2">
                  <p>
                    <span className="p2-span">
                      Fresh, Homemade Flour Anytime!
                    </span>
                    <br />
                    <br />
                    Enjoy the taste of freshly milled grains with our modern
                    flour mills. Compact, efficient, and easy to use, these
                    machines ensure perfect grinding for all your needs – from
                    wheat and rice to spices.
                  </p>
                  <ul>
                    <li>
                      Grind wheat, rice, pulses, and spices at home for
                      unmatched freshness and flavor.
                    </li>
                    <li>
                      Delivers consistent grinding with high-speed and durable
                      motors.
                    </li>
                    <li>
                      User-friendly controls make it simple for anyone to use.
                    </li>
                    <li>
                      {" "}
                      Consumes minimal power while providing maximum output.
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`/product?category=5`)}>
                  View Flour Mills
                </button>
              </div>
            </div>
            <br />
            <br />
          </div>
        </section>
        <br />
        <br />
        <div>
          <a href="shop.js" className="arrow">
            ⬆️
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Shop;
