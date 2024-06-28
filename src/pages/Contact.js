import React from "react";
import {} from "../style/contactus.css";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";
import { IoMdPin } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

function Contact() {
  let submitContactFormData = () => {
    //submitting contact form data function
    return null;
  };
  return (
    <>
      <div className="contact-us-container">
        <div className="contact-us-header-container">
          <Header
            header={"contact us"}
            background={"var(--primary-two)"}
            subheader={"Let's get in touch and start right away!"}
            title_color={"var(--secondary-four)"}
            subheader_color={"var(--tertiary-light)"}
          />
        </div>
        <div className="main-contact-us-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <span>
                  <HiOutlineMail />{" "}
                </span>
                something@something.com
              </li>
              <li>
                <span>
                  <FaPhone />
                </span>
                +852 5692 4402
              </li>
              <li>
                <span>
                  <IoMdPin />
                </span>
                Building 19W, HKSTP, Pak Shek Kok, NT, HK
              </li>
            </ul>
            <div className="google-maps-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.0446359271327!2d114.20548587510739!3d22.42734573827874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340409cd4ed34d83%3A0xbd5e5e1590e6aeef!2sGlassbox%20AI!5e0!3m2!1sen!2shk!4v1718853969798!5m2!1sen!2shk"
                width="100%"
                height="100%"
                title="Google Maps Container"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="google-maps-iframe"
              />
            </div>
          </div>
          <div className="form-container-contact">
            <form onSubmit={submitContactFormData}>
              <div className="text-email-contact">
                <div className="text-input">
                  <input type="text" placeholder="Enter Your Name" required />
                </div>
                <div className="text-input">
                  <input type="email" required placeholder="Enter Your Email" />
                </div>
              </div>
              <div className="big-text-contact-page">
                <div className="text-input how-we-can-help">
                  <textarea
                    className="text-area-contact"
                    required
                    placeholder="How Can We Help You?"
                    spellCheck={true}
                  />
                </div>
              </div>
              <input type="submit" value={"Send Message!"} />
            </form>
          </div>
        </div>
      </div>
      <FooterComponent showVectorFiller={true} />
    </>
  );
}

export default Contact;
