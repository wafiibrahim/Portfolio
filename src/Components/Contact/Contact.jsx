import React from "react";
import "./Contact.css";
import { useRef } from "react";

import emailjs from "emailjs-com";

import { MdEmail } from "react-icons/md";

import { IoLogoWhatsapp } from "react-icons/io";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ormr7z6",
        "template_jcvbnkc",
        form.current,
        "wowCV37FrvlzhTx3X"
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
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <br></br>
      <br></br>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon"></MdEmail>
            <h4>Email</h4>
            <h5>wafiibrahim00@gmail.com</h5>

            <a href="mailto:wafiibrahim00@gmail.com" target="_blank">
              Send A Message
            </a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon"></IoLogoWhatsapp>
            <h4>Whatsapp</h4>
            <h5>+1 (416) 801 1056</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+14168011056"
              target="_blank"
            >
              Send A Message
            </a>
          </article>
        </div>
        {/*  End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          ></input>

          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <br></br>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br></br>
      </div>
    </section>
  );
}

export default Contact;
