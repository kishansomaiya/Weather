import React from "react";

import HeartIcon from "../img/heart.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p>
        Made By &nbsp;
        <img src={HeartIcon} alt="love icon" />
        &nbsp; by &nbsp;
        <a href="https://github.com/kishansomaiya/Weather" target="_blank" rel="noreferrer" >Kishan Somaiya</a>
      </p>
    </footer>
  );
}

export default Footer;
