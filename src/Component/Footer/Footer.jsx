import React from "react";
import ReactDOM from "react-dom/client";

import { BsWhatsapp } from "react-icons/bs";
import { BsFillEnvelopeAtFill } from "react-icons/bs";

import "./footer.css";

import { useRef } from "react";
import emailjs from "emailjs-com";





const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pukiwnb",
        "template_16klgk6",
        form.current,
        "OWJ7-HpDf9r_oqL5F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="footer">
      <h5>let's talk about me</h5>
      <h2>Contact me</h2>

      <div className="contact-box">
        <form ref={form} onSubmit={sendEmail} className="form-box">
          <input type="text" name="name" placeholder="your name" required />
          <input
            type="number"
            name="contactno"
            placeholder="Your contact number"
            required
          />
          <input
            type="email"
            name="emailaddress"
            placeholder="your email address"
            required
          />
          <textarea
            name="massage"
            rows={"6"}
            placeholder="Write something here..."
            required
          />

                    
          <div>
            <input type="submit" value="submit" className="btn" />
            <h5>
              <BsWhatsapp /><span> +91 8287037611 </span><br />
              <BsFillEnvelopeAtFill />
              <span>sachin8287037611@gmail.com</span>
            </h5>
          </div>
        </form>

        <div className="detail-box">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5501.025789559383!2d77.0441637763373!3d28.704608594489635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07b781ebe9ff%3A0x27ec61a9fcb5bcfe!2sBaldev%20International%20School!5e0!3m2!1sen!2sin!4v1692964676410!5m2!1sen!2sin"></iframe>
        </div>
      </div>

      <div className="scroller-bottom">
        <a href="#">scroll up</a>
      </div>
    </section>
  );
};

export default Footer;
