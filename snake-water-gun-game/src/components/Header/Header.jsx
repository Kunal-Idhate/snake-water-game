import React from "react";
import './Header.css';

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-5-strong"
        style={{ position: "fixed", top: "0", width: "100%",borderBottom: "1px solid white"}}
      >
        <div className="container-fluid">
          {/* < className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/rules">
                RULES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gameplay">
                GAMEPLAY
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
