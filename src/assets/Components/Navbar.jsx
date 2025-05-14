import React from 'react';
import logo from '../pictures/UleLogo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src= {logo} alt="ULÉ HOMES" />
              </div>

      {/* Links */}
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Properties</li>
        <li>Experiences</li>
      </ul>

      {/* CTA Button */}
      <button className="cta-button">Book a Loft</button>
    </nav>
  );
};

export default Navbar;
