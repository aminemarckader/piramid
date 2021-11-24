import React from "react";
import NewsLetter from "./NewsLetter";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer id="footer">
      <NewsLetter />
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="/">Terms of service</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="/">Privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="/">Web Design</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="/">Web Development</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="/">Product Management</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="/">Marketing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link to="/">Graphic Design</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> +213 (0)21 44 77 60/62
                <br />
                <strong>Email:</strong> contact@piramid-group.com
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>About Eterna</h3>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <div className="social-links mt-3">
                <Link to="/" className="twitter">
                  <i className="bx bxl-twitter" />
                </Link>
                <Link to="/" className="facebook">
                  <i className="bx bxl-facebook" />
                </Link>
                <Link to="/" className="instagram">
                  <i className="bx bxl-instagram" />
                </Link>
                <Link to="/" className="google-plus">
                  <i className="bx bxl-skype" />
                </Link>
                <Link to="/" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>Piramid Group</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
