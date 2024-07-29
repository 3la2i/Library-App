import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className="header">
      <h1>مرحبا بكم في موقعنا</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.clear();
                    setIsLoggedIn(false);
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
          )}
          <li>
            <Link to="/catalog">Book Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
















// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import "./Header.css";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>مرحبا بكم في موقعنا</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">about</Link>
//           </li>
//           <li>
//             <Link to="/ContactUs">contactus</Link>
//           </li>
//           <li>
//             <Link to="/Signup">Signup</Link>
//           </li>
//           <li>
//             <Link to="/catalog">BookCatalog</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };
// export default Header;
