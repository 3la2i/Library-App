import React from "react";

import "./Signup.css";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {

  return (
    <section className="signup-section">
      <h2>تسجيل</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">الاسم</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">البريد الإلكتروني</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">كلمة المرور</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">تسجيل</button>
      </form>
    </section>
  );
};

export default Signup;
