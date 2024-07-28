import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoClose, IoMenu } from "react-icons/io5";
import "./style.scss";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-wrapper">
      <div className="logo">SHO<span className="logo" style={{ color: "#007D8B"}}>E</span>XPRESS</div>
      <div className="nav-content">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? (
            <span className="close-icon">
              {" "}
              <IoClose />
            </span>
          ) : (
            <span className="hamburger-icon">
              <IoMenu />
            </span>
          )}
        </div>
        <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
          <li>
            <Link
              className="nav-item"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              to="skills"
              spy={true}
              smooth={true}
              onClick={toggleMenu}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              to="experience"
              spy={true}
              smooth={true}
              onClick={toggleMenu}
            >
              Order
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              to="contact-me"
              spy={true}
              smooth={true}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
