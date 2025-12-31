import React from "react";
import { Link } from "react-router-dom";


// în <nav>:
<Link to="/contributor">Contributor</Link>


function Header() {
  return (
    <header className="header">
      <div className="logo">
        🎵 <span>LEXICON RADIO</span>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contributor">Contributor</Link>
        <Link to="/login">Login</Link>
         <Link to="/register">Register</Link>

        <Link to="/schedule">Schedule</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
