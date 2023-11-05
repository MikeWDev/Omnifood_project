import { useEffect, useState } from "react";
import { OmniFoodLogo } from "../assets/img/imgIndex";
import { Link } from "react-scroll";
const NavBar = () => {
  

 
  
    return <>
      <header className={`header `}>
        <Link to="hero" duration={1500} smooth={true} className="logo">
          <img className="logo" alt="Omnifood logo" src={OmniFoodLogo} />
        </Link>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link
                to="how"
                duration={1500}
                smooth={true}
                className="main-nav-link"
                href="#how"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="meals"
                duration={1500}
                smooth={true}
                className="main-nav-link"
                href="#meals"
              >
                Meals
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                duration={1500}
                smooth={true}
                className="main-nav-link"
                href="#testimonials"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                duration={1500}
                smooth={true}
                className="main-nav-link"
                href="#pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="cta"
                duration={1500}
                smooth={true}
                className="main-nav-link nav-cta"
                href="#cta"
              >
                Try for free
              </Link>
            </li>
          </ul>
        </nav>

        <button className="btn-mobile-nav">
          <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>
    </>
}


export default NavBar;
