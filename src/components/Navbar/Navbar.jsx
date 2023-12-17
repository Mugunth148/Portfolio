import "./navbar.scss";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.to(".navbar-container", { opacity: 1, duration: 3, delay: 5.5});
    
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
            © mugunth
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
                Get In Touch
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
                Coimbatore, India
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
