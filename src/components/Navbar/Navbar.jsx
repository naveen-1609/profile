import React, { useState } from "react";
import styles from "./Navbar.module.css";

import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Naveen Venkat Y
      </a>
      <div className={styles.menu}>
        {/* Menu Button */}
        <img
  className={styles.menuBtn}
  src={menuOpen ? closeIcon : menuIcon}
  alt="menu-button"
  onClick={() => {
    setMenuOpen(!menuOpen);
    console.log("Menu Open State:", !menuOpen); // Debug log
  }}
/>
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`} // Toggle menu visibility
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
