import React from "react";
import mail from "../assets/email.png";
import cv from '../assets/cv.png'

const ContactSections = () => {
  return (
    <section className="contact-main-container">
      <div className="contact-left-container">
        <img src={mail} alt="" />
        <div className="contact-left">
          <a href="/profile">Escríbeme</a>
          <p>Envíame un correo electrónico para contactarme.</p>
        </div>
      </div>
      <div className="contact-right-container">
        <img src={cv} alt="" />
        <div className="contact-right">
          <a href="/profile">Currículum</a>
          <p>Descarga mi Currículum.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSections;
