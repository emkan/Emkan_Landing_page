import React from "react";
import logo from "../assets/image/logo.png";

export default function Header() {
  const [isOpen, open] = React.useState(true);

  function handleclick() {
    open((isOpen) => !isOpen);
  }

  return (
    <div className="header-back">
      <header className="container-css">
        <div className="nav-css">
          <div className="dir-logo">
            <a href="#">
              <img src={logo} alt="Icom Logo" className="logo" />
            </a>
          </div>
          <div className="dir-ul">
            <ul>
              <a href="https://www.emkanfinance.com.sa/ar/" className="nav-links">
                <li>الرئيسية</li>
              </a>
              <a href="#about" className="nav-links">
                <li>عن الشركة</li>
              </a>
              <a href="#services" className="nav-links">
                <li>خدماتنا</li>
              </a>

              <a href="#contact-us" className="nav-links">
                <li>اتصل بنا</li>
              </a>
              <i
                className={`fa-solid fa-bars ${
                  isOpen ? "showmenu" : "hidemenu"
                }`}
                onClick={handleclick}
              ></i>
            </ul>
          </div>
        </div>
        <div className={`${isOpen ? "notmenu" : "menu"} new-nav`}>
          <div>
            <i
              className={`fa-solid fa-x ${isOpen ? "hidemenu" : "showmenu"}`}
              onClick={handleclick}
            ></i>
            <ol>
              <i className="fa-solid fa-xmark-large"></i>
              <li
                className={`nav-links-new ${isOpen ? "hidemenu" : "showmenu"}`}
              >
                <a href="https://icom-digital.com/">الرئيسية</a>
              </li>
              <li
                className={`nav-links-new ${isOpen ? "hidemenu" : "showmenu"}`}
              >
                <a href="#about">عن الشركة</a>
              </li>
              <li
                className={`nav-links-new ${isOpen ? "hidemenu" : "showmenu"}`}
              >
                <a href="#services">خدماتنا</a>
              </li>
              <li
                className={`nav-links-new ${isOpen ? "hidemenu" : "showmenu"}`}
              >
                <a href="#services">اتصل بنا</a>
              </li>
            </ol>
         
          </div>
        </div>
      </header>
    </div>
  );
}
