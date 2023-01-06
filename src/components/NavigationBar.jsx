import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from "./stylesheets/Navigation.module.css";

const NavigationBar = () => {
  return (
<>
  <div className={styles.mainDiv}>
  <div className={styles.logo}>
    <img src="https://w7.pngwing.com/pngs/174/600/png-transparent-cat-animal-lovely-cat.png" alt="" />
  </div>
    <nav className={styles.primaryNav}>
  <ul className={styles.divLinks}>
    <li><a href="/Home">Home</a></li>
    <li><a href="/Livestock">LiveStock</a></li>
    <li><a href="/AboutUs">About Us</a></li>
    <li><a href="/ThankYou"> Thank You</a></li>
  </ul>
    </nav>
  </div>
</>
  )
}

export default NavigationBar;
