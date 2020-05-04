import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Footer(props) {
  return (
    <footer className="Footer">
      <NavLink exact to="/" className="navLink" activeClassName="active">About</NavLink>
      <NavLink to="/contact" className="navLink" activeClassName="active">Contact</NavLink>
      <NavLink to="/portfolio" className="navLink" activeClassName="active">Portfolio</NavLink>
      <span className="navLink" onClick={() => window.scrollTo(0, 0)}>Top of Page</span>
    </footer>
  );
}
export default Footer;