import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          {/* <h1><a href="index.html">Eterna</a></h1> */}
          {/* Uncomment below if you prefer to use an image logo */}
          <a href="index.html">
            <img
              src="assets/img/logo.png"
              alt="company logo"
              className="img-fluid"
            />
          </a>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to="/">Acceuil</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="services">Services</Link>
            </li>
            {/* <li>
              <a href="portfolio.html">Portfolio</a>
            </li> */}
            <li>
              <Link to="/team">Team</Link>
            </li>
            {/* <li>
              <a href="pricing.html">Pricing</a>
            </li> */}
            {/* <li>
              <a href="blog.html">Blog</a>
            </li> */}
            <li className="dropdown">
              <Link to="/">
                <span>Drop Down</span> <i className="bi bi-chevron-down" />
              </Link>
              <ul>
                <li>
                  <Link to="/">Drop Down 1</Link>
                </li>
                <li className="dropdown">
                  <Link to="/">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/">Deep Drop Down 1</Link>
                    </li>
                    <li>
                      <Link to="/">Deep Drop Down 2</Link>
                    </li>
                    <li>
                      <Link to="/">Deep Drop Down 3</Link>
                    </li>
                    <li>
                      <Link to="/">Deep Drop Down 4</Link>
                    </li>
                    <li>
                      <Link to="/">Deep Drop Down 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">Drop Down 2</Link>
                </li>
                <li>
                  <Link to="/">Drop Down 3</Link>
                </li>
                <li>
                  <Link to="/">Drop Down 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
          <i className="bi mobile-nav-toggle bi-list" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
}
