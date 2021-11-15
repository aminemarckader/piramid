import React from "react";

export default function TopBar() {
  return (
    <section id="topbar" className="d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@piramid-group.com">
              contact@piramid-group.com
            </a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span>+213 (0)21 44 77 60/62</span>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}
