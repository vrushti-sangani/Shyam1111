import React, { useState, useEffect } from 'react';
import Footer from "./footer";
import Header from "./header";
import "../component/style1.css";
import "../component/style.css";
import "../component/Media.css";


function Contact() {
    const [contactInfo, setContactInfo] = useState({});
    useEffect(() => {
        const fetchContactInfo = async () => {
          try {
            const response = await fetch("/contactapi.php");
            const data = await response.json();
            if (data.status === "success" && data.data.length > 0) {
              setContactInfo(data.data[0]); // Access the first object in the array
            }
          } catch (error) {
            console.error("Error fetching contact info:", error);
          }
        };
    
        fetchContactInfo();
      }, []);

    return (
        <>
            <Header />
            <section className="c-sec1">
                <div className="c-p1">
                    <div className="bold textmedia" style={{ fontSize: 50, color: '#01358d', fontStyle: 'italic', fontWeight: 700 }}>Connect With <span style={{ color: '#ee2852' }} className="us">Us</span></div>
                    <div className="grayfont" style={{ fontSize: 'large' }}>If you have a query, please Connect with us. We will respond promptly.</div>
                    <div style={{ color: 'gray' }}>
                        <h2 style={{ color: 'white' }}>Contact Info</h2>
                        {contactInfo ? (
                            <>
                                <div><i className="fa-solid fa-location-dot" />{contactInfo.address}</div><br />
                                <div><i className="fa-solid fa-clock" />{contactInfo.time}</div><br />
                                <div><i className="fa-solid fa-envelope" />{contactInfo.email}</div><br />
                                <div><i className="fa-duotone fa-solid fa-phone" />{contactInfo.phone}</div>
                            </>
                        ) : (
                            <p>loading data ...</p>
                        )}
                    </div>
                    <div className="msg">
                        <label>Message : </label><br /><br />
                        <textarea rows={4} cols={40} name="comment" className="textarea" placeholder="Need help? drop message here....." defaultValue={""} /><br />
                        <input type="button" className="button" defaultValue="submit" />
                    </div><br />
                    <div>
                        <a href="https://www.justdial.com/Rajkot/Shyam-Refrigeration-Electronics-150-Feet-Ring-Road-Umiya-Chowk/0281PX281-X281-230123185727-I9R9_BZDET">click here, go shyam refrigerators & electronics</a><br /><br/><br/> 

                    </div>
                </div>
                <div className="c-p2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53848.414765649104!2d70.7320046948246!3d22.260455000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca5e86b873ad%3A0xdfea0d8bdf741694!2sSHYAM%20Refrigeration%20%26%20Electronics!5e1!3m2!1sen!2sin!4v1738132525096!5m2!1sen!2sin" width={350} height={350} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </section>
            <div><a href="contact.js" className="arrow">⬆️</a></div>
            <Footer />
        </>
    );
};
export default Contact;

