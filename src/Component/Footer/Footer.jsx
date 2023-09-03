import ReactDOM from "react-dom/client";
import React, { useRef, useEffect, Lazy, Suspense, lazy } from "react";

const emailjs = lazy(() => import("emailjs-com"));

import "./footer.css";
import Ending from "./Ending/Ending.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
  const form = useRef();
  let anime = useRef(null);

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

  useEffect(() => {
    gsap.fromTo(
      anime,
      { css: { opacity: 0, transform: "translateY(2em)" } },
      {
        css: {
          transform: "translateY(0em)",
          opacity: 1,
        },
        duration: 1,

        scrollTrigger: {
          trigger: anime,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="footer" ref={(el) => (anime = el)}>
          <h5>let's talk about me</h5>
          <h2>Contact me</h2>

          <div className="contact-box">
            <form ref={form} onSubmit={sendEmail} className="contact-box-form">
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
                <i className="fa-brands fa-whatsapp"></i>                  <span> +91 8287037611 </span>
                  <br />
                  <i className="fa-solid fa-envelope-circle-check"></i>                  <span>sachin8287037611@gmail.com</span>
                </h5>
              </div>
            </form>

            <div className="contact-box-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5501.025789559383!2d77.0441637763373!3d28.704608594489635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07b781ebe9ff%3A0x27ec61a9fcb5bcfe!2sBaldev%20International%20School!5e0!3m2!1sen!2sin!4v1692964676410!5m2!1sen!2sin"></iframe>
            </div>
          </div>

          <div className="footer-scroller">
            <a href="#">scroll up</a>
          </div>
        </section>
      </Suspense>

      <Ending />
    </>
  );
};

export default Footer;
