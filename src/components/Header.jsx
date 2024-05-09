import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="Header">
      <nav className="nav w-100">
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="p-1">
            <img src="./img/logo-min.png" alt="logo" />
          </Link>
          <div className="menu-icon-container">
            <ul>
              <Link to="/categories">Categories</Link>
              <Link to="/favorites"> Favorites </Link>
              <Link to="/about"> About</Link>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}
