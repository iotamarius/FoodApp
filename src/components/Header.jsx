import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {

  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = "custom-dropdown-menu";
  if (isDisplayed) {
    dropdownMenuClasses += " display-mobile-menu";
  }


  return (
    <header className="Header">
    <nav className="nav w-100">
      <Container className="d-flex justify-content-between align-items-center">
        <Link to="/" className="p-3">
          <img src="../img/logo-min.png" alt="logo" />
        </Link>
        <div className="menu-icon-container">
          <span
            onClick={handleMenuClick}
            className="material-icons material-symbols-outlined menu-icon text-light"
          >
            menu
          </span>
          <ul className={dropdownMenuClasses}>
            <li className={isDisplayed ? "container" : null}>
              <Link to="/categories">Categories</Link>
            </li>

            <li className={isDisplayed ? "container" : null}>
              <Link to="/about"> About</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  </header>
  );
}
