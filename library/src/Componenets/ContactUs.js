import React from "react";
import "./Contactus.css";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <h2>اتصل بنا</h2>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">الاسم:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">الرسالة:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">إرسال</button>
      </form>
    </section>
  );
};

export default ContactUs;
