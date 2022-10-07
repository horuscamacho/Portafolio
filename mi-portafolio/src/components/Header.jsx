import React from "react";
import './HeardeCSS/flaticon.css'
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <section className="header-icons-container">
        <div className="icons">
          <a href="https://www.facebook.com/horusinhue/">
            <span className="flaticon-001-facebook"></span>
          </a>
          <a href="https://twitter.com/HorusCamacho">
            <span className="flaticon-002-twitter"></span>
          </a>
          <a href="https://www.linkedin.com/in/horus-camacho-80188a1a8/">
            <span className="flaticon-010-linkedin"></span>
          </a>
        </div>
        <NavBar />
      </section>
    </header>
  );
};

export default Header;
