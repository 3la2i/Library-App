/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <h1>مرحبا بكم في موقعنا</h1>
        <nav>
            <ul>
                <li><a href="#home">Home </a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    </header>
  );
};
export default Header;
