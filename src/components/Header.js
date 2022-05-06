import React from 'react';
import '../index.css';


function Header () {
    return (
        <header className="header" role="banner" id="top">
    <div className="row">
      <nav className="nav" role="navigation">
        <ul className="nav__items">
          <li className="nav__item">
              <a href="#work" className="nav__link">Work</a></li>
          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="header__text-box row">
      <div className="header__text">
        <h1 className="heading-primary">
          <span>Lachlan Connell</span>
        </h1>
        <p>Full Stack Web Developer based in Adelaide, Australia.</p>
        <a href="#contact" className="btn btn--pink">Get in touch</a>
      </div>
    </div>
  </header>
    )
}

export default Header;