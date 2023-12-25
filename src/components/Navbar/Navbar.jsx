import "./Navbar.scss";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.to(".navbar-container", { opacity: 1, duration: 3, delay: 5.5 });
  }, []);

  return (
    <div className="nav">
      <div className="navbar-container">
        <div className="navbar">
          <div
            className="logo"
            style={{
              color: menuOpen ? "var(--primary)" : "var(--secondary)",
              fontWeight: menuOpen ? "600" : "600",
              transitionDelay: menuOpen ? "0.1s" : "0.5s",
            }}
          >
            <div className="logo-container">
              <span>
                <svg
                  height="1.5em"
                  width="1.5em"
                  fill="#3353d3"
                  viewBox="0 0 1024 1089.841"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M520.258 1056.92H503.76c0-134.61-50.306-252.21-150.918-352.824S134.628 553.178 0 553.178V536.68c134.628 0 252.23-50.306 352.842-151.145C453.454 284.677 503.76 167.075 503.76 32.938h16.498c0 134.61 50.306 252.21 150.918 352.824S889.39 536.68 1024 536.68v16.498c-134.61 0-252.21 50.306-352.824 150.918S520.258 922.31 520.258 1056.92z" />
                </svg>
              </span>

              <a
                href="#"
                data-text="Mugunth"
                style={{
                  color: menuOpen ? "var(--primary)" : "var(--secondary)",
                  fontWeight: menuOpen ? "600" : "600",
                  transitionDelay: menuOpen ? "0.1s" : "0.5s",
                }}
              >
                {" "}
                Coded by 
              </a>
            </div>
          </div>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={menuOpen ? "hambox hamboxOpen" : "hambox"}>
              <span className={menuOpen ? "linetop spin" : "linetop"}></span>
              <span
                className={menuOpen ? "linebottom spin" : "linebottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: menuOpen ? "0" : "-100%",
            transitionDelay: menuOpen ? "0s" : "0s",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1);",
          }}
        >
          <ul className="nav-links">
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  top: menuOpen ? "0" : "120px",
                  transition: menuOpen
                    ? "all 2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s"
                    : "all 2s cubic-bezier(0.16, 1, 0.3, 1) 0s",
                }}
              >
                Home
              </Link>
              <div className="nav-wrap"></div>
            </li>

            <li className="nav-item">
              <Link
                to="/Projects"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  top: menuOpen ? "0" : "120px",
                  transition: menuOpen
                    ? "all 2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s"
                    : "all 2s cubic-bezier(0.16, 1, 0.3, 1) 0s",
                }}
              >
                Projects
              </Link>
              <div className="nav-wrap"></div>
            </li>

            <li className="nav-item">
              <Link
                to="/About"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  top: menuOpen ? "0" : "120px",
                  transition: menuOpen
                    ? "all 2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s"
                    : "all 2s cubic-bezier(0.16, 1, 0.3, 1) 0s",
                }}
              >
                About
              </Link>
              <div className="nav-wrap"></div>
            </li>

            <li className="nav-item ">
              <Link
                to="/Contacts"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  top: menuOpen ? "0" : "120px",
                  transition: menuOpen
                    ? "all 2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s"
                    : "all 2s cubic-bezier(0.16, 1, 0.3, 1) 0s",
                }}
              >
                Contact
              </Link>
              <div className="nav-wrap"></div>
            </li>
          </ul>
          <div className="nav-footer">
            <div
              className="location"
              style={{
                bottom: menuOpen ? "0" : "-20px",
                opacity: menuOpen ? "1" : "0",
                transition: menuOpen
                  ? "all 2s cubic-bezier(0.16, 1, 0.3, 1) 1s"
                  : "all 2s cubic-bezier(0.16, 1, 0.3, 1) 1s",
              }}
            >
              <span
                style={{
                  bottom: menuOpen ? "0" : "-20px",
                  opacity: menuOpen ? "1" : "0",
                  transitionDelay: menuOpen ? "1s" : "0s",
                }}
              >
                CBE, India
              </span>
            </div>
            <div className="nav-social">
              <ul>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: menuOpen ? "0" : "-20px",
                      opacity: menuOpen ? "1" : "0",
                      transitionDelay: menuOpen ? "1s" : "0s",
                    }}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: menuOpen ? "0" : "-20px",
                      opacity: menuOpen ? "1" : "0",
                      transitionDelay: menuOpen ? "1s" : "0s",
                    }}
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
