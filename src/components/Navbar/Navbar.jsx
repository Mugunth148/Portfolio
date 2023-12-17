import "./Navbar.scss";
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
            <div className="hero-logo" data-text="© Mugunth">
               <span>© Coded by</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="blue" className ="bi bi-stars" viewBox="0 0 16 16"> <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/> </svg>
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
