/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <h1>مرحبا بكم في موقعنا</h1>
        <nav>
            <ul>
                <li><a href="#home">الصفحة الرئيسية</a></li>
                <li><a href="#about">حول</a></li>
                <li><a href="#services">خدمات</a></li>
                <li><a href="#contact">اتصل بنا</a></li>
            </ul>
        </nav>
    </header>
  );
};
export default Header;
