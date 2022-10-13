import React from "react";
import './HeardeCSS/flaticon.css'
import './font/flaticon.css'
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <section className="header-icons-container">
        <div className="icons">
          <a href="https://github.com/horuscamacho">
            <span className="flaticon-github"></span>
          </a>
          <a href="https://www.linkedin.com/in/horuscamacho/">
            <span className="flaticon-010-linkedin"></span>
          </a>
        </div>
        <NavBar />
      </section>
    </header>
  );
};

export default Header;
