import React, { useState } from "react";
import "./Signup.css";

const Signup = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("username", formData.username);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);
    onLogin();
    alert("welcome");
  };

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
















// import React from "react";

// import "./Signup.css";
// import { useState } from "react";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   // بيعطي الفاليو الجديدة
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };


  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // local storageتتخزين البيايانات في
//     localStorage.setItem("username", formData.username);
//     localStorage.setItem("email", formData.email);
//     localStorage.setItem("password", formData.password);

//     alert("welcome");
//   };

//   return (
//     <section className="signup-section">
//       <h2>تسجيل</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">الاسم</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="email">البريد الإلكتروني</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="password">كلمة المرور</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">تسجيل</button>
//       </form>
//     </section>
//   );
// };

// export default Signup;

