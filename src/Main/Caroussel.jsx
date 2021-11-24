import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Caroussel() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div
          id="heroCarousel"
          data-bs-interval={5000}
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators" id="hero-carousel-indicators">
            <li data-bs-target="#heroCarousel" data-bs-slide-to={0} />
            <li
              data-bs-target="#heroCarousel"
              data-bs-slide-to={1}
              className="active"
              aria-current="true"
            />
            <li data-bs-target="#heroCarousel" data-bs-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            {/* Slide 1 */}
            <div
              className="carousel-item"
              style={{ background: "url(assets/img/slide/slide-1.jpg)" }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2 className="animate__animated animate__fadeInDown">
                    Welcome to <span>Eterna</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <Link
                    onClick={() => {
                      alert("clicked");
                    }}
                    to="/"
                    className="btn-get-started animate__animated animate__fadeInUp"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div
              className="carousel-item active"
              style={{ background: "url(assets/img/slide/slide-2.jpg)" }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2 className="animate__animated fanimate__adeInDown">
                    Lorem <span>Ipsum Dolor</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <Link
                    onClick={() => {
                      alert("clicked");
                    }}
                    to="/"
                    className="btn-get-started animate__animated animate__fadeInUp"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div
              className="carousel-item"
              style={{ background: "url(assets/img/slide/slide-3.jpg)" }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2 className="animate__animated animate__fadeInDown">
                    Sequi ea <span>Dime Lara</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <Link
                    onClick={() => {
                      alert("clicked");
                    }}
                    to="/"
                    className="btn-get-started animate__animated animate__fadeInUp"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <HashLink
            className="carousel-control-prev"
            to="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            />
          </HashLink>
          <HashLink
            className="carousel-control-next"
            to="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            />
          </HashLink>
        </div>
      </div>
    </section>
  );
}
